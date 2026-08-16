import { useState } from 'react'
import { DIFFICULTY_LABELS } from '../data/questions'

const DIFFICULTY_CLASS = {
  basic: 'question-card__difficulty--basic',
  advanced: 'question-card__difficulty--advanced',
  challenge: 'question-card__difficulty--challenge',
}

export default function LifeSkillCard({ card, index, result, onAnswer }) {
  const [revealed, setRevealed] = useState(false)
  const [selfResult, setSelfResult] = useState(null)
  const hasMastered = result?.correct

  const selfCheck = (remembered) => {
    if (selfResult !== null) return
    setSelfResult(remembered)
    onAnswer(card, remembered)
  }

  return (
    <article className="question-card life-skill-card">
      <header className="question-card__head">
        <span
          className={`question-card__difficulty ${DIFFICULTY_CLASS[card.difficulty]}`}
        >
          {DIFFICULTY_LABELS[card.difficulty]}
        </span>
        <span className="question-card__type">现实场景</span>
        {hasMastered && (
          <span className="question-card__done" title="已掌握">
            已掌握
          </span>
        )}
      </header>
      <h3 className="question-card__title">
        <span className="question-card__num">{index + 1}.</span>
        {card.situation}
      </h3>
      <p className="life-skill-card__question">
        <strong>你要做的决定：</strong>
        {card.question}
      </p>

      {!revealed ? (
        <button
          type="button"
          className="question-card__show-answer"
          onClick={() => setRevealed(true)}
        >
          先自己想想，再看经济学怎么拆解
        </button>
      ) : (
        <div className="life-skill-card__reveal">
          <div className="question-card__reference">
            <span className="question-card__reference-label">经济学原理</span>
            <p>{card.principle}</p>
          </div>
          <div className="life-skill-card__action">
            <span className="life-skill-card__action-label">行动建议</span>
            <p>{card.action}</p>
          </div>
        </div>
      )}

      {selfResult === null ? (
        revealed && (
          <div className="question-card__selfcheck">
            <span>这个思路你记住了吗？</span>
            <button
              type="button"
              className="question-card__selfcheck-btn question-card__selfcheck-btn--yes"
              onClick={() => selfCheck(true)}
            >
              记住了
            </button>
            <button
              type="button"
              className="question-card__selfcheck-btn question-card__selfcheck-btn--no"
              onClick={() => selfCheck(false)}
            >
              还需巩固
            </button>
          </div>
        )
      ) : (
        <p
          className={`question-card__feedback ${
            selfResult
              ? 'question-card__feedback--correct'
              : 'question-card__feedback--wrong'
          }`}
        >
          {selfResult
            ? '很好，已记入掌握。'
            : '已记入待复习，这条会进入你的复习队列。'}
        </p>
      )}
    </article>
  )
}
