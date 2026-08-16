import { ACHIEVEMENTS } from '../lib/gamification'

export default function AchievementToast({ unlockedIds }) {
  if (!unlockedIds.length) return null

  return (
    <div className="achievement-toasts" aria-live="polite">
      {unlockedIds.map((id) => {
        const achievement = ACHIEVEMENTS.find((a) => a.id === id)
        if (!achievement) return null
        return (
          <div key={id} className="achievement-toast">
            <span className="achievement-toast__icon" aria-hidden="true">
              {achievement.icon}
            </span>
            <div>
              <p className="achievement-toast__kicker">成就解锁</p>
              <p className="achievement-toast__title">{achievement.title}</p>
              <p className="achievement-toast__desc">{achievement.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
