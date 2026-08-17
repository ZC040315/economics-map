import { useState } from 'react'
import { resolveQuestion } from '../lib/question-source'

function MistakeItem({ item, onReanswer }) {
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const handle = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    const isCorrect = optionIndex === item.question.answer
    setFeedback(isCorrect)
    onReanswer(item.question.id, isCorrect)
  }

  return (
    <li className="mistake-item">
      <div className="mistake-item__head">
        <span className="mistake-item__source">{item.question.source}</span>
        <span className="mistake-item__count">错 {item.record.attempts} 次</span>
        {item.record.lastCorrect === true && (
          <span className="mistake-item__fixed">已订正</span>
        )}
      </div>
      <p className="mistake-item__prompt">{item.question.prompt}</p>
      <div className="mistake-item__options">
        {item.question.options.map((option, optionIndex) => {
          const chosen = selected === optionIndex
          const isAnswer = optionIndex === item.question.answer
          let className = 'mistake-item__option'
          if (chosen) {
            className += isAnswer
              ? ' mistake-item__option--correct'
              : ' mistake-item__option--wrong'
          } else if (selected !== null && isAnswer) {
            className += ' mistake-item__option--answer'
          }
          return (
            <button
              key={option}
              type="button"
              className={className}
              disabled={selected !== null}
              onClick={() => handle(optionIndex)}
            >
              {option}
            </button>
          )
        })}
      </div>
      {feedback !== null && (
        <p className="mistake-item__feedback">
          {feedback ? '重做正确，已订正！' : '还不对，再想想。'}
          {item.question.explanation && ` ${item.question.explanation}`}
        </p>
      )}
    </li>
  )
}

export default function MistakeList({ progress, onReanswer }) {
  const mistakes = Object.entries(progress)
    .filter(([, record]) => record.lastCorrect === false && record.attempts > 0)
    .map(([id, record]) => ({ id, record, question: resolveQuestion(id) }))
    .filter((item) => item.question)

  if (!mistakes.length) {
    return (
      <div className="test-empty">
        <p>暂无错题。答错的题目会自动收集到这里。</p>
      </div>
    )
  }

  return (
    <ul className="mistake-list">
      {mistakes.map((item) => (
        <MistakeItem key={item.id} item={item} onReanswer={onReanswer} />
      ))}
    </ul>
  )
}
