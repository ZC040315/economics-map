// 失业 · 分层题库（基础 4 + 进阶 4 + 疑难 4）

export default [
  {
    "id": "macro-04-basic-01",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "失业率的分母是？",
    "options": [
      "成年人口",
      "劳动力（就业 + 失业）",
      "总人口",
      "就业人数"
    ],
    "answer": 1,
    "explanation": "失业率 = 失业人数 ÷ 劳动力人数；不找工作的人（如家庭主妇、全职学生）不计入劳动力。"
  },
  {
    "id": "macro-04-basic-02",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "跳槽过渡期里暂时没工作，属于哪种失业？",
    "options": [
      "周期性失业",
      "摩擦性失业",
      "结构性失业",
      "自然失业"
    ],
    "answer": 1,
    "explanation": "摩擦性失业是「找工作需要时间」造成的短期空档，属于劳动力市场正常流动。"
  },
  {
    "id": "macro-04-basic-03",
    "difficulty": "basic",
    "type": "choice",
    "prompt": "经济衰退导致企业裁员，属于哪种失业？",
    "options": [
      "自然失业",
      "结构性失业",
      "摩擦性失业",
      "周期性失业"
    ],
    "answer": 3,
    "explanation": "周期性失业随经济周期起伏：衰退时总需求不足、订单减少、裁员增加。"
  },
  {
    "id": "macro-04-basic-04",
    "difficulty": "basic",
    "type": "truefalse",
    "prompt": "判断题：全职在家带孩子、不找工作的人，不算失业者。",
    "answer": true,
    "explanation": "正确。失业 = 有劳动意愿 + 正在找工作 + 没找到；不找工作的人退出劳动力，不计入失业。"
  },
  {
    "id": "macro-04-advanced-01",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "传统纸媒记者会写稿但不会做数据分析，新媒体岗位招不到他。这是？",
    "options": [
      "结构性失业",
      "季节性失业",
      "周期性失业",
      "摩擦性失业"
    ],
    "answer": 0,
    "explanation": "结构性失业是技能与岗位长期不匹配——岗位存在，但工人干不了或去不了。"
  },
  {
    "id": "macro-04-advanced-02",
    "difficulty": "advanced",
    "type": "choice",
    "prompt": "自然失业率由什么构成？",
    "options": [
      "只有结构性失业",
      "所有失业的总和",
      "只有周期性失业",
      "摩擦性失业 + 结构性失业"
    ],
    "answer": 3,
    "explanation": "自然失业率 = 摩擦 + 结构，是经济正常状态下「消灭不掉」的部分；周期性失业可随复苏回落。"
  },
  {
    "id": "macro-04-advanced-03",
    "difficulty": "advanced",
    "type": "truefalse",
    "prompt": "判断题：经济繁荣时期，失业率可以降到零。",
    "answer": false,
    "explanation": "错误。即使经济再好，也总有人正在换工作（摩擦）或技能过时在转行（结构），失业率降不到零。"
  },
  {
    "id": "macro-04-advanced-04",
    "difficulty": "advanced",
    "type": "essay",
    "prompt": "问答题：如果你是 HR，发现招不到「既懂业务又会数据分析」的人，这反映哪种失业？怎么缓解？",
    "hint": "想想岗位需求和技能供给的错配。",
    "reference": "这是结构性失业——岗位需要新技能，现有劳动力不具备。缓解办法：①企业提供在岗培训，帮员工升级技能；②求职者主动学习新技能（如数据分析）；③教育体系调整课程；④政策支持转岗培训。单靠经济回暖解决不了结构错配。"
  },
  {
    "id": "macro-04-challenge-01",
    "difficulty": "challenge",
    "type": "choice",
    "prompt": "政府把最低工资定得远高于均衡工资，最可能造成？",
    "options": [
      "工资自动下降",
      "就业增加",
      "低技能劳动者供大于求（失业增加）",
      "生产率提高"
    ],
    "answer": 2,
    "explanation": "最低工资高于均衡价 → 想找工作的人多于岗位（供给 > 需求），低技能劳动者的失业增加——价格管制在劳动市场的体现。"
  },
  {
    "id": "macro-04-challenge-02",
    "difficulty": "challenge",
    "type": "essay",
    "prompt": "问答题：为什么说「摩擦性失业对经济不完全是坏事」？",
    "hint": "想想跳槽带来的匹配效率。",
    "reference": "摩擦性失业是「找更好匹配」的过渡期：人在离职、面试、比较 offer 的过程中暂时没工作。这虽然暂时增加失业，但让工人和岗位更匹配——人尽其才、岗位得人，长期提升生产率和效率。完全消灭摩擦性失业反而意味着劳动力市场僵化。"
  },
  {
    "id": "macro-04-challenge-03",
    "difficulty": "challenge",
    "type": "choice",
    "image": "unemployment",
    "imageCaption": "失业的三种类型：摩擦性、结构性、周期性",
    "prompt": "图片题：图中哪两类失业加起来构成「自然失业率」？",
    "options": [
      "摩擦性 + 周期性",
      "摩擦性 + 结构性",
      "三类全部",
      "结构性 + 周期性"
    ],
    "answer": 1,
    "explanation": "自然失业率 = 摩擦性 + 结构性；周期性失业随经济波动，不属于「自然」部分。"
  },
  {
    "id": "macro-04-challenge-04",
    "difficulty": "challenge",
    "type": "essay",
    "image": "unemployment",
    "imageCaption": "摩擦性、结构性、周期性三类失业",
    "prompt": "图片题：金融危机来了，哪一类失业会明显增加？政府用「刺激需求」的政策能否解决另外两类？",
    "hint": "区分总需求不足和结构错配。",
    "reference": "金融危机使总需求不足，企业订单骤减、裁员增加——周期性失业明显上升，刺激需求的政策（降息、增支）能有效缓解。但摩擦性（找工作时间）和结构性（技能错配）不是总需求问题，刺激政策帮不上，要靠信息匹配、培训和转岗来解决。"
  },
  {
    "id": "macro-04-report-01",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某城市劳动力数据",
      "columns": [
        "项目",
        "人数"
      ],
      "rows": [
        [
          "就业者",
          "70 万人"
        ],
        [
          "失业者（在找工作）",
          "10 万人"
        ],
        [
          "不找工作的人",
          "20 万人"
        ]
      ]
    },
    "prompt": "报表题：根据表格，失业率是多少？",
    "options": [
      "20%",
      "14.3%",
      "12.5%",
      "10%"
    ],
    "answer": 2,
    "explanation": "劳动力 = 就业 70 + 失业 10 = 80 万；失业率 = 10 ÷ 80 = 12.5%。不找工作的 20 万不计入。"
  },
  {
    "id": "macro-04-report-02",
    "difficulty": "basic",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国失业人数构成",
      "columns": [
        "类型",
        "人数（万人）"
      ],
      "rows": [
        [
          "摩擦性失业",
          "80"
        ],
        [
          "结构性失业",
          "120"
        ],
        [
          "周期性失业",
          "50"
        ]
      ]
    },
    "prompt": "报表题：根据表格，自然失业率对应的人数是多少？",
    "options": [
      "250 万",
      "200 万",
      "80 万",
      "50 万"
    ],
    "answer": 1,
    "explanation": "自然失业率 = 摩擦 + 结构 = 80 + 120 = 200 万；周期性 50 万随经济波动，不属于自然部分。"
  },
  {
    "id": "macro-04-report-03",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：某国劳动力参与情况",
      "columns": [
        "年份",
        "失业率",
        "劳动力参与率"
      ],
      "rows": [
        [
          "2024",
          "5.0%",
          "62%"
        ],
        [
          "2025",
          "4.2%",
          "61%"
        ]
      ]
    },
    "prompt": "报表题：失业率下降，但劳动参与率也下降。最可能说明什么？",
    "options": [
      "就业一定大幅增加",
      "通胀下降",
      "部分人退出劳动力市场，失业率下降可能「被美化」",
      "失业率计算错误"
    ],
    "answer": 2,
    "explanation": "失业率 = 失业 ÷ 劳动力。如果很多人放弃找工作（退出劳动力），分子分母都变小，失业率下降——但这些人并没就业。"
  },
  {
    "id": "macro-04-report-04",
    "difficulty": "advanced",
    "type": "report",
    "answerMode": "essay",
    "table": {
      "title": "表：某市失业类型占比",
      "columns": [
        "类型",
        "占比",
        "特点"
      ],
      "rows": [
        [
          "摩擦性",
          "30%",
          "跳槽过渡"
        ],
        [
          "结构性",
          "55%",
          "技能不匹配"
        ],
        [
          "周期性",
          "15%",
          "随经济波动"
        ]
      ]
    },
    "prompt": "报表题：该市结构性失业占比 55%。作为政策制定者，你会采取什么措施？为什么降息（刺激需求）帮助有限？",
    "hint": "结构问题不是需求不足。",
    "reference": "结构性失业是技能与岗位错配，不是总需求不足。降息刺激总需求解决不了「工人干不了新岗位」的问题；应侧重职业培训、再就业服务、扶持转岗和让求职者获得新技能，从供给端弥合错配。"
  },
  {
    "id": "macro-04-report-05",
    "difficulty": "challenge",
    "type": "report",
    "answerMode": "choice",
    "table": {
      "title": "表：经济周期与失业率",
      "columns": [
        "年份",
        "经济状况",
        "失业率"
      ],
      "rows": [
        [
          "2024",
          "衰退",
          "9.0%"
        ],
        [
          "2025",
          "复苏",
          "7.0%"
        ],
        [
          "2026",
          "繁荣",
          "5.2%"
        ]
      ]
    },
    "prompt": "报表题：失业率从 9% 降到 5.2%。其中随经济回升「自然回落」的主要是哪一类？",
    "options": [
      "周期性失业（衰退时多、复苏时少）",
      "结构性失业",
      "摩擦性失业",
      "自然失业率"
    ],
    "answer": 0,
    "explanation": "经济从衰退走向繁荣，总需求恢复，周期性失业回落——这就是失业率随周期变化的主要原因。"
  }
]
