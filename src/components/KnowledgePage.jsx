import { useState } from 'react'
import Chart from './Chart'
import { knowledgeById, relatedKnowledge } from '../lib/knowledge'
import { videoForChapter } from '../data/videos'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

function QuizBlock({ quiz, onAnswer, result }) {
  const [selected, setSelected] = useState(null)
  const isCorrect = selected === quiz.answer

  return (
    <section className="knowledge-block">
      <h2 className="knowledge-block__title">速测题</h2>
      <p className="knowledge-block__question">{quiz.question}</p>
      <div className="knowledge-block__options">
        {quiz.options.map((option, index) => {
          const chosen = selected === index
          const isAnswer = index === quiz.answer
          let className = 'knowledge-block__option'
          if (chosen) {
            className += isAnswer
              ? ' knowledge-block__option--correct'
              : ' knowledge-block__option--wrong'
          } else if (selected !== null && isAnswer) {
            className += ' knowledge-block__option--answer'
          }
          return (
            <button
              key={option}
              type="button"
              className={className}
              disabled={selected !== null}
              onClick={() => {
                setSelected(index)
                onAnswer(quiz.answer === index)
              }}
            >
              <span className="knowledge-block__option-label">
                {OPTION_LABELS[index]}
              </span>
              {option}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <p
          className={`knowledge-block__feedback ${
            isCorrect
              ? 'knowledge-block__feedback--correct'
              : 'knowledge-block__feedback--wrong'
          }`}
        >
          {isCorrect ? `答对了。${quiz.explanation}` : `答错了。${quiz.explanation}`}
        </p>
      )}
      {result?.correct && (
        <span className="knowledge-block__done">已掌握</span>
      )}
    </section>
  )
}

export default function KnowledgePage({ id, progress, onAnswer }) {
  const found = knowledgeById(id)
  if (!found) {
    return (
      <div className="empty-state">
        <p>没有找到这个知识点。</p>
      </div>
    )
  }

  const { card, chapter } = found
  const video = videoForChapter(chapter.id)
  const related = relatedKnowledge(card.related)
  const record = progress[card.id]

  return (
    <article className="knowledge-page">
      <nav className="knowledge-page__crumb" aria-label="面包屑">
        <a href="#/map">知识地图</a>
        <span aria-hidden="true">/</span>
        <a href={`#/chapter/${chapter.id}`}>{chapter.title}</a>
      </nav>

      <header className="knowledge-page__head">
        <h1 className="knowledge-page__title">{card.title}</h1>
        <p className="knowledge-page__one">
          {card.definition}
        </p>
      </header>

      <section className="knowledge-block">
        <h2 className="knowledge-block__title">核心概念</h2>
        <p className="knowledge-block__recall">{card.recall}</p>
        <p className="knowledge-block__text">{card.example}</p>
      </section>

      {card.image && (
        <section className="knowledge-block">
          <h2 className="knowledge-block__title">经济学图形</h2>
          <Chart image={card.image} caption={card.imageCaption} />
        </section>
      )}

      {card.formula && (
        <section className="knowledge-block">
          <h2 className="knowledge-block__title">公式</h2>
          <p className="knowledge-block__formula">{card.formula}</p>
        </section>
      )}

      {card.keyPoint && (
        <section className="knowledge-block knowledge-block--key">
          <h2 className="knowledge-block__title">⭐ 考试重点</h2>
          <p className="knowledge-block__text">{card.keyPoint}</p>
        </section>
      )}

      {card.mistake && (
        <section className="knowledge-block knowledge-block--mistake">
          <h2 className="knowledge-block__title">⚠️ 高频易错</h2>
          <p className="knowledge-block__text">{card.mistake}</p>
        </section>
      )}

      <QuizBlock quiz={card.quiz} onAnswer={onAnswer} result={record} />

      {related.length > 0 && (
        <section className="knowledge-block">
          <h2 className="knowledge-block__title">🔗 相关知识</h2>
          <ul className="knowledge-block__related">
            {related.map(({ card: relCard, chapter: relChapter }) => (
              <li key={relCard.id}>
                <a href={`#/knowledge/${relCard.id}`}>
                  {relCard.title}
                  <span className="knowledge-block__related-chapter">
                    {relChapter.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {video && (
        <section className="knowledge-block">
          <h2 className="knowledge-block__title">视频讲解</h2>
          <a className="btn btn--ghost" href={`#/chapter/${chapter.id}`}>
            在章节页观看 · {video.primary.title}
          </a>
        </section>
      )}
    </article>
  )
}
