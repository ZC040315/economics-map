import { useState } from 'react'
import LifeSkillCard from './LifeSkillCard'
import DecisionTool from './DecisionTool'
import SkillMap from './SkillMap'
import ArenaSection from './ArenaSection'
import { SKILLS, lifeSkillsFor } from '../data/life-skills'

export default function SkillsSection({ progress, onAnswer, onEarnXp }) {
  const [tab, setTab] = useState('scenarios')
  const [activeSkill, setActiveSkill] = useState('consumer')
  const cards = lifeSkillsFor(activeSkill)
  const masteredCount = cards.filter((c) => progress[c.id]?.correct).length
  const allMastered = lifeSkillsFor('consumer')
    .concat(
      lifeSkillsFor('time'),
      lifeSkillsFor('business'),
      lifeSkillsFor('investment'),
      lifeSkillsFor('interpersonal'),
    )
    .filter((c) => progress[c.id]?.correct).length

  return (
    <section className="practice skills-section" aria-label="现实决策场景库">
      <div className="skills-tabs" role="tablist" aria-label="现实能力工具">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'scenarios'}
          className={`skills-tabs__tab${
            tab === 'scenarios' ? ' skills-tabs__tab--active' : ''
          }`}
          onClick={() => setTab('scenarios')}
        >
          场景卡学习
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'decisions'}
          className={`skills-tabs__tab${
            tab === 'decisions' ? ' skills-tabs__tab--active' : ''
          }`}
          onClick={() => setTab('decisions')}
        >
          决策必做动作
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'arenas'}
          className={`skills-tabs__tab${
            tab === 'arenas' ? ' skills-tabs__tab--active' : ''
          }`}
          onClick={() => setTab('arenas')}
        >
          反击擂台
        </button>
      </div>
      {tab === 'arenas' ? (
        <ArenaSection progress={progress} onAnswer={onAnswer} />
      ) : tab === 'decisions' ? (
        <DecisionTool onEarnXp={onEarnXp} />
      ) : (
        <>
      <SkillMap progress={progress} />
      <header className="practice__head">
        <div>
          <h2 className="practice__title">现实决策场景库</h2>
          <p className="practice__desc">
            已掌握 {allMastered}/30 条 · 每条场景卡进入复习队列
          </p>
        </div>
        <div className="practice__filters" role="tablist" aria-label="能力分类">
          {SKILLS.map((skill) => (
            <button
              key={skill.id}
              type="button"
              role="tab"
              aria-selected={activeSkill === skill.id}
              className={`practice__filter${
                activeSkill === skill.id ? ' practice__filter--active' : ''
              }`}
              onClick={() => setActiveSkill(skill.id)}
              title={skill.desc}
            >
              {skill.icon} {skill.title}
            </button>
          ))}
        </div>
      </header>
      <p className="skills-section__desc">
        {SKILLS.find((s) => s.id === activeSkill)?.desc}
      </p>
      <div className="practice__list">
        {cards.map((card, index) => (
          <LifeSkillCard
            key={card.id}
            card={card}
            index={index}
            result={progress[card.id]}
            onAnswer={onAnswer}
          />
        ))}
      </div>
        </>
      )}
    </section>
  )
}
