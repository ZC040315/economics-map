import { useMemo, useState } from 'react'
import { curriculum, flattenChapters } from './data/chapters'
import Header from './components/Header'
import MapTree from './components/MapTree'
import ChapterDetail from './components/ChapterDetail'
import ReviewBanner from './components/ReviewBanner'
import ReviewSession from './components/ReviewSession'
import AchievementsPanel from './components/AchievementsPanel'
import AchievementToast from './components/AchievementToast'
import SkillsSection from './components/SkillsSection'
import useProgress from './hooks/useProgress'
import useGame from './hooks/useGame'
import { dueCards } from './lib/progress'

export default function App() {
  const [selectedId, setSelectedId] = useState('micro-01')
  const [reviewQueue, setReviewQueue] = useState(null)
  const [view, setView] = useState('map')
  const [toasts, setToasts] = useState([])
  const { progress, record } = useProgress()
  const { game, recordAnswer, completeSession } = useGame()
  const selected =
    flattenChapters(curriculum).find((c) => c.id === selectedId) ?? null

  const allChapters = useMemo(() => flattenChapters(curriculum), [])
  const dueQueue = useMemo(() => {
    const cardsWithChapter = allChapters.flatMap((chapter) =>
      chapter.cards.map((card) => ({ card, chapterTitle: chapter.title })),
    )
    return dueCards(cardsWithChapter, progress)
  }, [allChapters, progress])

  const startReview = () => setReviewQueue(dueQueue)
  const showToasts = (ids) => {
    if (!ids.length) return
    setToasts(ids)
    window.setTimeout(() => setToasts([]), 5000)
  }
  const handleAnswer = (cardId, isCorrect) => {
    record(cardId, isCorrect)
    showToasts(recordAnswer(progress, cardId, isCorrect, allChapters))
  }
  const handleQuestionAnswer = (question, isCorrect) => {
    record(question.id, isCorrect)
    showToasts(
      recordAnswer(
        progress,
        question.id,
        isCorrect,
        allChapters,
        question.difficulty,
      ),
    )
  }
  const finishReview = () => {
    showToasts(completeSession(allChapters))
    setReviewQueue(null)
  }

  return (
    <div className="app">
      <Header progress={progress} dueCount={dueQueue.length} game={game} />
      <main className="layout">
        <aside className="map-panel">
          <button
            type="button"
            className={`view-switch${view === 'skills' ? ' view-switch--active' : ''}`}
            onClick={() => setView(view === 'skills' ? 'map' : 'skills')}
          >
            {view === 'skills' ? '← 返回知识地图' : '现实决策场景库 →'}
          </button>
          <ReviewBanner dueCount={dueQueue.length} onStart={startReview} />
          {view === 'map' && (
            <>
              {curriculum.map((track) => (
                <MapTree
                  key={track.id}
                  track={track}
                  selectedId={selectedId}
                  progress={progress}
                  onSelect={setSelectedId}
                />
              ))}
              <AchievementsPanel game={game} />
            </>
          )}
        </aside>
        <section className="detail-panel">
          {reviewQueue ? (
            <ReviewSession
              queue={reviewQueue}
              onAnswer={handleAnswer}
              onFinish={finishReview}
            />
          ) : selected ? (
            view === 'skills' ? (
              <SkillsSection
                progress={progress}
                onAnswer={handleQuestionAnswer}
              />
            ) : (
              <ChapterDetail
                chapter={selected}
                progress={progress}
                onAnswer={handleAnswer}
                onQuestionAnswer={handleQuestionAnswer}
              />
            )
          ) : (
            <div className="empty-state">
              <p>点击左侧章节，开始回忆。</p>
            </div>
          )}
        </section>
      </main>
      <AchievementToast unlockedIds={toasts} />
    </div>
  )
}
