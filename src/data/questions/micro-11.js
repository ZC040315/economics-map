// 市场结构：垄断与寡头 · 分层题库

export default [
  {
    "id": "micro-11-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "自来水公司属于哪种垄断？",
    "options": [
      "自然垄断",
      "资源独占",
      "政府特许",
      "价格歧视"
    ],
    "answer": 0,
    "explanation": "自来水固定成本巨大、重复建设浪费，一家供应成本最低——自然垄断。"
  },
  {
    "id": "micro-11-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "垄断者利润最大化的产量满足？",
    "options": [
      "MR = 0",
      "MR = MC",
      "P = ATC",
      "P = MC"
    ],
    "answer": 1,
    "explanation": "与竞争企业一样按 MR=MC 定产量，再按需求曲线定价（P > MC）。"
  },
  {
    "id": "micro-11-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "学生票 vs 成人票属于？",
    "options": [
      "垄断",
      "价格歧视",
      "公地悲剧",
      "搭便车"
    ],
    "answer": 1,
    "explanation": "对支付意愿不同的群体收不同价格，是典型价格歧视。"
  },
  {
    "id": "micro-11-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：市场份额大的企业一定违反反垄断法。",
    "answer": false,
    "explanation": "反垄断看是否滥用市场地位损害竞争与消费者，规模本身不违法。"
  },
  {
    "id": "micro-11-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "垄断相比竞争市场，产量与价格如何？",
    "options": [
      "产量更低、价格更高",
      "产量更低、价格更低",
      "产量更高、价格更低",
      "都相同"
    ],
    "answer": 0,
    "explanation": "垄断 P > MC，按更高价卖更少产量，造成无谓损失。"
  },
  {
    "id": "micro-11-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "两大航空公司默契「不降价」但都偷偷降价，这是？",
    "options": [
      "价格歧视",
      "囚徒困境",
      "合作共赢",
      "自然垄断"
    ],
    "answer": 1,
    "explanation": "合作对集体好，但单方背叛有利，双方都背叛 → 都降价，集体受损。"
  },
  {
    "id": "micro-11-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：完全价格歧视下垄断产量回到社会最优水平。",
    "answer": true,
    "explanation": "完全价格歧视按每个买家支付意愿定价，最后一个买家仍付 MC，产量最优；但全部剩余归垄断者。"
  },
  {
    "id": "micro-11-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：为什么说垄断造成「无谓损失」而不是「把消费者的钱转给企业」？",
    "hint": "没成交的那部分交易。",
    "reference": "垄断提价后，一部分「支付意愿高于成本但低于垄断价」的买家不买了：他们损失的消费者剩余没有变成垄断者利润（这部分交易根本不存在），是纯消失的剩余——无谓损失。"
  },
  {
    "id": "micro-11-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "自然垄断最优管制价格是？",
    "options": [
      "P = 任意高价",
      "价格为零",
      "P = 平均总成本（企业不亏，效率次优）",
      "P = 边际成本（需政府补贴，因 ATC 仍高于 MC）"
    ],
    "answer": 3,
    "explanation": "自然垄断 MC 低于 ATC，P=MC 最优但企业亏损，需要补贴；实际常折中为 P=ATC。"
  },
  {
    "id": "micro-11-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么「重复博弈」能让寡头维持合作，而一次性博弈不能？",
    "hint": "惩罚威胁。",
    "reference": "一次性博弈中背叛无后果，所以背叛占优；重复博弈中，背叛会被对方报复（下一轮降价），合作收益的现值大于短期背叛收益，可置信的惩罚威胁让合作稳定——所以卡特尔靠长期关系维持。"
  },
  {
    "id": "micro-11-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "surplus",
    "imageCaption": "垄断价格高于边际成本",
    "prompt": "图片题：垄断价格 P 高于边际成本 MC，说明什么？",
    "options": [
      "产量最优",
      "没有剩余",
      "价格低于成本",
      "存在无谓损失（部分交易未发生）"
    ],
    "answer": 3,
    "explanation": "P>MC 意味着「支付意愿在 MC 与 P 之间的买家」被挡在门外，这些本可成交的交易消失 → 无谓损失。"
  },
  {
    "id": "micro-11-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "surplus",
    "imageCaption": "垄断 vs 竞争总剩余",
    "prompt": "图片题：比较竞争与垄断的总剩余，垄断的损失在哪？",
    "hint": "价格抬高后谁被挤出市场？",
    "reference": "竞争均衡总剩余最大；垄断提价后产量减少，被挤出的那部分交易产生无谓损失（三角形），总剩余 = 消费者剩余 + 生产者剩余 − 无谓损失 < 竞争总剩余。"
  },
  {
    "id": "micro-11-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：市场结构特征",
      "columns": [
        "市场",
        "卖家数",
        "产品",
        "定价权"
      ],
      "rows": [
        [
          "完全竞争",
          "很多",
          "同质",
          "无"
        ],
        [
          "寡头",
          "少数",
          "可同质可差异",
          "有（互相制约）"
        ],
        [
          "垄断",
          "一个",
          "唯一",
          "强"
        ]
      ]
    },
    "prompt": "报表题：寡头与垄断的关键区别是？",
    "options": [
      "有没有利润",
      "没有区别",
      "卖家数量（少数 vs 唯一）",
      "产品是否同质"
    ],
    "answer": 2,
    "explanation": "寡头少数卖家相互依存；垄断唯一卖家无对手，定价权更强。"
  },
  {
    "id": "micro-11-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：垄断定价",
      "columns": [
        "价格",
        "需求量",
        "总收益",
        "总成本",
        "利润"
      ],
      "rows": [
        [
          "10",
          "100",
          "1000",
          "800",
          "200"
        ],
        [
          "12",
          "80",
          "960",
          "700",
          "260"
        ],
        [
          "14",
          "60",
          "840",
          "650",
          "190"
        ]
      ]
    },
    "prompt": "报表题：利润最大的价格是？",
    "options": [
      "14",
      "10",
      "无法判断",
      "12"
    ],
    "answer": 3,
    "explanation": "价格 12 时利润 260 最大——不是价格越高越好，需求会下降。"
  },
  {
    "id": "micro-11-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：囚徒困境收益矩阵（单位：百万）",
      "columns": [
        "厂商 A\\厂商 B",
        "B 降价",
        "B 维持高价"
      ],
      "rows": [
        [
          "A 降价",
          "A:3 / B:3",
          "A:8 / B:1"
        ],
        [
          "A 维持高价",
          "A:1 / B:8",
          "A:6 / B:6"
        ]
      ]
    },
    "prompt": "报表题：纳什均衡（双方最优应对）是哪格？",
    "options": [
      "A降B不降",
      "A不降B降",
      "都维持高价（6,6）",
      "都降价（3,3）"
    ],
    "answer": 3,
    "explanation": "无论对方选什么，降价都是各自最优（8>6、3>1），均衡是双方都降价（3,3）——集体次优。"
  },
  {
    "id": "micro-11-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：价格歧视场景",
      "columns": [
        "场景",
        "是否价格歧视",
        "依据"
      ],
      "rows": [
        [
          "学生票半价",
          "是",
          "按身份支付意愿"
        ],
        [
          "早鸟票更便宜",
          "是",
          "按时间支付意愿"
        ],
        [
          "不同城市定价不同",
          "是",
          "按地区支付意愿"
        ]
      ]
    },
    "prompt": "报表题：这些场景共同点是什么？对产量有什么影响？",
    "hint": "同成本不同价。",
    "reference": "共同点：相同或相近成本对不同支付意愿群体收不同价，把部分消费者剩余转化为利润。完全歧视时产量回到社会最优；部分歧视时产量介于垄断与竞争之间。"
  },
  {
    "id": "micro-11-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：反垄断案例思路",
      "columns": [
        "案例",
        "行为",
        "分析重点"
      ],
      "rows": [
        [
          "大厂并购",
          "减少竞争者",
          "是否显著抬高价格/减少创新"
        ],
        [
          "捆绑销售",
          "搭售强制",
          "是否排除竞争对手"
        ],
        [
          "专利药高价",
          "合法垄断",
          "专利激励创新 vs 高价损失"
        ]
      ]
    },
    "prompt": "报表题：为什么反垄断要「case by case」权衡，而不是一律反对大企业？",
    "hint": "规模/专利也有效率收益。",
    "reference": "大企业可带来规模经济、专利激励创新、网络效应等社会收益；反垄断应比较「限制竞争的成本」与「规模/创新的收益」，只有当行为明显损害消费者福利时才干预——所以需要个案分析而非一刀切。"
  }
]
