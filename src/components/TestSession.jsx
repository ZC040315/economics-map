import { useEffect, useState } from 'react'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function TestSession({
  title,
  questions,
  onAnswer,
  onFinish,
  onExit,
}) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const current = questions[index]
  const isLast = index === questions.length - 1

  const handleSelect = (optionIndex) => {
    if (selected !== null) return
    const isCorrect = optionIndex === current.answer
    setSelected(optionIndex)
    onAnswer(current.id, isCorrect)
    setAnswers((prev) => [...prev, { id: current.id, correct: isCorrect }])
  }

  const handleNext = () => {
    if (isLast) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  useEffect(() => {
    if (done) onFinish(answers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  if (!questions.length) {
    return (
      <div className="review-empty">
        <h2 className="review-empty__title">没有可用的题目</h2>
        <button type="button" className="btn btn--ghost" onClick={onExit}>
          返回测试中心
        </button>
      </div>
    )
  }

  if (done) {
    const correctCount = answers.filter((a) => a.correct).length
    const rate = Math.round((correctCount / answers.length) * 100)
    return (
      <div className="test-result">
        <p className="test-result__kicker">测试完成</p>
        <h2 className="test-result__title">{title}</h2>
        <div className="test-result__score">
          <span className="test-result__number">{correctCount}</span>
          <span className="test-result__of">/ {answers.length}</span>
        </div>
        <p className="test-result__rate">正确率 {rate}%</p>
        <ul className="test-result__list">
          {questions.map((q, i) => (
            <li key={`${q.id}-${i}`} className={`test-result__item ${answers[i]?.correct ? 'test-result__item--ok' : 'test-result__item--bad'}`}>
              <span className="test-result__mark">{answers[i]?.correct ? '✓' : '✗'}</span>
              <span className="test-result__text">{q.prompt}</span>
            </li>
          ))}
        </ul>
        <div className="test-result__actions">
          <button type="button" className="btn btn--primary" onClick={onExit}>
            返回测试中心
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="test-session">
      <header className="test-session__head">
        <div>
          <p className="test-session__meta">
            {title} · 第 {index + 1}/{questions.length} 题
          </p>
          <h2 className="test-session__title">{current.prompt}</h2>
        </div>
        <span className="test-session__progress">
          {Math.round(((index + (selected !== null ? 1 : 0)) / questions.length) * 100)}%
        </span>
      </header>
      <div className="test-session__options">
        {current.options.map((option, optionIndex) => {
          const chosen = selected === optionIndex
          const isAnswer = optionIndex === current.answer
          let className = 'test-session__option'
          if (chosen) {
            className += isAnswer
              ? ' test-session__option--correct'
              : ' test-session__option--wrong'
          } else if (selected !== null && isAnswer) {
            className += ' test-session__option--answer'
          }
          return (
            <button
              key={option}
              type="button"
              className={className}
              disabled={selected !== null}
              onClick={() => handleSelect(optionIndex)}
            >
              <span className="test-session__option-label">
                {current.type === 'truefalse' ? (optionIndex === 0 ? '对' : '错') : OPTION_LABELS[optionIndex]}
              </span>
              {option}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <div className="test-session__foot">
          <p
            className={`test-session__feedback ${
              selected === current.answer
                ? 'test-session__feedback--correct'
                : 'test-session__feedback--wrong'
            }`}
          >
            {selected === current.answer ? '答对了。' : '答错了。'}
            {current.explanation}
          </p>
          <button type="button" className="btn btn--primary" onClick={handleNext}>
            {isLast ? '交卷' : '下一题'}
          </button>
        </div>
      )}
    </div>
  )
}
