// 外部性 · 分层题库

export default [
  {
    "id": "micro-07-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "工厂排污污染河流属于？",
    "options": [
      "自然垄断",
      "负外部性",
      "公共物品",
      "正外部性"
    ],
    "answer": 1,
    "explanation": "污染把成本转嫁给社会且未进价格，是负外部性。"
  },
  {
    "id": "micro-07-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "教育通常被认为是？",
    "options": [
      "负外部性",
      "劣质品",
      "没有外部性",
      "正外部性"
    ],
    "answer": 3,
    "explanation": "教育惠及个人也惠及社会（创新、犯罪率下降），是正外部性。"
  },
  {
    "id": "micro-07-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "负外部性下，市场产量与社会最优产量相比？",
    "options": [
      "无法比较",
      "过低",
      "相等",
      "过高"
    ],
    "answer": 3,
    "explanation": "价格没含外部成本，生产者生产过多——产量高于社会最优。"
  },
  {
    "id": "micro-07-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：政府征收庇古税（如碳税）的目的是惩罚污染企业。",
    "answer": false,
    "explanation": "庇古税是校准价格、让私人成本等于社会成本，不是报复性罚款。"
  },
  {
    "id": "micro-07-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "对负外部性征税后，市场产量会？",
    "options": [
      "不变",
      "归零",
      "减少到接近社会最优",
      "增加"
    ],
    "answer": 2,
    "explanation": "税收抬高私人成本，产量下降、更接近社会最优——但不是降到零。"
  },
  {
    "id": "micro-07-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "正外部性（如疫苗研发）下，市场供给往往？",
    "options": [
      "不足",
      "刚好最优",
      "过多",
      "与外部性无关"
    ],
    "answer": 0,
    "explanation": "研发者只获得私人收益、拿不到外部收益，所以研发量低于社会最优。"
  },
  {
    "id": "micro-07-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：科斯定理认为，只要产权清晰且交易成本足够低，私人谈判就能解决外部性。",
    "answer": true,
    "explanation": "这正是科斯定理：产权 + 低交易成本 → 谈判自动达到有效率结果，无需政府干预。"
  },
  {
    "id": "micro-07-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么现实中污染问题通常不能靠私人谈判解决？",
    "hint": "谈判人数和交易成本。",
    "reference": "科斯定理要求产权清晰且交易成本低。污染往往涉及成千上万受害者：组织所有人谈判成本极高、搭便车问题严重，无法达成有效率协议——所以需要政府征税或管制。"
  },
  {
    "id": "micro-07-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "「最优污染量」是指？",
    "options": [
      "边际治理成本 = 边际污染损害时的污染量",
      "政府规定的任意值",
      "零污染",
      "污染越多越好"
    ],
    "answer": 0,
    "explanation": "治理污染也有成本：最优点是「再减一单位污染的代价」等于「这一单位污染的危害」处，不是零。"
  },
  {
    "id": "micro-07-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：比较「排污税」与「排污禁令」两种政策，为什么经济学家更偏好前者？",
    "hint": "成本差异与企业激励。",
    "reference": "禁令对所有企业一刀切，忽略不同企业治理成本的差异；排污税让治理成本低的企业多减排（省税）、成本高的企业交税，以最小总成本达到减排目标，还激励企业持续创新降污。"
  },
  {
    "id": "micro-07-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "supply-demand",
    "imageCaption": "供给曲线为私人成本，社会成本曲线在其上方",
    "prompt": "图片题：负外部性下，社会成本曲线位于供给曲线的？",
    "options": [
      "左侧",
      "下方",
      "重合",
      "上方"
    ],
    "answer": 3,
    "explanation": "社会成本 = 私人成本 + 外部成本，所以社会成本曲线在供给（私人成本）曲线上方，社会最优产量更低。"
  },
  {
    "id": "micro-07-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "supply-demand",
    "imageCaption": "负外部性：市场均衡高于社会最优",
    "prompt": "图片题：结合图示，说明对污染征税后均衡产量为何下降。",
    "hint": "税收抬高私人成本曲线。",
    "reference": "征税等于把社会成本「内部化」：供给曲线（私人成本）上移到与社会成本重合，与需求曲线的新交点产量低于原市场均衡——产量回到社会最优，污染减少。"
  },
  {
    "id": "micro-07-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：两类行为的第三方影响",
      "columns": [
        "行为",
        "第三方",
        "影响方向"
      ],
      "rows": [
        [
          "工厂排污",
          "居民",
          "受损"
        ],
        [
          "接种疫苗",
          "邻居",
          "受益"
        ],
        [
          "装修噪音",
          "邻里",
          "受损"
        ]
      ]
    },
    "prompt": "报表题：表中哪些是负外部性？",
    "options": [
      "排污和装修噪音",
      "只有排污",
      "全部",
      "只有疫苗"
    ],
    "answer": 0,
    "explanation": "排污、装修噪音让第三方受损 = 负外部性；疫苗让第三方受益 = 正外部性。"
  },
  {
    "id": "micro-07-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某化工厂的产量与污染损害",
      "columns": [
        "产量（吨）",
        "私人成本",
        "外部损害",
        "社会成本"
      ],
      "rows": [
        [
          "100",
          "5000",
          "1000",
          "6000"
        ],
        [
          "120",
          "6000",
          "1400",
          "7400"
        ]
      ]
    },
    "prompt": "报表题：产量 120 吨时社会成本是多少？",
    "options": [
      "5000",
      "1400",
      "7400",
      "6000"
    ],
    "answer": 2,
    "explanation": "社会成本 = 私人成本 6000 + 外部损害 1400 = 7400。"
  },
  {
    "id": "micro-07-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：碳税前后企业决策",
      "columns": [
        "方案",
        "每吨排放成本",
        "减排成本",
        "企业选择"
      ],
      "rows": [
        [
          "无碳税",
          "0",
          "200 元/吨",
          "不减排"
        ],
        [
          "碳税 150 元/吨",
          "150",
          "200 元/吨",
          "交税"
        ],
        [
          "碳税 250 元/吨",
          "250",
          "200 元/吨",
          "减排"
        ]
      ]
    },
    "prompt": "报表题：碳税从 150 提到 250 元/吨后，企业行为如何变化？",
    "options": [
      "没有变化",
      "关闭工厂",
      "继续交税",
      "改为减排（减排成本低于税额）"
    ],
    "answer": 3,
    "explanation": "减排成本 200 < 税额 250，企业选择减排更划算——税改变了激励。"
  },
  {
    "id": "micro-07-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：教育的社会收益",
      "columns": [
        "主体",
        "年收益"
      ],
      "rows": [
        [
          "学生本人",
          "4000 元"
        ],
        [
          "社会（创新、治安等）",
          "2000 元"
        ],
        [
          "社会成本",
          "4500 元"
        ]
      ]
    },
    "prompt": "报表题：按表格，私人决策和最优决策分别应不应该继续投资教育？",
    "hint": "私人只看本人收益，社会看总收益。",
    "reference": "私人决策：本人收益 4000 < 成本 4500，学生可能放弃；社会决策：总收益 6000 > 成本 4500，社会应该投资。差距来自 2000 元正外部性——所以需要补贴，让私人决策与社会最优一致。"
  },
  {
    "id": "micro-07-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：产权归属与科斯谈判结果",
      "columns": [
        "情景",
        "产权归属",
        "谈判结果"
      ],
      "rows": [
        [
          "农户有权要求清水",
          "农户",
          "工厂付费买排污权"
        ],
        [
          "工厂有合法排污权",
          "工厂",
          "农户付费请减排"
        ]
      ]
    },
    "prompt": "报表题：两种产权归属下，产量结果会怎样？这说明了什么？",
    "hint": "结果效率相同，分配不同。",
    "reference": "科斯定理：两种产权下谈判都达到有效率产量（边际治理成本=边际损害处）；差别只在「谁付钱」。产权决定财富分配，但交易成本为零时不影响效率——产权清晰是关键。"
  }
]
