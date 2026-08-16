import { levelProgress } from '../lib/gamification'

export default function PlayerStats({ game }) {
  const progress = levelProgress(game.xp)

  return (
    <div className="player-stats" title={`经验 ${game.xp} / 下一级`}>
      <span className="player-stats__level">Lv.{game.level}</span>
      <span className="player-stats__bar" role="img" aria-label={`等级进度 ${progress}%`}>
        <span
          className="player-stats__bar-fill"
          style={{ width: `${progress}%` }}
        />
      </span>
      <span className="player-stats__xp">{game.xp} XP</span>
    </div>
  )
}
