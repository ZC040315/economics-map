// 像经济学家一样思考 · 分层题库（基础 4 + 进阶 4 + 疑难 4 + 报表 5）

export default [
  {
    "id": "micro-02-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "经济学家构建模型时通常先做什么？",
    "options": [
      "做简化假设，抓住核心关系",
      "放弃一切假设",
      "收集全部现实细节",
      "直接复制现实照片"
    ],
    "answer": 0,
    "explanation": "模型是简化：先做假设排除噪音，再观察核心变量关系——像地图省略细节但保留路线。"
  },
  {
    "id": "micro-02-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "循环流量图中，家庭通过什么向企业提供生产要素？",
    "options": [
      "产品市场",
      "金融市场",
      "要素市场",
      "政府市场"
    ],
    "answer": 2,
    "explanation": "家庭在要素市场提供劳动、资本等生产要素，企业支付工资与报酬。"
  },
  {
    "id": "micro-02-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "生产可能性边界（PPF）线上的点代表什么？",
    "options": [
      "资源被充分利用（有效率）",
      "资源无法达到",
      "资源闲置、无效率",
      "只生产一种商品"
    ],
    "answer": 0,
    "explanation": "PPF 线上的组合是满负荷生产；线内是资源闲置，线外是资源不足。"
  },
  {
    "id": "micro-02-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：「政府应该提高最低工资」属于实证表述。",
    "answer": false,
    "explanation": "这是规范表述（基于价值判断的「应该」）；实证表述描述「是什么」，如最低工资提高对就业的影响。"
  },
  {
    "id": "micro-02-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "「GDP 上涨说明经济变强」与「GDP 上涨了 3%」分别属于？",
    "options": [
      "前者实证、后者规范",
      "都是规范",
      "前者规范、后者实证",
      "都是实证"
    ],
    "answer": 2,
    "explanation": "「说明经济变强」是评价（规范）；「上涨 3%」是事实（实证）。"
  },
  {
    "id": "micro-02-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "PPF 凹向原点说明什么？",
    "options": [
      "资源无限",
      "机会成本递减",
      "机会成本递增",
      "机会成本不变"
    ],
    "answer": 2,
    "explanation": "凹向原点：越往边界端点移动，放弃的另一种产量越多——机会成本递增。"
  },
  {
    "id": "micro-02-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：循环流量图中，总收入一定等于总支出。",
    "answer": true,
    "explanation": "每一笔交易对买方是支出、对卖方是收入，所以总收入 = 总支出 = 总产出。"
  },
  {
    "id": "micro-02-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么说「所有人都省钱」可能导致经济衰退？用合成谬误解释。",
    "hint": "个体理性加总后不一定理性。",
    "reference": "一个人多储蓄是理性（个人财富增加）；但所有人都同时减少消费，总需求下降，企业收入减少、裁员增加，整体收入反而下降——这就是合成谬误：对个体有利的加总可能对整体有害。"
  },
  {
    "id": "micro-02-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "经济学家在「实证问题」上分歧通常较小，主要因为？",
    "options": [
      "实证问题可用数据检验，规范问题依赖价值判断",
      "他们价值观相同",
      "实证问题不需要模型",
      "经济学没有分歧"
    ],
    "answer": 0,
    "explanation": "实证表述可检验，研究者能用数据收敛；规范表述是价值判断，分歧自然更大。"
  },
  {
    "id": "micro-02-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：技术进步会让 PPF 如何变化？请从「边界外移」说明经济增长的来源。",
    "hint": "资源没变多，但能生产更多。",
    "reference": "技术进步提高生产效率：同样的资源能生产更多两种商品，PPF 整体向外移动。边界外移代表经济增长，来源是技术、资本积累与更好的制度——这与「生产率决定生活水平」的原理一致。"
  },
  {
    "id": "micro-02-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "tradeoff",
    "imageCaption": "生产可能性边界：线上有效、内部低效、外部不可达",
    "prompt": "图片题：图中 PPF 内部的点代表什么？",
    "options": [
      "机会成本为零",
      "资源未充分利用（无效率）",
      "有效率生产",
      "无法达到的组合"
    ],
    "answer": 1,
    "explanation": "边界内部说明还有闲置资源或低效使用，经济可以「免费」增加产出，不用放弃别的商品。"
  },
  {
    "id": "micro-02-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "tradeoff",
    "imageCaption": "沿 PPF 移动代表权衡取舍",
    "prompt": "图片题：结合 PPF 说明「多生产一种商品必然少生产另一种」的经济学含义。",
    "hint": "想想资源被占用的方向。",
    "reference": "PPF 表示资源已满负荷：沿曲线从 A 移到 B，多生产的商品占用了原本生产另一种商品的资源，因此另一种产量下降——这就是权衡取舍与机会成本的图形表达。"
  },
  {
    "id": "micro-02-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：电脑与手机的生产组合",
      "columns": [
        "组合",
        "电脑（万台）",
        "手机（万台）"
      ],
      "rows": [
        [
          "A",
          "100",
          "0"
        ],
        [
          "B",
          "80",
          "40"
        ],
        [
          "C",
          "50",
          "80"
        ],
        [
          "D",
          "0",
          "120"
        ]
      ]
    },
    "prompt": "报表题：从组合 B 移到组合 C，多生产手机的机会成本是多少台电脑？",
    "options": [
      "30 万台",
      "20 万台",
      "40 万台",
      "80 万台"
    ],
    "answer": 0,
    "explanation": "B→C：电脑从 80 降到 50（放弃 30），手机从 40 升到 80（多得 40），机会成本是 30 万台电脑。"
  },
  {
    "id": "micro-02-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某经济体的产出组合",
      "columns": [
        "组合",
        "面包（吨）",
        "衣服（吨）"
      ],
      "rows": [
        [
          "线上 A",
          "60",
          "50"
        ],
        [
          "内部 B",
          "40",
          "30"
        ],
        [
          "外部 C",
          "80",
          "70"
        ]
      ]
    },
    "prompt": "报表题：哪个组合说明资源未被充分利用？",
    "options": [
      "都不是",
      "B",
      "C",
      "A"
    ],
    "answer": 1,
    "explanation": "B 在 PPF 内部，说明资源闲置或低效；A 在线上有效率，C 在外部不可达。"
  },
  {
    "id": "micro-02-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两种陈述",
      "columns": [
        "编号",
        "陈述"
      ],
      "rows": [
        [
          "1",
          "提高最低工资会使低技能就业减少 2%"
        ],
        [
          "2",
          "政府应该提高最低工资以帮助低收入者"
        ],
        [
          "3",
          "去年 GDP 增长 5%"
        ],
        [
          "4",
          "GDP 增长说明人民生活变好"
        ]
      ]
    },
    "prompt": "报表题：把表中陈述分成「实证」和「规范」两类，并说明判断标准。",
    "hint": "能不能用数据检验？",
    "reference": "实证（可检验）：1、3——它们描述事实，可用数据验证；规范（价值判断）：2、4——「应该」「变好」依赖价值立场。判断标准：能否用证据证伪。"
  },
  {
    "id": "micro-02-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某经济体不同年份 PPF 数据（技术改进后）",
      "columns": [
        "年份",
        "最多生产食品（吨）",
        "最多生产服务（吨）"
      ],
      "rows": [
        [
          "2025",
          "100",
          "80"
        ],
        [
          "2026",
          "120",
          "96"
        ]
      ]
    },
    "prompt": "报表题：2026 年 PPF 相比 2025 年发生了什么？",
    "options": [
      "没有变化",
      "边界内移（衰退）",
      "只移动了一条轴",
      "边界整体外移（增长）"
    ],
    "answer": 3,
    "explanation": "两种商品的最大产量都增加 20%，说明技术/资源进步让 PPF 整体外移——经济增长。"
  },
  {
    "id": "micro-02-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：一家工厂两种产品的边际转换",
      "columns": [
        "生产阶段",
        "增加手机（台）",
        "放弃电脑（台）"
      ],
      "rows": [
        [
          "第 1 阶段",
          "0 → 40",
          "100 → 80（放弃 20）"
        ],
        [
          "第 2 阶段",
          "40 → 80",
          "80 → 50（放弃 30）"
        ],
        [
          "第 3 阶段",
          "80 → 120",
          "50 → 0（放弃 50）"
        ]
      ]
    },
    "prompt": "报表题：表格显示机会成本如何变化？用 PPF 的形状解释。",
    "hint": "放弃的电脑越来越多。",
    "reference": "每多生产 40 台手机，放弃的电脑从 20 增到 30、再增到 50——机会成本递增，所以 PPF 凹向原点。原因：资源并非完全通用，越专业化越「吃力」。"
  }
]
