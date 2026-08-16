import { describe, expect, it } from 'vitest'
import { SKILLS, lifeSkills, lifeSkillsFor } from './life-skills'

const VALID_DIFFICULTIES = ['basic', 'advanced', 'challenge']

describe('现实决策场景库', () => {
  it('五类能力，每类至少 6 张卡，共 30 张', () => {
    expect(SKILLS).toHaveLength(5)
    for (const skill of SKILLS) {
      const cards = lifeSkillsFor(skill.id)
      expect(cards.length, `${skill.id} 场景卡不足`).toBeGreaterThanOrEqual(6)
    }
    expect(lifeSkills.length).toBeGreaterThanOrEqual(30)
  })

  it('每张卡字段完整且 id 唯一', () => {
    const ids = new Set()
    for (const card of lifeSkills) {
      expect(ids.has(card.id)).toBe(false)
      ids.add(card.id)
      expect(card.id).toMatch(/^life-/)
      expect(SKILLS.some((s) => s.id === card.skill)).toBe(true)
      expect(VALID_DIFFICULTIES).toContain(card.difficulty)
      expect(card.situation).toBeTruthy()
      expect(card.question).toBeTruthy()
      expect(card.principle).toBeTruthy()
      expect(card.action).toBeTruthy()
    }
  })

  it('每类能力都覆盖基础/进阶/疑难', () => {
    for (const skill of SKILLS) {
      const difficulties = new Set(
        lifeSkillsFor(skill.id).map((c) => c.difficulty),
      )
      expect(difficulties).toEqual(new Set(VALID_DIFFICULTIES))
    }
  })
})
