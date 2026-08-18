// 分层题库：基础 / 进阶 / 重点疑难
// 题型：choice（选择题）、truefalse（判断题）、essay（问答题）
// 题目带 image 字段即为图片分析题（SVG 图表）
import micro01 from './micro-01.js'
import micro02 from './micro-02.js'
import micro03 from './micro-03.js'
import micro04 from './micro-04.js'
import micro05 from './micro-05.js'
import micro06 from './micro-06.js'
import micro07 from './micro-07.js'
import micro08 from './micro-08.js'
import micro09 from './micro-09.js'
import micro10 from './micro-10.js'
import micro11 from './micro-11.js'
import macro01 from './macro-01.js'
import macro02 from './macro-02.js'
import macro03 from './macro-03.js'
import macro04 from './macro-04.js'
import macro05 from './macro-05.js'
import macro06 from './macro-06.js'
import macro07 from './macro-07.js'

export const questionBanks = [
  { chapterId: 'micro-01', questions: micro01 },
  { chapterId: 'micro-02', questions: micro02 },
  { chapterId: 'micro-03', questions: micro03 },
  { chapterId: 'micro-04', questions: micro04 },
  { chapterId: 'micro-05', questions: micro05 },
  { chapterId: 'micro-06', questions: micro06 },
  { chapterId: 'micro-07', questions: micro07 },
  { chapterId: 'micro-08', questions: micro08 },
  { chapterId: 'micro-09', questions: micro09 },
  { chapterId: 'micro-10', questions: micro10 },
  { chapterId: 'micro-11', questions: micro11 },
  { chapterId: 'macro-01', questions: macro01 },
  { chapterId: 'macro-02', questions: macro02 },
  { chapterId: 'macro-03', questions: macro03 },
  { chapterId: 'macro-04', questions: macro04 },
  { chapterId: 'macro-05', questions: macro05 },
  { chapterId: 'macro-06', questions: macro06 },
  { chapterId: 'macro-07', questions: macro07 },
]

export const DIFFICULTY_LABELS = {
  basic: '基础题',
  advanced: '进阶题',
  challenge: '重点疑难题',
}

export const DIFFICULTY_ORDER = ['basic', 'advanced', 'challenge']

export function questionsForChapter(chapterId) {
  const bank = questionBanks.find((b) => b.chapterId === chapterId)
  return bank ? bank.questions : []
}

export function difficultyOf(questionId) {
  for (const bank of questionBanks) {
    const q = bank.questions.find((item) => item.id === questionId)
    if (q) return q.difficulty
  }
  return undefined
}
