import { describe, expect, it } from 'vitest'
import { weeklyQuestions } from './weekly'

describe('周测题库', () => {
  it('至少 20 题，字段完整且 id 唯一', () => {
    const ids = new Set()
    expect(weeklyQuestions.length).toBeGreaterThanOrEqual(20)
    for (const q of weeklyQuestions) {
      expect(ids.has(q.id)).toBe(false)
      ids.add(q.id)
      expect(q.id).toMatch(/^weekly-/)
      expect(['choice', 'truefalse']).toContain(q.type)
      expect(q.tag).toBeTruthy()
      expect(q.prompt).toBeTruthy()
      expect(q.explanation).toBeTruthy()
      if (q.type === 'choice') {
        expect(q.options.length).toBeGreaterThanOrEqual(3)
        expect(q.answer).toBeGreaterThanOrEqual(0)
        expect(q.answer).toBeLessThan(q.options.length)
      } else {
        expect(typeof q.answer).toBe('boolean')
      }
    }
  })
})
