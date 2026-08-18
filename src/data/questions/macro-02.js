// 消费物价指数 CPI · 分层题库

export default [
  {
    "id": "macro-02-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "CPI 衡量的是？",
    "options": [
      "典型家庭消费篮子的价格变化",
      "政府支出",
      "国内生产总值",
      "股市涨跌"
    ],
    "answer": 0,
    "explanation": "CPI 用固定消费篮子价格衡量生活成本变化。"
  },
  {
    "id": "macro-02-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "去年 CPI 100，今年 105，通胀率是？",
    "options": [
      "105%",
      "1.05%",
      "0.5%",
      "5%"
    ],
    "answer": 3,
    "explanation": "通胀率 =（105−100）÷ 100 = 5%。"
  },
  {
    "id": "macro-02-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "工资名义涨 6%、通胀 4%，实际购买力约？",
    "options": [
      "+6%",
      "+2%",
      "+10%",
      "−2%"
    ],
    "answer": 1,
    "explanation": "实际 ≈ 名义 − 通胀 = 6% − 4% = +2%。"
  },
  {
    "id": "macro-02-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：CPI 使用固定消费篮子，通常高估真实生活成本上升。",
    "answer": true,
    "explanation": "固定篮子忽略消费者改用便宜替代品，因此高估通胀（替代偏差）。"
  },
  {
    "id": "macro-02-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "进口油价大涨，下列哪个指数涨幅更大？",
    "options": [
      "都无法反映",
      "两者相同",
      "GDP 平减指数",
      "CPI"
    ],
    "answer": 3,
    "explanation": "进口品计入 CPI（消费者购买）但不计入国内产出，所以 CPI 涨幅更大。"
  },
  {
    "id": "macro-02-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "CPI 的「替代偏差」指？",
    "options": [
      "价格下跌被高估",
      "质量提升被忽略",
      "消费者会用便宜替代品但 CPI 假设篮子不变",
      "新商品不入篮"
    ],
    "answer": 2,
    "explanation": "固定篮子忽略了消费者面对涨价时的替代行为，高估生活成本。"
  },
  {
    "id": "macro-02-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：GDP 平减指数与 CPI 衡量的是同一种「篮子」。",
    "answer": false,
    "explanation": "平减指数用国内产出篮子（随构成变化），CPI 用固定消费篮子。"
  },
  {
    "id": "macro-02-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么比较「十年前工资 vs 现在工资」要用实际值？",
    "hint": "名义数字里含着通胀。",
    "reference": "名义工资没扣除物价上涨，直接比较会高估真实改善；用「名义工资 ÷ CPI」换算成购买力（实际工资），才能看出生活水平真实变化。"
  },
  {
    "id": "macro-02-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "CPI 高估通胀的三个来源是？",
    "options": [
      "替代偏差、新品偏差、质量偏差",
      "只有替代偏差",
      "需求偏差、供给偏差、价格偏差",
      "货币偏差、财政偏差、贸易偏差"
    ],
    "answer": 0,
    "explanation": "固定篮子忽略替代、新商品进入和质量提升，都使 CPI 高估生活成本上涨。"
  },
  {
    "id": "macro-02-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「CPI 高估通胀」会影响政策？",
    "hint": "养老金、工资挂钩。",
    "reference": "许多养老金、工资、合同按 CPI 自动调整（指数化）：CPI 高估通胀会过度补偿，增加政府支出和企业成本，甚至造成「通胀自我强化」——所以统计机构不断改进篮子。"
  },
  {
    "id": "macro-02-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "inflation",
    "imageCaption": "CPI 与生活成本",
    "prompt": "图片题：CPI 上升意味着货币的？",
    "options": [
      "面值变大",
      "购买力上升",
      "无影响",
      "购买力下降"
    ],
    "answer": 3,
    "explanation": "CPI 上升 = 物价上涨 = 同样金额买到的东西变少，购买力下降。"
  },
  {
    "id": "macro-02-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "gdp",
    "imageCaption": "GDP 平减指数 vs CPI",
    "prompt": "图片题：比较 CPI 与 GDP 平减指数在「进口品涨价」时的反应差异。",
    "hint": "篮子范围不同。",
    "reference": "CPI 篮子含进口消费品，进口涨价直接推高 CPI；GDP 平减指数只算国内生产的最终品，进口品不在内，涨幅小甚至不变——两个指数测量对象不同，政策含义也不同。"
  },
  {
    "id": "macro-02-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：消费篮子",
      "columns": [
        "商品",
        "基期价格",
        "本期价格"
      ],
      "rows": [
        [
          "大米 10 斤",
          "30 元",
          "33 元"
        ],
        [
          "肉 5 斤",
          "60 元",
          "66 元"
        ],
        [
          "房租",
          "500 元",
          "525 元"
        ]
      ]
    },
    "prompt": "报表题：篮子总价从基期到本期上涨了百分之几？",
    "options": [
      "3%",
      "5%",
      "10%",
      "15%"
    ],
    "answer": 1,
    "explanation": "基期 590 → 本期 619.5，涨幅约 5%。"
  },
  {
    "id": "macro-02-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：CPI 与通胀",
      "columns": [
        "年份",
        "CPI"
      ],
      "rows": [
        [
          "2023",
          "100"
        ],
        [
          "2024",
          "103"
        ],
        [
          "2025",
          "107"
        ]
      ]
    },
    "prompt": "报表题：2024 到 2025 年的通胀率是？",
    "options": [
      "4%",
      "7%",
      "10%",
      "3%"
    ],
    "answer": 0,
    "explanation": "（107−103）÷ 103 ≈ 3.9%，约 4%。"
  },
  {
    "id": "macro-02-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：工资与物价",
      "columns": [
        "年份",
        "名义工资",
        "CPI"
      ],
      "rows": [
        [
          "2020",
          "5000",
          "100"
        ],
        [
          "2025",
          "6200",
          "118"
        ]
      ]
    },
    "prompt": "报表题：2025 年实际工资比 2020 年变化约？",
    "options": [
      "−5%",
      "+24%",
      "+18%",
      "+5%"
    ],
    "answer": 3,
    "explanation": "实际工资 6200÷118×100 ≈ 5254，比 5000 增长约 5%。"
  },
  {
    "id": "macro-02-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两种价格指数",
      "columns": [
        "指标",
        "篮子",
        "进口品是否计入"
      ],
      "rows": [
        [
          "CPI",
          "固定消费篮子",
          "计入"
        ],
        [
          "GDP 平减指数",
          "国内产出",
          "不计入"
        ]
      ]
    },
    "prompt": "报表题：进口油价大涨 30%，解释 CPI 与平减指数的不同反应。",
    "hint": "篮子范围。",
    "reference": "进口油价计入 CPI（消费者直接购买），CPI 明显上涨；GDP 平减指数只算国内最终品，进口品不在篮子中，涨幅很小——所以看「生活成本」用 CPI，看「国内产出价格」用平减指数。"
  },
  {
    "id": "macro-02-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：CPI 偏差实例",
      "columns": [
        "情况",
        "CPI 计算",
        "实际家庭行为",
        "偏差"
      ],
      "rows": [
        [
          "牛肉大涨",
          "仍按原比例买",
          "改买鸡肉",
          "高估"
        ],
        [
          "手机新品",
          "旧品入篮",
          "买新品更值",
          "高估"
        ],
        [
          "手机质量提升",
          "价格不变",
          "性能翻倍",
          "高估"
        ]
      ]
    },
    "prompt": "报表题：三个例子分别对应 CPI 的哪种偏差？",
    "hint": "替代、新品、质量。",
    "reference": "改买鸡肉 = 替代偏差（固定篮子忽略替代）；手机新品 = 新品偏差（新品进入太晚）；质量提升 = 质量偏差（同样价格买到更好东西，CPI 没体现）。三者都使 CPI 高估生活成本上涨。"
  }
]
