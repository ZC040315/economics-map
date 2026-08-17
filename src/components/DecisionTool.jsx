import { useState } from 'react'
import {
  DECISION_XP,
  addDecision,
  loadDecisions,
  removeDecision,
  saveDecisions,
} from '../lib/decisions'

function DecisionForm({ onSaved }) {
  const [title, setTitle] = useState('')
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [loss, setLoss] = useState('')
  const [counter, setCounter] = useState('')

  const canSubmit = title.trim() && loss.trim() && counter.trim()

  const handleSubmit = () => {
    if (!canSubmit) return
    const decisions = addDecision(loadDecisions(), {
      title,
      optionA,
      optionB,
      loss,
      counter,
    })
    saveDecisions(decisions)
    setTitle('')
    setOptionA('')
    setOptionB('')
    setLoss('')
    setCounter('')
    onSaved()
  }

  return (
    <div className="decision-form">
      <h3 className="decision-form__title">写下你的决策</h3>
      <label className="decision-form__field">
        <span className="decision-form__label">决策是什么</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="例如：要不要花 2000 元报销售课？"
        />
      </label>
      <div className="decision-form__row">
        <label className="decision-form__field">
          <span className="decision-form__label">选项 A（你倾向的选择）</span>
          <input
            type="text"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            placeholder="例如：报课"
          />
        </label>
        <label className="decision-form__field">
          <span className="decision-form__label">选项 B（另一条路）</span>
          <input
            type="text"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            placeholder="例如：自学 + 实战"
          />
        </label>
      </div>
      <label className="decision-form__field">
        <span className="decision-form__label">
          第一句：「选A我失去了什么」（机会成本）
        </span>
        <textarea
          value={loss}
          onChange={(e) => setLoss(e.target.value)}
          rows={2}
          placeholder="不只是钱——还有时间、精力、别的机会、关系……"
        />
        <span className="decision-form__hint">
          提示：机会成本 = 你为选 A 放弃的最好的那个替代选择。写下它，你才知道选 A 到底值不值。
        </span>
      </label>
      <label className="decision-form__field">
        <span className="decision-form__label">
          第二句：「选B的话别人会怎么反击我」（换位思考）
        </span>
        <textarea
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          rows={2}
          placeholder="如果你是对方/对手，会怎么反驳这个选择？"
        />
        <span className="decision-form__hint">
          提示：站在「别人」的立场反驳自己——这能暴露你没想过的漏洞，正是你自己和自己辩论的习惯。
        </span>
      </label>
      <button
        type="button"
        className="decision-form__submit"
        disabled={!canSubmit}
        onClick={handleSubmit}
      >
        记下这个决策（+{DECISION_XP} XP）
      </button>
    </div>
  )
}

function DecisionLog({ decisions, onRemove }) {
  if (!decisions.length) {
    return (
      <div className="decision-log__empty">
        <p>还没有决策记录。下次做重要选择前，先来这里写两句话。</p>
      </div>
    )
  }

  return (
    <div className="decision-log">
      <h3 className="decision-form__title">决策日志（{decisions.length}）</h3>
      <ul className="decision-log__list">
        {decisions.map((d) => (
          <li key={d.id} className="decision-log__item">
            <div className="decision-log__head">
              <span className="decision-log__title">{d.title}</span>
              <span className="decision-log__date">
                {new Date(d.ts).toLocaleDateString('zh-CN')}
              </span>
              <button
                type="button"
                className="decision-log__remove"
                onClick={() => onRemove(d.id)}
                aria-label="删除这条决策"
              >
                删除
              </button>
            </div>
            {(d.optionA || d.optionB) && (
              <p className="decision-log__options">
                A：{d.optionA || '—'} ｜ B：{d.optionB || '—'}
              </p>
            )}
            <p className="decision-log__line">
              <strong>选A我失去了什么：</strong>
              {d.loss}
            </p>
            <p className="decision-log__line">
              <strong>选B别人会怎么反击我：</strong>
              {d.counter}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DecisionTool({ onEarnXp }) {
  const [decisions, setDecisions] = useState(loadDecisions)
  const [justSaved, setJustSaved] = useState(false)

  const refresh = () => setDecisions(loadDecisions())

  const handleSaved = () => {
    refresh()
    onEarnXp(DECISION_XP)
    setJustSaved(true)
    window.setTimeout(() => setJustSaved(false), 3000)
  }

  const handleRemove = (id) => {
    const next = removeDecision(decisions, id)
    saveDecisions(next)
    setDecisions(next)
  }

  return (
    <section className="decision-tool" aria-label="决策必做动作工具">
      <header className="decision-tool__head">
        <div>
          <h2 className="practice__title">决策必做动作</h2>
          <p className="practice__desc">
            重要选择前，强迫自己写下两句话——看清机会成本，再站到对手那边反驳自己
          </p>
        </div>
        {justSaved && <span className="decision-tool__saved">已记下 +{DECISION_XP} XP</span>}
      </header>
      <DecisionForm onSaved={handleSaved} />
      <DecisionLog decisions={decisions} onRemove={handleRemove} />
    </section>
  )
}
