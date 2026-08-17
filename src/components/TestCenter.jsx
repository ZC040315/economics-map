import { useState } from 'react'
import { curriculum, flattenChapters } from '../data/chapters'
import { loadTestHistory } from '../lib/test-history'
import MistakeList from './MistakeList'
import WeakKnowledgeTable from './WeakKnowledgeTable'

export default function TestCenter({ progress, onReanswer, onStartChapter, onStartWeekly }) {
  const [chapterId, setChapterId] = useState('micro-01')
  const chapters = flattenChapters(curriculum)
  const history = loadTestHistory()
  const recent = history.slice(0, 6)

  return (
    <div className="test-center">
      <section className="test-center__hero">
        <h1 className="test-center__title">测试中心</h1>
        <p className="test-center__desc">
          章节测试检验单章掌握，周测检验综合水平；错题与薄弱知识点自动收集，方便针对性复习。
        </p>
      </section>

      <div className="test-center__grid">
        <section className="test-card">
          <h2 className="test-card__title">章节测试</h2>
          <p className="test-card__desc">从所选章节抽 10 题，检验单章掌握。</p>
          <label className="test-card__select">
            <span>选择章节</span>
            <select value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
              {chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onStartChapter(chapterId)}
          >
            开始章节测试
          </button>
        </section>

        <section className="test-card">
          <h2 className="test-card__title">周测 · 综合卷</h2>
          <p className="test-card__desc">
            20 题，微观 + 宏观混合，含金融考证风格考点，检验综合水平。
          </p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={onStartWeekly}
          >
            开始周测
          </button>
        </section>

        {recent.length > 0 && (
          <section className="test-card test-card--history">
            <h2 className="test-card__title">最近成绩</h2>
            <ul className="test-history">
              {recent.map((entry) => (
                <li key={entry.ts} className="test-history__item">
                  <span className="test-history__name">
                    {entry.type === 'weekly' ? '周测' : entry.chapterTitle}
                  </span>
                  <span className="test-history__score">
                    {entry.correct}/{entry.total} ·{' '}
                    {Math.round((entry.correct / entry.total) * 100)}%
                  </span>
                  <span className="test-history__date">
                    {new Date(entry.ts).toLocaleDateString('zh-CN')}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <section className="test-center__block">
        <h2 className="test-center__h2">错题集</h2>
        <p className="test-center__hint">最近一次答错的题会自动收集；重做答对即视为已订正。</p>
        <MistakeList progress={progress} onReanswer={onReanswer} />
      </section>

      <section className="test-center__block">
        <h2 className="test-center__h2">错误知识点收集表</h2>
        <p className="test-center__hint">答过但未掌握的知识点，点击可跳转详情复习。</p>
        <WeakKnowledgeTable progress={progress} />
      </section>
    </div>
  )
}
