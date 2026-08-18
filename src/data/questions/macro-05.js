// 货币与银行 · 分层题库

export default [
  {
    "id": "macro-05-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "货币最基本的职能是？",
    "options": [
      "计价单位",
      "财富象征",
      "交换媒介",
      "价值储藏"
    ],
    "answer": 2,
    "explanation": "交换媒介是货币的本质：被普遍接受用于交易。"
  },
  {
    "id": "macro-05-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "M1 通常包括？",
    "options": [
      "房产",
      "股票",
      "定期存款",
      "流通现金和活期存款"
    ],
    "answer": 3,
    "explanation": "M1 = 现金 + 活期存款，流动性最强。"
  },
  {
    "id": "macro-05-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "准备金率 20% 时货币乘数是？",
    "options": [
      "0.2",
      "20",
      "5",
      "2"
    ],
    "answer": 2,
    "explanation": "货币乘数 = 1 ÷ 0.2 = 5。"
  },
  {
    "id": "macro-05-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：央行可以通过公开市场买入债券来增加货币供给。",
    "answer": true,
    "explanation": "买入债券向银行注入准备金，银行可贷资金增加，货币供给扩大。"
  },
  {
    "id": "macro-05-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "货币数量方程 MV=PY 中，长期来看？",
    "options": [
      "P 决定 M",
      "M 和 Y 相对稳定，V 决定 P",
      "方程无意义",
      "V 和 Y 相对稳定，M 决定 P"
    ],
    "answer": 3,
    "explanation": "长期速度 V 与真实产出 Y 变化缓慢，货币量 M 主要决定物价 P。"
  },
  {
    "id": "macro-05-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "准备金率从 20% 降到 10%，货币乘数？",
    "options": [
      "从 10 升到 20",
      "从 5 升到 10",
      "不变",
      "从 5 降到 2"
    ],
    "answer": 1,
    "explanation": "乘数 = 1÷r：20%→5，10%→10，降准放大货币创造。"
  },
  {
    "id": "macro-05-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：提高法定准备金率属于紧缩性货币政策。",
    "answer": true,
    "explanation": "提高准备金率减少银行可贷资金、降低货币乘数，货币供给收缩。"
  },
  {
    "id": "macro-05-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么「银行体系」能让 100 元变成更多货币？",
    "hint": "部分准备金。",
    "reference": "银行只保留一部分准备金、其余贷出；贷款人拿到钱再存入银行，银行再贷……每一轮都按（1−准备金率）缩水但持续创造存款，最终货币供给 = 原始存款 ÷ 准备金率。"
  },
  {
    "id": "macro-05-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "央行「量化宽松」主要是？",
    "options": [
      "大规模公开市场购买长期资产",
      "冻结银行存款",
      "直接给居民发钱",
      "提高准备金率"
    ],
    "answer": 0,
    "explanation": "量化宽松 = 央行大规模购买债券等资产向体系注入流动性，是利率接近零时的非常规宽松。"
  },
  {
    "id": "macro-05-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「印钱」长期不能创造真实财富？",
    "hint": "MV=PY。",
    "reference": "印钱增加 M，但长期 Y（真实产出）由生产率决定、V（速度）相对稳定，所以 P（物价）上升——货币只是「量尺」，拉长尺子不会让东西变多，只会让标价变高。"
  },
  {
    "id": "macro-05-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "inflation",
    "imageCaption": "货币量与物价",
    "prompt": "图片题：货币量上升而产出不变时，物价？",
    "options": [
      "上升",
      "先降后升",
      "不变",
      "下降"
    ],
    "answer": 0,
    "explanation": "MV=PY：M 增、Y 不变 → P 上升，正是图中货币量与物价同向。"
  },
  {
    "id": "macro-05-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "inflation",
    "imageCaption": "货币数量论",
    "prompt": "图片题：结合 MV=PY 解释「货币增速 ≈ 通胀率 + 实际增速」。",
    "hint": "两边取增长率。",
    "reference": "对 MV=PY 取增长率：货币增长率 ≈ 通胀率 + 实际产出增长率（速度不变时）。所以货币增速超出实际产出增速的部分就是通胀——控制货币是控制通胀的根本。"
  },
  {
    "id": "macro-05-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：货币层次",
      "columns": [
        "项目",
        "M1",
        "M2"
      ],
      "rows": [
        [
          "流通现金",
          "✓",
          "✓"
        ],
        [
          "活期存款",
          "✓",
          "✓"
        ],
        [
          "定期存款",
          "✗",
          "✓"
        ]
      ]
    },
    "prompt": "报表题：定期存款属于？",
    "options": [
      "M1 但不属于 M2",
      "M1",
      "两者都不属于",
      "M2 但不属于 M1"
    ],
    "answer": 3,
    "explanation": "M2 = M1 + 定期/储蓄存款等准货币。"
  },
  {
    "id": "macro-05-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：准备金与货币创造",
      "columns": [
        "准备金率",
        "货币乘数"
      ],
      "rows": [
        [
          "25%",
          "4"
        ],
        [
          "20%",
          "5"
        ],
        [
          "10%",
          "10"
        ],
        [
          "5%",
          "20"
        ]
      ]
    },
    "prompt": "报表题：准备金率 5% 时货币乘数是多少？",
    "options": [
      "20",
      "50",
      "10",
      "4"
    ],
    "answer": 0,
    "explanation": "乘数 = 1 ÷ 0.05 = 20。"
  },
  {
    "id": "macro-05-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：货币数量方程",
      "columns": [
        "情景",
        "货币量 M",
        "速度 V",
        "产出 Y",
        "物价 P"
      ],
      "rows": [
        [
          "基准",
          "100",
          "5",
          "200",
          "2.5"
        ],
        [
          "印钱翻倍",
          "200",
          "5",
          "200",
          "?"
        ]
      ]
    },
    "prompt": "报表题：印钱翻倍、产出和速度不变，物价 P 变为多少？",
    "hint": "MV = PY。",
    "reference": "MV = 200×5 = 1000，Y = 200，所以 P = 1000 ÷ 200 = 5——物价翻倍（从 2.5 到 5），印证「货币决定物价」。"
  },
  {
    "id": "macro-05-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：货币政策工具",
      "columns": [
        "工具",
        "方向",
        "货币供给"
      ],
      "rows": [
        [
          "公开市场买入",
          "宽松",
          "增加"
        ],
        [
          "降准",
          "宽松",
          "增加"
        ],
        [
          "提高贴现率",
          "紧缩",
          "减少"
        ]
      ]
    },
    "prompt": "报表题：提高贴现率对货币供给的影响是？",
    "options": [
      "增加",
      "减少",
      "先增后减",
      "不变"
    ],
    "answer": 1,
    "explanation": "贴现率提高，银行向央行借款成本上升，放贷减少，货币供给收缩。"
  },
  {
    "id": "macro-05-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两次宽松的比较",
      "columns": [
        "时期",
        "货币增速",
        "产出增速",
        "通胀"
      ],
      "rows": [
        [
          "稳健期",
          "6%",
          "5%",
          "约 1%"
        ],
        [
          "超发期",
          "15%",
          "5%",
          "约 10%"
        ]
      ]
    },
    "prompt": "报表题：用货币数量论解释两次通胀差异。",
    "hint": "通胀 ≈ 货币增速 − 产出增速。",
    "reference": "按近似式 通胀 ≈ 货币增速 − 产出增速：稳健期 6−5≈1%；超发期 15−5≈10%——货币超发是通胀的主因，产出增速基本由生产率决定。"
  }
]
