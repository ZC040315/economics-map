import { useCallback, useRef, useState } from 'react'
import {
  applyAnswer,
  completeReviewSession,
  evaluateAchievements,
  loadGame,
  levelFromXp,
  nextProgressAfterAnswer,
  saveGame,
} from '../lib/gamification'

export default function useGame() {
  const [game, setGame] = useState(loadGame)
  const gameRef = useRef(game)

  const commit = useCallback((next, unlocked) => {
    const final =
      unlocked.length > 0
        ? {
            ...next,
            achievements: {
              ...next.achievements,
              ...Object.fromEntries(unlocked.map((id) => [id, true])),
            },
          }
        : next
    gameRef.current = final
    saveGame(final)
    setGame(final)
    return unlocked
  }, [])

  const recordAnswer = useCallback(
    (progress, cardId, isCorrect, chapters, difficulty) => {
      const nextProgress = nextProgressAfterAnswer(progress, cardId, isCorrect)
      const afterXp = applyAnswer(
        gameRef.current,
        progress,
        cardId,
        isCorrect,
        difficulty,
      )
      const unlocked = evaluateAchievements(nextProgress, afterXp, chapters)
      return commit(afterXp, unlocked)
    },
    [commit],
  )

  const completeSession = useCallback(
    (chapters) => {
      const afterXp = completeReviewSession(gameRef.current)
      const unlocked = evaluateAchievements({}, afterXp, chapters)
      return commit(afterXp, unlocked)
    },
    [commit],
  )

  const earnXp = useCallback(
    (amount) => {
      const next = {
        ...gameRef.current,
        xp: gameRef.current.xp + amount,
      }
      next.level = levelFromXp(next.xp)
      gameRef.current = next
      saveGame(next)
      setGame(next)
    },
    [],
  )

  return { game, recordAnswer, completeSession, earnXp }
}
