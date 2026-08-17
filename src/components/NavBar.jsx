import { useMemo } from 'react'
import { curriculum, flattenChapters } from '../data/chapters'
import { overallStats } from '../lib/progress'
import PlayerStats from './PlayerStats'
import SearchBox from './SearchBox'

const NAV_ITEMS = [
  { path: '/', label: '首页', match: (route) => route.name === 'home' },
  { path: '/map', label: '知识地图', match: (route) => route.name === 'map' || route.name === 'chapter' || route.name === 'knowledge' },
  { path: '/review', label: '复习', match: (route) => route.name === 'review' },
  { path: '/skills', label: '现实能力', match: (route) => route.name === 'skills' },
]

export default function NavBar({ route, progress, dueCount, game, theme, onToggleTheme }) {
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
    <header className="navbar">
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#/">
          <span className="navbar__logo" aria-hidden="true">经</span>
          <span className="navbar__name">Economics Map</span>
        </a>

        <nav className="navbar__nav" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              className={`navbar__link${
                item.match(route) ? ' navbar__link--active' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__right">
          <SearchBox />
          <div className="navbar__stats" aria-label="学习概览">
            <span className="navbar__stat">
              已答 <strong>{stats.answered}</strong>
            </span>
            <span className="navbar__stat">
              正确率 <strong>{accuracy}%</strong>
            </span>
            <span className="navbar__stat">
              待复习 <strong className={dueCount > 0 ? 'text-review' : ''}>{dueCount}</strong>
            </span>
          </div>
          <PlayerStats game={game} />
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`切换到${theme === 'dark' ? '浅色' : '深色'}模式`}
            title={`切换到${theme === 'dark' ? '浅色' : '深色'}模式`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
