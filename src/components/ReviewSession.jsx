import { useState } from 'react'
import RecallCard from './RecallCard'

export default function ReviewSession({ queue, onAnswer, onFinish }) {
  const [index, setIndex] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [stats, setStats] = useState({ total: queue.length, correct: 0 })

  if (!queue.length) {
    return (
      <div className="review-session">
        <h2 className="review-session__title">复习完成</h2>
        <p className="review-session__summary">
          当前没有到期卡片，休息一下，明天再来。
        </p>
        <button
          type="button"
          className="review-session__back"
          onClick={onFinish}
        >
          返回知识地图
        </button>
      </div>
    )
  }

  const current = queue[index]
  const isLast = index === queue.length - 1

  const handleAnswered = (isCorrect) => {
    setAnswered(true)
    if (isCorrect) {
      setStats((prev) => ({ ...prev, correct: prev.correct + 1 }))
    }
  }

  const handleNext = () => {
    if (isLast) {
      onFinish()
      return
    }
    setIndex((i) => i + 1)
    setAnswered(false)
  }

  return (
    <div className="review-session">
      <header className="review-session__head">
        <span className="review-session__meta">
          复习 {index + 1} / {queue.length}
        </span>
        <h2 className="review-session__title">今日复习</h2>
        <span className="review-session__context">
          来自章节：{current.chapterTitle}
        </span>
      </header>

      <RecallCard
        key={current.card.id}
        card={current.card}
        index={index}
        result={null}
        onAnswer={onAnswer}
        onAnswered={handleAnswered}
      />

      <div className="review-session__footer">
        {answered ? (
          <button
            type="button"
            className="review-session__next"
            onClick={handleNext}
          >
            {isLast ? '完成复习' : '下一张'}
          </button>
        ) : (
          <p className="review-session__hint">
            先回忆，再翻答案，答完速测题后进入下一张。
          </p>
        )}
        <button
          type="button"
          className="review-session__back"
          onClick={onFinish}
        >
          中途退出
        </button>
      </div>

      {isLast && answered && (
        <p className="review-session__summary">
          本轮共 {stats.total} 张，答对 {stats.correct} 张。
        </p>
      )}
    </div>
  )
}
