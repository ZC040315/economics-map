import { describe, expect, it } from 'vitest'
import { chapterQuiz, weeklyQuiz } from './quiz-builder'

describe('组卷工具', () => {
  it('章节测试抽 10 题且 id 唯一', () => {
    const qs = chapterQuiz('micro-01', 10)
    expect(qs.length).toBe(10)
    const ids = new Set(qs.map((q) => q.id))
    expect(ids.size).toBe(10)
    for (const q of qs) {
      expect(['choice', 'truefalse']).toContain(q.type)
      expect(q.prompt).toBeTruthy()
      expect(q.answer).toBeGreaterThanOrEqual(0)
      expect(q.answer).toBeLessThan(q.options.length)
    }
  })

  it('周测抽 20 题且 id 唯一', () => {
    const qs = weeklyQuiz(20)
    expect(qs.length).toBe(20)
    const ids = new Set(qs.map((q) => q.id))
    expect(ids.size).toBe(20)
    expect(qs.some((q) => q.id.startsWith('weekly-'))).toBe(true)
    expect(qs.some((q) => q.id.startsWith('micro-01-') || q.id.startsWith('macro-'))).toBe(true)
  })
})
