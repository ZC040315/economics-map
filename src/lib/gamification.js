// 游戏化：经验值、等级、成就徽章（阶段书可选阶段）
import { chapterMastery, recordAnswer } from './progress'

const GAME_KEY = 'economics-map:v1:gamification'
export const LEVEL_STEP = 100

export const ACHIEVEMENTS = [
  { id: 'first-card', title: '破冰者', desc: '答对第一张卡', icon: '❄' },
  { id: 'ten-cards', title: '十连斩', desc: '累计答对 10 张卡', icon: '✴' },
  { id: 'principle-master', title: '原理通', desc: '经济学十大原理掌握度 100%', icon: '☰' },
  { id: 'first-review', title: '复习先锋', desc: '完成第一次复习会话', icon: '↻' },
  { id: 'streak-3', title: '连击选手', desc: '连续 3 天都有复习记录', icon: '⚡' },
  { id: 'twenty-cards', title: '知识猎人', desc: '累计答对 20 张卡', icon: '⌖' },
  { id: 'econ-master', title: '经济学大师', desc: '全部已填 7 章掌握度 100%', icon: '★' },
]

export function defaultGame() {
  return {
    xp: 0,
    level: 1,
    achievements: {},
    answeredCardIds: [],
    reviewDays: [],
    reviewSessions: 0,
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(GAME_KEY)
    if (!raw) return defaultGame()
    const parsed = JSON.parse(raw)
    return { ...defaultGame(), ...parsed }
  } catch {
    return defaultGame()
  }
}

export function saveGame(game) {
  try {
    localStorage.setItem(GAME_KEY, JSON.stringify(game))
  } catch {
    // 忽略存储不可用的情况
  }
}

export function levelFromXp(xp) {
  return Math.floor(xp / LEVEL_STEP) + 1
}

export function levelProgress(xp) {
  return xp % LEVEL_STEP
}

export function xpForAnswer(prevProgress, cardId, isCorrect) {
  if (!isCorrect) return 0
  const wasCorrectBefore = prevProgress?.[cardId]?.correct === true
  return wasCorrectBefore ? 5 : 10
}

export function applyAnswer(game, prevProgress, cardId, isCorrect) {
  const gain = xpForAnswer(prevProgress, cardId, isCorrect)
  const xp = game.xp + gain
  const answeredCardIds =
    isCorrect && !game.answeredCardIds.includes(cardId)
      ? [...game.answeredCardIds, cardId]
      : game.answeredCardIds
  return { ...game, xp, level: levelFromXp(xp), answeredCardIds }
}

function localDateString(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function completeReviewSession(game, date = new Date()) {
  const dateStr = localDateString(date)
  const reviewDays = game.reviewDays.includes(dateStr)
    ? game.reviewDays
    : [...game.reviewDays, dateStr]
  const xp = game.xp + 10
  return {
    ...game,
    reviewDays,
    reviewSessions: game.reviewSessions + 1,
    xp,
    level: levelFromXp(xp),
  }
}

export function longestStreak(days) {
  const sorted = [...new Set(days)].sort()
  let best = 0
  let current = 0
  let prev = null
  for (const day of sorted) {
    if (prev) {
      const prevDate = new Date(`${prev}T00:00:00`)
      const curDate = new Date(`${day}T00:00:00`)
      const diff = (curDate - prevDate) / (24 * 60 * 60 * 1000)
      current = diff === 1 ? current + 1 : 1
    } else {
      current = 1
    }
    best = Math.max(best, current)
    prev = day
  }
  return best
}

export function evaluateAchievements(progress, game, chapters) {
  const unlocked = []
  const has = (id) => game.achievements[id] === true
  const answeredCount = game.answeredCardIds.length

  if (!has('first-card') && answeredCount >= 1) unlocked.push('first-card')
  if (!has('ten-cards') && answeredCount >= 10) unlocked.push('ten-cards')
  if (!has('twenty-cards') && answeredCount >= 20) unlocked.push('twenty-cards')

  if (!has('first-review') && game.reviewSessions >= 1) {
    unlocked.push('first-review')
  }
  if (!has('streak-3') && longestStreak(game.reviewDays) >= 3) {
    unlocked.push('streak-3')
  }

  const principles = chapters.find((c) => c.id === 'micro-01')
  if (
    !has('principle-master') &&
    principles &&
    principles.cards.length > 0 &&
    chapterMastery(principles.cards, progress) === 100
  ) {
    unlocked.push('principle-master')
  }

  const filled = chapters.filter((c) => c.cards.length > 0)
  if (
    !has('econ-master') &&
    filled.length > 0 &&
    filled.every((c) => chapterMastery(c.cards, progress) === 100)
  ) {
    unlocked.push('econ-master')
  }

  return unlocked
}

export function nextProgressAfterAnswer(progress, cardId, isCorrect) {
  return recordAnswer(progress, cardId, isCorrect)
}
