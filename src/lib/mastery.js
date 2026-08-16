export const STATUS_LABELS = {
  'not-started': '未学',
  learning: '学习中',
  mastered: '已掌握',
  review: '待复习',
}

export function statusLabel(status) {
  return STATUS_LABELS[status] ?? status
}

export function masteryColor(mastery) {
  if (mastery >= 80) return 'var(--color-mastered)'
  if (mastery >= 50) return 'var(--color-learning)'
  if (mastery > 0) return 'var(--color-review)'
  return 'var(--color-muted)'
}

export function chapterStats(chapters) {
  const total = chapters.length
  const learned = chapters.filter((c) => c.mastery > 0).length
  const average = total
    ? Math.round(chapters.reduce((sum, c) => sum + c.mastery, 0) / total)
    : 0
  return { total, learned, average }
}
