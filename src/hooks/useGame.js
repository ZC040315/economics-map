import { useCallback, useRef, useState } from 'react'
import {
  applyAnswer,
  completeReviewSession,
  evaluateAchievements,
  loadGame,
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
    (progress, cardId, isCorrect, chapters) => {
      const nextProgress = nextProgressAfterAnswer(progress, cardId, isCorrect)
      const afterXp = applyAnswer(gameRef.current, progress, cardId, isCorrect)
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

  return { game, recordAnswer, completeSession }
}
