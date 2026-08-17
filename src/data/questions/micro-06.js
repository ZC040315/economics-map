// 市场效率 · 分层题库（基础 4 + 进阶 4 + 疑难 4）

export default [
  {
    "id": "micro-06-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "消费者剩余是指？",
    "options": [
      "实际支付价格减去愿意支付的最高价",
      "商家的利润",
      "愿意支付的最高价减去实际支付价格",
      "商品的生产成本"
    ],
    "answer": 2,
    "explanation": "消费者剩余 = 心理价位 − 实付价格，衡量买家「捡到便宜」的净收益。"
  },
  {
    "id": "micro-06-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "生产者剩余是指？",
    "options": [
      "实际收到价格减去愿意接受的最低价",
      "愿意接受的最低价减去实际收到价格",
      "消费者的心理价位",
      "政府的税收"
    ],
    "answer": 0,
    "explanation": "生产者剩余 = 实收价格 − 心理底线，衡量卖家「卖了个好价」的净收益。"
  },
  {
    "id": "micro-06-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "市场效率通常用什么衡量？",
    "options": [
      "商品数量最多",
      "政府税收最多",
      "消费者剩余 + 生产者剩余的总和最大",
      "价格最低"
    ],
    "answer": 2,
    "explanation": "总剩余最大 = 资源配置最有效：资源到了最想要它的人手里，没有浪费。"
  },
  {
    "id": "micro-06-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：竞争市场在供求自由达到均衡时，总剩余最大。",
    "answer": true,
    "explanation": "正确。均衡价格让愿意出高价的人买到、成本低的生产者卖出，没有错配，总剩余最大。"
  },
  {
    "id": "micro-06-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "你心里觉得手机值 5000，实际 4000 买到。你的消费者剩余是？",
    "options": [
      "1000",
      "9000",
      "4000",
      "5000"
    ],
    "answer": 0,
    "explanation": "消费者剩余 = 5000 − 4000 = 1000，是你「赚到」的心理差价。"
  },
  {
    "id": "micro-06-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "工厂排污污染河流，但价格里没算上污染成本。这属于？",
    "options": [
      "市场效率最高",
      "公共物品过剩",
      "信息完全对称",
      "外部性导致市场失灵"
    ],
    "answer": 3,
    "explanation": "外部性让真实成本没进价格——产量对全社会来说「太多」，市场均衡不再是效率最优。"
  },
  {
    "id": "micro-06-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：只要买卖双方自愿交易，这笔交易就同时增加消费者剩余和生产者剩余。",
    "answer": true,
    "explanation": "正确。自愿交易意味着双方都觉得划算：买家付出低于心理价、卖家收入高于底线，双方都获得剩余。"
  },
  {
    "id": "micro-06-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么竞争市场均衡下「资源到了最需要它的人手里」？用消费者和生产者剩余解释。",
    "hint": "想想谁会在均衡价买到、谁会在均衡价卖出。",
    "reference": "均衡价下，愿意出更高价的买家（高消费者剩余）自然买到，不愿意出价的退出；成本更低的生产者（高生产者剩余）自然供应，高成本者退出。资源流向「估值最高」的人，没有被浪费——这正是总剩余最大化的含义。"
  },
  {
    "id": "micro-06-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "政府对某商品征税后，总剩余会怎样？",
    "options": [
      "总剩余增加",
      "总剩余减少（出现无谓损失）",
      "只影响消费者剩余",
      "总剩余不变"
    ],
    "answer": 1,
    "explanation": "税收让一部分本可成交的交易不再发生（买卖双方都放弃），这部分消失的剩余就是无谓损失——总剩余变小。"
  },
  {
    "id": "micro-06-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「垄断」会让市场失去效率？",
    "hint": "想想垄断者定价高于边际成本后，哪些买家被挤出市场。",
    "reference": "垄断者把价格定得高于边际成本以赚取利润，导致一部分「愿意付的成本高于边际成本但低于垄断价」的买家买不起——这些本该成交的交易消失了，造成无谓损失，总剩余低于竞争均衡，市场不再效率最优。"
  },
  {
    "id": "micro-06-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "surplus",
    "imageCaption": "均衡价格 P* 下的消费者剩余与生产者剩余",
    "prompt": "图片题：图中蓝色区域（需求线下方、价格线上方）代表什么？",
    "options": [
      "无谓损失",
      "生产者剩余",
      "消费者剩余",
      "政府税收"
    ],
    "answer": 2,
    "explanation": "需求曲线下方、价格线上方的三角形是消费者剩余——买家「愿意多付但没付」的部分。"
  },
  {
    "id": "micro-06-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "surplus",
    "imageCaption": "消费者剩余（上三角）与生产者剩余（下三角）",
    "prompt": "图片题：结合图示说明，如果价格被人为压低到 P* 以下，图中哪部分剩余会消失（无谓损失）？",
    "hint": "价格压低后，成交数量减少，想想买卖双方各损失什么。",
    "reference": "价格低于均衡价时，成交数量减少。一部分原本会成交的买家（愿意出价高于新价但买不到）和卖家（愿意以高于新价卖但卖不出）都退出，他们本可获得的剩余消失——即图中「均衡数量与新数量之间」被切掉的那两块三角形，就是无谓损失。"
  },
  {
    "id": "micro-06-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：你买手机的心理价位与实际价格",
      "columns": [
        "项目",
        "金额"
      ],
      "rows": [
        [
          "你愿意支付的最高价",
          "5000 元"
        ],
        [
          "实际支付价格",
          "4000 元"
        ]
      ]
    },
    "prompt": "报表题：根据表格，你的消费者剩余是多少？",
    "options": [
      "1000 元",
      "5000 元",
      "4000 元",
      "9000 元"
    ],
    "answer": 0,
    "explanation": "消费者剩余 = 愿意支付的最高价 − 实付价格 = 5000 − 4000 = 1000 元。"
  },
  {
    "id": "micro-06-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：你接一单活的心理底线与实际收入",
      "columns": [
        "项目",
        "金额"
      ],
      "rows": [
        [
          "你愿意接受的最低价",
          "800 元"
        ],
        [
          "实际收到价格",
          "1200 元"
        ]
      ]
    },
    "prompt": "报表题：根据表格，你的生产者剩余是多少？",
    "options": [
      "1200 元",
      "400 元",
      "800 元",
      "2000 元"
    ],
    "answer": 1,
    "explanation": "生产者剩余 = 实收价格 − 心理底线 = 1200 − 800 = 400 元。"
  },
  {
    "id": "micro-06-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：一次交易中买卖双方的剩余",
      "columns": [
        "角色",
        "剩余金额"
      ],
      "rows": [
        [
          "买家（消费者剩余）",
          "1000 元"
        ],
        [
          "卖家（生产者剩余）",
          "400 元"
        ]
      ]
    },
    "prompt": "报表题：这笔交易的总剩余（买卖双方总收益）是多少？",
    "options": [
      "1400 元",
      "400 元",
      "600 元",
      "1000 元"
    ],
    "answer": 0,
    "explanation": "总剩余 = 消费者剩余 + 生产者剩余 = 1000 + 400 = 1400 元——市场效率看的就是这个总和。"
  },
  {
    "id": "micro-06-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：竞争与垄断下的总剩余",
      "columns": [
        "市场结构",
        "消费者剩余",
        "生产者剩余",
        "总剩余"
      ],
      "rows": [
        [
          "竞争市场",
          "5000",
          "3000",
          "8000"
        ],
        [
          "垄断市场",
          "2000",
          "4500",
          "6500"
        ]
      ]
    },
    "prompt": "报表题：对比表格，垄断让总剩余从 8000 降到 6500。消失的 1500 是什么？用「无谓损失」解释。",
    "hint": "看总剩余少了的部分去了哪里。",
    "reference": "垄断把价格抬高，一部分本可成交的交易没发生：消费者剩余从 5000 掉到 2000（其中一部分变成垄断者的生产者剩余，但还有一部分既没给消费者也没给生产者——就是无谓损失 1500）。总剩余减少说明资源被错配。"
  },
  {
    "id": "micro-06-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：政府征税后各方的剩余变化",
      "columns": [
        "项目",
        "征税前",
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
        ]
      ]
    },
    "prompt": "报表题：征税后，总剩余（三方合计）从 5000 变成了多少？",
    "options": [
      "5000",
      "3000",
      "4000",
      "4500"
    ],
    "answer": 3,
    "explanation": "征税后总剩余 = 1800 + 1200 + 1500 = 4500，比征税前少 500——这 500 就是无谓损失（税收让本可成交的交易消失）。"
  }
]
