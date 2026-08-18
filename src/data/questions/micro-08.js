// 公共物品与公共资源 · 分层题库

export default [
  {
    "id": "micro-08-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "同时具有「非排他性」和「竞争性」的物品是？",
    "options": [
      "公共资源",
      "公共物品",
      "私人物品",
      "俱乐部物品"
    ],
    "answer": 0,
    "explanation": "公共资源：无法排他（大家都能用）但有竞争性（一人多用就挤占），如渔场。"
  },
  {
    "id": "micro-08-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "国防属于哪类物品？",
    "options": [
      "公共资源",
      "公共物品",
      "私人物品",
      "俱乐部物品"
    ],
    "answer": 1,
    "explanation": "国防非排他（保护所有人）且非竞争（不挤占），是典型公共物品。"
  },
  {
    "id": "micro-08-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "「搭便车」问题主要出现在哪类物品？",
    "options": [
      "奢侈品",
      "私人物品",
      "垄断产品",
      "公共物品"
    ],
    "answer": 3,
    "explanation": "公共物品无法排他，不付钱也能享受，所以人们选择搭便车、不愿付费。"
  },
  {
    "id": "micro-08-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：公地悲剧的发生是因为使用公共资源的人太自私。",
    "answer": false,
    "explanation": "根源是制度缺失（无产权/无管理）：每个人承担的成本小于收益，理性人就会过度使用。"
  },
  {
    "id": "micro-08-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "付费高速公路（不拥挤时）属于？",
    "options": [
      "俱乐部物品",
      "公共物品",
      "公共资源",
      "私人物品"
    ],
    "answer": 0,
    "explanation": "付费可排他，不拥挤时无竞争性——俱乐部物品。"
  },
  {
    "id": "micro-08-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "解决公共资源过度使用，最有效的思路是？",
    "options": [
      "产权化、配额或收费",
      "政府全部接管并免费",
      "禁止所有使用",
      "鼓励免费使用"
    ],
    "answer": 0,
    "explanation": "通过产权、配额、许可证或收费让使用者承担真实成本，抑制过度使用。"
  },
  {
    "id": "micro-08-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：公共物品的私人市场供给通常低于社会最优水平。",
    "answer": true,
    "explanation": "无法排他导致搭便车，私人不愿付费供给，市场供给不足。"
  },
  {
    "id": "micro-08-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么「灯塔」常被当作公共物品的经典例子？",
    "hint": "想想能不能向每艘船收费。",
    "reference": "灯塔的光无法排除任何船只（非排他），一艘船用不减少其他船用（非竞争），因此无法市场化收费——船东会搭便车，私人不愿建，历史上常由政府或协会提供。"
  },
  {
    "id": "micro-08-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "公海渔业资源耗竭的根源是？",
    "options": [
      "渔民技术太差",
      "鱼价太高",
      "鱼太少",
      "缺乏产权：无人为「鱼的存量」负责"
    ],
    "answer": 3,
    "explanation": "公海无产权，每个渔民只考虑自己的捕捞，没人保护鱼群存量——产权缺失导致公地悲剧。"
  },
  {
    "id": "micro-08-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「收费公路」不拥挤时效率最优，拥挤时反而不是？",
    "hint": "竞争性随拥挤出现。",
    "reference": "不拥挤时收费公路非竞争：多一辆车不损害别人，收费反而把本可通行的车挡在外面（低效）；拥挤时竞争性出现，新增车辆造成拥堵（负外部性），收费或拥堵费能引导合理使用。"
  },
  {
    "id": "micro-08-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "supply-demand",
    "imageCaption": "公共物品的社会收益曲线远高于私人需求",
    "prompt": "图片题：公共物品的社会最优数量比市场自发数量？",
    "options": [
      "无法比较",
      "更少",
      "相同",
      "更多"
    ],
    "answer": 3,
    "explanation": "公共物品存在正外部性，社会需求（含外部收益）高于私人需求，社会最优数量更多。"
  },
  {
    "id": "micro-08-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "supply-demand",
    "imageCaption": "公共资源：个人使用成本低于社会成本",
    "prompt": "图片题：结合图示说明公共资源为何被过度使用。",
    "hint": "个人成本曲线 vs 社会成本曲线。",
    "reference": "公共资源使用存在负外部性：个人只承担自己那部分成本（私人成本曲线低），社会成本曲线更高；按私人成本决定的均衡数量高于社会最优——过度使用，如公海捕捞。"
  },
  {
    "id": "micro-08-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：物品四分类",
      "columns": [
        "物品",
        "排他性",
        "竞争性"
      ],
      "rows": [
        [
          "冰淇淋",
          "有",
          "有"
        ],
        [
          "国防",
          "无",
          "无"
        ],
        [
          "公海鱼",
          "无",
          "有"
        ],
        [
          "付费公路",
          "有",
          "无"
        ]
      ]
    },
    "prompt": "报表题：公海鱼属于哪类物品？",
    "options": [
      "公共物品",
      "公共资源",
      "私人物品",
      "俱乐部物品"
    ],
    "answer": 1,
    "explanation": "非排他（谁都能捕）+ 竞争（你捕多了鱼变少）= 公共资源。"
  },
  {
    "id": "micro-08-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：公共资源使用情况",
      "columns": [
        "渔场",
        "渔民数",
        "每户年捕捞（吨）",
        "鱼群存量"
      ],
      "rows": [
        [
          "无管理",
          "50",
          "12",
          "持续下降"
        ],
        [
          "配额制",
          "50",
          "10",
          "稳定"
        ]
      ]
    },
    "prompt": "报表题：配额制为什么能保护鱼群？",
    "options": [
      "总捕捞量被限制，存量稳定",
      "渔民少了",
      "价格下降了",
      "鱼变多了"
    ],
    "answer": 0,
    "explanation": "配额限制总捕捞量（50×10 < 50×12），让使用速度不超过再生长速度。"
  },
  {
    "id": "micro-08-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：灯塔的两种提供方式",
      "columns": [
        "提供方式",
        "能否收费",
        "供给量"
      ],
      "rows": [
        [
          "私人市场",
          "难（无法排他）",
          "不足"
        ],
        [
          "政府税收融资",
          "通过税收间接收",
          "接近最优"
        ]
      ]
    },
    "prompt": "报表题：用「搭便车」解释为什么灯塔靠私人市场供给不足。",
    "hint": "不付钱也能用。",
    "reference": "灯塔无法排除不付费船只，每艘船都理性搭便车——私人无法收回成本，供给不足；政府用税收融资等于向所有受益者收费，供给接近社会最优。"
  },
  {
    "id": "micro-08-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：免费停车场的拥挤成本",
      "columns": [
        "时段",
        "车辆数",
        "找车位时间",
        "社会成本"
      ],
      "rows": [
        [
          "工作日白天",
          "80（超容量）",
          "15 分钟",
          "高（拥堵）"
        ],
        [
          "深夜",
          "20",
          "1 分钟",
          "低"
        ]
      ]
    },
    "prompt": "报表题：同一停车场，为何白天出现「公地悲剧」而深夜没有？",
    "options": [
      "白天车更贵",
      "白天车位更多",
      "深夜没人停车",
      "白天车辆数超过容量，竞争性凸显"
    ],
    "answer": 3,
    "explanation": "容量有限时竞争性出现：额外车辆造成拥堵（负外部性）；深夜容量充足，多一辆车无影响。"
  },
  {
    "id": "micro-08-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两种公共资源治理方案",
      "columns": [
        "方案",
        "机制",
        "效果"
      ],
      "rows": [
        [
          "可交易捕捞配额",
          "产权化，配额可买卖",
          "总捕捞受限，效率高"
        ],
        [
          "一刀切禁渔期",
          "统一时间禁捕",
          "总量受限但效率低"
        ]
      ]
    },
    "prompt": "报表题：为什么可交易配额通常优于一刀切禁渔期？",
    "hint": "不同渔民的捕捞成本不同。",
    "reference": "可交易配额让「捕捞成本低」的渔民买配额多捕、「成本高」的少捕，以最小总成本实现目标总量；一刀切禁渔期对所有渔民同样限制，忽略成本差异，总代价更高。"
  }
]
