// 通货膨胀 · 分层题库（基础 4 + 进阶 4 + 疑难 4）

export default [
  {
    "id": "macro-03-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "通货膨胀是指？",
    "options": [
      "物价总水平持续上升",
      "股市上涨",
      "工资上涨",
      "个别商品涨价"
    ],
    "answer": 0,
    "explanation": "通胀是「物价总水平」持续上升，不是某个商品涨价。"
  },
  {
    "id": "macro-03-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "CPI（消费物价指数）衡量的是？",
    "options": [
      "政府支出",
      "一篮子代表性消费品价格的变化",
      "股市涨跌",
      "工资水平"
    ],
    "answer": 1,
    "explanation": "CPI 用「普通人购物篮」里米、菜、房租、交通等价格变化衡量生活成本变化。"
  },
  {
    "id": "macro-03-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "通货膨胀对持有现金的人有什么影响？",
    "options": [
      "实际购买力下降",
      "现金自动变多",
      "实际购买力上升",
      "没有影响"
    ],
    "answer": 0,
    "explanation": "通胀是「钱不值钱」——现金和固定存款的购买力被悄悄稀释。"
  },
  {
    "id": "macro-03-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：通货膨胀归根到底是一种货币现象——钱发行多了，物价就涨。",
    "answer": true,
    "explanation": "正确。弗里德曼名言：通胀归根到底是货币现象——钱多了而商品没变多，物价自然上升。"
  },
  {
    "id": "macro-03-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "餐厅频繁重印菜单、公司频繁调价，这属于通胀的什么成本？",
    "options": [
      "无谓损失",
      "菜单成本",
      "税收扭曲",
      "鞋底成本"
    ],
    "answer": 1,
    "explanation": "菜单成本指因通胀而频繁改价的折腾成本——不只是印菜单，还包括改价签、调系统。"
  },
  {
    "id": "macro-03-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "未预期的高通胀下，谁通常更吃亏？",
    "options": [
      "债权人（把钱借出去的人）",
      "债务人（借钱的人）",
      "政府",
      "没有影响"
    ],
    "answer": 0,
    "explanation": "借出去的钱按名义金额归还，通胀让实际价值缩水——债权人被「暗地里征税」。"
  },
  {
    "id": "macro-03-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：通胀让价格信号变乱，人们更难判断「该生产什么」。",
    "answer": true,
    "explanation": "正确。涨价到底是「需求变强」还是「货币变多」分不清，价格信号失真，资源配置被扰乱。"
  },
  {
    "id": "macro-03-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：十年前 100 元能买 5 斤肉，现在只能买 3 斤。这说明什么？用购买力解释。",
    "hint": "不是钱少了，是钱能买到的东西少了。",
    "reference": "说明发生了通胀：物价总水平上升，货币购买力下降。同样 100 元，名义金额没变，但能换到的实物变少——你的购买力缩水了。"
  },
  {
    "id": "macro-03-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "治理高通胀最根本的手段是？",
    "options": [
      "多发货币刺激经济",
      "提高最低工资",
      "控制货币发行并稳定通胀预期",
      "增加政府支出"
    ],
    "answer": 2,
    "explanation": "通胀是货币现象——管住钱、稳住预期（让公众相信物价会稳），才能治本。"
  },
  {
    "id": "macro-03-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么说「预期」在通胀里很重要？工资和物价会怎样互相推动？",
    "hint": "想想大家若都预期明年涨价 10%，会怎么要工资、怎么定价。",
    "reference": "如果大家都预期通胀 10%：工人要求工资涨 10% 保住购买力，企业把工资成本转嫁进价格涨 10%，结果物价真的涨 10%——预期自我实现，形成工资-物价螺旋。所以央行要「稳住预期」：一旦公众相信物价稳定，螺旋就转不起来。"
  },
  {
    "id": "macro-03-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "inflation",
    "imageCaption": "商品量不变、货币量增加时物价的变化",
    "prompt": "图片题：图中「商品量保持水平、货币量一路向上」说明什么？",
    "options": [
      "货币太多而商品没变多 → 物价上涨",
      "货币不影响物价",
      "产量决定物价",
      "商品越多物价越贵"
    ],
    "answer": 0,
    "explanation": "货币是「买商品的凭证」：凭证变多而商品不变，每个凭证能换到的商品变少——物价上涨。"
  },
  {
    "id": "macro-03-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "inflation",
    "imageCaption": "商品量不变、货币量增加时物价的变化",
    "prompt": "图片题：结合图示，解释为什么「央行印钱不能真正让国家变富」。",
    "hint": "钱变多只是让物价变高，产出没变。",
    "reference": "图里货币量增加，但商品量（真实产出）没变——印钱只改变「每个商品标多少价」，不改变能生产多少。GDP 由实际产出决定，货币只是尺子：尺子拉长了，量出来的数字大了，但东西还是那么多，所以国家不会因印钱变富。"
  },
  {
    "id": "macro-03-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国 CPI",
      "columns": [
        "年份",
        "CPI"
      ],
      "rows": [
        [
          "2024",
          "100"
        ],
        [
          "2025",
          "105"
        ],
        [
          "2026",
          "110"
        ]
      ]
    },
    "prompt": "报表题：2024–2026 年 CPI 从 100 涨到 110，说明物价？",
    "options": [
      "先降后升",
      "下降",
      "总水平持续上升（通胀）",
      "不变"
    ],
    "answer": 2,
    "explanation": "CPI 持续上升 = 一篮子消费品价格总水平上涨，即通货膨胀。"
  },
  {
    "id": "macro-03-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：你的存款与物价",
      "columns": [
        "项目",
        "金额/水平"
      ],
      "rows": [
        [
          "存款",
          "10000 元"
        ],
        [
          "一年前物价水平",
          "100"
        ],
        [
          "一年后物价水平",
          "110"
        ]
      ]
    },
    "prompt": "报表题：物价涨了 10%，你 10000 元存款的实际购买力？",
    "options": [
      "缩水了（同样钱买到的东西变少）",
      "自动变多",
      "完全不变",
      "变强了"
    ],
    "answer": 0,
    "explanation": "物价涨 10%，同样 10000 元能买到的东西少约 10%——现金购买力被通胀稀释。"
  },
  {
    "id": "macro-03-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：两种商品价格一年变化",
      "columns": [
        "商品",
        "年初价格",
        "年末价格"
      ],
      "rows": [
        [
          "鸡蛋",
          "5 元",
          "4.8 元"
        ],
        [
          "汽油",
          "7 元",
          "8.4 元"
        ]
      ]
    },
    "prompt": "报表题：鸡蛋降价、汽油涨价。能说「发生了通货膨胀」吗？为什么？",
    "options": [
      "不能，通胀指物价总水平持续上升，不是个别商品",
      "能，因为汽油涨了",
      "能，因为鸡蛋也变了",
      "不能，价格永远不变"
    ],
    "answer": 0,
    "explanation": "通胀是「物价总水平」上升——个别商品涨跌很正常，要看一篮子总水平（如 CPI），不能凭一种商品判断。"
  },
  {
    "id": "macro-03-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：借钱的约定与实际通胀",
      "columns": [
        "项目",
        "数值"
      ],
      "rows": [
        [
          "你借给朋友",
          "10000 元"
        ],
        [
          "一年后归还",
          "10000 元"
        ],
        [
          "这一年实际通胀",
          "12%"
        ]
      ]
    },
    "prompt": "报表题：借出 10000 元，一年后朋友还 10000 元，期间通胀 12%。谁吃亏了？为什么？",
    "hint": "还回来的钱购买力如何？",
    "reference": "债权人（你）吃亏：还回来的 10000 元按名义金额不变，但通胀 12% 让它的实际购买力缩水约 12%——相当于借出的钱「变轻了」。未预期的通胀把财富从债权人转给债务人。"
  },
  {
    "id": "macro-03-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：预期通胀率与工资涨幅",
      "columns": [
        "情景",
        "预期明年通胀",
        "工人要求的工资涨幅",
        "企业提价幅度"
      ],
      "rows": [
        [
          "预期稳定",
          "2%",
          "2%",
          "2%"
        ],
        [
          "预期失控",
          "15%",
          "15%",
          "15%"
        ]
      ]
    },
    "prompt": "报表题：当大家都预期通胀 15% 时，工资和物价都按 15% 涨。这说明？",
    "options": [
      "通胀预期会自我实现（工资-物价螺旋）",
      "预期越高通胀越低",
      "通胀只由货币决定，与预期无关",
      "预期不影响通胀"
    ],
    "answer": 0,
    "explanation": "预期 15% → 工资要求涨 15% → 成本推高价格 15% → 通胀真的 15%。稳住预期，螺旋就转不起来。"
  }
]
