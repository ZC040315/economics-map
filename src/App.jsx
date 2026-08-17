import { useMemo, useState } from 'react'
import { curriculum, flattenChapters } from './data/chapters'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import MapTree from './components/MapTree'
import ChapterDetail from './components/ChapterDetail'
import KnowledgeMap from './components/KnowledgeMap'
import KnowledgePage from './components/KnowledgePage'
import ReviewBanner from './components/ReviewBanner'
import ReviewSession from './components/ReviewSession'
import ReviewHome from './components/ReviewHome'
import TestCenter from './components/TestCenter'
import TestSession from './components/TestSession'
import AchievementsPanel from './components/AchievementsPanel'
import AchievementToast from './components/AchievementToast'
import SkillsSection from './components/SkillsSection'
import useProgress from './hooks/useProgress'
import useGame from './hooks/useGame'
import useTheme from './hooks/useTheme'
import useHashRoute, { parseHash } from './hooks/useHashRoute'
import { dueCards } from './lib/progress'
import { chapterQuiz, weeklyQuiz } from './lib/quiz-builder'
import { saveTestResult } from './lib/test-history'

function rememberChapter(chapterId) {
  try {
    localStorage.setItem('economics-map:v1:last-chapter', chapterId)
  } catch {
    // ignore
  }
}

export default function App() {
  const [reviewQueue, setReviewQueue] = useState(null)
  const [testSession, setTestSession] = useState(null)
  const [toasts, setToasts] = useState([])
  const { progress, record } = useProgress()
  const { game, recordAnswer, completeSession, earnXp } = useGame()
  const { theme, toggle } = useTheme()
  const { route, navigate } = useHashRoute()

  const allChapters = useMemo(() => flattenChapters(curriculum), [])
  const selected =
    allChapters.find((c) => c.id === route.params.id) ?? allChapters[0]

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
    navigate('/review')
  }

  const selectChapter = (id) => {
    rememberChapter(id)
    navigate(`/chapter/${id}`)
  }

  const startChapterTest = (chapterId) => {
    setTestSession({
      type: 'chapter',
      chapterId,
      chapterTitle: allChapters.find((c) => c.id === chapterId)?.title,
      questions: chapterQuiz(chapterId),
    })
    navigate(`/test/chapter/${chapterId}`)
  }

  const startWeeklyTest = () => {
    setTestSession({
      type: 'weekly',
      chapterTitle: '周测 · 综合卷',
      questions: weeklyQuiz(),
    })
    navigate('/test/weekly')
  }

  const finishTest = (answers) => {
    if (!testSession) return
    saveTestResult({
      type: testSession.type,
      chapterTitle: testSession.chapterTitle,
      total: answers.length,
      correct: answers.filter((a) => a.correct).length,
    })
  }

  const exitTest = () => {
    setTestSession(null)
    navigate('/test')
  }

  const isKnowledgeView = route.name === 'knowledge'

  return (
    <div className="app">
      <NavBar
        route={route}
        progress={progress}
        dueCount={dueQueue.length}
        game={game}
        theme={theme}
        onToggleTheme={toggle}
      />

      {route.name === 'home' && (
        <HomePage progress={progress} dueCount={dueQueue.length} />
      )}

      {route.name === 'skills' && (
        <main className="container page-skills">
          <SkillsSection
            progress={progress}
            onAnswer={handleQuestionAnswer}
            onEarnXp={earnXp}
          />
        </main>
      )}

      {route.name === 'test' && (
        <main className="container page-skills">
          <TestCenter
            progress={progress}
            onReanswer={handleAnswer}
            onStartChapter={startChapterTest}
            onStartWeekly={startWeeklyTest}
          />
        </main>
      )}

      {(route.name === 'test-chapter' || route.name === 'test-weekly') && (
        <main className="container page-skills">
          {testSession ? (
            <TestSession
              title={testSession.chapterTitle}
              questions={testSession.questions}
              onAnswer={handleAnswer}
              onFinish={finishTest}
              onExit={exitTest}
            />
          ) : (
            <div className="empty-state">
              <p>请从测试中心开始。</p>
            </div>
          )}
        </main>
      )}

      {(route.name === 'map' ||
        route.name === 'chapter' ||
        route.name === 'review' ||
        route.name === 'knowledge') && (
        <main className="layout">
          <aside className="map-panel">
            <ReviewBanner dueCount={dueQueue.length} onStart={startReview} />
            {curriculum.map((track) => (
              <MapTree
                key={track.id}
                track={track}
                selectedId={selected.id}
                progress={progress}
                onSelect={selectChapter}
              />
            ))}
            <AchievementsPanel game={game} />
          </aside>

          <section className="detail-panel">
            {reviewQueue ? (
              <ReviewSession
                queue={reviewQueue}
                onAnswer={handleAnswer}
                onFinish={finishReview}
              />
            ) : route.name === 'review' ? (
              <ReviewHome
                dueCount={dueQueue.length}
                progress={progress}
                onStart={startReview}
              />
            ) : isKnowledgeView ? (
              <KnowledgePage
                id={route.params.id}
                progress={progress}
                onAnswer={handleAnswer}
              />
            ) : route.name === 'map' ? (
              <KnowledgeMap progress={progress} />
            ) : (
              <ChapterDetail
                chapter={selected}
                progress={progress}
                onAnswer={handleAnswer}
                onQuestionAnswer={handleQuestionAnswer}
              />
            )}
          </section>
        </main>
      )}

      <AchievementToast unlockedIds={toasts} />
      <MobileNav route={route} />
    </div>
  )
}

function MobileNav({ route }) {
  const items = [
    { path: '/', label: '首页', icon: '⌂' },
    { path: '/map', label: '地图', icon: '◈' },
    { path: '/review', label: '复习', icon: '↻' },
    { path: '/skills', label: '能力', icon: '✦' },
    { path: '/test', label: '测试', icon: '✎' },
  ]
  return (
    <nav className="mobile-nav" aria-label="移动端导航">
      {items.map((item) => {
        const r = parseHash(item.path)
        return (
          <a
            key={item.path}
            href={`#${item.path}`}
            className={`mobile-nav__item${
              r.name === route.name ? ' mobile-nav__item--active' : ''
            }`}
          >
            <span className="mobile-nav__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="mobile-nav__label">{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
