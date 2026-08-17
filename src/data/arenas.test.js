import { describe, expect, it } from 'vitest'
import { arenas, arenaById } from './arenas'

describe('反击擂台', () => {
  it('至少 6 个擂台，字段完整且 id 唯一', () => {
    const ids = new Set()
    expect(arenas.length).toBeGreaterThanOrEqual(6)
    for (const arena of arenas) {
      expect(ids.has(arena.id)).toBe(false)
      ids.add(arena.id)
      expect(arena.id).toMatch(/^arena-/)
      expect(arena.title).toBeTruthy()
      expect(arena.difficulty).toBe('challenge')
      expect(arena.situation).toBeTruthy()
      expect(arena.question).toBeTruthy()
      expect(arena.yourMove).toBeTruthy()
      expect(arena.counterPrompt).toBeTruthy()
      expect(arena.reveal.length).toBeGreaterThanOrEqual(3)
      expect(arena.principle).toBeTruthy()
      expect(['business', 'investment', 'interpersonal', 'time', 'consumer']).toContain(
        arena.skill,
      )
    }
  })

  it('查询函数', () => {
    expect(arenaById('arena-01').title).toBe('低价抢客，跟不跟？')
    expect(arenaById('arena-99')).toBeNull()
  })
})
