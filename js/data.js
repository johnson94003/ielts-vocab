// 雅思單字資料庫
// 結構：{ id, word, pos, zh, level, category, source, examples: [{en, zh}] }

const VOCAB = [
  // === 口語 Watches ===
  {
    id: 1, word: "analog watch", pos: "n.", zh: "指針式手錶", level: 5,
    category: "生活配件", source: "Watches Q2",
    examples: [{
      en: "It was an analog watch, because digital ones weren't allowed in the exam venue.",
      zh: "那是支指針式手錶，因為考場不允許戴電子錶。"
    }]
  },
  {
    id: 2, word: "digital watch", pos: "n.", zh: "電子錶", level: 4,
    category: "生活配件", source: "Watches Q2",
    examples: [{
      en: "Digital ones weren't allowed in the exam venue.",
      zh: "考場不允許戴電子錶。"
    }]
  },
  {
    id: 3, word: "exam venue", pos: "n.", zh: "考場", level: 5,
    category: "生活配件", source: "Watches Q2",
    examples: [{
      en: "Digital ones weren't allowed in the exam venue.",
      zh: "考場不允許戴電子錶。"
    }]
  },
  {
    id: 4, word: "accessory", pos: "n.", zh: "配件", level: 5,
    category: "生活配件", source: "Watches Q1",
    examples: [{
      en: "For me it's more of a training tool than an accessory.",
      zh: "對我來說它比較像訓練工具，不是配件。"
    }]
  },
  {
    id: 5, word: "meaningful", pos: "adj.", zh: "有意義的", level: 5,
    category: "形容詞", source: "Watches Q2",
    examples: [{
      en: "It turned out to be a pretty meaningful gift.",
      zh: "結果它成了一份很有意義的禮物。"
    }]
  },

  // === 口語 Cars ===
  {
    id: 10, word: "rugged", pos: "adj.", zh: "粗獷的", level: 6,
    category: "形容詞", source: "Cars Q3",
    examples: [{
      en: "I just love the rugged look — they feel tough and adventurous.",
      zh: "我就是愛那種粗獷的外型——感覺結實又有冒險感。"
    }]
  },
  {
    id: 11, word: "sleek", pos: "adj.", zh: "流線的", level: 6,
    category: "形容詞", source: "Cars Q3",
    examples: [{
      en: "Sports cars are usually sleek and modern.",
      zh: "跑車通常是流線又現代的。"
    }]
  },
  {
    id: 12, word: "absorb heat", pos: "v.", zh: "吸熱", level: 5,
    category: "動詞片語", source: "Cars Q1",
    examples: [{
      en: "Dark-coloured cars — black ones in particular — absorb a lot of heat.",
      zh: "深色的車——尤其是黑色的——會吸收大量熱能。"
    }]
  },
  {
    id: 13, word: "unbearably", pos: "adv.", zh: "受不了地", level: 6,
    category: "形容詞", source: "Cars Q1",
    examples: [{
      en: "If you park outside for a few hours, the inside becomes unbearably hot.",
      zh: "在外面停幾小時後，車內會變得熱到受不了。"
    }]
  },
  {
    id: 14, word: "behind the wheel", pos: "phr.", zh: "在駕駛座上", level: 6,
    category: "慣用語", source: "Cars Q4",
    examples: [{
      en: "I feel most comfortable behind the wheel.",
      zh: "我在駕駛座上最自在。"
    }]
  },
  {
    id: 15, word: "gear", pos: "n.", zh: "裝備", level: 5,
    category: "生活配件", source: "Cars Q3",
    examples: [{
      en: "You can throw all your gear in and head out camping.",
      zh: "你可以把裝備全丟進去然後出發露營。"
    }]
  },

  // === 聽力 Hinchingbrooke ===
  {
    id: 20, word: "hectare", pos: "n.", zh: "公頃", level: 5,
    category: "環境地理", source: "Hinchingbrooke Q1",
    examples: [{
      en: "Altogether the park covers 170 acres, that's 69 hectares.",
      zh: "公園總共佔地 170 英畝，也就是 69 公頃。"
    }]
  },
  {
    id: 21, word: "habitat", pos: "n.", zh: "棲息地", level: 5,
    category: "環境地理", source: "Hinchingbrooke",
    examples: [{
      en: "There are three main types of habitat: wetland, grassland and woodland.",
      zh: "這裡主要有三種棲息地：濕地、草地、林地。"
    }]
  },
  {
    id: 22, word: "wetland", pos: "n.", zh: "濕地", level: 5,
    category: "環境地理", source: "Hinchingbrooke",
    examples: [{
      en: "The wetland is quite varied, too.",
      zh: "濕地也很多樣化。"
    }]
  },
  {
    id: 23, word: "woodland", pos: "n.", zh: "林地", level: 5,
    category: "環境地理", source: "Hinchingbrooke",
    examples: [{
      en: "The woods are well established and varied.",
      zh: "這片林地植被良好、種類繁多。"
    }]
  },
  {
    id: 24, word: "wildlife", pos: "n.", zh: "野生動物", level: 5,
    category: "環境地理", source: "Hinchingbrooke",
    examples: [{
      en: "With these different habitats there's quite a variety of wildlife.",
      zh: "有了這些不同的棲息地，野生動物的種類也很豐富。"
    }]
  },
  {
    id: 25, word: "gravel", pos: "n.", zh: "砂石", level: 5,
    category: "環境地理", source: "Hinchingbrooke",
    examples: [{
      en: "The original farmland was dug up around 40 years ago to extract gravel.",
      zh: "大約 40 年前，原來的農田被挖開來開採砂石。"
    }]
  },
  {
    id: 26, word: "ranger", pos: "n.", zh: "護林員", level: 6,
    category: "職業", source: "Hinchingbrooke",
    examples: [{
      en: "Good morning. Hinchingbrooke Country Park, Sally speaking. I'm one of the rangers.",
      zh: "早安，這裡是 Hinchingbrooke 郊野公園，我是 Sally，護林員之一。"
    }]
  },
  {
    id: 27, word: "compass", pos: "n.", zh: "指南針", level: 4,
    category: "工具", source: "Hinchingbrooke Q4",
    examples: [{
      en: "Learning to use a map and compass to navigate around the park.",
      zh: "學習用地圖和指南針在公園裡導航。"
    }]
  },
  {
    id: 28, word: "navigate", pos: "v.", zh: "導航", level: 5,
    category: "動詞", source: "Hinchingbrooke",
    examples: [{
      en: "Using a compass to navigate around the park.",
      zh: "用指南針在公園裡導航。"
    }]
  },
  {
    id: 29, word: "a sense of", pos: "phr.", zh: "一種...的感覺", level: 5,
    category: "搭配", source: "Hinchingbrooke Q7",
    examples: [{
      en: "They get a sense of freedom that might not be a normal part of their lives.",
      zh: "他們會獲得一種日常生活中可能沒有的自由感。"
    }]
  },
  {
    id: 30, word: "invoice", pos: "v./n.", zh: "開立發票", level: 5,
    category: "商業", source: "Hinchingbrooke",
    examples: [{
      en: "We invoice you afterwards, so you don't pay for children who can't come.",
      zh: "我們事後才開立發票，所以沒來的孩子不用付費。"
    }]
  },

  // === 閱讀 Tennis Racket ===
  {
    id: 40, word: "amateur", pos: "adj./n.", zh: "業餘的/業餘選手", level: 5,
    category: "體育", source: "Tennis",
    examples: [{
      en: "The amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket.",
      zh: "業餘的德國網球選手 Werner Fischer 開始使用所謂的義大利麵弦球拍。"
    }]
  },
  {
    id: 41, word: "tournament", pos: "n.", zh: "錦標賽", level: 5,
    category: "體育", source: "Tennis",
    examples: [{
      en: "He had been regarded as a talented outsider who entered but never won the major tournaments.",
      zh: "他被視為一位有才華的圈外人，參加但從未贏得大型錦標賽。"
    }]
  },
  {
    id: 42, word: "synthetic", pos: "adj.", zh: "人造的", level: 5,
    category: "材料", source: "Tennis",
    examples: [{
      en: "In 2012 he switched to a synthetic string for the mains.",
      zh: "2012 年他把豎穿弦換成了人造線。"
    }]
  },
  {
    id: 43, word: "customise", pos: "v.", zh: "客製化", level: 6,
    category: "動詞", source: "Tennis",
    examples: [{
      en: "Touring professionals have their rackets customised to their specific needs.",
      zh: "巡迴賽的職業選手會根據自己的需求客製化球拍。"
    }]
  },
  {
    id: 44, word: "modification", pos: "n.", zh: "改造", level: 6,
    category: "名詞", source: "Tennis",
    examples: [{
      en: "Racket modification became a regularity.",
      zh: "球拍改造已成為常規。"
    }]
  },
  {
    id: 45, word: "manufacturer", pos: "n.", zh: "製造商", level: 5,
    category: "商業", source: "Tennis",
    examples: [{
      en: "All our rackets are sent from our manufacturer to Tampa, Florida.",
      zh: "我們所有的球拍都從製造商寄到佛羅里達的 Tampa。"
    }]
  },
  {
    id: 46, word: "durable", pos: "adj.", zh: "耐用的", level: 5,
    category: "形容詞", source: "Tennis",
    examples: [{
      en: "The development of synthetic strings that were cheaper and more durable.",
      zh: "發展出更便宜、更耐用的人造弦線。"
    }]
  },
  {
    id: 47, word: "affordable", pos: "adj.", zh: "負擔得起的", level: 5,
    category: "形容詞", source: "Tennis",
    examples: [{
      en: "Nylon is relatively durable and affordable.",
      zh: "尼龍相對耐用且價格實惠。"
    }]
  },
  {
    id: 48, word: "anticipate", pos: "v.", zh: "預料", level: 6,
    category: "動詞", source: "Tennis",
    examples: [{
      en: "Racket customisation has pushed standards to greater levels that few could have anticipated.",
      zh: "球拍客製化把比賽標準推到了少有人預料到的高度。"
    }]
  },
  {
    id: 49, word: "tweak", pos: "v.", zh: "微調", level: 6,
    category: "動詞", source: "Tennis",
    examples: [{
      en: "Players looking to tweak their rackets in order to improve their games.",
      zh: "想微調球拍以提升比賽表現的選手們。"
    }]
  },
  {
    id: 50, word: "revolutionise", pos: "v.", zh: "徹底改革", level: 6,
    category: "動詞", source: "Tennis",
    examples: [{
      en: "The development of co-polyester strings has revolutionised the game.",
      zh: "共聚酯弦線的發展徹底改變了這項運動。"
    }]
  },
  {
    id: 51, word: "additive", pos: "n.", zh: "添加劑", level: 6,
    category: "材料", source: "Tennis",
    examples: [{
      en: "Polyester combined with additives that enhance its performance.",
      zh: "聚酯混合了能提升其性能的添加劑。"
    }]
  },

  // === 聽力 Céide Fields (今天早上) ===
  {
    id: 60, word: "Neolithic", pos: "adj.", zh: "新石器時代的", level: 6,
    category: "考古歷史", source: "Céide",
    examples: [{
      en: "Céide Fields, one of the largest Neolithic sites in the world.",
      zh: "Céide Fields，世界上最大的新石器時代遺址之一。"
    }]
  },
  {
    id: 61, word: "archaeologist", pos: "n.", zh: "考古學家", level: 5,
    category: "職業", source: "Céide",
    examples: [{
      en: "Patrick Caulfield's son Seamus had become an archaeologist by then.",
      zh: "Patrick Caulfield 的兒子 Seamus 那時已經成了考古學家。"
    }]
  },
  {
    id: 62, word: "bog", pos: "n.", zh: "沼澤", level: 5,
    category: "環境地理", source: "Céide",
    examples: [{
      en: "Local people were digging in the bog.",
      zh: "當地人正在沼澤裡挖掘。"
    }]
  },
  {
    id: 63, word: "peat", pos: "n.", zh: "泥炭", level: 6,
    category: "環境地理", source: "Céide",
    examples: [{
      en: "Objects remain so well preserved because of the acidity of the peat.",
      zh: "東西能保存得這麼好，是因為泥炭的酸性。"
    }]
  },
  {
    id: 64, word: "carbon dating", pos: "n.", zh: "碳定年法", level: 6,
    category: "科學", source: "Céide",
    examples: [{
      en: "Carbon dating later proved the site was over 5,000 years old.",
      zh: "後來碳定年法證明遺址有超過 5000 年歷史。"
    }]
  },
  {
    id: 65, word: "settlement", pos: "n.", zh: "聚落", level: 5,
    category: "考古歷史", source: "Céide",
    examples: [{
      en: "The remains of the settlement of Céide Fields are extremely well-preserved.",
      zh: "Céide Fields 聚落的遺跡保存得非常完好。"
    }]
  },
  {
    id: 66, word: "pottery", pos: "n.", zh: "陶器", level: 5,
    category: "考古歷史", source: "Céide",
    examples: [{
      en: "Another new technology that Neolithic farmers brought to Ireland was pottery.",
      zh: "新石器時代農夫帶來愛爾蘭的另一項新技術是製陶。"
    }]
  },
  {
    id: 67, word: "graze", pos: "v.", zh: "放牧", level: 5,
    category: "農業", source: "Céide",
    examples: [{
      en: "The Céide Fields site was used as paddocks for animals to graze in.",
      zh: "Céide Fields 遺址被用作放牧牲畜的圍場。"
    }]
  },
  {
    id: 68, word: "rectangular", pos: "adj.", zh: "長方形的", level: 5,
    category: "形容詞", source: "Céide Q35",
    examples: [{
      en: "These weren't round, but rectangular with a small hole in the roof.",
      zh: "這些並不是圓形，而是長方形，屋頂上有個小洞。"
    }]
  },
  {
    id: 69, word: "saturated", pos: "adj.", zh: "飽和的", level: 6,
    category: "形容詞", source: "Céide",
    examples: [{
      en: "Its soil is so saturated that grasses don't fully decay.",
      zh: "土壤過度飽和，所以草不會完全腐爛。"
    }]
  },
  {
    id: 70, word: "deficiency", pos: "n.", zh: "缺乏", level: 6,
    category: "名詞", source: "Céide Q34",
    examples: [{
      en: "Objects remain well preserved because of the deficiency of oxygen.",
      zh: "東西能保存完好是因為缺氧。"
    }]
  },
  {
    id: 71, word: "abruptly", pos: "adv.", zh: "突然地", level: 5,
    category: "副詞", source: "Céide",
    examples: [{
      en: "Archaeologists believe that this way of life at Céide ceased abruptly.",
      zh: "考古學家認為 Céide 的這種生活方式突然就結束了。"
    }]
  },
  {
    id: 72, word: "subsequently", pos: "adv.", zh: "隨後", level: 5,
    category: "副詞", source: "Céide",
    examples: [{
      en: "The bog which subsequently grew over them.",
      zh: "後來覆蓋在它們上面的沼澤。"
    }]
  },
  {
    id: 73, word: "cease", pos: "v.", zh: "停止", level: 5,
    category: "動詞", source: "Céide",
    examples: [{
      en: "This way of life ceased abruptly.",
      zh: "這種生活方式突然就停止了。"
    }]
  },
  {
    id: 74, word: "abandonment", pos: "n.", zh: "放棄", level: 6,
    category: "名詞", source: "Céide Q39",
    examples: [{
      en: "The soil would have become less productive and led to the abandonment of farming.",
      zh: "土壤會變得不那麼肥沃，導致農業被放棄。"
    }]
  },
  {
    id: 75, word: "sustainable", pos: "adj.", zh: "可持續的", level: 5,
    category: "形容詞", source: "Céide",
    examples: [{
      en: "The crop rotation system was very intensive and was not sustainable.",
      zh: "輪作系統非常密集，無法持續。"
    }]
  },
  {
    id: 76, word: "intensive", pos: "adj.", zh: "密集的", level: 5,
    category: "形容詞", source: "Céide",
    examples: [{
      en: "It would have been very intensive and was not sustainable.",
      zh: "它會非常密集，無法持續下去。"
    }]
  },
  {
    id: 77, word: "predecessor", pos: "n.", zh: "前輩、前任", level: 6,
    category: "名詞", source: "Céide",
    examples: [{
      en: "Neolithic farmers generally lived in larger communities than their predecessors.",
      zh: "新石器時代農夫通常住在比他們前輩更大的社群裡。"
    }]
  },
  {
    id: 78, word: "extended family", pos: "n.", zh: "大家庭", level: 5,
    category: "搭配", source: "Céide Q37",
    examples: [{
      en: "Each plot of land was of a suitable size to sustain an extended family.",
      zh: "每塊地的大小都剛好可以維持一個大家庭。"
    }]
  },
  {
    id: 79, word: "predate", pos: "v.", zh: "早於", level: 6,
    category: "動詞", source: "Céide",
    examples: [{
      en: "They must be thousands of years old for them to predate the bog.",
      zh: "它們必定有數千年歷史，才會早於沼澤。"
    }]
  },
  {
    id: 80, word: "accumulate", pos: "v.", zh: "堆積", level: 6,
    category: "動詞", source: "Céide",
    examples: [{
      en: "They don't fully decay but accumulate in layers.",
      zh: "它們不會完全腐爛，而是層層堆積。"
    }]
  },
  {
    id: 81, word: "decay", pos: "v./n.", zh: "腐爛、衰退", level: 5,
    category: "動詞", source: "Céide",
    examples: [{
      en: "The grasses and heathers don't fully decay.",
      zh: "草和石南不會完全腐爛。"
    }]
  },
  {
    id: 82, word: "shelter", pos: "v./n.", zh: "庇護", level: 5,
    category: "動詞", source: "Céide Q38",
    examples: [{
      en: "No structures have been found which would have been used to shelter animals in the winter.",
      zh: "沒有發現任何冬天可以庇護動物的建築。"
    }]
  },
  {
    id: 83, word: "circumstances", pos: "n.", zh: "情況、環境", level: 5,
    category: "名詞", source: "Céide",
    examples: [{
      en: "Several factors may have contributed to the changing circumstances.",
      zh: "幾個因素可能促成了環境的變化。"
    }]
  },

  // === 聽力 Guitar Group (今天上午) ===
  {
    id: 100, word: "coordinator", pos: "n.", zh: "協調員", level: 5,
    category: "職業", source: "Guitar Group Q1",
    examples: [{
      en: "He's called a 'coordinator' – his name's Gary Mathieson.",
      zh: "他叫「協調員」，名字是 Gary Mathieson。"
    }]
  },
  {
    id: 101, word: "beginner", pos: "n.", zh: "初學者", level: 4,
    category: "名詞", source: "Guitar Group Q2",
    examples: [{
      en: "He said it was a class for beginners.",
      zh: "他說這是一個給初學者的班。"
    }]
  },
  {
    id: 102, word: "chord", pos: "n.", zh: "和弦", level: 5,
    category: "音樂", source: "Guitar Group",
    examples: [{
      en: "I knew a few chords, but that's all.",
      zh: "我會幾個和弦，但僅此而已。"
    }]
  },
  {
    id: 103, word: "strumming", pos: "n.", zh: "刷弦", level: 6,
    category: "音樂", source: "Guitar Group",
    examples: [{
      en: "We usually spend about ten minutes doing some strumming.",
      zh: "我們通常會花大約十分鐘做刷弦練習。"
    }]
  },
  {
    id: 104, word: "tune", pos: "v.", zh: "調音", level: 5,
    category: "動詞", source: "Guitar Group",
    examples: [{
      en: "He always starts by getting us to tune our guitars.",
      zh: "他總是先讓我們調音。"
    }]
  },
  {
    id: 105, word: "hopeless", pos: "adj.", zh: "沒希望的、糟糕的", level: 5,
    category: "形容詞", source: "Guitar Group",
    examples: [{
      en: "We were all equally hopeless.",
      zh: "我們程度都一樣糟。"
    }]
  },
  {
    id: 106, word: "reassuring", pos: "adj.", zh: "令人安心的", level: 6,
    category: "形容詞", source: "Guitar Group",
    examples: [{
      en: "Oh, that's reassuring.",
      zh: "哦，那真令人安心。"
    }]
  },
  {
    id: 107, word: "retired", pos: "adj.", zh: "退休的", level: 5,
    category: "形容詞", source: "Guitar Group",
    examples: [{
      en: "He's retired, actually, but he's a really nice guy.",
      zh: "其實他已經退休了，但他人很好。"
    }]
  },
  {
    id: 108, word: "roundabout", pos: "n.", zh: "圓環", level: 5,
    category: "地點", source: "Guitar Group",
    examples: [{
      en: "Near the city roundabout.",
      zh: "靠近市區圓環。"
    }]
  },
  {
    id: 109, word: "second-hand", pos: "adj.", zh: "二手的", level: 5,
    category: "形容詞", source: "Guitar Group",
    examples: [{
      en: "You can always buy a second-hand one.",
      zh: "你隨時可以買一個二手的。"
    }]
  },
  {
    id: 110, word: "come along", pos: "phr.v.", zh: "一起來、加入", level: 5,
    category: "動詞片語", source: "Guitar Group",
    examples: [{
      en: "Why don't you come along?",
      zh: "你為什麼不一起來呢？"
    }]
  },
  {
    id: 111, word: "by ear", pos: "phr.", zh: "靠耳朵（不靠工具）", level: 6,
    category: "慣用語", source: "Guitar Group",
    examples: [{
      en: "Some people have an app they use, but others do it by ear.",
      zh: "有些人會用 app，但有些人靠耳朵。"
    }]
  },

  // === 同義替換高頻字 ===
  {
    id: 200, word: "banned", pos: "v.pp.", zh: "被禁止的", level: 5,
    category: "同義替換", source: "Tennis (=not allowed)",
    examples: [{
      en: "It was quickly banned by the International Tennis Federation.",
      zh: "它很快就被國際網球聯合會禁止了。"
    }]
  },
  {
    id: 201, word: "significant", pos: "adj.", zh: "重要的", level: 5,
    category: "同義替換", source: "= important",
    examples: [{
      en: "An aspect of the game that is equal in significance to nutrition or training.",
      zh: "與營養或訓練同等重要的比賽面向。"
    }]
  },
  {
    id: 202, word: "numerous", pos: "adj.", zh: "許多的", level: 5,
    category: "同義替換", source: "= many",
    examples: [{
      en: "There are numerous innovations from Neolithic farmers.",
      zh: "新石器時代農夫帶來許多創新。"
    }]
  },

  // === 閱讀 Ancient Rome and Piracy (5/13 下午) ===
  {
    id: 210, word: "piracy", pos: "n.", zh: "海盜行為", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Piracy was an issue ancient Rome had to deal with.",
      zh: "海盜行為是古羅馬必須處理的問題。"
    }]
  },
  {
    id: 211, word: "pirate", pos: "n.", zh: "海盜", level: 4,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Pirate attacks on grain ships led to angry voices in the Senate.",
      zh: "海盜對運糧船的攻擊引起元老院的憤怒聲浪。"
    }]
  },
  {
    id: 212, word: "Mediterranean", pos: "n./adj.", zh: "地中海（的）", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "The Roman Republic had to deal with piracy in the Mediterranean.",
      zh: "羅馬共和國必須處理地中海上的海盜問題。"
    }]
  },
  {
    id: 213, word: "raid", pos: "n./v.", zh: "劫掠、突襲", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Pirate raids provided a steady source of slaves.",
      zh: "海盜的劫掠提供了穩定的奴隸來源。"
    }]
  },
  {
    id: 214, word: "slave", pos: "n.", zh: "奴隸", level: 4,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Pirates supplied slaves that were important for Rome's industries.",
      zh: "海盜提供了對羅馬產業重要的奴隸。"
    }]
  },
  {
    id: 215, word: "mining", pos: "n.", zh: "採礦", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Slaves were essential for Rome's agriculture and mining industries.",
      zh: "奴隸對羅馬的農業和採礦業至關重要。"
    }]
  },
  {
    id: 216, word: "agriculture", pos: "n.", zh: "農業", level: 4,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Essential for Rome's agriculture and mining industries.",
      zh: "對羅馬的農業和採礦業至關重要。"
    }]
  },
  {
    id: 217, word: "Senate", pos: "n.", zh: "元老院、參議院", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Attacks led to angry voices in the Senate.",
      zh: "這些攻擊引起元老院的憤怒聲浪。"
    }]
  },
  {
    id: 218, word: "ransom", pos: "n.", zh: "贖金", level: 6,
    category: "歷史社會", source: "Rome Piracy Q26",
    examples: [{
      en: "Emboldened pirates kidnapped Roman dignitaries, asking for a large ransom.",
      zh: "膽子變大的海盜綁架羅馬要員，索取鉅額贖金。"
    }]
  },
  {
    id: 219, word: "kidnap", pos: "v.", zh: "綁架", level: 5,
    category: "動詞", source: "Rome Piracy",
    examples: [{
      en: "Emboldened pirates kidnapped prominent Roman dignitaries.",
      zh: "膽子變大的海盜綁架了顯赫的羅馬要員。"
    }]
  },
  {
    id: 220, word: "dignitary", pos: "n.", zh: "顯要人物", level: 7,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Pirates kidnapped prominent Roman dignitaries.",
      zh: "海盜綁架顯赫的羅馬要員。"
    }]
  },
  {
    id: 221, word: "hostage", pos: "n.", zh: "人質", level: 5,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "Their most famous hostage was none other than Julius Caesar.",
      zh: "他們最有名的人質正是凱撒大帝。"
    }]
  },
  {
    id: 222, word: "culprit", pos: "n.", zh: "肇事者、罪犯", level: 6,
    category: "歷史社會", source: "Rome Piracy",
    examples: [{
      en: "The Senate demanded punishment of the culprits.",
      zh: "元老院要求懲罰肇事者。"
    }]
  },
  {
    id: 223, word: "emboldened", pos: "adj.", zh: "變大膽的", level: 6,
    category: "形容詞", source: "Rome Piracy",
    examples: [{
      en: "Emboldened pirates kidnapped prominent Roman dignitaries.",
      zh: "膽子變大的海盜綁架顯赫的羅馬要員。"
    }]
  },
  {
    id: 224, word: "prominent", pos: "adj.", zh: "顯赫的、突出的", level: 5,
    category: "形容詞", source: "Rome Piracy",
    examples: [{
      en: "Pirates kidnapped prominent Roman dignitaries.",
      zh: "海盜綁架顯赫的羅馬要員。"
    }]
  },
  {
    id: 225, word: "calls for", pos: "v.phr.", zh: "要求、呼籲", level: 5,
    category: "搭配", source: "Rome Piracy Q25",
    examples: [{
      en: "Attacks led to calls for punishment for the pirates responsible.",
      zh: "這些攻擊導致眾人要求懲罰相關的海盜。"
    }]
  },
  {
    id: 226, word: "essential", pos: "adj.", zh: "至關重要的", level: 5,
    category: "形容詞", source: "Rome Piracy",
    examples: [{
      en: "Slaves were essential for Rome's agriculture industries.",
      zh: "奴隸對羅馬的農業至關重要。"
    }]
  },
  {
    id: 227, word: "profit from", pos: "v.phr.", zh: "從...獲利", level: 5,
    category: "搭配", source: "Rome Piracy",
    examples: [{
      en: "Rome profited greatly from the existence of piracy.",
      zh: "羅馬從海盜的存在中獲利甚多。"
    }]
  },
  {
    id: 228, word: "deal with", pos: "v.phr.", zh: "處理、應對", level: 4,
    category: "搭配", source: "Rome Piracy",
    examples: [{
      en: "Piracy was an issue ancient Rome had to deal with.",
      zh: "海盜行為是古羅馬必須處理的問題。"
    }]
  },

  // === Céide Fields 補充字 (上次漏的) ===
  {
    id: 230, word: "innovation", pos: "n.", zh: "創新", level: 5,
    category: "名詞", source: "Céide",
    examples: [{
      en: "This is one of many innovations from Neolithic farmers.",
      zh: "這是新石器時代農夫帶來的眾多創新之一。"
    }]
  },
  {
    id: 231, word: "acidity", pos: "n.", zh: "酸性", level: 6,
    category: "科學", source: "Céide",
    examples: [{
      en: "The acidity of the peat helps preserve objects.",
      zh: "泥炭的酸性有助於保存物品。"
    }]
  },
  {
    id: 232, word: "preserve", pos: "v.", zh: "保存", level: 5,
    category: "動詞", source: "Céide",
    examples: [{
      en: "The remains of the settlement are extremely well-preserved.",
      zh: "聚落的遺跡保存得非常完好。"
    }]
  },
  {
    id: 233, word: "fragment", pos: "n.", zh: "碎片", level: 5,
    category: "名詞", source: "Céide",
    examples: [{
      en: "Fragments of Neolithic pots have been found in Céide.",
      zh: "在 Céide 發現了新石器時代陶罐的碎片。"
    }]
  },
  {
    id: 234, word: "insert", pos: "v.", zh: "插入", level: 5,
    category: "動詞", source: "Céide",
    examples: [{
      en: "He inserted iron probes into the bog.",
      zh: "他把鐵探針插入沼澤裡。"
    }]
  }
];

const CATEGORIES = [...new Set(VOCAB.map(v => v.category))].sort();
const SOURCES = [...new Set(VOCAB.map(v => v.source.split(' ')[0]))].sort();
