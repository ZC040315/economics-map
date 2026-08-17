import { useMemo } from 'react'
import { curriculum, flattenChapters } from '../data/chapters'
import { chapterMastery, dueCards } from '../lib/progress'
import { overallSkillPercent } from '../lib/skill-progress'

function lastChapterId() {
  try {
    return localStorage.getItem('economics-map:v1:last-chapter') || 'micro-01'
  } catch {
    return 'micro-01'
  }
}

export default function HomePage({ progress, dueCount }) {
  const allChapters = useMemo(() => flattenChapters(curriculum), [])
  const lastId = lastChapterId()
  const lastChapter =
    allChapters.find((c) => c.id === lastId) ?? allChapters[0]

  const totalCards = allChapters.reduce((sum, c) => sum + c.cards.length, 0)
  const masteredCards = allChapters.reduce(
    (sum, c) => sum + c.cards.filter((card) => progress[card.id]?.correct).length,
    0,
  )
  const totalPercent = totalCards
    ? Math.round((masteredCards / totalCards) * 100)
    : 0
  const skillPercent = overallSkillPercent(progress)

  const weakChapters = allChapters
    .filter((c) => c.cards.length > 0)
    .map((c) => ({ ...c, mastery: chapterMastery(c.cards, progress) }))
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 3)

  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">经济学原理 · 学习与复习</p>
        <h1 className="home__title">
          系统学习经济学原理，
          <br />
          先回忆、后验证、按记忆曲线复习
        </h1>
        <p className="home__sub">
          从曼昆《经济学原理》出发，用知识地图串联 18 个章节与核心知识点——
          卡片回忆、分层题库、短视频讲解、间隔重复，一整套闭环。
        </p>
        <div className="home__actions">
          <a className="btn btn--primary" href={`#/chapter/${lastChapter.id}`}>
            继续学习 · {lastChapter.title}
          </a>
          <a className="btn btn--ghost" href="#/map">
            浏览知识地图
          </a>
          <a className="btn btn--ghost" href="#/review">
            {dueCount > 0 ? `开始复习（${dueCount} 张到期）` : '快速复习'}
          </a>
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-head">
          <h2 className="home__h2">学习进度</h2>
        </div>
        <div className="home__stats">
          <div className="home__stat-card">
            <span className="home__stat-value">{totalPercent}%</span>
            <span className="home__stat-label">知识点掌握</span>
            <div className="home__bar">
              <span style={{ width: `${totalPercent}%` }} />
            </div>
          </div>
          <div className="home__stat-card">
            <span className="home__stat-value">{skillPercent}%</span>
            <span className="home__stat-label">现实能力</span>
            <div className="home__bar">
              <span style={{ width: `${skillPercent}%` }} />
            </div>
          </div>
          <div className="home__stat-card">
            <span className={`home__stat-value ${dueCount > 0 ? 'home__stat-value--review' : ''}`}>
              {dueCount}
            </span>
            <span className="home__stat-label">今日待复习</span>
            <a className="home__stat-link" href="#/review">
              {dueCount > 0 ? '去复习 →' : '暂无到期'}
            </a>
          </div>
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-head">
          <h2 className="home__h2">知识分类</h2>
          <a className="home__more" href="#/map">
            查看全部 →
          </a>
        </div>
        <div className="home__tracks">
          {curriculum.map((track) => {
            const trackMastery = track.chapters.length
              ? Math.round(
                  track.chapters.reduce(
                    (sum, c) => sum + chapterMastery(c.cards, progress),
                    0,
                  ) / track.chapters.length,
                )
              : 0
            return (
              <a key={track.id} className="home__track" href="#/map">
                <div className="home__track-top">
                  <h3>{track.title}</h3>
                  <span>{track.chapters.length} 章</span>
                </div>
                <p>{track.description}</p>
                <div className="home__bar">
                  <span style={{ width: `${trackMastery}%` }} />
                </div>
                <span className="home__track-mastery">{trackMastery}% 掌握</span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-head">
          <h2 className="home__h2">薄弱知识点</h2>
          <span className="home__more">掌握度最低的章节，优先复习</span>
        </div>
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
