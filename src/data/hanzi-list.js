const hanziList = [
  {
    frame: 1,
    keyword: 'eins',
    character: '一',
    pinyin: 'yī',
  },
  {
    frame: 2,
    keyword: 'zwei',
    character: '二',
    pinyin: 'èr',
  },
  {
    frame: 3,
    keyword: 'drei',
    character: '三',
    pinyin: 'sān',
  },
  {
    frame: 4,
    keyword: 'vier',
    character: '四',
    pinyin: 'sì',
  },
  {
    frame: 5,
    keyword: 'fünf',
    character: '五',
    pinyin: 'wǔ',
  },
  {
    frame: 6,
    keyword: 'sechs',
    character: '六',
    pinyin: 'liù',
  },
  {
    frame: 7,
    keyword: 'sieben',
    character: '七',
    pinyin: 'qī',
  },
  {
    frame: 8,
    keyword: 'acht',
    character: '八',
    pinyin: 'bā',
  },
  {
    frame: 9,
    keyword: 'neun',
    character: '九',
    pinyin: 'jiǔ',
  },
  {
    frame: 10,
    keyword: 'zehn',
    character: '十',
    pinyin: 'shí',
  },
  {
    frame: 11,
    keyword: 'Mund',
    character: '口',
    pinyin: 'kǒu',
  },
  {
    frame: 12,
    keyword: 'Tag',
    character: '日',
    pinyin: 'rì',
  },
  {
    frame: 13,
    keyword: 'Monat',
    character: '月',
    pinyin: 'yuè',
  },
  {
    frame: 14,
    keyword: 'Reisfeld',
    character: '田',
    pinyin: 'tián',
  },
  {
    frame: 15,
    keyword: 'Auge',
    character: '目',
    pinyin: 'mù',
  },
  {
    frame: 16,
    keyword: 'altertümlich',
    character: '古',
    pinyin: 'gǔ',
  },
  {
    frame: 17,
    keyword: 'leichtsinnig',
    character: '胡',
    pinyin: 'hú',
  },
  {
    frame: 18,
    keyword: 'ich (literarisch)',
    character: '吾',
    pinyin: 'wú',
  },
  {
    frame: 19,
    keyword: 'Gefährte',
    character: '朋',
    pinyin: 'péng',
  },
  {
    frame: 20,
    keyword: 'hell',
    character: '明',
    pinyin: 'míng',
  },

  {
    frame: 21,
    keyword: 'Waren',
    character: '品',
    pinyin: 'pǐn',
  },
  {
    frame: 22,
    keyword: 'funkelnd',
    character: '晶',
    pinyin: 'jīng',
  },
  {
    frame: 23,
    keyword: 'gedeihlich',
    character: '昌',
    pinyin: 'chāng',
  },
  {
    frame: 24,
    keyword: 'singen',
    character: '唱',
    pinyin: 'chàng',
  },
  {
    frame: 25,
    keyword: 'früh',
    character: '早',
    pinyin: 'zǎo',
  },
  {
    frame: 26,
    keyword: 'aufgehende Sonne',
    character: '旭',
    pinyin: 'xù',
  },
  {
    frame: 27,
    keyword: 'Generation',
    character: '世',
    pinyin: 'shì',
  },
  {
    frame: 28,
    keyword: 'Magen',
    character: '胃',
    pinyin: 'wèi',
  },
  {
    frame: 29,
    keyword: 'Tagesanbruch',
    character: '旦',
    pinyin: 'dàn',
  },
  {
    frame: 30,
    keyword: 'konkav',
    character: '凹',
    pinyin: 'āo',
  },
  {
    frame: 31,
    keyword: 'konvex',
    character: '凸',
    pinyin: 'tū',
  },

  {
    frame: 204,
    keyword: 'Schaum',
    character: '沫',
    pinyin: 'mò',
  },
  {
    frame: 215,
    keyword: 'breit',
    character: {
      traditional: '寬',
      simplified: '宽',
    },
    pinyin: 'kuān',
  },
  {
    frame: 223,
    keyword: 'Vorzeichen',
    character: '兆',
    pinyin: 'zhào',
  },
  {
    frame: 234,
    keyword: 'Druck',
    character: {
      traditional: '壓',
      simplified: '压',
    },
    pinyin: 'yā',
  },
  {
    frame: 284,
    keyword: 'Stirn',
    character: {
      traditional: '額',
      simplified: '额',
    },
    pinyin: 'é',
  },
  {
    frame: 291,
    keyword: 'ein Strahlen',
    character: {
      traditional: '輝',
      simplified: '辉',
    },
    pinyin: 'huī',
  },
  {
    frame: 293,
    keyword: 'Krone',
    character: '冠',
    pinyin: 'guān',
  },
  {
    frame: 300,
    keyword: 'glänzend',
    character: '亮',
    pinyin: 'liàng',
  },
  {
    frame: 356,
    keyword: 'häufig',
    character: {
      traditional: '頻',
      simplified: '频',
    },
    pinyin: 'pín',
  },
  {
    frame: 357,
    keyword: 'zustimmen',
    character: '肯',
    pinyin: 'kěn',
  },
  {
    frame: 359,
    keyword: 'Lebensjahre',
    character: {
      traditional: '歲',
      simplified: '岁',
    },
    pinyin: 'suì',
    description: 'ZEW',
  },
  {
    frame: 360,
    keyword: 'militärisch',
    character: '武',
    pinyin: 'wǔ',
  },
  {
    frame: 363,
    keyword: 'Politik',
    character: '政',
    pinyin: 'zhèng',
  },
  {
    frame: 370,
    keyword: 'errichten',
    character: '建',
    pinyin: 'jiàn',
  },
  {
    frame: 371,
    keyword: 'verlängern',
    character: '延',
    pinyin: 'yán',
  },
  {
    frame: 372,
    keyword: 'Geburt',
    character: {
      traditional: '誕',
      simplified: '诞',
    },
    pinyin: 'dàn',
  },
  {
    frame: 374,
    keyword: 'Fundament',
    character: {
      traditional: '礎',
      simplified: '础',
    },
    pinyin: 'chǔ',
  },
  {
    frame: 385,
    keyword: 'Vorhang',
    character: '幕',
    pinyin: 'mù',
  },
  {
    frame: 391,
    keyword: 'stagnierend',
    character: {
      traditional: '滯',
      simplified: '滞',
    },
    pinyin: 'zhì',
  },
  {
    frame: 392,
    keyword: 'Dorn',
    character: '刺',
    pinyin: 'cì',
  },
  {
    frame: 395,
    keyword: 'äußern',
    character: '云',
    pinyin: 'yún',
  },
  {
    frame: 405,
    keyword: 'vortäuschen',
    character: {
      traditional: '喬',
      simplified: '乔',
    },
    pinyin: 'qiáo',
  },
  {
    frame: 406,
    keyword: 'Brücke',
    character: {
      traditional: '橋',
      simplified: '桥',
    },
    pinyin: 'qiáo',
  },
  {
    frame: 413,
    keyword: 'Imperator',
    character: '帝',
    pinyin: '帝',
  },
  {
    frame: 423,
    keyword: 'Abkömmlinge',
    character: '昆',
    pinyin: 'kūn',
  },
  {
    frame: 424,
    keyword: 'mischen',
    character: '混',
    pinyin: 'hùn',
  },
  {
    frame: 425,
    keyword: 'alle',
    character: '皆',
    pinyin: 'jiē',
  },
  {
    frame: 426,
    keyword: 'dies (literarisch)',
    character: '此',
    pinyin: 'cǐ',
  },
  {
    frame: 427,
    keyword: 'einiges',
    character: '些',
    pinyin: 'xiē',
  },
  {
    frame: 429,
    keyword: 'Zweck',
    character: '旨',
    pinyin: 'zhǐ',
  },
  {
    frame: 430,
    keyword: 'Fett',
    character: '脂',
    pinyin: 'zhī',
  },
  {
    frame: 438,
    keyword: 'Unterleib',
    character: '腹',
    pinyin: 'fù',
  },
  {
    frame: 442,
    keyword: 'weich',
    character: {
      traditional: '軟',
      simplified: '软',
    },
    pinyin: 'ruǎn',
  },
  {
    frame: 456,
    keyword: 'Umgrenzung',
    character: '境',
    pinyin: 'jìng',
  },
  {
    frame: 458,
    keyword: 'blind',
    character: '盲',
    pinyin: 'máng',
  },
  {
    frame: 466,
    keyword: 'Seite',
    character: '旁',
    pinyin: 'páng',
  },
  {
    frame: 472,
    keyword: 'schenken',
    character: {
      traditional: '贈',
      simplified: '赠',
    },
    pinyin: 'zèng',
  },
  {
    frame: 482,
    keyword: 'Ei',
    character: '蛋',
    pinyin: 'dàn',
  },

  /*
  {
    frame: ,
    keyword: '',
    character: '',
    pinyin: '',
  },
  {
    frame: ,
    keyword: '',
    character: {
      traditional: '',
      simplified: '',
    },
    pinyin: '',
  },
  */

];

export default hanziList;
