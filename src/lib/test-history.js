// 测试历史：章节测试 / 周测成绩存档
const KEY = 'economics-map:v1:test-history'

export function loadTestHistory() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveTestResult(entry) {
  const history = loadTestHistory()
  const next = [{ ...entry, ts: Date.now() }, ...history].slice(0, 30)
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
  return next
}
