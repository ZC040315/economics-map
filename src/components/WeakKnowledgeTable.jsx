import { curriculum } from '../data/chapters'

export default function WeakKnowledgeTable({ progress }) {
  const rows = []
  for (const track of curriculum) {
    for (const chapter of track.chapters) {
      for (const card of chapter.cards) {
        const record = progress[card.id]
        if (record?.attempts > 0 && record.correct !== true) {
          rows.push({
            id: card.id,
            title: card.title,
            chapter: chapter.title,
            attempts: record.attempts,
          })
        }
      }
    }
  }
  rows.sort((a, b) => b.attempts - a.attempts)

  if (!rows.length) {
    return (
      <div className="test-empty">
        <p>暂无薄弱知识点。答错过的知识点会自动收集到这里。</p>
      </div>
    )
  }

  return (
    <div className="weak-table">
      <div className="weak-table__head">
        <span>知识点</span>
        <span>所属章节</span>
        <span>出错次数</span>
        <span />
      </div>
      <ul className="weak-table__list">
        {rows.map((row) => (
          <li key={row.id} className="weak-table__row">
            <span className="weak-table__title">{row.title}</span>
            <span className="weak-table__chapter">{row.chapter}</span>
            <span className="weak-table__count">{row.attempts}</span>
            <a className="weak-table__go" href={`#/knowledge/${row.id}`}>
              去复习 →
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
