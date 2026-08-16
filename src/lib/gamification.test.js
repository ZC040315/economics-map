import { describe, expect, it } from 'vitest'
import {
  applyAnswer,
  completeReviewSession,
  evaluateAchievements,
  levelFromXp,
  levelProgress,
  longestStreak,
  xpForAnswer,
} from './gamification'

const chapters = [
  {
    id: 'micro-01',
    cards: [
      { id: 'a', title: 'a' },
      { id: 'b', title: 'b' },
    ],
  },
  { id: 'micro-03', cards: [] },
]

describe('游戏化', () => {
  it('等级与经验条', () => {
    expect(levelFromXp(0)).toBe(1)
    expect(levelFromXp(99)).toBe(1)
    expect(levelFromXp(100)).toBe(2)
    expect(levelFromXp(250)).toBe(3)
    expect(levelProgress(250)).toBe(50)
  })

  it('首次答对 +10，复习答对 +5，答错不加', () => {
    const game = { xp: 0, level: 1, answeredCardIds: [] }
    expect(xpForAnswer({}, 'a', true)).toBe(10)
    const afterFirst = applyAnswer(game, {}, 'a', true)
    expect(afterFirst.xp).toBe(10)
    expect(afterFirst.answeredCardIds).toEqual(['a'])
    expect(xpForAnswer({ a: { correct: true } }, 'a', true)).toBe(5)
    const afterReview = applyAnswer(afterFirst, { a: { correct: true } }, 'a', true)
    expect(afterReview.xp).toBe(15)
    expect(applyAnswer(game, {}, 'b', false).xp).toBe(0)
  })

  it('难度影响首次答对经验值', () => {
    const game = { xp: 0, level: 1, answeredCardIds: [] }
    expect(applyAnswer(game, {}, 'a', true, 'basic').xp).toBe(5)
    expect(applyAnswer(game, {}, 'a', true, 'advanced').xp).toBe(10)
    expect(applyAnswer(game, {}, 'a', true, 'challenge').xp).toBe(15)
    // 复习答对统一 +5
    const reviewed = { xp: 0, level: 1, answeredCardIds: ['a'] }
    expect(applyAnswer(reviewed, { a: { correct: true } }, 'a', true, 'challenge').xp).toBe(5)
  })

  it('完成复习会话 +10 并记录日期', () => {
    const game = { xp: 0, level: 1, reviewDays: [], reviewSessions: 0 }
    const date = new Date('2026-08-16T12:00:00')
    const next = completeReviewSession(game, date)
    expect(next.xp).toBe(10)
    expect(next.reviewSessions).toBe(1)
    expect(next.reviewDays).toEqual(['2026-08-16'])
  })

  it('连续天数统计', () => {
    expect(longestStreak(['2026-08-14', '2026-08-15', '2026-08-16'])).toBe(3)
    expect(longestStreak(['2026-08-14', '2026-08-16', '2026-08-17'])).toBe(2)
    expect(longestStreak([])).toBe(0)
  })

  it('成就评估', () => {
    let game = {
      xp: 0,
      level: 1,
      achievements: {},
      answeredCardIds: [],
      reviewDays: [],
      reviewSessions: 0,
    }
    const progress = {}

    // 答对一张卡 -> 破冰者
    const nextProgress = { a: { correct: true } }
    const afterAnswer = applyAnswer(game, {}, 'a', true)
    const unlocked1 = evaluateAchievements(nextProgress, afterAnswer, chapters)
    expect(unlocked1).toContain('first-card')
    game = { ...afterAnswer, achievements: { 'first-card': true } }

    // 完成一次复习 -> 复习先锋
    const afterReview = completeReviewSession(game, new Date('2026-08-16T12:00:00'))
    const unlocked2 = evaluateAchievements({}, afterReview, chapters)
    expect(unlocked2).toContain('first-review')
    game = { ...afterReview, achievements: { 'first-card': true, 'first-review': true } }

    // 连续 3 天 -> 连击选手
    game = {
      ...game,
      reviewDays: ['2026-08-14', '2026-08-15', '2026-08-16'],
    }
    const unlocked3 = evaluateAchievements({}, game, chapters)
    expect(unlocked3).toContain('streak-3')
  })
})
