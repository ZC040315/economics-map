// 竞争市场上的企业 · 分层题库

export default [
  {
    "id": "micro-10-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "完全竞争企业的需求曲线是？",
    "options": [
      "水平线",
      "垂直线",
      "向右下倾斜",
      "向右上倾斜"
    ],
    "answer": 0,
    "explanation": "价格接受者：按市场价能卖任意量，需求曲线是水平线，MR = P。"
  },
  {
    "id": "micro-10-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "利润最大化产量满足？",
    "options": [
      "价格最低",
      "平均成本最低",
      "MR = MC",
      "总收益最大"
    ],
    "answer": 2,
    "explanation": "MR=MC 是普适最优条件：此前多产增利，此后多产减利。"
  },
  {
    "id": "micro-10-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "短期价格低于平均可变成本时，企业应？",
    "options": [
      "扩大产量",
      "继续生产",
      "停业",
      "降价"
    ],
    "answer": 2,
    "explanation": "P < AVC 时连可变成本都收不回，停业损失更小。"
  },
  {
    "id": "micro-10-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：长期竞争均衡下企业经济利润为零。",
    "answer": true,
    "explanation": "自由进出让正利润吸引进入、负利润逼退退出，长期经济利润趋近零。"
  },
  {
    "id": "micro-10-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "某竞争企业 P=10、MC=7，它应该？",
    "options": [
      "停业",
      "提价",
      "减产",
      "增产（MR>MC）"
    ],
    "answer": 3,
    "explanation": "MR=P=10 > MC=7，多生产一单位多赚 3 元，应增产。"
  },
  {
    "id": "micro-10-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "长期零利润时，价格等于？",
    "options": [
      "固定成本",
      "平均可变成本",
      "边际成本",
      "最低平均总成本"
    ],
    "answer": 3,
    "explanation": "长期 P = 最低 ATC = MC：经济利润为零且产量最优。"
  },
  {
    "id": "micro-10-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：竞争企业短期亏损时应立即退出市场。",
    "answer": false,
    "explanation": "若 P > AVC 应继续生产（少亏）；只有 P < AVC 才停业；退出是长期决策。"
  },
  {
    "id": "micro-10-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么「网红店暴利」通常维持不了多久？",
    "hint": "想想新进入者。",
    "reference": "暴利（正经济利润）吸引大量新企业进入，供给增加、价格被压下来，利润摊薄到接近零；想长期赚钱必须持续差异化或建立进入壁垒，否则只是短期红利。"
  },
  {
    "id": "micro-10-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "竞争企业短期供给曲线是？",
    "options": [
      "水平线",
      "整条 MC 曲线",
      "MC 曲线在 AVC 以上的部分",
      "ATC 曲线"
    ],
    "answer": 2,
    "explanation": "P ≥ AVC 时企业按 P=MC 生产，所以短期供给曲线是 AVC 以上的 MC 段。"
  },
  {
    "id": "micro-10-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么长期竞争均衡下「价格 = 边际成本 = 最低平均成本」对消费者有利？",
    "hint": "效率和成本。",
    "reference": "P=MC 说明价格反映真实边际成本（资源没浪费）；P=最低ATC 说明企业以最低可能成本生产（没有无谓损失）。消费者以最低价买到最有效率的产出，总剩余最大。"
  },
  {
    "id": "micro-10-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "surplus",
    "imageCaption": "竞争均衡与剩余",
    "prompt": "图片题：竞争均衡下，总剩余（消费者+生产者）状态是？",
    "options": [
      "最小",
      "为零",
      "最大",
      "无法判断"
    ],
    "answer": 2,
    "explanation": "P=MC 时成交数量是社会最优，没有无谓损失，总剩余最大。"
  },
  {
    "id": "micro-10-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "surplus",
    "imageCaption": "竞争市场效率",
    "prompt": "图片题：结合剩余图说明为什么竞争均衡没有无谓损失。",
    "hint": "所有值得成交的交易都成交了。",
    "reference": "竞争均衡价 P* 下，愿意出价高于 P* 的买家都买到了（高消费者剩余者），成本低于 P* 的卖家都卖出（高生产者剩余者）；不存在「该成交没成交」的交易，所以没有无谓损失，总剩余最大。"
  },
  {
    "id": "micro-10-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某竞争企业数据",
      "columns": [
        "产量",
        "价格",
        "边际收益",
        "边际成本"
      ],
      "rows": [
        [
          "5",
          "8",
          "8",
          "6"
        ],
        [
          "6",
          "8",
          "8",
          "8"
        ],
        [
          "7",
          "8",
          "8",
          "11"
        ]
      ]
    },
    "prompt": "报表题：最优产量是多少？",
    "options": [
      "7",
      "6（MR=MC）",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "产量 6 时 MR=MC=8；产量 7 时 MC=11>8 会减利。"
  },
  {
    "id": "micro-10-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：停业决策",
      "columns": [
        "价格",
        "平均可变成本",
        "平均总成本"
      ],
      "rows": [
        [
          "5 元",
          "6 元",
          "10 元"
        ],
        [
          "7 元",
          "6 元",
          "10 元"
        ]
      ]
    },
    "prompt": "报表题：哪种价格下企业短期应停业？",
    "options": [
      "都停",
      "都不停",
      "7 元",
      "5 元（P<AVC）"
    ],
    "answer": 3,
    "explanation": "P=5 < AVC=6：连可变成本都收不回，停业；P=7 > AVC=6 继续生产（虽亏损）。"
  },
  {
    "id": "micro-10-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：进入退出过程",
      "columns": [
        "阶段",
        "经济利润",
        "企业行为"
      ],
      "rows": [
        [
          "初期",
          "正",
          "新企业进入"
        ],
        [
          "中期",
          "下降",
          "继续进入"
        ],
        [
          "长期",
          "接近 0",
          "停止进入"
        ]
      ]
    },
    "prompt": "报表题：长期均衡时经济利润为何接近零？",
    "options": [
      "进入推高供给、压低价格",
      "政府限价",
      "成本无限上升",
      "企业变笨了"
    ],
    "answer": 0,
    "explanation": "正利润吸引进入 → 供给增加 → 价格下降 → 利润被摊薄到零。"
  },
  {
    "id": "micro-10-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：竞争企业的三种状态",
      "columns": [
        "状态",
        "价格与成本关系",
        "决策"
      ],
      "rows": [
        [
          "盈利",
          "P > ATC",
          "继续生产"
        ],
        [
          "亏损但 P>AVC",
          "AVC < P < ATC",
          "继续生产（少亏）"
        ],
        [
          "亏损且 P<AVC",
          "P < AVC",
          "停业"
        ]
      ]
    },
    "prompt": "报表题：解释为什么「亏损但 P>AVC」仍要生产。",
    "hint": "固定成本已付。",
    "reference": "短期固定成本已发生（沉没），停业仍要付固定成本；只要 P>AVC，每卖一单位还能弥补部分固定成本，亏损小于停业，所以继续生产是最优。"
  },
  {
    "id": "micro-10-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两个行业的长期结果",
      "columns": [
        "行业",
        "进入壁垒",
        "长期利润",
        "价格"
      ],
      "rows": [
        [
          "奶茶（无壁垒）",
          "低",
          "≈0",
          "= 最低平均成本"
        ],
        [
          "专利药（有壁垒）",
          "高",
          "正",
          "> 边际成本"
        ]
      ]
    },
    "prompt": "报表题：用「自由进出」解释两个行业长期利润差异。",
    "hint": "壁垒挡住进入者。",
    "reference": "无壁垒行业：正利润吸引进入，供给增加、价格降到最低平均成本，经济利润归零；有专利壁垒的行业进入被挡住，超额利润得以维持——壁垒决定长期利润。"
  }
]
