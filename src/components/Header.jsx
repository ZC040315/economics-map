import { useMemo } from 'react'
import { curriculum, flattenChapters } from '../data/chapters'
import { overallStats } from '../lib/progress'
import PlayerStats from './PlayerStats'

export default function Header({ progress, dueCount, game }) {
  const allCards = useMemo(
    () => flattenChapters(curriculum).flatMap((chapter) => chapter.cards),
    [],
  )
  const stats = useMemo(
    () => overallStats(allCards, progress),
    [allCards, progress],
  )
  const accuracy = stats.answered
    ? Math.round((stats.correct / stats.answered) * 100)
    : 0

  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__title">经济学知识地图</h1>
        <p className="header__subtitle">先回忆 · 后看答案 · 再对照视频</p>
      </div>
      <dl className="header__stats">
        <div className="header__stat">
          <dt>知识点</dt>
          <dd>{stats.total}</dd>
        </div>
        <div className="header__stat">
          <dt>已答</dt>
          <dd>{stats.answered}</dd>
        </div>
        <div className="header__stat">
          <dt>正确率</dt>
          <dd>{accuracy}%</dd>
        </div>
        <div className="header__stat">
          <dt>待复习</dt>
          <dd>{dueCount}</dd>
        </div>
      </dl>
      <PlayerStats game={game} />
    </header>
  )
}
