import { describe, expect, it } from 'vitest'
import { addDecision, decisionCount, removeDecision } from './decisions'

describe('决策日志', () => {
  it('新增决策排在最前并带 id 与时间', () => {
    const next = addDecision([], {
      title: '要不要报销售课',
      optionA: '报课',
      optionB: '自学',
      loss: '2000 元和两个月时间',
      counter: '自学也能达到同样效果',
    })
    expect(next).toHaveLength(1)
    expect(next[0].id).toMatch(/^decision-/)
    expect(next[0].title).toBe('要不要报销售课')
    expect(next[0].loss).toBe('2000 元和两个月时间')
    expect(typeof next[0].ts).toBe('number')
  })

  it('多条时新决策排在最前', () => {
    const first = addDecision([], { title: '决策一', loss: 'a', counter: 'b' })
    const second = addDecision(first, { title: '决策二', loss: 'c', counter: 'd' })
    expect(second[0].title).toBe('决策二')
    expect(second[1].title).toBe('决策一')
  })

  it('删除决策', () => {
    const list = addDecision([], { title: '决策', loss: 'a', counter: 'b' })
    const id = list[0].id
    expect(removeDecision(list, id)).toHaveLength(0)
    expect(decisionCount(list)).toBe(1)
  })
})
