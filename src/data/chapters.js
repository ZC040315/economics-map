// 章节数据：按曼昆《经济学原理》组织（第一版范围，见阶段书「内容地图」）
// status 取值：not-started（未学）/ learning（学习中）/ mastered（已掌握）/ review（待复习）
// cards 在阶段 2 填充：{ kind: 'definition' | 'example' | 'quiz', ... }

import micro01 from './cards/micro-01.js'
import micro03 from './cards/micro-03.js'
import micro04 from './cards/micro-04.js'
import micro06 from './cards/micro-06.js'
import macro01 from './cards/macro-01.js'
import macro03 from './cards/macro-03.js'
import macro04 from './cards/macro-04.js'

export const curriculum = [
  {
    id: 'micro',
    title: '微观经济学',
    description: '从个人与企业的选择出发，理解价格、市场与效率。',
    chapters: [
      { id: 'micro-01', num: 1, title: '经济学十大原理', status: 'not-started', mastery: 0, cards: micro01 },
      { id: 'micro-02', num: 2, title: '像经济学家一样思考', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-03', num: 3, title: '供给与需求', status: 'not-started', mastery: 0, cards: micro03 },
      { id: 'micro-04', num: 4, title: '弹性及其应用', status: 'not-started', mastery: 0, cards: micro04 },
      { id: 'micro-05', num: 5, title: '政府政策：价格控制与税收', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-06', num: 6, title: '市场效率', status: 'not-started', mastery: 0, cards: micro06 },
      { id: 'micro-07', num: 7, title: '外部性', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-08', num: 8, title: '公共物品与公共资源', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-09', num: 9, title: '生产成本', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-10', num: 10, title: '市场结构：竞争', status: 'not-started', mastery: 0, cards: [] },
      { id: 'micro-11', num: 11, title: '市场结构：垄断与寡头', status: 'not-started', mastery: 0, cards: [] },
    ],
  },
  {
    id: 'macro',
    title: '宏观经济学',
    description: '从整体经济的角度，理解增长、通胀、失业与政策。',
    chapters: [
      { id: 'macro-01', num: 1, title: '国民收入核算（GDP）', status: 'not-started', mastery: 0, cards: macro01 },
      { id: 'macro-02', num: 2, title: '消费物价指数（CPI）', status: 'not-started', mastery: 0, cards: [] },
      { id: 'macro-03', num: 3, title: '通货膨胀', status: 'not-started', mastery: 0, cards: macro03 },
      { id: 'macro-04', num: 4, title: '失业', status: 'not-started', mastery: 0, cards: macro04 },
      { id: 'macro-05', num: 5, title: '货币与银行', status: 'not-started', mastery: 0, cards: [] },
      { id: 'macro-06', num: 6, title: '总需求与总供给', status: 'not-started', mastery: 0, cards: [] },
      { id: 'macro-07', num: 7, title: '财政与货币政策', status: 'not-started', mastery: 0, cards: [] },
    ],
  },
]

export function flattenChapters(tracks) {
  return tracks.flatMap((track) =>
    track.chapters.map((chapter) => ({ ...chapter, trackId: track.id })),
  )
}
