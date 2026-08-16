import { useState } from 'react'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function RecallCard({ card, index, result, onAnswer, onAnswered }) {
  const [revealed, setRevealed] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleOption = (optionIndex) => {
    if (selected !== null && selected === card.quiz.answer) return
    setSelected(optionIndex)
    const isCorrect = optionIndex === card.quiz.answer
    onAnswer(card.id, isCorrect)
    onAnswered?.(isCorrect)
  }

  const isCorrectAnswer = selected === card.quiz.answer
  const hasAnsweredCorrectly = result?.correct

  return (
    <article className="recall-card">
      <header className="recall-card__head">
        <span className="recall-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="recall-card__title">{card.title}</h3>
          <p className="recall-card__recall">{card.recall}</p>
        </div>
        {hasAnsweredCorrectly && (
          <span className="recall-card__done" title="已掌握">
            已掌握
          </span>
        )}
      </header>

      {!revealed ? (
        <button
          type="button"
          className="recall-card__reveal"
          onClick={() => setRevealed(true)}
        >
          先在心里解释它，再翻答案
        </button>
      ) : (
        <div className="recall-card__body">
          <div className="recall-card__section">
            <span className="recall-card__label">一句话定义</span>
            <p>{card.definition}</p>
          </div>
          <div className="recall-card__section">
            <span className="recall-card__label">生活例子</span>
            <p>{card.example}</p>
          </div>
          <div className="recall-card__section">
            <span className="recall-card__label">速测题</span>
            <p className="recall-card__question">{card.quiz.question}</p>
            <div className="recall-card__options">
              {card.quiz.options.map((option, optionIndex) => {
                const chosen = selected === optionIndex
                const isAnswer = optionIndex === card.quiz.answer
                let className = 'recall-card__option'
                if (chosen) {
                  className += isAnswer
                    ? ' recall-card__option--correct'
                    : ' recall-card__option--wrong'
                }
                return (
                  <button
                    key={option}
                    type="button"
                    className={className}
                    disabled={selected !== null && selected === card.quiz.answer}
                    onClick={() => handleOption(optionIndex)}
                  >
                    <span className="recall-card__option-label">
                      {OPTION_LABELS[optionIndex]}
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>
            {selected !== null && (
              <p
                className={`recall-card__feedback ${
                  isCorrectAnswer
                    ? 'recall-card__feedback--correct'
                    : 'recall-card__feedback--wrong'
                }`}
              >
                {isCorrectAnswer
                  ? `答对了。${card.quiz.explanation}`
                  : '还差一点，再想想。答对这道题才计入掌握。'}
              </p>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
