// 政府政策：价格控制与税收 · 分层题库

export default [
  {
    "id": "micro-05-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "价格上限低于均衡价格时，市场会出现？",
    "options": [
      "短缺",
      "过剩",
      "供给增加",
      "均衡"
    ],
    "answer": 0,
    "explanation": "限价低于均衡 → 需求量大于供给量 → 短缺。"
  },
  {
    "id": "micro-05-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "价格下限高于均衡价格时，市场会出现？",
    "options": [
      "短缺",
      "过剩",
      "需求增加",
      "均衡"
    ],
    "answer": 1,
    "explanation": "最低价高于均衡 → 供给量大于需求量 → 过剩。"
  },
  {
    "id": "micro-05-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "对香烟加税，税负主要由谁承担？（吸烟者很难戒掉）",
    "options": [
      "消费者",
      "生产者",
      "政府",
      "双方完全平均"
    ],
    "answer": 0,
    "explanation": "吸烟需求缺乏弹性，涨价也得买，所以消费者承担大部分税负。"
  },
  {
    "id": "micro-05-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：法定由卖方缴纳的税，最终一定全部由卖方承担。",
    "answer": false,
    "explanation": "税负按供需弹性分摊，与法律上向谁征税无关。"
  },
  {
    "id": "micro-05-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "最低工资高于均衡工资，最可能导致？",
    "options": [
      "低技能劳动者失业增加",
      "低技能劳动者供不应求",
      "所有工资上涨",
      "岗位增加"
    ],
    "answer": 0,
    "explanation": "最低工资是价格下限：工资高于均衡 → 劳动供给 > 需求 → 失业增加。"
  },
  {
    "id": "micro-05-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "政府征收交易税后，成交数量相比无税时？",
    "options": [
      "先增后减",
      "不变",
      "减少",
      "增加"
    ],
    "answer": 2,
    "explanation": "税抬高买价、压低卖价，部分本可成交的交易被挤出，成交量减少。"
  },
  {
    "id": "micro-05-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：价格上限造成的短缺，可以通过政府「多印钱」彻底解决。",
    "answer": false,
    "explanation": "短缺的根源是价格信号被压住、供给激励不足；印钱只会推高通胀，不增加真实供给。"
  },
  {
    "id": "micro-05-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么说「房租限价」短期看似帮租客，长期可能害了租客？",
    "hint": "想想房东的投资激励。",
    "reference": "短期限价让现有租客少付钱（但排队、黑市出现）；长期看，低回报使房东减少新住房建设与维护，供给收缩，更多人找不到房——最终租客整体更糟。价格控制改变长期激励。"
  },
  {
    "id": "micro-05-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "对「需求富有弹性、供给缺乏弹性」的商品征税，税负主要落在？",
    "options": [
      "政府",
      "生产者",
      "无法判断",
      "消费者"
    ],
    "answer": 1,
    "explanation": "税负更多落在弹性小的一方：供给缺乏弹性，生产者难以转产，承担大部分税负。"
  },
  {
    "id": "micro-05-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「无谓损失」不是税收收入，而是纯损失？",
    "hint": "想想被挤出交易的那部分剩余。",
    "reference": "税收让一部分「买方愿付价高于卖方愿收价」的交易不再发生：买方少得了消费者剩余，卖方少得了生产者剩余，而政府也没收到这笔税——这部分消失的剩余就是无谓损失，谁也没拿到。"
  },
  {
    "id": "micro-05-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "supply-demand",
    "imageCaption": "供需曲线：均衡点 E",
    "prompt": "图片题：政府规定价格必须高于均衡价 P*，图中会出现？",
    "options": [
      "均衡不变",
      "需求增加",
      "短缺",
      "过剩（供给量 > 需求量）"
    ],
    "answer": 3,
    "explanation": "价格高于均衡 → 供给量大于需求量 → 过剩，与价格上限正好相反。"
  },
  {
    "id": "micro-05-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "surplus",
    "imageCaption": "税收产生的无谓损失区域",
    "prompt": "图片题：结合图示说明，征税后总剩余如何变化，无谓损失在哪？",
    "hint": "成交数量比无税时少。",
    "reference": "征税使成交数量低于均衡数量：消费者剩余与生产者剩余各减少一部分，其中一部分变成政府税收，但「均衡数量与新数量之间」被切掉的两块三角形（买方少得的+卖方少得的）不属于任何人——就是无谓损失，总剩余因此下降。"
  },
  {
    "id": "micro-05-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某商品在限价下的市场状态",
      "columns": [
        "价格",
        "需求量",
        "供给量"
      ],
      "rows": [
        [
          "均衡价 8 元",
          "100",
          "100"
        ],
        [
          "限价 5 元",
          "150",
          "60"
        ]
      ]
    },
    "prompt": "报表题：限价 5 元时出现什么状态？",
    "options": [
      "无影响",
      "短缺 90",
      "过剩 90",
      "均衡"
    ],
    "answer": 1,
    "explanation": "需求量 150 > 供给量 60，短缺 90——价格上限低于均衡制造短缺。"
  },
  {
    "id": "micro-05-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：最低工资对劳动市场的影响",
      "columns": [
        "工资水平",
        "劳动需求（岗位）",
        "劳动供给（求职者）"
      ],
      "rows": [
        [
          "均衡工资 3000",
          "100",
          "100"
        ],
        [
          "最低工资 4000",
          "70",
          "140"
        ]
      ]
    },
    "prompt": "报表题：最低工资 4000 元时，低技能劳动者过剩多少人？",
    "options": [
      "30 人",
      "70 人",
      "40 人",
      "140 人"
    ],
    "answer": 1,
    "explanation": "供给 140 − 需求 70 = 过剩 70 人（失业增加 70 相对均衡）。"
  },
  {
    "id": "micro-05-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：两种商品加税后的税负分担",
      "columns": [
        "商品",
        "需求弹性",
        "供给弹性",
        "消费者承担"
      ],
      "rows": [
        [
          "香烟",
          "小",
          "大",
          "80%"
        ],
        [
          "名牌包",
          "大",
          "小",
          "25%"
        ]
      ]
    },
    "prompt": "报表题：为什么香烟税负 80% 落在消费者、名牌包只有 25%？",
    "options": [
      "政府规定消费者承担比例",
      "弹性小的一方承担更多",
      "与弹性无关",
      "价格越低承担越多"
    ],
    "answer": 1,
    "explanation": "香烟需求弹性小（戒不掉）→ 消费者承担 80%；名牌包需求弹性大 → 消费者可放弃，税负转给生产者（供给弹性小）。"
  },
  {
    "id": "micro-05-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：征税前后的剩余变化",
      "columns": [
        "项目",
        "无税",
        "征税后"
      ],
      "rows": [
        [
          "消费者剩余",
          "3000",
          "1800"
        ],
        [
          "生产者剩余",
          "2000",
          "1200"
        ],
        [
          "政府税收",
          "0",
          "1500"
        ],
        [
          "总剩余",
          "5000",
          "4500"
        ]
      ]
    },
    "prompt": "报表题：解释总剩余从 5000 降到 4500 的 500 是什么？",
    "hint": "不是税收，税收已经在 1500 里了。",
    "reference": "总剩余 = 消费者 + 生产者 + 政府 = 4500，比无税时少 500。这 500 不是政府收入（税收 1500 已计入），而是被税收挤出市场的交易所消失的剩余——无谓损失。"
  },
  {
    "id": "micro-05-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两种限价政策的实际效果",
      "columns": [
        "政策",
        "名义价格",
        "实际买到/卖出",
        "隐性代价"
      ],
      "rows": [
        [
          "口罩限价",
          "便宜",
          "更难买到",
          "排队、黑市、供应萎缩"
        ],
        [
          "放开价格",
          "短期贵",
          "供应恢复",
          "高价刺痛但供给跟上"
        ]
      ]
    },
    "prompt": "报表题：用「价格是激励」解释为什么放开价格后供应能恢复。",
    "hint": "利润信号引导生产者。",
    "reference": "限价压低了生产者的利润激励，供应萎缩；放开价格后，高价成为利润信号，吸引更多厂商增产、扩产，供应跟上后价格自然回落。价格控制扭曲激励，放开价格让激励归位。"
  }
]
