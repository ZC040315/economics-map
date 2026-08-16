import { useState } from 'react'
import QuestionCard from './QuestionCard'
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_ORDER,
  questionsForChapter,
} from '../data/questions'

const FILTERS = [
  { key: 'all', label: '全部' },
  ...DIFFICULTY_ORDER.map((key) => ({ key, label: DIFFICULTY_LABELS[key] })),
]

export default function PracticeSection({ chapterId, progress, onAnswer }) {
  const [filter, setFilter] = useState('all')
  const questions = questionsForChapter(chapterId)

  if (!questions.length) return null

  const visible = questions.filter(
    (q) => filter === 'all' || q.difficulty === filter,
  )
  const masteredCount = questions.filter(
    (q) => progress[q.id]?.correct,
  ).length

  return (
    <section className="practice" aria-label="章节练习">
      <header className="practice__head">
        <div>
          <h2 className="practice__title">章节练习</h2>
          <p className="practice__desc">
            已掌握 {masteredCount}/{questions.length} 题 · 判定结果进入复习队列
          </p>
        </div>
        <div className="practice__filters" role="tablist" aria-label="难度筛选">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={`practice__filter${
                filter === f.key ? ' practice__filter--active' : ''
              }`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>
      <div className="practice__list">
        {visible.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            result={progress[question.id]}
            onAnswer={(isCorrect) => onAnswer(question, isCorrect)}
          />
        ))}
      </div>
    </section>
  )
}
