import { describe, expect, it } from 'vitest'
import { overallSkillPercent, skillProgress } from './skill-progress'

describe('能力地图进度', () => {
  it('未学习时五个维度进度为 0', () => {
    const entries = skillProgress({})
    expect(entries).toHaveLength(5)
    for (const entry of entries) {
      expect(entry.mastered).toBe(0)
      expect(entry.percent).toBe(0)
      expect(entry.unlocked).toBe(false)
    }
  })

  it('掌握该维度全部卡片后解锁徽章', () => {
    // 模拟掌握消费决策全部 6 张
    const progress = {}
    for (let i = 1; i <= 6; i++) {
      progress[`life-consumer-0${i}`] = { correct: true }
    }
    const entries = skillProgress(progress)
    const consumer = entries.find((e) => e.skillId === 'consumer')
    expect(consumer.mastered).toBe(6)
    expect(consumer.percent).toBe(100)
    expect(consumer.unlocked).toBe(true)
  })

  it('总进度为全部已掌握 / 全部卡片', () => {
    const progress = {}
    for (let i = 1; i <= 3; i++) {
      progress[`life-consumer-0${i}`] = { correct: true }
    }
    const percent = overallSkillPercent(progress)
    expect(percent).toBe(10) // 3 / 30
  })
})
