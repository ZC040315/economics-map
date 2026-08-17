// 组卷：章节测试 / 周测
import { curriculum, flattenChapters } from '../data/chapters'
import { questionBanks } from '../data/questions'
import { weeklyQuestions } from '../data/weekly'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function toChoice(q) {
  if (q.type === 'truefalse') {
    return {
      id: q.id,
      type: 'truefalse',
      prompt: q.prompt,
      options: ['正确', '错误'],
      answer: q.answer ? 0 : 1,
      explanation: q.explanation,
    }
  }
  return {
    id: q.id,
    type: 'choice',
    prompt: q.prompt,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
  }
}

function dedupe(pool) {
  const seen = new Map()
  for (const item of pool) {
    if (!seen.has(item.id)) seen.set(item.id, item)
  }
  return [...seen.values()]
}

export function chapterQuiz(chapterId, count = 10) {
  const chapter = flattenChapters(curriculum).find((c) => c.id === chapterId)
  if (!chapter) return []
  const pool = []
  for (const card of chapter.cards) {
    if (card.quiz) {
      pool.push(
        toChoice({
          id: card.id,
          type: 'choice',
          prompt: card.quiz.question,
          options: card.quiz.options,
          answer: card.quiz.answer,
          explanation: card.quiz.explanation,
        }),
      )
    }
  }
  const bank = questionBanks.find((b) => b.chapterId === chapterId)
  if (bank) {
    for (const q of bank.questions) {
      if (q.type === 'choice' || q.type === 'truefalse') pool.push(toChoice(q))
      if (q.type === 'report' && q.answerMode === 'choice') pool.push(toChoice(q))
    }
  }
  const unique = dedupe(pool)
  return shuffle(unique).slice(0, Math.min(count, unique.length))
}

export function weeklyQuiz(count = 20) {
  const pool = []
  for (const track of curriculum) {
    for (const chapter of track.chapters) {
      for (const card of chapter.cards) {
        if (card.quiz) {
          pool.push(
            toChoice({
              id: card.id,
              type: 'choice',
              prompt: card.quiz.question,
              options: card.quiz.options,
              answer: card.quiz.answer,
              explanation: card.quiz.explanation,
            }),
          )
        }
      }
    }
  }
  for (const bank of questionBanks) {
    for (const q of bank.questions) {
      if (q.type === 'choice' || q.type === 'truefalse') pool.push(toChoice(q))
      if (q.type === 'report' && q.answerMode === 'choice') pool.push(toChoice(q))
    }
  }
  for (const q of weeklyQuestions) {
    pool.push(toChoice(q))
  }
  const unique = dedupe(pool)
  return shuffle(unique).slice(0, Math.min(count, unique.length))
}
