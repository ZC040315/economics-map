import PlaceholderCard from './PlaceholderCard'
import RecallCard from './RecallCard'
import VideoSection from './VideoSection'
import PracticeSection from './PracticeSection'
import { chapterMastery } from '../lib/progress'

const CARD_SLOTS = [
  { type: 'definition', title: '一句话定义', hint: '用自己的话解释这个概念' },
  { type: 'example', title: '生活例子', hint: '一个贴近销售 / 现实决策的例子' },
  { type: 'quiz', title: '速测题', hint: '一道选择题，先答再看答案' },
]

export default function ChapterDetail({
  chapter,
  progress,
  onAnswer,
  onQuestionAnswer,
}) {
  const mastery = chapterMastery(chapter.cards, progress)
  const answeredCount = chapter.cards.filter(
    (card) => progress[card.id]?.attempts > 0,
  ).length

  return (
    <article className="chapter-detail">
      <header className="chapter-detail__head">
        <p className="chapter-detail__meta">
          第 {chapter.num} 章 · 掌握度 {mastery}% · 已答 {answeredCount}/
          {chapter.cards.length}
        </p>
        <h1 className="chapter-detail__title">{chapter.title}</h1>
        {chapter.cards.length > 0 ? (
          <p className="chapter-detail__desc">
            先回忆、后看答案——每张卡先只给一句提示，翻开后是一句话定义、生活例子和一道速测题。
          </p>
        ) : (
          <p className="chapter-detail__desc">
            这一章的回忆卡正在准备中——先在心里想一遍，再看答案。
          </p>
        )}
      </header>
      <VideoSection key={chapter.id} chapterId={chapter.id} />
      {chapter.cards.length > 0 ? (
        <div className="chapter-detail__list">
          {chapter.cards.map((card, index) => (
            <RecallCard
              key={card.id}
              card={card}
              index={index}
              result={progress[card.id]}
              onAnswer={onAnswer}
            />
          ))}
        </div>
      ) : (
        <div className="chapter-detail__cards">
          {CARD_SLOTS.map((slot) => (
            <PlaceholderCard key={slot.type} slot={slot} />
          ))}
        </div>
      )}
      <PracticeSection
        chapterId={chapter.id}
        progress={progress}
        onAnswer={onQuestionAnswer}
      />
      <p className="chapter-detail__note">
        答对的速测题与练习题会记入本地，刷新后进度不丢；判定结果统一进入复习队列。
      </p>
    </article>
  )
}
