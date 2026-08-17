// 决策必做动作工具：记录「选A我失去了什么」+「选B别人会怎么反击我」
const STORAGE_KEY = 'economics-map:v1:decisions'

export const DECISION_XP = 15

export function loadDecisions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveDecisions(decisions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decisions))
  } catch {
    // 忽略存储不可用
  }
}

export function addDecision(decisions, { title, optionA, optionB, loss, counter }) {
  const decision = {
    id: `decision-${Date.now()}`,
    title: title.trim(),
    optionA: (optionA || '').trim(),
    optionB: (optionB || '').trim(),
    loss: loss.trim(),
    counter: counter.trim(),
    ts: Date.now(),
  }
  return [decision, ...decisions]
}

export function removeDecision(decisions, id) {
  return decisions.filter((d) => d.id !== id)
}

export function decisionCount(decisions) {
  return decisions.length
}
