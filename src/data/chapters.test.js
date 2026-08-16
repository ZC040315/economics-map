import { describe, expect, it } from 'vitest'
import { curriculum, flattenChapters } from './chapters'

const VALID_STATUSES = ['not-started', 'learning', 'mastered', 'review']

describe('章节数据', () => {
  it('微观 11 章、宏观 7 章', () => {
    const micro = curriculum.find((t) => t.id === 'micro')
    const macro = curriculum.find((t) => t.id === 'macro')
    expect(micro.chapters).toHaveLength(11)
    expect(macro.chapters).toHaveLength(7)
  })

  it('每章包含必要字段且 id 唯一', () => {
    const chapters = flattenChapters(curriculum)
    const ids = new Set(chapters.map((c) => c.id))
    expect(ids.size).toBe(chapters.length)

    for (const chapter of chapters) {
      expect(chapter.id).toBeTruthy()
      expect(chapter.title).toBeTruthy()
      expect(chapter.num).toBeGreaterThan(0)
      expect(VALID_STATUSES).toContain(chapter.status)
      expect(chapter.mastery).toBeGreaterThanOrEqual(0)
      expect(chapter.mastery).toBeLessThanOrEqual(100)
      expect(Array.isArray(chapter.cards)).toBe(true)
    }
  })

  it('已填卡片的章节，卡片数据完整有效', () => {
    const chapters = flattenChapters(curriculum).filter((c) => c.cards.length > 0)
    expect(chapters.length).toBeGreaterThan(0)

    for (const chapter of chapters) {
      expect(chapter.cards.length).toBeGreaterThanOrEqual(5)
      for (const card of chapter.cards) {
        expect(card.id).toBeTruthy()
        expect(card.title).toBeTruthy()
        expect(card.recall).toBeTruthy()
        expect(card.definition).toBeTruthy()
        expect(card.example).toBeTruthy()
        expect(card.quiz.question).toBeTruthy()
        expect(card.quiz.options.length).toBeGreaterThanOrEqual(3)
        expect(card.quiz.answer).toBeGreaterThanOrEqual(0)
        expect(card.quiz.answer).toBeLessThan(card.quiz.options.length)
        expect(card.quiz.explanation).toBeTruthy()
      }
    }
  })
})
