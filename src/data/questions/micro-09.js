// 生产成本 · 分层题库

export default [
  {
    "id": "micro-09-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "经济学中的「经济利润」与会计利润的区别是？",
    "options": [
      "经济利润只算固定成本",
      "经济利润扣除了隐性成本（机会成本）",
      "没有区别",
      "会计利润更低"
    ],
    "answer": 1,
    "explanation": "经济利润 = 总收益 − 显性 − 隐性成本；会计利润只扣显性成本。"
  },
  {
    "id": "micro-09-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "厂房租金属于？",
    "options": [
      "边际成本",
      "固定成本",
      "可变成本",
      "沉没收益"
    ],
    "answer": 1,
    "explanation": "厂房租金不随产量变化，是固定成本。"
  },
  {
    "id": "micro-09-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "边际成本是？",
    "options": [
      "固定成本加可变成本",
      "总成本除以产量",
      "产量增加一单位引起的总成本增量",
      "每单位收益"
    ],
    "answer": 2,
    "explanation": "MC = ΔTC ÷ ΔQ，是「再做一个」的额外成本。"
  },
  {
    "id": "micro-09-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：长期来看，所有成本都是可变的。",
    "answer": true,
    "explanation": "长期可以调整厂房、设备等一切投入，没有固定成本。"
  },
  {
    "id": "micro-09-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "自有资金 50 万开店，这笔钱的「隐性成本」是？",
    "options": [
      "店租",
      "工资",
      "50 万本金",
      "这笔钱若存银行/投资的利息收益"
    ],
    "answer": 3,
    "explanation": "自有资金不付利息，但放弃了用它投资或存银行的机会收益——这是隐性成本。"
  },
  {
    "id": "micro-09-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "平均成本最低的产量点通常对应？",
    "options": [
      "边际成本最低点",
      "固定成本最低点",
      "总成本最低点",
      "边际成本 = 平均成本处"
    ],
    "answer": 3,
    "explanation": "MC 曲线穿过 AC 最低点：MC < AC 时 AC 下降，MC > AC 时 AC 上升。"
  },
  {
    "id": "micro-09-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：边际产量递减意味着边际成本最终会上升。",
    "answer": true,
    "explanation": "边际产量递减 → 每单位新增产量需要更多投入 → 边际成本上升（MC 呈 U 形右段）。"
  },
  {
    "id": "micro-09-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么开店的老板说「房租已经付了，多营业一小时不亏」？用固定成本解释。",
    "hint": "固定成本已发生，不随营业时间变化。",
    "reference": "房租是固定成本，无论营业与否都要付。决定「是否多营业一小时」只需比较这一小时的边际收益与边际成本（水电、人工），不必摊入已付房租——房租是沉没/固定成本，不该影响边际决策。"
  },
  {
    "id": "micro-09-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "长期平均成本先降后升（U 形）的原因分别是？",
    "options": [
      "先规模经济后规模不经济",
      "与规模无关",
      "先规模不经济后规模经济",
      "先边际递增后边际递减"
    ],
    "answer": 0,
    "explanation": "产量扩大先带来分工与摊薄固定成本（规模经济），再带来管理协调困难（规模不经济）。"
  },
  {
    "id": "micro-09-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「赚了钱」的生意可能经济利润为负？举一个例子。",
    "hint": "想想放弃的机会。",
    "reference": "会计利润为正但扣掉隐性成本后可能为负：例如你辞职开店年赚 6 万，放弃的原工资 10 万是隐性成本，经济利润 = 6 − 10 = −4 万——账面赚、经济上亏，理性选择是回去上班。"
  },
  {
    "id": "micro-09-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "gdp",
    "imageCaption": "成本曲线示意（U 形）",
    "prompt": "图片题：成本曲线呈 U 形，企业的最优产量通常在哪？",
    "options": [
      "总成本最高处",
      "平均成本最低处附近（MC=AC）",
      "固定成本最高处",
      "产量无穷大处"
    ],
    "answer": 1,
    "explanation": "U 形平均成本的最低点是效率最优产量，对应 MC 穿过 AC 的位置。"
  },
  {
    "id": "micro-09-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "gdp",
    "imageCaption": "边际成本与平均成本的关系",
    "prompt": "图片题：为什么 MC 曲线一定穿过 AC 曲线的最低点？",
    "hint": "想想「新同学的成绩」如何拉高或拉低平均分。",
    "reference": "边际成本是「新增一单位的成本」。MC 低于平均成本时会把平均往下拉；MC 高于平均时把平均往上推；只有在 MC = AC 的那一点，平均成本既不被拉低也不被推高——即 AC 最低点。"
  },
  {
    "id": "micro-09-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某店的成本结构",
      "columns": [
        "项目",
        "金额"
      ],
      "rows": [
        [
          "显性成本（原料、工资、租金）",
          "20 万"
        ],
        [
          "隐性成本（放弃的工资）",
          "8 万"
        ],
        [
          "总收益",
          "30 万"
        ]
      ]
    },
    "prompt": "报表题：经济利润是多少？",
    "options": [
      "−2 万",
      "8 万",
      "10 万",
      "2 万"
    ],
    "answer": 3,
    "explanation": "30 − 20 − 8 = 2 万：经济利润扣掉了隐性成本。"
  },
  {
    "id": "micro-09-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：面包店成本",
      "columns": [
        "成本项",
        "类型"
      ],
      "rows": [
        [
          "房租",
          "固定"
        ],
        [
          "面粉",
          "可变"
        ],
        [
          "计件工资",
          "可变"
        ],
        [
          "烤箱折旧",
          "固定"
        ]
      ]
    },
    "prompt": "报表题：哪些是可变成本？",
    "options": [
      "只有房租",
      "全部",
      "房租和烤箱",
      "面粉和计件工资"
    ],
    "answer": 3,
    "explanation": "可变成本随产量变化：面粉、计件工资；房租、折旧不随产量变化。"
  },
  {
    "id": "micro-09-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：产量与成本",
      "columns": [
        "产量",
        "总成本"
      ],
      "rows": [
        [
          "0",
          "100"
        ],
        [
          "1",
          "120"
        ],
        [
          "2",
          "135"
        ],
        [
          "3",
          "160"
        ]
      ]
    },
    "prompt": "报表题：产量从 2 增加到 3 的边际成本是？",
    "options": [
      "20",
      "35",
      "25",
      "15"
    ],
    "answer": 2,
    "explanation": "MC = ΔTC = 160 − 135 = 25（固定成本 100 已含在总成本中）。"
  },
  {
    "id": "micro-09-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：规模变化下的平均成本",
      "columns": [
        "月产量",
        "平均成本/件"
      ],
      "rows": [
        [
          "1000 件",
          "8 元"
        ],
        [
          "5000 件",
          "4 元"
        ],
        [
          "20000 件",
          "3 元"
        ],
        [
          "100000 件",
          "4.5 元"
        ]
      ]
    },
    "prompt": "报表题：表格显示平均成本先降后升，分别说明规模和原因。",
    "hint": "哪段是规模经济，哪段是规模不经济？",
    "reference": "1000→20000 件平均成本从 8 降到 3（规模经济：固定成本摊薄、分工效率）；20000→100000 件回升到 4.5（规模不经济：管理协调成本上升）。最优规模约 20000 件。"
  },
  {
    "id": "micro-09-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两种决策的成本视角",
      "columns": [
        "决策",
        "平均成本视角",
        "边际成本视角"
      ],
      "rows": [
        [
          "是否多营业 1 小时",
          "含房租摊薄 → 似乎不划算",
          "只比水电人工 → 划算"
        ],
        [
          "是否多接 1 单",
          "含固定投入 → 利润薄",
          "只比增量成本收益 → 该接"
        ]
      ]
    },
    "prompt": "报表题：解释为什么「多接一单」该用边际成本而非平均成本判断。",
    "hint": "固定成本已发生，不随这单变化。",
    "reference": "多接一单的收益只需覆盖「这一单」的增量成本（原料、加班费），固定成本无论接不接都已付出、不应摊进单笔决策。只要边际收益 > 边际成本就该接——这正是边际决策的核心。"
  }
]
