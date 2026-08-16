import { useMemo, useState } from 'react'
import { curriculum, flattenChapters } from './data/chapters'
import Header from './components/Header'
import MapTree from './components/MapTree'
import ChapterDetail from './components/ChapterDetail'
import ReviewBanner from './components/ReviewBanner'
import ReviewSession from './components/ReviewSession'
import useProgress from './hooks/useProgress'
import { dueCards } from './lib/progress'

export default function App() {
  const [selectedId, setSelectedId] = useState('micro-01')
  const [reviewQueue, setReviewQueue] = useState(null)
  const { progress, record } = useProgress()
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
  const finishReview = () => setReviewQueue(null)

  return (
    <div className="app">
      <Header progress={progress} dueCount={dueQueue.length} />
      <main className="layout">
        <aside className="map-panel">
          <ReviewBanner dueCount={dueQueue.length} onStart={startReview} />
          {curriculum.map((track) => (
            <MapTree
              key={track.id}
              track={track}
              selectedId={selectedId}
              progress={progress}
              onSelect={setSelectedId}
            />
          ))}
        </aside>
        <section className="detail-panel">
          {reviewQueue ? (
            <ReviewSession
              queue={reviewQueue}
              onAnswer={record}
              onFinish={finishReview}
            />
          ) : selected ? (
            <ChapterDetail
              chapter={selected}
              progress={progress}
              onAnswer={record}
            />
          ) : (
            <div className="empty-state">
              <p>点击左侧章节，开始回忆。</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
