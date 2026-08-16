import { ACHIEVEMENTS } from '../lib/gamification'

export default function AchievementsPanel({ game }) {
  return (
    <section className="achievements" aria-label="成就徽章">
      <header className="achievements__head">
        <h2 className="achievements__title">成就徽章</h2>
        <span className="achievements__count">
          {ACHIEVEMENTS.filter((a) => game.achievements[a.id]).length}/
          {ACHIEVEMENTS.length}
        </span>
      </header>
      <ul className="achievements__grid">
        {ACHIEVEMENTS.map((achievement) => {
          const unlocked = game.achievements[achievement.id] === true
          return (
            <li
              key={achievement.id}
              className={`achievement${
                unlocked ? ' achievement--unlocked' : ''
              }`}
              title={unlocked ? achievement.desc : `未解锁：${achievement.desc}`}
            >
              <span className="achievement__icon" aria-hidden="true">
                {achievement.icon}
              </span>
              <span className="achievement__name">{achievement.title}</span>
              <span className="achievement__desc">
                {unlocked ? achievement.desc : '未解锁'}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
