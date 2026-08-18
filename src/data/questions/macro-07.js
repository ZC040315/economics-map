// 财政与货币政策 · 分层题库

export default [
  {
    "id": "macro-07-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "政府增加支出属于？",
    "options": [
      "扩张性财政政策",
      "紧缩性财政政策",
      "供给政策",
      "货币政策"
    ],
    "answer": 0,
    "explanation": "增支直接扩大总需求，是扩张性财政政策。"
  },
  {
    "id": "macro-07-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "央行降低利率属于？",
    "options": [
      "紧缩货币政策",
      "宽松货币政策",
      "贸易政策",
      "财政政策"
    ],
    "answer": 1,
    "explanation": "降息降低借贷成本、刺激总需求，是宽松货币政策。"
  },
  {
    "id": "macro-07-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "乘数 = 1÷(1−MPC)，若 MPC=0.8，乘数是？",
    "options": [
      "8",
      "0.8",
      "1.25",
      "5"
    ],
    "answer": 3,
    "explanation": "1 ÷（1−0.8）= 5：初始支出放大 5 倍。"
  },
  {
    "id": "macro-07-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：挤出效应指政府借债抬高利率、减少私人投资。",
    "answer": true,
    "explanation": "政府发债推高利率，私人借贷成本上升、投资被挤出。"
  },
  {
    "id": "macro-07-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "衰退且利率已接近零时，更依赖哪类政策？",
    "options": [
      "供给政策",
      "财政政策（或非常规货币宽松）",
      "货币政策",
      "都无效"
    ],
    "answer": 1,
    "explanation": "利率近零时传统降息空间小，需财政扩张或量化宽松。"
  },
  {
    "id": "macro-07-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "自动稳定器包括？",
    "options": [
      "基建项目",
      "累进税与失业救济",
      "央行加息",
      "相机抉择法案"
    ],
    "answer": 1,
    "explanation": "累进税、失业救济随经济自动变动（衰退时自动减税增补），无需立法，是自动稳定器。"
  },
  {
    "id": "macro-07-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：充分就业时财政扩张几乎全部被挤出，对产出无效。",
    "answer": true,
    "explanation": "资源已满负荷，政府多花就挤走私人支出，产出难增、只有利率与价格变化。"
  },
  {
    "id": "macro-07-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么说政策存在「时滞」，后果是什么？",
    "hint": "认识、决策、生效。",
    "reference": "认识时滞（数据确认衰退慢）、决策时滞（立法周期长）、生效时滞（传导需时间）。时滞过长会让刺激政策在复苏后才落地，导致过热——所以自动稳定器有优势。"
  },
  {
    "id": "macro-07-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "「李嘉图等价」认为？",
    "options": [
      "理性人预见到未来增税，当期消费不增加",
      "货币无关",
      "减税永久增加消费",
      "政府债务无成本"
    ],
    "answer": 0,
    "explanation": "李嘉图等价：理性人预期减税靠未来增税偿还，当期消费不变——财政乘数被削弱（有争议）。"
  },
  {
    "id": "macro-07-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：比较衰退期「财政刺激」与「货币宽松」的传导机制。",
    "hint": "一个是直接支出，一个是降利率。",
    "reference": "财政刺激直接增加政府购买或减税（AD 直接右移，受乘数放大但可能被挤出）；货币宽松通过降利率、信贷渠道间接刺激投资与消费（传导慢、依赖利率敏感度）。衰退深、利率低时财政更直接。"
  },
  {
    "id": "macro-07-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "supply-demand",
    "imageCaption": "扩张政策使 AD 右移",
    "prompt": "图片题：衰退期 AD 左移，扩张政策让 AD？",
    "options": [
      "右移回接近潜在产出",
      "不变",
      "变为垂直",
      "继续左移"
    ],
    "answer": 0,
    "explanation": "扩张政策（增支/降息）把左移的 AD 推回，产出回升接近潜在水平。"
  },
  {
    "id": "macro-07-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "supply-demand",
    "imageCaption": "政策的两难",
    "prompt": "图片题：滞胀（SRAS 左移）时扩张政策为何会加剧通胀？",
    "hint": "AD 右移对供给冲击。",
    "reference": "滞胀源于供给收缩：扩张政策把 AD 右移，产出回升一点但物价大幅上升（沿左移的 SRAS 上移）——政策在「接受衰退」与「接受更高通胀」间两难。"
  },
  {
    "id": "macro-07-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：政策分类",
      "columns": [
        "政策",
        "类型"
      ],
      "rows": [
        [
          "降息",
          "货币宽松"
        ],
        [
          "增加基建支出",
          "财政扩张"
        ],
        [
          "提高准备金率",
          "货币紧缩"
        ],
        [
          "减税",
          "财政扩张"
        ]
      ]
    },
    "prompt": "报表题：提高准备金率属于？",
    "options": [
      "财政扩张",
      "货币紧缩",
      "供给政策",
      "财政紧缩"
    ],
    "answer": 1,
    "explanation": "提高准备金率减少货币供给，是紧缩性货币政策。"
  },
  {
    "id": "macro-07-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：乘数计算",
      "columns": [
        "MPC",
        "乘数"
      ],
      "rows": [
        [
          "0.5",
          "2"
        ],
        [
          "0.75",
          "4"
        ],
        [
          "0.9",
          "10"
        ]
      ]
    },
    "prompt": "报表题：MPC=0.9 时政府花 100 亿，总需求最大增加？",
    "options": [
      "100 亿",
      "900 亿",
      "10 亿",
      "1000 亿"
    ],
    "answer": 3,
    "explanation": "乘数 10 × 100 亿 = 1000 亿（假设无漏出）。"
  },
  {
    "id": "macro-07-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：财政扩张的效果",
      "columns": [
        "状态",
        "政府增支",
        "利率",
        "私人投资",
        "净效果"
      ],
      "rows": [
        [
          "衰退（闲置资源）",
          "100 亿",
          "微升",
          "略降",
          "产出明显增加"
        ],
        [
          "充分就业",
          "100 亿",
          "上升",
          "大幅下降",
          "产出几乎不变"
        ]
      ]
    },
    "prompt": "报表题：为什么充分就业时财政扩张几乎无效？",
    "options": [
      "利率不变",
      "政府不会花钱",
      "乘数为零",
      "挤出效应强，私人投资大幅下降"
    ],
    "answer": 3,
    "explanation": "资源已满，政府多花挤走私人投资，总产出难增。"
  },
  {
    "id": "macro-07-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：政策工具对比",
      "columns": [
        "工具",
        "生效速度",
        "直接性",
        "副作用"
      ],
      "rows": [
        [
          "财政支出",
          "较慢（立法+执行）",
          "直接",
          "赤字、挤出"
        ],
        [
          "货币政策",
          "较快决策",
          "间接（利率传导）",
          "时滞、资产泡沫"
        ]
      ]
    },
    "prompt": "报表题：比较财政与货币政策的优势与局限。",
    "hint": "速度、直接性、副作用。",
    "reference": "财政直接作用于 AD 但立法慢、有赤字与挤出风险；货币决策快但传导间接、存在时滞与资产泡沫风险。实践中常配合使用，并依赖自动稳定器平滑。"
  },
  {
    "id": "macro-07-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：时滞分析",
      "columns": [
        "时滞",
        "内容",
        "典型长度"
      ],
      "rows": [
        [
          "认识时滞",
          "数据确认衰退",
          "数月"
        ],
        [
          "决策时滞",
          "立法通过",
          "数月到数年"
        ],
        [
          "生效时滞",
          "政策传导到经济",
          "数月"
        ]
      ]
    },
    "prompt": "报表题：为什么「时滞长」的财政政策可能适得其反？举例。",
    "hint": "经济可能已复苏。",
    "reference": "若立法耗时过长，刺激法案落地时经济已自行复苏，额外需求导致过热与通胀——这就是为什么经济学家偏好自动稳定器与前瞻性规则，而不是频繁相机抉择。"
  }
]
