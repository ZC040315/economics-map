// 视频库：每章 1 个主视频 + 2 个备用，全部 ≤20 分钟
// 数据经 B站官方 API 验证存在且时长合规（2026-08-16）
export const videos = [
  {
    chapterId: 'micro-01',
    primary: {
      title: '经济学原理 01：经济学的十大基本原理（10 分钟）',
      bvid: 'BV1P2frBuEJe',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1P2frBuEJe?p=1',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1P2frBuEJe&page=1&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '深入浅出经济学：经济学十大原理（6 分钟）',
      bvid: 'BV1H9sDeKEr5',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1H9sDeKEr5',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1H9sDeKEr5&page=1&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '十大经济学原理：贸易让每个人状况变好（12 分钟）',
      bvid: 'BV1n24y137qa',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1n24y137qa',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1n24y137qa&page=1&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'micro-03',
    primary: {
      title: '10分钟速成经济学：供给与需求（10 分钟）',
      bvid: 'BV1NVXnYgEGD',
      page: 3,
      url: 'https://www.bilibili.com/video/BV1NVXnYgEGD?p=3',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1NVXnYgEGD&page=3&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '曼昆《经济学原理》第四章：供给与需求的市场力量（20 分钟）',
      bvid: 'BV1Sx4y1y7zo',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1Sx4y1y7zo',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1Sx4y1y7zo&page=1&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '曼昆配套速览：第四章 供给与需求（5 分钟）',
      bvid: 'BV1uG4y1Y7fo',
      page: 12,
      url: 'https://www.bilibili.com/video/BV1uG4y1Y7fo?p=12',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1uG4y1Y7fo&page=12&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'micro-04',
    primary: {
      title: '中山大学：形形色色的弹性Ⅰ——需求弹性（8 分钟）',
      bvid: 'BV1Tv421k7e7',
      page: 10,
      url: 'https://www.bilibili.com/video/BV1Tv421k7e7?p=10',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1Tv421k7e7&page=10&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '曼昆配套：需求的价格弹性计算（5 分钟）',
      bvid: 'BV1uG4y1Y7fo',
      page: 18,
      url: 'https://www.bilibili.com/video/BV1uG4y1Y7fo?p=18',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1uG4y1Y7fo&page=18&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '中山大学：形形色色的弹性Ⅱ——供给与收入弹性（10 分钟）',
      bvid: 'BV1Tv421k7e7',
      page: 11,
      url: 'https://www.bilibili.com/video/BV1Tv421k7e7?p=11',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1Tv421k7e7&page=11&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'micro-06',
    primary: {
      title: '期末速通：消费者剩余与生产者剩余（6 分钟）',
      bvid: 'BV1JR4y1a7TD',
      page: 12,
      url: 'https://www.bilibili.com/video/BV1JR4y1a7TD?p=12',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1JR4y1a7TD&page=12&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '中山大学：消费者剩余是什么（10 分钟）',
      bvid: 'BV1Tv421k7e7',
      page: 13,
      url: 'https://www.bilibili.com/video/BV1Tv421k7e7?p=13',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1Tv421k7e7&page=13&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '曼昆配套：计算消费者剩余、生产者剩余和总剩余（6 分钟）',
      bvid: 'BV1uG4y1Y7fo',
      page: 29,
      url: 'https://www.bilibili.com/video/BV1uG4y1Y7fo?p=29',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1uG4y1Y7fo&page=29&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'macro-01',
    primary: {
      title: '李扬老师：国内生产总值定义——最终产品（12 分钟）',
      bvid: 'BV1bt4peTErn',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1bt4peTErn',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1bt4peTErn&page=1&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '李扬老师：国民经济核算 / GDP 核算——支出法（9 分钟）',
      bvid: 'BV1TL4ZePEu1',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1TL4ZePEu1',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1TL4ZePEu1&page=1&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '李扬老师：国民收入各种衡量指标的计算（11 分钟）',
      bvid: 'BV1rCtMe9EHs',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1rCtMe9EHs',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1rCtMe9EHs&page=1&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'macro-03',
    primary: {
      title: '10分钟速成经济学：通货膨胀与泡沫（10 分钟）',
      bvid: 'BV1NVXnYgEGD',
      page: 6,
      url: 'https://www.bilibili.com/video/BV1NVXnYgEGD?p=6',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1NVXnYgEGD&page=6&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '通胀，一场隐秘的财富转移（11 分钟）',
      bvid: 'BV1mqtFzNE1x',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1mqtFzNE1x',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1mqtFzNE1x&page=1&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '通货膨胀的成因及其治理（13 分钟）',
      bvid: 'BV1pt4y1R78B',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1pt4y1R78B',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1pt4y1R78B&page=1&high_quality=1&danmaku=0',
    },
  },
  {
    chapterId: 'macro-04',
    primary: {
      title: '李扬老师：失业的原因、周期性/摩擦性/结构性失业（12 分钟）',
      bvid: 'BV1aHTCzkEk8',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1aHTCzkEk8',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1aHTCzkEk8&page=1&high_quality=1&danmaku=0',
    },
    fallback: {
      title: '李扬老师：失业的经济学解释、最低工资与效率工资（18 分钟）',
      bvid: 'BV1e7TCzLEkw',
      page: 1,
      url: 'https://www.bilibili.com/video/BV1e7TCzLEkw',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1e7TCzLEkw&page=1&high_quality=1&danmaku=0',
    },
    fallback2: {
      title: '10分钟速成经济学：劳动市场（11 分钟）',
      bvid: 'BV1NVXnYgEGD',
      page: 22,
      url: 'https://www.bilibili.com/video/BV1NVXnYgEGD?p=22',
      embed: 'https://player.bilibili.com/player.html?bvid=BV1NVXnYgEGD&page=22&high_quality=1&danmaku=0',
    },
  },
]

export function videoForChapter(chapterId) {
  return videos.find((v) => v.chapterId === chapterId) ?? null
}
