// 题目源解析：根据 id 找到题目对象，供错题集/测试中心统一使用
import { curriculum } from '../data/chapters'
import { questionBanks } from '../data/questions'
import { weeklyQuestions } from '../data/weekly'

export function resolveQuestion(id) {
  // 1) 回忆卡速测题
  for (const track of curriculum) {
    for (const chapter of track.chapters) {
      const card = chapter.cards.find((c) => c.id === id)
      if (card?.quiz) {
        return {
          id: card.id,
          kind: 'card',
          type: 'choice',
          prompt: card.quiz.question,
          options: card.quiz.options,
          answer: card.quiz.answer,
          explanation: card.quiz.explanation,
          source: chapter.title,
          title: card.title,
        }
      }
    }
  }
  // 2) 题库题
  for (const bank of questionBanks) {
    const q = bank.questions.find((item) => item.id === id)
    if (q && (q.type === 'choice' || (q.type === 'report' && q.answerMode === 'choice'))) {
      const chapter = curriculum
        .flatMap((t) => t.chapters)
        .find((c) => c.id === bank.chapterId)
      return {
        id: q.id,
        kind: 'question',
        type: 'choice',
        prompt: q.prompt,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation,
        source: chapter?.title ?? bank.chapterId,
        title: q.prompt.slice(0, 24),
      }
    }
    if (q?.type === 'truefalse') {
      const chapter = curriculum
        .flatMap((t) => t.chapters)
        .find((c) => c.id === bank.chapterId)
      return {
        id: q.id,
        kind: 'question',
        type: 'truefalse',
        prompt: q.prompt,
        options: ['正确', '错误'],
        answer: q.answer ? 0 : 1,
        explanation: q.explanation,
        source: chapter?.title ?? bank.chapterId,
        title: q.prompt.slice(0, 24),
      }
    }
  }
  // 3) 周测题
  const wq = weeklyQuestions.find((item) => item.id === id)
  if (wq) {
    return {
      id: wq.id,
      kind: 'weekly',
      type: wq.type,
      prompt: wq.prompt,
      options: wq.type === 'choice' ? wq.options : ['正确', '错误'],
      answer: wq.type === 'choice' ? wq.answer : wq.answer ? 0 : 1,
      explanation: wq.explanation,
      source: wq.tag,
      title: wq.prompt.slice(0, 24),
    }
  }
  return null
}
