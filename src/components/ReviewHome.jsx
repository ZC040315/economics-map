import { useMemo } from 'react'
import { curriculum, flattenChapters } from '../data/chapters'
import { chapterMastery } from '../lib/progress'

export default function ReviewHome({ dueCount, progress, onStart }) {
  const weakChapters = useMemo(
    () =>
      flattenChapters(curriculum)
        .filter((c) => c.cards.length > 0)
        .map((c) => ({ ...c, mastery: chapterMastery(c.cards, progress) }))
        .sort((a, b) => a.mastery - b.mastery)
        .slice(0, 4),
    [progress],
  )

  return (
    <div className="review-home">
      <section className="review-empty">
        <h2 className="review-empty__title">
          {dueCount > 0 ? `今日待复习 ${dueCount} 张` : '今日复习已完成'}
        </h2>
        <p className="review-empty__desc">
          {dueCount > 0
            ? '按记忆曲线到期，点击开始逐张复习。'
            : '没有到期的卡片，休息一下，或去练薄弱章节。'}
        </p>
        {dueCount > 0 ? (
          <button type="button" className="btn btn--primary" onClick={onStart}>
            开始复习
          </button>
        ) : (
          <a className="btn btn--ghost" href="#/map">
            去学新知识
          </a>
        )}
      </section>

      <section className="review-home__weak">
        <h3 className="review-home__weak-title">薄弱章节 · 优先复习</h3>
        <div className="home__weak">
          {weakChapters.map((chapter) => (
            <a
              key={chapter.id}
              className="home__weak-item"
              href={`#/chapter/${chapter.id}`}
            >
              <span className="home__weak-title">{chapter.title}</span>
              <span className="home__weak-bar">
                <span style={{ width: `${chapter.mastery}%` }} />
              </span>
              <span className="home__weak-value">{chapter.mastery}%</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
