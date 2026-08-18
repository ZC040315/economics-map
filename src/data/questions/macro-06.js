// 总需求与总供给 · 分层题库

export default [
  {
    "id": "macro-06-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "总需求曲线为什么向右下倾斜？",
    "options": [
      "财富效应、利率效应、汇率效应",
      "规模经济",
      "边际效用递减",
      "替代效应"
    ],
    "answer": 0,
    "explanation": "物价上升通过财富缩水、利率上升、出口变贵三渠道抑制总需求。"
  },
  {
    "id": "macro-06-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "长期总供给曲线（LRAS）是？",
    "options": [
      "向右上倾斜",
      "水平",
      "垂直",
      "向右下倾斜"
    ],
    "answer": 2,
    "explanation": "长期产出由资源与技术决定，与物价无关——垂直。"
  },
  {
    "id": "macro-06-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "总需求下降导致短期？",
    "options": [
      "产出下降、失业上升",
      "无影响",
      "产出上升",
      "物价大涨"
    ],
    "answer": 0,
    "explanation": "AD 左移 → 短期产出下降、失业上升（衰退）。"
  },
  {
    "id": "macro-06-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：滞胀指产出下降与物价上升同时发生。",
    "answer": true,
    "explanation": "供给冲击使 SRAS 左移：产出降、物价升，即滞胀。"
  },
  {
    "id": "macro-06-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "油价暴涨属于？",
    "options": [
      "供给冲击",
      "财政冲击",
      "需求冲击",
      "货币冲击"
    ],
    "answer": 0,
    "explanation": "油价推高生产成本 → SRAS 左移 → 产出降物价升（滞胀）。"
  },
  {
    "id": "macro-06-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "短期总供给向上倾斜的主要原因？",
    "options": [
      "货币中性",
      "工资与价格存在黏性（名义调整慢）",
      "价格完全灵活",
      "政府管制"
    ],
    "answer": 1,
    "explanation": "价格黏性、工资黏性、错觉让短期物价上升刺激增产。"
  },
  {
    "id": "macro-06-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：长期来看，货币供给增加只会推高物价，不改变真实产出。",
    "answer": true,
    "explanation": "长期货币中性：产出回到潜在水平，货币只影响物价。"
  },
  {
    "id": "macro-06-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：用 AD-AS 解释「消费信心下降导致衰退」的传导。",
    "hint": "AD 左移的后果。",
    "reference": "消费信心下降 → 总需求 AD 左移 → 短期均衡沿 SRAS 下移：产出低于潜在水平、失业上升（衰退）、物价下行；若无政策干预，长期价格下调、产出慢慢回到潜在水平，但过程痛苦。"
  },
  {
    "id": "macro-06-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "滞胀时政策为何两难？",
    "options": [
      "出口不景气",
      "政策无效",
      "刺激需求治衰退会加剧通胀，紧缩治通胀会加深衰退",
      "政府没钱"
    ],
    "answer": 2,
    "explanation": "滞胀是供给问题：需求政策只能平移 AD，无法同时修复产出与物价。"
  },
  {
    "id": "macro-06-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「长期总供给垂直」意味着印钱长期不能增产？",
    "hint": "潜在产出由什么决定。",
    "reference": "长期产出由劳动、资本、技术、自然资源决定（潜在产出），与物价无关；印钱只改变价格水平（MV=PY），不能增加真实资源——所以长期货币中性。"
  },
  {
    "id": "macro-06-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "supply-demand",
    "imageCaption": "总需求与总供给",
    "prompt": "图片题：AD 右移（需求增加）短期均衡会？",
    "options": [
      "产出降物价升",
      "产出和物价都上升",
      "不变",
      "产出和物价都下降"
    ],
    "answer": 1,
    "explanation": "AD 右移沿 SRAS 上移：短期产出增加、物价上升（过热）。"
  },
  {
    "id": "macro-06-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "supply-demand",
    "imageCaption": "SRAS 左移：滞胀",
    "prompt": "图片题：SRAS 左移后均衡如何变化？为什么叫滞胀？",
    "hint": "产出与物价方向。",
    "reference": "SRAS 左移 → 新均衡：产出更低（衰退/停滞）、物价更高（通胀）——产出降+物价升同时出现就是滞胀，供给冲击是典型原因。"
  },
  {
    "id": "macro-06-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：冲击类型",
      "columns": [
        "事件",
        "影响",
        "类型"
      ],
      "rows": [
        [
          "政府大额减税",
          "AD 右移",
          "需求"
        ],
        [
          "油价翻倍",
          "SRAS 左移",
          "供给"
        ],
        [
          "出口骤降",
          "AD 左移",
          "需求"
        ]
      ]
    },
    "prompt": "报表题：出口骤降属于哪类冲击？",
    "options": [
      "需求冲击",
      "货币冲击",
      "供给冲击",
      "无冲击"
    ],
    "answer": 0,
    "explanation": "出口减少直接压低总需求（净出口是 AD 的组成部分）。"
  },
  {
    "id": "macro-06-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：需求冲击结果",
      "columns": [
        "冲击",
        "短期产出",
        "短期物价"
      ],
      "rows": [
        [
          "消费大增",
          "上升",
          "上升"
        ],
        [
          "投资骤减",
          "下降",
          "下降"
        ]
      ]
    },
    "prompt": "报表题：投资骤减（AD 左移）短期结果是？",
    "options": [
      "产出升、物价降",
      "产出降、物价降",
      "产出升、物价升",
      "不变"
    ],
    "answer": 1,
    "explanation": "AD 左移沿 SRAS 下移：产出与物价同降（需求不足型衰退）。"
  },
  {
    "id": "macro-06-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：短期与长期",
      "columns": [
        "时段",
        "产出",
        "物价",
        "就业"
      ],
      "rows": [
        [
          "短期（AD 右移）",
          "高于潜在",
          "上升",
          "低于自然率"
        ],
        [
          "长期（价格调整后）",
          "回到潜在",
          "更高",
          "回到自然率"
        ]
      ]
    },
    "prompt": "报表题：解释短期与长期产出/就业为何不同。",
    "hint": "价格调整。",
    "reference": "短期价格黏性，AD 右移让产出高于潜在、就业低于自然率；长期工资价格完全调整，产出回到潜在、就业回到自然率，只剩物价更高——即长期货币中性。"
  },
  {
    "id": "macro-06-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：政策对 AD 的影响",
      "columns": [
        "政策",
        "对 AD"
      ],
      "rows": [
        [
          "降息",
          "右移（刺激）"
        ],
        [
          "增支",
          "右移（刺激）"
        ],
        [
          "加息",
          "左移（紧缩）"
        ],
        [
          "增税",
          "左移（紧缩）"
        ]
      ]
    },
    "prompt": "报表题：经济过热时该选哪组政策？",
    "options": [
      "降息+增支",
      "降息+减税",
      "不加不减",
      "加息+增税"
    ],
    "answer": 3,
    "explanation": "过热需紧缩：加息、增税让 AD 左移，降温。"
  },
  {
    "id": "macro-06-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：两次危机对比",
      "columns": [
        "事件",
        "冲击",
        "产出",
        "物价"
      ],
      "rows": [
        [
          "金融危机（需求崩）",
          "AD 左移",
          "下降",
          "下行压力"
        ],
        [
          "石油危机（成本升）",
          "SRAS 左移",
          "下降",
          "上升"
        ]
      ]
    },
    "prompt": "报表题：同样是产出下降，为什么政策应对不同？",
    "hint": "物价方向不同。",
    "reference": "需求衰退（物价下行）应刺激需求（宽松财政/货币）拉回产出；供给冲击滞胀（物价上升）刺激需求会加剧通胀，需供给侧改革或谨慎权衡——政策取决于冲击类型。"
  }
]
