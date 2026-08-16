// 学习进度：本地保存 + 掌握度计算（阶段 2 最小版，阶段 4 升级为利特纳盒子）
const STORAGE_KEY = 'economics-map:v1:progress'

// 利特纳盒子：层 0–4，答对升层，答错打回第 1 层
export const BOX_INTERVALS_DAYS = [1, 2, 4, 8, 16]
const DAY_MS = 24 * 60 * 60 * 1000
// 各箱层对应的掌握度权重（未答 0 → 第1层 40 → 第5层 100）
const BOX_MASTERY = [0, 40, 60, 80, 100]

function normalizeRecord(record, now) {
  if (!record) return null
  if (Number.isInteger(record.box) && Number.isFinite(record.dueTs)) {
    return record
  }
  const box = Number.isInteger(record.box) ? record.box : record.correct ? 1 : 0
  const dueTs = Number.isFinite(record.dueTs) ? record.dueTs : record.lastTs ?? now
  return { ...record, box: Math.max(0, Math.min(box, 4)), dueTs }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : {}
    const now = Date.now()
    const migrated = {}
    let changed = false
    for (const [cardId, record] of Object.entries(parsed)) {
      const normalized = normalizeRecord(record, now)
      if (normalized) {
        migrated[cardId] = normalized
        if (normalized !== record) changed = true
      }
    }
    if (changed) saveProgress(migrated)
    return migrated
  } catch {
    return {}
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // 忽略隐私模式等存储不可用的情况
  }
}

export function recordAnswer(progress, cardId, isCorrect, now = Date.now()) {
  const prev = progress[cardId]
  const prevBox = prev?.box ?? 0
  const box = isCorrect ? Math.min(prevBox + 1, 4) : 0
  const dueTs = now + BOX_INTERVALS_DAYS[box] * DAY_MS
  return {
    ...progress,
    [cardId]: {
      correct: isCorrect || prev?.correct === true,
      attempts: (prev?.attempts ?? 0) + 1,
      lastTs: now,
      lastCorrect: isCorrect,
      box,
      dueTs,
    },
  }
}

export function chapterMastery(cards, progress) {
  if (!cards.length) return 0
  const total = cards.reduce(
    (sum, card) => sum + BOX_MASTERY[progress[card.id]?.box ?? 0],
    0,
  )
  return Math.round(total / cards.length)
}

export function chapterStatus(mastery) {
  if (mastery >= 80) return 'mastered'
  if (mastery > 0) return 'learning'
  return 'not-started'
}

export function overallStats(allCards, progress) {
  const total = allCards.length
  const answered = allCards.filter((card) => progress[card.id]?.attempts > 0).length
  const correct = allCards.filter((card) => progress[card.id]?.correct).length
  const averageMastery = total
    ? Math.round(
        allCards.reduce(
          (sum, card) =>
            sum + BOX_MASTERY[progress[card.id]?.box ?? 0],
          0,
        ) / total,
      )
    : 0
  const due = dueCards(allCards, progress)
  return { total, answered, correct, averageMastery, dueCount: due.length }
}

export function dueCards(allCards, progress, now = Date.now()) {
  return allCards
    .filter((item) => {
      const card = item.card ?? item
      const record = progress[card.id]
      if (!record || record.attempts === 0) return false
      return record.dueTs <= now
    })
    .map((item) => {
      const card = item.card ?? item
      return {
        ...(item.card ? item : {}),
        card,
        dueTs: progress[card.id].dueTs,
        box: progress[card.id].box,
      }
    })
    .sort((a, b) => a.dueTs - b.dueTs)
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY)
}
