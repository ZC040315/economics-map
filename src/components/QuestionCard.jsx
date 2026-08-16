import { useState } from 'react'
import Chart from './Chart'
import { DIFFICULTY_LABELS } from '../data/questions'

const OPTION_LABELS = ['A', 'B', 'C', 'D']
const DIFFICULTY_CLASS = {
  basic: 'question-card__difficulty--basic',
  advanced: 'question-card__difficulty--advanced',
  challenge: 'question-card__difficulty--challenge',
}

function ChoiceBody({ question, onAnswer }) {
  const [selected, setSelected] = useState(null)

  const handle = (index) => {
    if (selected !== null) return
    setSelected(index)
    onAnswer(index === question.answer)
  }

  const isCorrect = selected === question.answer

  return (
    <div className="question-card__options">
      {question.options.map((option, index) => {
        const chosen = selected === index
        const isAnswer = index === question.answer
        let className = 'question-card__option'
        if (chosen) {
          className += isAnswer
            ? ' question-card__option--correct'
            : ' question-card__option--wrong'
        } else if (selected !== null && isAnswer) {
          className += ' question-card__option--answer'
        }
        return (
          <button
            key={option}
            type="button"
            className={className}
            disabled={selected !== null}
            onClick={() => handle(index)}
          >
            <span className="question-card__option-label">
              {OPTION_LABELS[index]}
            </span>
            {option}
          </button>
        )
      })}
      {selected !== null && (
        <p
          className={`question-card__feedback ${
            isCorrect
              ? 'question-card__feedback--correct'
              : 'question-card__feedback--wrong'
          }`}
        >
          {isCorrect ? `答对了。${question.explanation}` : `答错了。${question.explanation}`}
        </p>
      )}
    </div>
  )
}

function TrueFalseBody({ question, onAnswer }) {
  const [selected, setSelected] = useState(null)

  const handle = (value) => {
    if (selected !== null) return
    setSelected(value)
    onAnswer(value === question.answer)
  }

  const isCorrect = selected === question.answer

  return (
    <div className="question-card__options question-card__options--tf">
      {[true, false].map((value) => {
        const chosen = selected === value
        const isAnswer = value === question.answer
        let className = 'question-card__option'
        if (chosen) {
          className += isAnswer
            ? ' question-card__option--correct'
            : ' question-card__option--wrong'
        } else if (selected !== null && isAnswer) {
          className += ' question-card__option--answer'
        }
        return (
          <button
            key={String(value)}
            type="button"
            className={className}
            disabled={selected !== null}
            onClick={() => handle(value)}
          >
            <span className="question-card__option-label">
              {value ? '对' : '错'}
            </span>
            {value ? '正确' : '错误'}
          </button>
        )
      })}
      {selected !== null && (
        <p
          className={`question-card__feedback ${
            isCorrect
              ? 'question-card__feedback--correct'
              : 'question-card__feedback--wrong'
          }`}
        >
          {isCorrect ? `判断正确。${question.explanation}` : `判断错误。${question.explanation}`}
        </p>
      )}
    </div>
  )
}

function EssayBody({ question, onAnswer }) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [selfResult, setSelfResult] = useState(null)

  const selfCheck = (remembered) => {
    if (selfResult !== null) return
    setSelfResult(remembered)
    onAnswer(remembered)
  }

  return (
    <div className="question-card__essay">
      {question.hint && (
        <p className="question-card__hint">思考提示：{question.hint}</p>
      )}
      {!showAnswer ? (
        <button
          type="button"
          className="question-card__show-answer"
          onClick={() => setShowAnswer(true)}
        >
          先自己作答，再查看参考答案
        </button>
      ) : (
        <div className="question-card__reference">
          <span className="question-card__reference-label">参考答案</span>
          <p>{question.reference}</p>
        </div>
      )}
      {selfResult === null ? (
        showAnswer && (
          <div className="question-card__selfcheck">
            <span>对照答案后，你觉得？</span>
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
            : '已记入待复习，这道题会进入你的复习队列。'}
        </p>
      )}
    </div>
  )
}

function DataTable({ table }) {
  return (
    <figure className="data-table">
      <figcaption className="data-table__title">{table.title}</figcaption>
      <div className="data-table__wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}

export default function QuestionCard({ question, index, result, onAnswer }) {
  const hasMastered = result?.correct
  const typeLabel =
    question.type === 'choice'
      ? '选择题'
      : question.type === 'truefalse'
        ? '判断题'
        : question.type === 'report'
          ? '报表分析'
          : '问答题'

  return (
    <article className="question-card">
      <header className="question-card__head">
        <span
          className={`question-card__difficulty ${DIFFICULTY_CLASS[question.difficulty]}`}
        >
          {DIFFICULTY_LABELS[question.difficulty]}
        </span>
        <span className="question-card__type">{typeLabel}</span>
        {question.image && <span className="question-card__image-tag">图片分析</span>}
        {question.table && <span className="question-card__image-tag">报表分析</span>}
        {hasMastered && (
          <span className="question-card__done" title="已掌握">
            已掌握
          </span>
        )}
      </header>
      <h3 className="question-card__title">
        <span className="question-card__num">{index + 1}.</span>
        {question.prompt}
      </h3>
      {question.image && (
        <Chart image={question.image} caption={question.imageCaption} />
      )}
      {question.table && <DataTable table={question.table} />}
      {question.type === 'choice' && <ChoiceBody question={question} onAnswer={onAnswer} />}
      {question.type === 'report' && question.answerMode === 'choice' && (
        <ChoiceBody question={question} onAnswer={onAnswer} />
      )}
      {question.type === 'truefalse' && (
        <TrueFalseBody question={question} onAnswer={onAnswer} />
      )}
      {(question.type === 'essay' ||
        (question.type === 'report' && question.answerMode === 'essay')) && (
        <EssayBody question={question} onAnswer={onAnswer} />
      )}
    </article>
  )
}
