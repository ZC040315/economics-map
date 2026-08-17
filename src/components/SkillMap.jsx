import { useEffect, useState } from 'react'
import {
  loadSkillBadges,
  saveSkillBadges,
  skillProgress,
} from '../lib/skill-progress'

export default function SkillMap({ progress }) {
  const [newlyUnlocked, setNewlyUnlocked] = useState([])

  useEffect(() => {
    const saved = loadSkillBadges()
    const entries = skillProgress(progress)
    const justUnlocked = entries
      .filter((e) => e.unlocked && !saved.includes(e.skillId))
      .map((e) => e)
    if (justUnlocked.length) {
      saveSkillBadges([...saved, ...justUnlocked.map((e) => e.skillId)])
      setNewlyUnlocked(justUnlocked)
      window.setTimeout(() => setNewlyUnlocked([]), 4000)
    }
  }, [progress])

  const entries = skillProgress(progress)
  const badges = loadSkillBadges()

  return (
    <section className="skill-map" aria-label="能力地图">
      <header className="skill-map__head">
        <h2 className="practice__title">能力地图</h2>
        <span className="skill-map__count">
          {badges.length}/5 徽章
        </span>
      </header>
      <ul className="skill-map__grid">
        {entries.map((entry) => {
          const unlocked = badges.includes(entry.skillId)
          return (
            <li
              key={entry.skillId}
              className={`skill-map__item${
                unlocked ? ' skill-map__item--unlocked' : ''
              }`}
              title={entry.desc}
            >
              <span className="skill-map__icon" aria-hidden="true">
                {entry.icon}
              </span>
              <span className="skill-map__name">{entry.title}</span>
              <span className="skill-map__bar" role="img" aria-label={`进度 ${entry.percent}%`}>
                <span
                  className="skill-map__bar-fill"
                  style={{ width: `${entry.percent}%` }}
                />
              </span>
              <span className="skill-map__meta">
                {entry.mastered}/{entry.total} 条 · {entry.percent}%
              </span>
              <span className={`skill-map__badge${unlocked ? ' skill-map__badge--on' : ''}`}>
                {unlocked ? '🏅 已解锁' : '🔒 未解锁'}
              </span>
            </li>
          )
        })}
      </ul>
      {newlyUnlocked.length > 0 && (
        <div className="skill-map__toast" aria-live="polite">
          {newlyUnlocked.map((e) => (
            <span key={e.skillId}>
              {e.icon} 「{e.title}」能力徽章解锁！
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
