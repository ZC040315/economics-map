// 国民收入核算：GDP · 分层题库（基础 4 + 进阶 4 + 疑难 4）

export default [
  {
    "id": "macro-01-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "GDP 统计的是？",
    "options": [
      "一国一定时期内生产的全部最终物品与服务的市场价值",
      "所有二手商品交易的价值",
      "股市成交金额",
      "所有银行存款"
    ],
    "answer": 0,
    "explanation": "GDP = 一定时期内、境内生产、最终品、市场价值——四个关键词缺一不可。"
  },
  {
    "id": "macro-01-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "支出法下，GDP = ?",
    "options": [
      "消费 + 投资 + 政府购买 + 净出口",
      "消费 + 储蓄 + 税收",
      "工资 + 利润 + 利息",
      "出口 − 进口"
    ],
    "answer": 0,
    "explanation": "GDP = C + I + G + NX（消费、投资、政府购买、净出口）——每一笔最终支出都被记入。"
  },
  {
    "id": "macro-01-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "GDP 只算最终品，是为了？",
    "options": [
      "避免重复计算中间品价值",
      "方便征税",
      "只统计进口商品",
      "忽略服务业"
    ],
    "answer": 0,
    "explanation": "面包价格里已含面粉和小麦的价值，再单独加一遍就是重复计算，所以只算最终品。"
  },
  {
    "id": "macro-01-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：二手手机交易不计入当年的 GDP。",
    "answer": true,
    "explanation": "正确。GDP 只统计「当年新生产」的最终品与服务，二手交易不新增产出，不计入。"
  },
  {
    "id": "macro-01-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "公司购买一台新生产设备，计入 GDP 的哪一部分？",
    "options": [
      "消费",
      "投资",
      "政府购买",
      "净出口"
    ],
    "answer": 1,
    "explanation": "经济学里的「投资」指购买资本品（设备、厂房、存货），不是炒股或买奶茶。"
  },
  {
    "id": "macro-01-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "想比较两年间「真实生产量」的变化，该看？",
    "options": [
      "名义 GDP",
      "实际 GDP",
      "CPI",
      "失业率"
    ],
    "answer": 1,
    "explanation": "实际 GDP 用不变价格挤掉通胀水分，才能反映真实产出变化；名义 GDP 含价格变化。"
  },
  {
    "id": "macro-01-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：GDP 高的国家，人民生活质量一定更高。",
    "answer": false,
    "explanation": "错误。GDP 不衡量闲暇、环境、收入分配、家务劳动等，产出高不等于生活一定更好。"
  },
  {
    "id": "macro-01-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么说「GDP 高不代表幸福」？举两个 GDP 看不到的东西。",
    "hint": "想想不经过市场的价值。",
    "reference": "GDP 只衡量市场内交易的总产出。它看不到：①闲暇——拼命加班产出高但休息少；②环境质量——污染损害健康但可能推高医疗支出计入 GDP；③收入分配——同样总量下贫富差距可能很大；④家务劳动——妈妈做饭不收费不计入。所以 GDP 是产出指标，不是幸福指标。"
  },
  {
    "id": "macro-01-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "某年所有商品价格翻倍、产量不变，那么名义 GDP 和实际 GDP 分别？",
    "options": [
      "名义不变，实际翻倍",
      "名义翻倍，实际不变",
      "两者都翻倍",
      "两者都不变"
    ],
    "answer": 1,
    "explanation": "名义 GDP 用当年价格算（翻倍），实际 GDP 用不变价格算（产量没变所以不变）——「虚胖」来自价格。"
  },
  {
    "id": "macro-01-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「GDP 总量高」不等于「人均 GDP 高」？人均 GDP 为什么更能反映生活水平？",
    "hint": "想想人口规模的影响。",
    "reference": "GDP 总量是总产出，人均 GDP = 总量 ÷ 人口。一个大国总量高但人口更多，人均可能很低。人均 GDP 衡量「平均每个人能分到多少产出」，更接近个人生活水平的长期决定因素（生产率）。"
  },
  {
    "id": "macro-01-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "gdp",
    "imageCaption": "支出法下 GDP 的构成：消费、投资、政府购买、净出口",
    "prompt": "图片题：图中占 GDP 比重最大的是哪一部分？",
    "options": [
      "政府购买 G",
      "投资 I",
      "净出口 NX",
      "消费 C"
    ],
    "answer": 3,
    "explanation": "在大多数经济体（尤其美国、中国）中，消费是 GDP 最大的组成部分——图里消费块也最长。"
  },
  {
    "id": "macro-01-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "gdp",
    "imageCaption": "GDP = C + I + G + NX",
    "prompt": "图片题：把下面四笔支出分别归类到 C / I / G / NX：买奶茶、工厂买设备、政府修路、卖给外国人的手机。",
    "hint": "回忆支出法四类定义。",
    "reference": "买奶茶 → 消费 C；工厂买设备 → 投资 I；政府修路 → 政府购买 G；卖给外国人的手机 → 净出口 NX。每一笔最终支出都能在四类中找到归属，四类相加就是 GDP。"
  },
  {
    "id": "macro-01-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国一年支出数据",
      "columns": [
        "项目",
        "金额（亿元）"
      ],
      "rows": [
        [
          "消费",
          "500"
        ],
        [
          "投资",
          "200"
        ],
        [
          "政府购买",
          "150"
        ],
        [
          "净出口",
          "50"
        ]
      ]
    },
    "prompt": "报表题：根据表格，用支出法计算 GDP 是多少？",
    "options": [
      "850 亿元",
      "900 亿元",
      "500 亿元",
      "700 亿元"
    ],
    "answer": 1,
    "explanation": "GDP = C + I + G + NX = 500 + 200 + 150 + 50 = 900 亿元。"
  },
  {
    "id": "macro-01-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国两年 GDP",
      "columns": [
        "年份",
        "名义 GDP",
        "实际 GDP（固定价格）"
      ],
      "rows": [
        [
          "2024",
          "1000 亿元",
          "1000 亿元"
        ],
        [
          "2025",
          "1300 亿元",
          "1050 亿元"
        ]
      ]
    },
    "prompt": "报表题：产量（实际产出）在 2024–2025 年间增长了多少？",
    "options": [
      "30%",
      "5%",
      "0%",
      "25%"
    ],
    "answer": 1,
    "explanation": "看实际 GDP（挤掉价格水分）：1000 → 1050，真实增长 5%；名义增长 30% 里大部分是涨价。"
  },
  {
    "id": "macro-01-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：两国人均 GDP",
      "columns": [
        "国家",
        "GDP 总量（亿元）",
        "人口（万人）"
      ],
      "rows": [
        [
          "甲国",
          "40000",
          "2000"
        ],
        [
          "乙国",
          "9000",
          "300"
        ]
      ]
    },
    "prompt": "报表题：根据表格，哪个国家人均 GDP 更高？",
    "options": [
      "甲国（总量大）",
      "乙国（人均 30 万 > 甲国 20 万）",
      "一样高",
      "无法比较"
    ],
    "answer": 1,
    "explanation": "甲国人均 = 40000÷2000 = 20 万；乙国人均 = 9000÷300 = 30 万。总量高不代表人均高——人均更能反映生活水平。"
  },
  {
    "id": "macro-01-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：面包生产的价值链",
      "columns": [
        "环节",
        "售价",
        "增值"
      ],
      "rows": [
        [
          "小麦",
          "2 元",
          "2 元"
        ],
        [
          "面粉",
          "4 元",
          "2 元"
        ],
        [
          "面包",
          "7 元",
          "3 元"
        ]
      ]
    },
    "prompt": "报表题：GDP 只统计最终品面包的 7 元，不把 2+4+7 相加。结合表格说明为什么？",
    "hint": "想想中间品的价值在哪里。",
    "reference": "面包的 7 元里已经包含了小麦和面粉的全部价值（2+2+3=7）。如果把每个环节售价都加一遍（2+4+7=13），小麦和面粉的价值就被重复计算。只算最终品，恰好等于各环节新增价值的加总（2+2+3=7）。"
  },
  {
    "id": "macro-01-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国两年经济数据",
      "columns": [
        "年份",
        "名义 GDP 增速",
        "物价涨幅",
        "人口增速"
      ],
      "rows": [
        [
          "2024",
          "8%",
          "3%",
          "1%"
        ],
        [
          "2025",
          "6%",
          "2%",
          "1%"
        ]
      ]
    },
    "prompt": "报表题：2024 年人均实际 GDP 大约增长多少？（名义 − 物价 ≈ 实际；再扣人口）",
    "options": [
      "8%",
      "5%",
      "4%",
      "3%"
    ],
    "answer": 2,
    "explanation": "实际增速 ≈ 名义 8% − 物价 3% = 5%；人口涨 1%，人均再扣约 1% → 约 4%。"
  }
]
