import { describe, expect, it } from 'vitest'
import { DIFFICULTY_ORDER, questionBanks, questionsForChapter } from './index'

const VALID_DIFFICULTIES = ['basic', 'advanced', 'challenge']
const VALID_TYPES = ['choice', 'truefalse', 'essay']

describe('分层题库', () => {
  it('7 章都有题库，每章至少 10 题', () => {
    expect(questionBanks).toHaveLength(7)
    for (const bank of questionBanks) {
      expect(
        bank.questions.length,
        `${bank.chapterId} 题目不足 10 道`,
      ).toBeGreaterThanOrEqual(10)
    }
  })

  it('每章都覆盖三种难度', () => {
    for (const bank of questionBanks) {
      const difficulties = new Set(bank.questions.map((q) => q.difficulty))
      expect(difficulties, `${bank.chapterId} 难度不完整`).toEqual(
        new Set(VALID_DIFFICULTIES),
      )
    }
  })

  it('题目字段完整且 id 唯一', () => {
    const ids = new Set()
    for (const bank of questionBanks) {
      for (const q of bank.questions) {
        expect(ids.has(q.id), `重复 id：${q.id}`).toBe(false)
        ids.add(q.id)
        expect(q.id).toMatch(new RegExp(`^${bank.chapterId}-`))
        expect(VALID_DIFFICULTIES).toContain(q.difficulty)
        expect(VALID_TYPES).toContain(q.type)
        expect(q.prompt).toBeTruthy()

        if (q.type === 'choice') {
          expect(q.options.length).toBeGreaterThanOrEqual(3)
          expect(q.answer).toBeGreaterThanOrEqual(0)
          expect(q.answer).toBeLessThan(q.options.length)
          expect(q.explanation).toBeTruthy()
        }
        if (q.type === 'truefalse') {
          expect(typeof q.answer).toBe('boolean')
          expect(q.explanation).toBeTruthy()
        }
        if (q.type === 'essay') {
          expect(q.reference).toBeTruthy()
        }
        if (q.image) {
          expect(typeof q.image).toBe('string')
        }
      }
    }
  })

  it('每章至少 1 道图片分析题', () => {
    for (const bank of questionBanks) {
      const imageCount = bank.questions.filter((q) => q.image).length
      expect(imageCount, `${bank.chapterId} 缺图片题`).toBeGreaterThanOrEqual(1)
    }
  })

  it('基础题以选择/判断为主，疑难含问答与图片', () => {
    for (const bank of questionBanks) {
      const challenge = bank.questions.filter(
        (q) => q.difficulty === 'challenge',
      )
      expect(challenge.some((q) => q.type === 'essay')).toBe(true)
      expect(challenge.some((q) => q.image)).toBe(true)
    }
  })

  it('难度顺序辅助函数', () => {
    expect(DIFFICULTY_ORDER).toEqual(['basic', 'advanced', 'challenge'])
    expect(questionsForChapter('micro-01').length).toBeGreaterThan(0)
    expect(questionsForChapter('micro-99')).toEqual([])
  })
})
