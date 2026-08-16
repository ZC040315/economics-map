import { useCallback, useState } from 'react'
import { loadProgress, recordAnswer, saveProgress } from '../lib/progress'

export default function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  const record = useCallback((cardId, isCorrect) => {
    setProgress((prev) => {
      const next = recordAnswer(prev, cardId, isCorrect)
      saveProgress(next)
      return next
    })
  }, [])

  return { progress, record }
}
