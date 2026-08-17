import { useState } from 'react'
import { arenas } from '../data/arenas'

const ANSWERS_KEY = 'economics-map:v1:arena-answers'

function loadAnswers() {
  try {
    const raw = localStorage.getItem(ANSWERS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveAnswer(id, text) {
  const next = { ...loadAnswers(), [id]: { text, ts: Date.now() } }
  try {
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
}

function ArenaCard({ arena, result, onAnswer }) {
  const [draft, setDraft] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [selfResult, setSelfResult] = useState(null)
  const saved = loadAnswers()[arena.id]
  const hasMastered = result?.correct

  const handleReveal = () => {
    if (!draft.trim() && !saved) return
    if (draft.trim()) saveAnswer(arena.id, draft.trim())
    setRevealed(true)
  }

  const selfCheck = (matched) => {
    if (selfResult !== null) return
    setSelfResult(matched)
    onAnswer(arena, matched)
  }

  return (
    <article className="arena-card">
      <header className="arena-card__head">
        <span className="arena-card__tag">反击擂台</span>
        <h3 className="arena-card__title">{arena.title}</h3>
        {hasMastered && (
          <span className="question-card__done" title="已掌握">
            已掌握
          </span>
        )}
      </header>

      <div className="arena-card__scene">
        <p className="arena-card__situation">{arena.situation}</p>
        <p className="arena-card__question">
          <strong>你的决定：</strong>
          {arena.question}
        </p>
        <p className="arena-card__move">
          <strong>你倾向的做法：</strong>
          {arena.yourMove}
        </p>
      </div>

      {!revealed ? (
        <div className="arena-card__write">
          <label className="decision-form__field">
            <span className="decision-form__label">{arena.counterPrompt}</span>
            <textarea
              rows={3}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="写下你站到对方立场会怎么反驳……"
            />
          </label>
          <button
            type="button"
            className="btn btn--primary"
            disabled={!draft.trim() && !saved}
            onClick={handleReveal}
          >
            写下反击并揭晓经济学反方观点
          </button>
        </div>
      ) : (
        <div className="arena-card__reveal">
          <p className="arena-card__your-answer">
            <strong>你的反击：</strong>
            {saved?.text || draft}
          </p>
          <div className="arena-card__points">
            <span className="arena-card__points-label">经济学反方观点</span>
            <ul>
              {arena.reveal.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="question-card__reference">
            <span className="question-card__reference-label">核心原理</span>
            <p>{arena.principle}</p>
          </div>
          {selfResult === null ? (
            <div className="question-card__selfcheck">
              <span>对照反方观点，你预判到了吗？</span>
              <button
                type="button"
                className="question-card__selfcheck-btn question-card__selfcheck-btn--yes"
                onClick={() => selfCheck(true)}
              >
                预判到了大部分
              </button>
              <button
                type="button"
                className="question-card__selfcheck-btn question-card__selfcheck-btn--no"
                onClick={() => selfCheck(false)}
              >
                没想到，还需再练
              </button>
            </div>
          ) : (
            <p
              className={`question-card__feedback ${
                selfResult
                  ? 'question-card__feedback--correct'
                  : 'question-card__feedback--wrong'
              }`}
            >
              {selfResult
                ? '很好，你已经能站到对手那边想问题了。'
                : '没关系，下次先问自己「对方会怎么反击」再决定。'}
            </p>
          )}
        </div>
      )}
    </article>
  )
}

export default function ArenaSection({ progress, onAnswer }) {
  return (
    <section className="arena-section" aria-label="反击擂台">
      <header className="practice__head">
        <div>
          <h2 className="practice__title">反击擂台</h2>
          <p className="practice__desc">
            每道题先写下「如果我是对手会怎么反击我」，再对照经济学家的反方观点
          </p>
        </div>
      </header>
      <div className="practice__list">
        {arenas.map((arena) => (
          <ArenaCard
            key={arena.id}
            arena={arena}
            result={progress[arena.id]}
            onAnswer={onAnswer}
          />
        ))}
      </div>
    </section>
  )
}
