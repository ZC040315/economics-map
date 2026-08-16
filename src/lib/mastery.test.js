import { describe, expect, it } from 'vitest'
import { chapterStats, masteryColor, statusLabel } from './mastery'

describe('掌握度工具', () => {
  it('状态标签', () => {
    expect(statusLabel('not-started')).toBe('未学')
    expect(statusLabel('learning')).toBe('学习中')
    expect(statusLabel('mastered')).toBe('已掌握')
    expect(statusLabel('review')).toBe('待复习')
  })

  it('掌握度颜色边界', () => {
    expect(masteryColor(0)).toBe('var(--color-muted)')
    expect(masteryColor(49)).toBe('var(--color-review)')
    expect(masteryColor(50)).toBe('var(--color-learning)')
    expect(masteryColor(80)).toBe('var(--color-mastered)')
  })

  it('章节统计', () => {
    const stats = chapterStats([
      { mastery: 0 },
      { mastery: 50 },
      { mastery: 100 },
    ])
    expect(stats.total).toBe(3)
    expect(stats.learned).toBe(2)
    expect(stats.average).toBe(50)
  })
})
