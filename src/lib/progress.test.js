import { describe, expect, it } from 'vitest'
import {
  BOX_INTERVALS_DAYS,
  chapterMastery,
  chapterStatus,
  dueCards,
  overallStats,
  recordAnswer,
} from './progress'

const cards = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const DAY_MS = 24 * 60 * 60 * 1000

describe('学习进度', () => {
  it('答对进入第 1 层，到期日为间隔天数之后', () => {
    let progress = {}
    const now = 1_000_000
    progress = recordAnswer(progress, 'a', true, now)
    expect(progress.a.box).toBe(1)
    expect(progress.a.dueTs).toBe(now + BOX_INTERVALS_DAYS[1] * DAY_MS)
    expect(progress.a.correct).toBe(true)
  })

  it('连续答对逐层升级，最多到第 5 层', () => {
    let progress = {}
    const now = 1_000_000
    for (let i = 0; i < 6; i++) {
      progress = recordAnswer(progress, 'a', true, now + i)
    }
    expect(progress.a.box).toBe(4)
    expect(progress.a.dueTs).toBe(now + 5 + BOX_INTERVALS_DAYS[4] * DAY_MS)
  })

  it('答错打回第 1 层，到期日重置为 1 天后', () => {
    let progress = {}
    const now = 1_000_000
    progress = recordAnswer(progress, 'a', true, now)
    progress = recordAnswer(progress, 'a', true, now + 1000)
    expect(progress.a.box).toBe(2)
    progress = recordAnswer(progress, 'a', false, now + 2000)
    expect(progress.a.box).toBe(0)
    expect(progress.a.dueTs).toBe(now + 2000 + BOX_INTERVALS_DAYS[0] * DAY_MS)
    expect(progress.a.correct).toBe(true)
  })

  it('章节掌握度按箱层加权', () => {
    let progress = {}
    const now = 1_000_000
    progress = recordAnswer(progress, 'a', true, now) // box1 -> 40
    progress = recordAnswer(progress, 'b', true, now) // box1 -> 40
    progress = recordAnswer(progress, 'c', true, now) // box1 -> 40
    progress = recordAnswer(progress, 'c', true, now + 1) // box2 -> 60
    progress = recordAnswer(progress, 'c', true, now + 2) // box3 -> 80
    progress = recordAnswer(progress, 'c', true, now + 3) // box4 -> 100
    expect(progress.c.box).toBe(4)
    expect(chapterMastery(cards, progress)).toBe(60) // (40+40+100)/3
  })

  it('章节状态映射', () => {
    expect(chapterStatus(0)).toBe('not-started')
    expect(chapterStatus(40)).toBe('learning')
    expect(chapterStatus(80)).toBe('mastered')
  })

  it('全局统计', () => {
    let progress = {}
    const now = 1_000_000
    progress = recordAnswer(progress, 'a', true, now)
    progress = recordAnswer(progress, 'b', false, now)
    const stats = overallStats(cards, progress)
    expect(stats.total).toBe(3)
    expect(stats.answered).toBe(2)
    expect(stats.correct).toBe(1)
    expect(stats.averageMastery).toBe(13) // (40+0+0)/3
  })

  it('到期队列按到期时间排序', () => {
    let progress = {}
    const now = 1_000_000
    progress = recordAnswer(progress, 'a', true, now - 3 * DAY_MS) // 已过期
    progress = recordAnswer(progress, 'b', false, now - 2 * DAY_MS) // 已过期
    progress = recordAnswer(progress, 'c', true, now) // 未到期
    const due = dueCards(cards, progress, now)
    expect(due.map((d) => d.card.id)).toEqual(['a', 'b'])
  })
})
