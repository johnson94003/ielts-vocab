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
  },

  // ============================================
  // === 雅思核心：口說/寫作主動產出（active）===
  // ID 300-399｜這些字「自己要會寫會說」
  // ============================================

  // --- 論述動詞 (議論文必備) ---
  { id: 300, word: "argue", pos: "v.", zh: "主張、爭辯", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Some people argue that technology has reduced face-to-face interaction.", zh: "有些人主張科技減少了面對面的互動。" }] },
  { id: 301, word: "claim", pos: "v.", zh: "聲稱", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Critics claim that online education lacks personal interaction.", zh: "批評者聲稱線上教育缺乏人際互動。" }] },
  { id: 302, word: "suggest", pos: "v.", zh: "建議、暗示", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Research suggests that exercise improves mental health.", zh: "研究顯示運動能改善心理健康。" }] },
  { id: 303, word: "propose", pos: "v.", zh: "提議", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "The government proposed a new policy on plastic waste.", zh: "政府提出一項新的塑膠廢棄物政策。" }] },
  { id: 304, word: "demonstrate", pos: "v.", zh: "證明、展示", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "The data clearly demonstrates a rising trend.", zh: "資料明確證明了上升的趨勢。" }] },
  { id: 305, word: "indicate", pos: "v.", zh: "顯示、表明", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Studies indicate that sleep affects productivity.", zh: "研究顯示睡眠會影響生產力。" }] },
  { id: 306, word: "reveal", pos: "v.", zh: "揭露、顯示", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "The survey reveals significant differences between age groups.", zh: "這份調查揭示了不同年齡群之間的顯著差異。" }] },
  { id: 307, word: "consider", pos: "v.", zh: "考慮、認為", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "We should consider both the advantages and disadvantages.", zh: "我們應該同時考慮優缺點。" }] },
  { id: 308, word: "acknowledge", pos: "v.", zh: "承認", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "It must be acknowledged that there are some drawbacks.", zh: "必須承認確實有一些缺點。" }] },
  { id: 309, word: "address", pos: "v.", zh: "處理（議題）", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Governments need to address climate change urgently.", zh: "政府必須緊急處理氣候變遷。" }] },

  // --- 連接詞 / 轉折 (議論文骨架) ---
  { id: 310, word: "however", pos: "adv.", zh: "然而", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Technology brings convenience; however, it also creates new problems.", zh: "科技帶來便利；然而它也製造新問題。" }] },
  { id: 311, word: "moreover", pos: "adv.", zh: "此外、而且", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Moreover, public transport reduces traffic congestion.", zh: "此外，大眾運輸能減少交通堵塞。" }] },
  { id: 312, word: "furthermore", pos: "adv.", zh: "再者、進一步", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Furthermore, it can lead to long-term health benefits.", zh: "再者，這能帶來長期的健康益處。" }] },
  { id: 313, word: "consequently", pos: "adv.", zh: "因此、結果", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Consequently, many companies adopted remote work policies.", zh: "因此，許多公司採用了遠距工作政策。" }] },
  { id: 314, word: "nevertheless", pos: "adv.", zh: "儘管如此", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "The plan has flaws; nevertheless, it deserves consideration.", zh: "這個計畫有瑕疵；儘管如此仍值得考慮。" }] },
  { id: 315, word: "in contrast", pos: "phr.", zh: "相較之下、相反地", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "In contrast, rural areas have seen population decline.", zh: "相較之下，鄉村地區人口下降。" }] },
  { id: 316, word: "on the other hand", pos: "phr.", zh: "另一方面", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "On the other hand, working from home can be isolating.", zh: "另一方面，在家工作可能讓人感到孤立。" }] },
  { id: 317, word: "whereas", pos: "conj.", zh: "然而、相對而言", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Urban residents have more options, whereas rural residents have fewer.", zh: "都市居民有更多選擇，而鄉村居民選擇較少。" }] },
  { id: 318, word: "despite", pos: "prep.", zh: "儘管", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Despite the challenges, progress has been made.", zh: "儘管有挑戰，仍有進展。" }] },
  { id: 319, word: "ultimately", pos: "adv.", zh: "最終", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Ultimately, education is the key to economic development.", zh: "最終，教育是經濟發展的關鍵。" }] },

  // --- 重要性形容詞 ---
  { id: 320, word: "crucial", pos: "adj.", zh: "關鍵的", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Early intervention is crucial in treating illness.", zh: "早期介入是治療疾病的關鍵。" }] },
  { id: 321, word: "vital", pos: "adj.", zh: "至關重要的", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Vitamins are vital for maintaining good health.", zh: "維他命對維持健康至關重要。" }] },
  { id: 322, word: "fundamental", pos: "adj.", zh: "根本的", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Access to clean water is a fundamental human right.", zh: "取得乾淨用水是基本人權。" }] },
  { id: 323, word: "beneficial", pos: "adj.", zh: "有益的", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Reading regularly is beneficial for vocabulary growth.", zh: "規律閱讀對詞彙量的增長有益。" }] },
  { id: 324, word: "detrimental", pos: "adj.", zh: "有害的", level: 7, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Smoking is detrimental to overall health.", zh: "吸菸對整體健康有害。" }] },
  { id: 325, word: "inevitable", pos: "adj.", zh: "無可避免的", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Change is an inevitable part of life.", zh: "改變是人生中無可避免的一部分。" }] },
  { id: 326, word: "widespread", pos: "adj.", zh: "普遍的", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Smartphones have become widespread in recent years.", zh: "近年來智慧型手機已變得普遍。" }] },
  { id: 327, word: "considerable", pos: "adj.", zh: "相當大的", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "There has been a considerable rise in housing prices.", zh: "房價有相當大幅度的上漲。" }] },

  // --- 因果動詞 (寫作必備) ---
  { id: 330, word: "result in", pos: "v.phr.", zh: "導致", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Lack of sleep can result in poor concentration.", zh: "睡眠不足會導致注意力不集中。" }] },
  { id: 331, word: "lead to", pos: "v.phr.", zh: "造成", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Air pollution can lead to respiratory diseases.", zh: "空氣汙染可能造成呼吸道疾病。" }] },
  { id: 332, word: "contribute to", pos: "v.phr.", zh: "促成、有助於", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Exercise contributes to a healthier lifestyle.", zh: "運動有助於更健康的生活方式。" }] },
  { id: 333, word: "stem from", pos: "v.phr.", zh: "源自於", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Many social problems stem from inequality.", zh: "許多社會問題源自於不平等。" }] },
  { id: 334, word: "enhance", pos: "v.", zh: "提升", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Technology can enhance the quality of education.", zh: "科技可以提升教育品質。" }] },
  { id: 335, word: "improve", pos: "v.", zh: "改善", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Daily reading can improve language skills.", zh: "每天閱讀可以改善語言能力。" }] },
  { id: 336, word: "foster", pos: "v.", zh: "培養", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Schools should foster creativity in students.", zh: "學校應培養學生的創造力。" }] },
  { id: 337, word: "promote", pos: "v.", zh: "促進、推廣", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "The campaign promotes healthy eating habits.", zh: "這個活動推廣健康飲食習慣。" }] },
  { id: 338, word: "hinder", pos: "v.", zh: "阻礙", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Strict regulations may hinder innovation.", zh: "嚴格的規範可能阻礙創新。" }] },
  { id: 339, word: "address", pos: "v.", zh: "解決（問題）", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "We need to address the root causes of poverty.", zh: "我們需要解決貧窮的根本原因。" }] },

  // --- 口說常用句型/短語 ---
  { id: 350, word: "to be honest", pos: "phr.", zh: "老實說", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "To be honest, I haven't thought about it much.", zh: "老實說，我沒有想太多。" }] },
  { id: 351, word: "in my opinion", pos: "phr.", zh: "我認為", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "In my opinion, exercise is more important than diet.", zh: "我認為運動比飲食更重要。" }] },
  { id: 352, word: "as far as I'm concerned", pos: "phr.", zh: "就我而言", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "As far as I'm concerned, this is the best option.", zh: "就我而言，這是最好的選擇。" }] },
  { id: 353, word: "from my perspective", pos: "phr.", zh: "從我的角度看", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "From my perspective, education should be free.", zh: "從我的角度看，教育應該免費。" }] },
  { id: 354, word: "it depends on", pos: "phr.", zh: "視...而定", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "It depends on individual circumstances.", zh: "這要視個人情況而定。" }] },
  { id: 355, word: "tend to", pos: "v.phr.", zh: "傾向於", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Young people tend to use social media more.", zh: "年輕人傾向於更頻繁使用社群媒體。" }] },
  { id: 356, word: "likely to", pos: "adj.phr.", zh: "可能的", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Children are more likely to learn languages quickly.", zh: "孩童比較可能快速學會語言。" }] },
  { id: 357, word: "rather than", pos: "phr.", zh: "而不是", level: 4, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "I prefer reading rather than watching TV.", zh: "我比較喜歡閱讀而不是看電視。" }] },
  { id: 358, word: "in terms of", pos: "phr.", zh: "就...而言", level: 5, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "In terms of cost, public transport is cheaper.", zh: "就成本而言，大眾運輸較便宜。" }] },
  { id: 359, word: "regardless of", pos: "phr.", zh: "不論", level: 6, category: "口說寫作核心", source: "IELTS核心", purpose: "active",
    examples: [{ en: "Everyone deserves education regardless of background.", zh: "不論出身為何，每個人都應該受教育。" }] },

  // ============================================
  // === 雅思核心：閱讀/聽力辨識（passive）===
  // ID 400-599｜這些字「看到/聽到能反應出意思」
  // ============================================

  // --- 環境主題 ---
  { id: 400, word: "emissions", pos: "n.", zh: "排放（廢氣等）", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Carbon emissions have risen sharply in recent decades.", zh: "近幾十年來碳排放急劇上升。" }] },
  { id: 401, word: "sustainability", pos: "n.", zh: "永續性", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Companies are focusing more on environmental sustainability.", zh: "企業越來越重視環境永續性。" }] },
  { id: 402, word: "biodiversity", pos: "n.", zh: "生物多樣性", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Deforestation threatens biodiversity in tropical regions.", zh: "森林砍伐威脅著熱帶地區的生物多樣性。" }] },
  { id: 403, word: "deforestation", pos: "n.", zh: "森林砍伐", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Deforestation is a major cause of climate change.", zh: "森林砍伐是氣候變遷的主因之一。" }] },
  { id: 404, word: "conservation", pos: "n.", zh: "保育", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Wildlife conservation efforts have shown promising results.", zh: "野生動物保育的努力已顯現成效。" }] },
  { id: 405, word: "renewable", pos: "adj.", zh: "可再生的", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Solar power is a renewable source of energy.", zh: "太陽能是一種可再生能源。" }] },
  { id: 406, word: "ecosystem", pos: "n.", zh: "生態系統", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Coral reefs support diverse marine ecosystems.", zh: "珊瑚礁支撐著多樣的海洋生態系統。" }] },
  { id: 407, word: "pollution", pos: "n.", zh: "汙染", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Air pollution causes serious health problems.", zh: "空氣汙染造成嚴重的健康問題。" }] },
  { id: 408, word: "habitat", pos: "n.", zh: "棲息地", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Many species are losing their natural habitats.", zh: "許多物種正在失去自然棲息地。" }] },
  { id: 409, word: "species", pos: "n.", zh: "物種", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Hundreds of species are at risk of extinction.", zh: "數百個物種有滅絕的風險。" }] },

  // --- 科技主題 ---
  { id: 420, word: "automation", pos: "n.", zh: "自動化", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Automation is transforming the manufacturing industry.", zh: "自動化正在改變製造業。" }] },
  { id: 421, word: "artificial intelligence", pos: "n.", zh: "人工智慧", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Artificial intelligence is reshaping many professions.", zh: "人工智慧正在重塑許多職業。" }] },
  { id: 422, word: "infrastructure", pos: "n.", zh: "基礎建設", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The government invested heavily in digital infrastructure.", zh: "政府大量投資數位基礎建設。" }] },
  { id: 423, word: "algorithm", pos: "n.", zh: "演算法", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Social media algorithms determine what users see.", zh: "社群媒體演算法決定用戶看到什麼。" }] },
  { id: 424, word: "breakthrough", pos: "n.", zh: "突破", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Recent breakthroughs in genetics offer new treatments.", zh: "基因學近期的突破帶來新的治療方法。" }] },
  { id: 425, word: "digital divide", pos: "n.", zh: "數位落差", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The digital divide remains a serious global issue.", zh: "數位落差仍是嚴重的全球議題。" }] },

  // --- 教育主題 ---
  { id: 440, word: "curriculum", pos: "n.", zh: "課程內容", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The school curriculum should emphasise critical thinking.", zh: "學校課程應強調批判性思考。" }] },
  { id: 441, word: "literacy", pos: "n.", zh: "識字能力", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Literacy rates have improved significantly worldwide.", zh: "全球識字率已顯著提升。" }] },
  { id: 442, word: "scholarship", pos: "n.", zh: "獎學金", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "She received a scholarship to study abroad.", zh: "她獲得了出國留學的獎學金。" }] },
  { id: 443, word: "vocational", pos: "adj.", zh: "職業的（教育）", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Vocational training is essential for the workforce.", zh: "職業訓練對勞動力市場至關重要。" }] },
  { id: 444, word: "tuition", pos: "n.", zh: "學費", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "University tuition fees continue to rise.", zh: "大學學費持續上漲。" }] },
  { id: 445, word: "discipline", pos: "n.", zh: "學科 / 紀律", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Economics is an interdisciplinary discipline.", zh: "經濟學是跨學科的學問。" }] },

  // --- 健康主題 ---
  { id: 460, word: "obesity", pos: "n.", zh: "肥胖", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Childhood obesity has become a public health crisis.", zh: "兒童肥胖已成為公共衛生危機。" }] },
  { id: 461, word: "sedentary", pos: "adj.", zh: "久坐的", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "A sedentary lifestyle increases the risk of heart disease.", zh: "久坐的生活方式增加心臟病風險。" }] },
  { id: 462, word: "diagnosis", pos: "n.", zh: "診斷", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Early diagnosis can significantly improve outcomes.", zh: "早期診斷能大幅改善結果。" }] },
  { id: 463, word: "intervention", pos: "n.", zh: "介入治療", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Medical intervention may be necessary in severe cases.", zh: "嚴重情況下可能需要醫療介入。" }] },
  { id: 464, word: "nutrition", pos: "n.", zh: "營養", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Proper nutrition is essential for child development.", zh: "適當的營養對兒童發展至關重要。" }] },
  { id: 465, word: "epidemic", pos: "n.", zh: "流行病", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The epidemic spread rapidly across the region.", zh: "這場流行病在該地區迅速擴散。" }] },

  // --- 學術描述動詞 ---
  { id: 480, word: "derive", pos: "v.", zh: "源自、推導", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Many English words derive from Latin and Greek.", zh: "許多英文字源自拉丁文和希臘文。" }] },
  { id: 481, word: "comprise", pos: "v.", zh: "由...組成", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The committee comprises ten members.", zh: "該委員會由十位成員組成。" }] },
  { id: 482, word: "constitute", pos: "v.", zh: "構成", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Women constitute 60% of the workforce in this sector.", zh: "女性構成此產業 60% 的勞動力。" }] },
  { id: 483, word: "encompass", pos: "v.", zh: "包含、涵蓋", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The course encompasses both theory and practice.", zh: "這門課涵蓋了理論與實作。" }] },
  { id: 484, word: "exhibit", pos: "v.", zh: "展現、表現出", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The patient exhibited symptoms of fatigue.", zh: "病人表現出疲勞的症狀。" }] },
  { id: 485, word: "undermine", pos: "v.", zh: "削弱、破壞", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Corruption undermines public trust in government.", zh: "貪腐削弱民眾對政府的信任。" }] },
  { id: 486, word: "exacerbate", pos: "v.", zh: "加劇、惡化", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Stress can exacerbate existing health conditions.", zh: "壓力會加劇既有的健康狀況。" }] },
  { id: 487, word: "mitigate", pos: "v.", zh: "減輕、緩和", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Measures must be taken to mitigate the impact.", zh: "必須採取措施來減輕其影響。" }] },
  { id: 488, word: "trigger", pos: "v.", zh: "引發、觸發", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The announcement triggered widespread protests.", zh: "這項宣布引發了廣泛的抗議。" }] },
  { id: 489, word: "facilitate", pos: "v.", zh: "促進、使便利", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Technology facilitates communication across borders.", zh: "科技促進跨國溝通。" }] },

  // --- 學術形容詞 ---
  { id: 500, word: "substantial", pos: "adj.", zh: "可觀的、大量的", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "There has been a substantial increase in online sales.", zh: "線上銷售有可觀的成長。" }] },
  { id: 501, word: "marginal", pos: "adj.", zh: "微小的、邊緣的", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The difference between the two groups was marginal.", zh: "兩組之間的差異很小。" }] },
  { id: 502, word: "predominant", pos: "adj.", zh: "主要的、佔優勢的", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "English is the predominant language of business.", zh: "英文是商業界的主要語言。" }] },
  { id: 503, word: "prevalent", pos: "adj.", zh: "普遍的", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Anxiety has become increasingly prevalent among teenagers.", zh: "焦慮在青少年中變得越來越普遍。" }] },
  { id: 504, word: "negligible", pos: "adj.", zh: "微不足道的", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The effect on the economy was negligible.", zh: "對經濟的影響微不足道。" }] },
  { id: 505, word: "controversial", pos: "adj.", zh: "有爭議的", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The new policy is highly controversial.", zh: "這項新政策極具爭議。" }] },
  { id: 506, word: "ambiguous", pos: "adj.", zh: "模糊不清的", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The results of the study were ambiguous.", zh: "研究結果模糊不清。" }] },
  { id: 507, word: "unprecedented", pos: "adj.", zh: "前所未有的", level: 7, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The pandemic caused unprecedented economic disruption.", zh: "這場疫情造成前所未有的經濟動盪。" }] },
  { id: 508, word: "diverse", pos: "adj.", zh: "多樣的", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The country has a diverse cultural heritage.", zh: "這個國家有多樣的文化遺產。" }] },
  { id: 509, word: "complex", pos: "adj.", zh: "複雜的", level: 4, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Climate change is a complex global issue.", zh: "氣候變遷是個複雜的全球議題。" }] },

  // --- 學術名詞 ---
  { id: 520, word: "phenomenon", pos: "n.", zh: "現象", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Globalisation is a complex social phenomenon.", zh: "全球化是個複雜的社會現象。" }] },
  { id: 521, word: "hypothesis", pos: "n.", zh: "假設", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The data supports the original hypothesis.", zh: "資料支持原本的假設。" }] },
  { id: 522, word: "criteria", pos: "n.", zh: "標準（複數）", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Applications are evaluated based on several criteria.", zh: "申請會依幾項標準來評估。" }] },
  { id: 523, word: "implication", pos: "n.", zh: "含意、影響", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The findings have important implications for policy.", zh: "這些發現對政策有重要含意。" }] },
  { id: 524, word: "perspective", pos: "n.", zh: "觀點", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Different cultures offer different perspectives.", zh: "不同文化提供不同觀點。" }] },
  { id: 525, word: "framework", pos: "n.", zh: "框架、架構", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The theory provides a useful framework for analysis.", zh: "這個理論提供有用的分析框架。" }] },
  { id: 526, word: "criterion", pos: "n.", zh: "標準（單數）", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The main criterion for selection is academic merit.", zh: "選拔的主要標準是學業表現。" }] },
  { id: 527, word: "norm", pos: "n.", zh: "常態、規範", level: 6, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Remote work has become the norm in many industries.", zh: "遠距工作在許多產業已成為常態。" }] },

  // --- 同義替換高頻字 (passive 但雅思超愛考) ---
  { id: 540, word: "due to", pos: "phr.", zh: "因為（= because of）", level: 4, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The delay was due to bad weather.", zh: "這次延誤是因為天氣不佳。" }] },
  { id: 541, word: "owing to", pos: "phr.", zh: "由於（= due to）", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Owing to budget cuts, the project was suspended.", zh: "由於預算削減，這項計畫被擱置。" }] },
  { id: 542, word: "in addition", pos: "phr.", zh: "此外（= also）", level: 4, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "In addition, the company offers free training.", zh: "此外，公司提供免費培訓。" }] },
  { id: 543, word: "primarily", pos: "adv.", zh: "主要地（= mainly）", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "The product is primarily aimed at young adults.", zh: "這項產品主要針對年輕人。" }] },
  { id: 544, word: "ultimately", pos: "adv.", zh: "最終（= finally）", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "Ultimately, the decision lies with the consumer.", zh: "最終，這個決定取決於消費者。" }] },
  { id: 545, word: "particularly", pos: "adv.", zh: "特別地（= especially）", level: 4, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "This is particularly true for older adults.", zh: "這對年長者尤其如此。" }] },
  { id: 546, word: "to some extent", pos: "phr.", zh: "某種程度上", level: 5, category: "閱讀聽力核心", source: "IELTS核心", purpose: "passive",
    examples: [{ en: "This is true to some extent, but not entirely.", zh: "這某種程度上是對的，但不完全是。" }] },

  // ============================================
  // === Academic Word List (AWL) Sublist 1 ===
  // ID 1000-1059｜60 字 - 雅思閱讀最高頻
  // ============================================
  { id: 1000, word: "require", pos: "v.", zh: "需要、要求", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "This task requires considerable patience.", zh: "這個任務需要相當大的耐心。" }] },
  { id: 1001, word: "income", pos: "n.", zh: "收入", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Household income has risen steadily.", zh: "家庭收入穩定增加。" }] },
  { id: 1002, word: "section", pos: "n.", zh: "部分、章節", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The next section examines the data.", zh: "下一節檢視這些資料。" }] },
  { id: 1003, word: "structure", pos: "n./v.", zh: "結構、構造", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The essay has a clear structure.", zh: "這篇文章有清楚的結構。" }] },
  { id: 1004, word: "policy", pos: "n.", zh: "政策", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Government policy on immigration has changed.", zh: "政府的移民政策已經改變。" }] },
  { id: 1005, word: "economy", pos: "n.", zh: "經濟", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The economy grew by 3% last year.", zh: "經濟去年成長 3%。" }] },
  { id: 1006, word: "process", pos: "n./v.", zh: "過程、處理", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Learning is a gradual process.", zh: "學習是漸進的過程。" }] },
  { id: 1007, word: "research", pos: "n./v.", zh: "研究", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Further research is needed on this topic.", zh: "這個主題需要進一步研究。" }] },
  { id: 1008, word: "vary", pos: "v.", zh: "變化、不同", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Results vary across different age groups.", zh: "不同年齡層的結果有所不同。" }] },
  { id: 1009, word: "issue", pos: "n.", zh: "議題、問題", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Climate change is a global issue.", zh: "氣候變遷是全球議題。" }] },
  { id: 1010, word: "analyse", pos: "v.", zh: "分析", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Researchers analyse the data carefully.", zh: "研究員仔細分析資料。" }] },
  { id: 1011, word: "method", pos: "n.", zh: "方法", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Several methods were tested.", zh: "測試了幾種方法。" }] },
  { id: 1012, word: "function", pos: "n./v.", zh: "功能、運作", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The main function of this tool is analysis.", zh: "這項工具的主要功能是分析。" }] },
  { id: 1013, word: "area", pos: "n.", zh: "領域、區域", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "She works in the area of medical research.", zh: "她從事醫學研究領域。" }] },
  { id: 1014, word: "define", pos: "v.", zh: "定義", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "It is difficult to define success.", zh: "成功很難定義。" }] },
  { id: 1015, word: "proceed", pos: "v.", zh: "進行、繼續", level: 6, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "We may proceed with the next stage.", zh: "我們可以進行下一階段。" }] },
  { id: 1016, word: "individual", pos: "n./adj.", zh: "個人、個體的", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Each individual has unique needs.", zh: "每個人都有獨特的需求。" }] },
  { id: 1017, word: "respond", pos: "v.", zh: "回應", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "How did the public respond to the news?", zh: "公眾如何回應這個消息？" }] },
  { id: 1018, word: "identify", pos: "v.", zh: "識別、辨認", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Scientists identified three key factors.", zh: "科學家辨識出三個關鍵因素。" }] },
  { id: 1019, word: "export", pos: "n./v.", zh: "出口", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Exports increased by 15% last year.", zh: "出口去年增加 15%。" }] },
  { id: 1020, word: "similar", pos: "adj.", zh: "相似的", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The two cases are remarkably similar.", zh: "這兩個案例非常相似。" }] },
  { id: 1021, word: "approach", pos: "n./v.", zh: "方法、靠近", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "A different approach might be more effective.", zh: "不同的方法可能更有效。" }] },
  { id: 1022, word: "occur", pos: "v.", zh: "發生", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Earthquakes occur frequently in this region.", zh: "這個地區經常發生地震。" }] },
  { id: 1023, word: "environment", pos: "n.", zh: "環境", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Pollution harms the natural environment.", zh: "汙染傷害自然環境。" }] },
  { id: 1024, word: "contract", pos: "n./v.", zh: "合約、縮小", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "She signed a five-year contract.", zh: "她簽了五年的合約。" }] },
  { id: 1025, word: "involve", pos: "v.", zh: "涉及、包含", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The project involves international cooperation.", zh: "這項計畫涉及國際合作。" }] },
  { id: 1026, word: "establish", pos: "v.", zh: "建立", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The company was established in 1985.", zh: "這家公司成立於 1985 年。" }] },
  { id: 1027, word: "specific", pos: "adj.", zh: "特定的、明確的", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Please give a specific example.", zh: "請給一個具體的例子。" }] },
  { id: 1028, word: "theory", pos: "n.", zh: "理論", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Einstein's theory transformed physics.", zh: "愛因斯坦的理論改變了物理學。" }] },
  { id: 1029, word: "benefit", pos: "n./v.", zh: "益處、受益", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Exercise offers many health benefits.", zh: "運動有許多健康益處。" }] },
  { id: 1030, word: "major", pos: "adj.", zh: "主要的", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Cost is a major concern.", zh: "成本是主要考量。" }] },
  { id: 1031, word: "assess", pos: "v.", zh: "評估", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Students are assessed at the end of each term.", zh: "學生在每學期末接受評估。" }] },
  { id: 1032, word: "finance", pos: "n./v.", zh: "財務、資助", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The project was financed by the government.", zh: "這項計畫由政府資助。" }] },
  { id: 1033, word: "evident", pos: "adj.", zh: "明顯的", level: 6, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "It is evident that more research is needed.", zh: "顯然需要更多研究。" }] },
  { id: 1034, word: "period", pos: "n.", zh: "時期", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Over a long period, results have improved.", zh: "長期下來，結果已有改善。" }] },
  { id: 1035, word: "source", pos: "n.", zh: "來源", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The internet is a major source of information.", zh: "網路是主要的資訊來源。" }] },
  { id: 1036, word: "principle", pos: "n.", zh: "原則", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Equality is a fundamental principle.", zh: "平等是基本原則。" }] },
  { id: 1037, word: "percent", pos: "n.", zh: "百分比", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "About 70 percent of respondents agreed.", zh: "約 70% 的受訪者同意。" }] },
  { id: 1038, word: "labour", pos: "n.", zh: "勞動、勞工", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Manual labour is becoming less common.", zh: "體力勞動變得越來越少。" }] },
  { id: 1039, word: "consist", pos: "v.", zh: "由...組成", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The team consists of five members.", zh: "這個團隊由五人組成。" }] },
  { id: 1040, word: "assume", pos: "v.", zh: "假設、認為", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "We assume the data is accurate.", zh: "我們假設資料是準確的。" }] },
  { id: 1041, word: "factor", pos: "n.", zh: "因素", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Many factors contribute to success.", zh: "許多因素促成成功。" }] },
  { id: 1042, word: "formula", pos: "n.", zh: "公式", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Students must memorise the formula.", zh: "學生必須背下這個公式。" }] },
  { id: 1043, word: "legal", pos: "adj.", zh: "法律的", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The action is legal but unethical.", zh: "這個行為合法但不道德。" }] },
  { id: 1044, word: "sector", pos: "n.", zh: "部門、產業", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The technology sector is growing rapidly.", zh: "科技產業快速成長。" }] },
  { id: 1045, word: "authority", pos: "n.", zh: "當局、權威", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Local authorities banned the parade.", zh: "地方當局禁止了遊行。" }] },
  { id: 1046, word: "create", pos: "v.", zh: "創造", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The policy created new opportunities.", zh: "這項政策創造了新的機會。" }] },
  { id: 1047, word: "concept", pos: "n.", zh: "概念", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Time is a difficult concept to define.", zh: "時間是個難以定義的概念。" }] },
  { id: 1048, word: "legislate", pos: "v.", zh: "立法", level: 7, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The government legislated against discrimination.", zh: "政府立法禁止歧視。" }] },
  { id: 1049, word: "distribute", pos: "v.", zh: "分配、分發", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Resources are distributed unevenly.", zh: "資源分配不均。" }] },
  { id: 1050, word: "context", pos: "n.", zh: "脈絡、情境", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Words have different meanings in different contexts.", zh: "字詞在不同情境有不同意思。" }] },
  { id: 1051, word: "role", pos: "n.", zh: "角色、作用", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Education plays a vital role in society.", zh: "教育在社會中扮演關鍵角色。" }] },
  { id: 1052, word: "available", pos: "adj.", zh: "可取得的", level: 4, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "More data is available online.", zh: "網路上有更多資料可用。" }] },
  { id: 1053, word: "estimate", pos: "n./v.", zh: "估計", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "Experts estimate the cost at $2 million.", zh: "專家估計成本為 200 萬美元。" }] },
  { id: 1054, word: "interpret", pos: "v.", zh: "解讀、詮釋", level: 5, category: "AWL SL1", source: "AWL SL1", purpose: "passive", examples: [{ en: "The data can be interpreted in several ways.", zh: "這些資料可以有多種解讀方式。" }] },

  // ============================================
  // === AWL Sublist 2 ===
  // ============================================
  { id: 1060, word: "range", pos: "n./v.", zh: "範圍、幅度", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Prices range from $10 to $100.", zh: "價格從 10 到 100 美元不等。" }] },
  { id: 1061, word: "obtain", pos: "v.", zh: "獲得", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "You must obtain permission first.", zh: "你必須先取得許可。" }] },
  { id: 1062, word: "strategy", pos: "n.", zh: "策略", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The company developed a new marketing strategy.", zh: "公司發展了新的行銷策略。" }] },
  { id: 1063, word: "conclude", pos: "v.", zh: "結論、總結", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "We can conclude that the experiment was successful.", zh: "我們可以結論說這個實驗成功了。" }] },
  { id: 1064, word: "commission", pos: "n.", zh: "委員會、佣金", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "A commission was set up to investigate.", zh: "成立了一個委員會進行調查。" }] },
  { id: 1065, word: "appropriate", pos: "adj.", zh: "適當的", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Choose appropriate language for the audience.", zh: "為聽眾選擇適當的語言。" }] },
  { id: 1066, word: "institute", pos: "n.", zh: "機構", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The research institute published the findings.", zh: "研究機構發表了這些發現。" }] },
  { id: 1067, word: "credit", pos: "n.", zh: "信用、學分", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "She paid by credit card.", zh: "她用信用卡付費。" }] },
  { id: 1068, word: "region", pos: "n.", zh: "地區", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The region suffers from drought.", zh: "這個地區受旱災所苦。" }] },
  { id: 1069, word: "acquire", pos: "v.", zh: "取得、習得", level: 6, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Children acquire language naturally.", zh: "孩童自然地習得語言。" }] },
  { id: 1070, word: "invest", pos: "v.", zh: "投資", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Many people invest in property.", zh: "許多人投資房地產。" }] },
  { id: 1071, word: "construct", pos: "v.", zh: "建構、建造", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "A new bridge will be constructed.", zh: "將建造一座新橋。" }] },
  { id: 1072, word: "community", pos: "n.", zh: "社群", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The local community came together to help.", zh: "當地社群團結互助。" }] },
  { id: 1073, word: "design", pos: "n./v.", zh: "設計", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The design is both elegant and functional.", zh: "這個設計既優雅又實用。" }] },
  { id: 1074, word: "item", pos: "n.", zh: "項目", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Each item on the list must be checked.", zh: "清單上每個項目都要檢查。" }] },
  { id: 1075, word: "equate", pos: "v.", zh: "等同、視為", level: 6, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Some people equate wealth with happiness.", zh: "有些人把財富等同於幸福。" }] },
  { id: 1076, word: "chapter", pos: "n.", zh: "章節", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Read the first chapter for tomorrow.", zh: "明天前讀完第一章。" }] },
  { id: 1077, word: "participate", pos: "v.", zh: "參與", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "All students must participate in the discussion.", zh: "所有學生都必須參與討論。" }] },
  { id: 1078, word: "compute", pos: "v.", zh: "計算", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "We can compute the average easily.", zh: "我們可以輕易計算平均值。" }] },
  { id: 1079, word: "select", pos: "v.", zh: "選擇", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Select the most appropriate answer.", zh: "選出最適當的答案。" }] },
  { id: 1080, word: "relevant", pos: "adj.", zh: "相關的", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Only include relevant information.", zh: "只納入相關的資訊。" }] },
  { id: 1081, word: "maintain", pos: "v.", zh: "維持", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "It is hard to maintain motivation.", zh: "保持動力很困難。" }] },
  { id: 1082, word: "reside", pos: "v.", zh: "居住", level: 6, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "He resides in a small village.", zh: "他住在一個小村莊。" }] },
  { id: 1083, word: "culture", pos: "n.", zh: "文化", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Different cultures have different values.", zh: "不同文化有不同的價值觀。" }] },
  { id: 1084, word: "text", pos: "n.", zh: "文本、文字", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Highlight the key points in the text.", zh: "標出文本中的重點。" }] },
  { id: 1085, word: "regulate", pos: "v.", zh: "管制、調節", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The government regulates the industry.", zh: "政府管制這個產業。" }] },
  { id: 1086, word: "final", pos: "adj.", zh: "最後的", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The final decision rests with the committee.", zh: "最後的決定取決於委員會。" }] },
  { id: 1087, word: "distinct", pos: "adj.", zh: "明顯不同的", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "There is a distinct difference between them.", zh: "兩者之間有明顯的差異。" }] },
  { id: 1088, word: "potential", pos: "n./adj.", zh: "潛力、潛在的", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "She shows great potential as a writer.", zh: "她展現出作為作家的潛力。" }] },
  { id: 1089, word: "resource", pos: "n.", zh: "資源", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Natural resources are limited.", zh: "自然資源有限。" }] },
  { id: 1090, word: "element", pos: "n.", zh: "要素、元素", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Trust is a key element of friendship.", zh: "信任是友誼的關鍵要素。" }] },
  { id: 1091, word: "administrate", pos: "v.", zh: "管理", level: 6, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The team administrates the program.", zh: "團隊管理這個計畫。" }] },
  { id: 1092, word: "focus", pos: "n./v.", zh: "焦點、專注", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The focus of the study is on teenagers.", zh: "研究的焦點是青少年。" }] },
  { id: 1093, word: "seek", pos: "v.", zh: "尋求", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Many people seek professional help.", zh: "許多人尋求專業協助。" }] },
  { id: 1094, word: "achieve", pos: "v.", zh: "達成", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "She achieved her goals through hard work.", zh: "她透過努力達成目標。" }] },
  { id: 1095, word: "site", pos: "n.", zh: "場地、網站", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The construction site is closed today.", zh: "工地今天關閉。" }] },
  { id: 1096, word: "consequent", pos: "adj.", zh: "隨之而來的", level: 6, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The flood and consequent damage were severe.", zh: "洪水與隨之而來的災害很嚴重。" }] },
  { id: 1097, word: "survey", pos: "n./v.", zh: "調查", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The survey covered 1000 respondents.", zh: "這份調查涵蓋了 1000 位受訪者。" }] },
  { id: 1098, word: "normal", pos: "adj.", zh: "正常的", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "It is normal to feel nervous.", zh: "感到緊張是正常的。" }] },
  { id: 1099, word: "feature", pos: "n.", zh: "特色、特徵", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The phone has many new features.", zh: "這支手機有許多新功能。" }] },
  { id: 1100, word: "consume", pos: "v.", zh: "消耗、消費", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "We consume too much sugar.", zh: "我們攝取太多糖分。" }] },
  { id: 1101, word: "affect", pos: "v.", zh: "影響", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Stress can affect your sleep.", zh: "壓力可能影響睡眠。" }] },
  { id: 1102, word: "primary", pos: "adj.", zh: "主要的、初級的", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The primary aim is to reduce costs.", zh: "主要目標是降低成本。" }] },
  { id: 1103, word: "previous", pos: "adj.", zh: "之前的", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "She mentioned this in a previous email.", zh: "她在之前的郵件提過這個。" }] },
  { id: 1104, word: "secure", pos: "adj./v.", zh: "安全的、保住", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "We must secure the borders.", zh: "我們必須保護邊境。" }] },
  { id: 1105, word: "tradition", pos: "n.", zh: "傳統", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "This festival is an old tradition.", zh: "這個節日是古老的傳統。" }] },
  { id: 1106, word: "transfer", pos: "n./v.", zh: "轉移", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "She transferred to a different department.", zh: "她調到另一個部門。" }] },
  { id: 1107, word: "journal", pos: "n.", zh: "期刊、日誌", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The findings were published in a science journal.", zh: "這些發現發表在科學期刊上。" }] },
  { id: 1108, word: "conduct", pos: "v./n.", zh: "進行、行為", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Researchers conducted interviews with 100 people.", zh: "研究員訪問了 100 人。" }] },
  { id: 1109, word: "purchase", pos: "v./n.", zh: "購買", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Online purchases have increased dramatically.", zh: "線上購物大幅增加。" }] },
  { id: 1110, word: "positive", pos: "adj.", zh: "正面的", level: 4, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The response was overwhelmingly positive.", zh: "回應壓倒性地正面。" }] },
  { id: 1111, word: "perceive", pos: "v.", zh: "察覺、認為", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "People perceive risk differently.", zh: "人們對風險的感知不同。" }] },
  { id: 1112, word: "impact", pos: "n./v.", zh: "影響、衝擊", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The policy had a major impact on businesses.", zh: "這項政策對企業有重大影響。" }] },
  { id: 1113, word: "evaluate", pos: "v.", zh: "評估", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Teachers evaluate students' progress regularly.", zh: "老師定期評估學生的進度。" }] },
  { id: 1114, word: "restrict", pos: "v.", zh: "限制", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "The rules restrict access to the site.", zh: "規定限制了進入該地點。" }] },
  { id: 1115, word: "assist", pos: "v.", zh: "協助", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Volunteers assist with the event.", zh: "志工協助活動進行。" }] },
  { id: 1116, word: "category", pos: "n.", zh: "類別", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Books are sorted into categories.", zh: "書籍按類別分類。" }] },
  { id: 1117, word: "aspect", pos: "n.", zh: "面向、方面", level: 5, category: "AWL SL2", source: "AWL SL2", purpose: "passive", examples: [{ en: "Every aspect of the problem must be considered.", zh: "問題的每個面向都必須考慮。" }] },

  // ============================================
  // === AWL Sublist 3 ===
  // ============================================
  { id: 1120, word: "partner", pos: "n.", zh: "夥伴", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "She is a partner in the law firm.", zh: "她是這家律師事務所的合夥人。" }] },
  { id: 1121, word: "technical", pos: "adj.", zh: "技術的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Technical skills are highly valued.", zh: "技術能力非常受重視。" }] },
  { id: 1122, word: "rely", pos: "v.", zh: "依賴", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Many people rely on smartphones daily.", zh: "許多人每天依賴智慧型手機。" }] },
  { id: 1123, word: "corporate", pos: "adj.", zh: "企業的", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Corporate culture varies across companies.", zh: "企業文化因公司而異。" }] },
  { id: 1124, word: "exclude", pos: "v.", zh: "排除", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Some groups feel excluded from society.", zh: "一些群體感到被社會排除在外。" }] },
  { id: 1125, word: "react", pos: "v.", zh: "反應", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "How did they react to the news?", zh: "他們對這個消息有何反應？" }] },
  { id: 1126, word: "alternative", pos: "n./adj.", zh: "替代方案", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "We need an alternative solution.", zh: "我們需要替代方案。" }] },
  { id: 1127, word: "initial", pos: "adj.", zh: "最初的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The initial results were promising.", zh: "最初的結果令人期待。" }] },
  { id: 1128, word: "convene", pos: "v.", zh: "召集", level: 7, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The committee convenes once a month.", zh: "委員會每月召集一次。" }] },
  { id: 1129, word: "technology", pos: "n.", zh: "科技", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Technology has transformed daily life.", zh: "科技改變了日常生活。" }] },
  { id: 1130, word: "circumstance", pos: "n.", zh: "情況", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Under certain circumstances, exceptions are allowed.", zh: "在某些情況下允許例外。" }] },
  { id: 1131, word: "link", pos: "n./v.", zh: "連結", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Studies show a link between smoking and cancer.", zh: "研究顯示吸菸與癌症的關聯。" }] },
  { id: 1132, word: "minor", pos: "adj.", zh: "次要的、輕微的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "There were only minor injuries.", zh: "只有輕微的傷勢。" }] },
  { id: 1133, word: "comment", pos: "n./v.", zh: "評論", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "He refused to comment on the issue.", zh: "他拒絕對此事發表評論。" }] },
  { id: 1134, word: "shift", pos: "n./v.", zh: "轉變", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "There has been a shift in public opinion.", zh: "公眾意見已有轉變。" }] },
  { id: 1135, word: "sufficient", pos: "adj.", zh: "足夠的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "We have sufficient evidence to proceed.", zh: "我們有足夠的證據可以繼續。" }] },
  { id: 1136, word: "proportion", pos: "n.", zh: "比例", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "A large proportion of students walk to school.", zh: "大部分學生走路上學。" }] },
  { id: 1137, word: "ensure", pos: "v.", zh: "確保", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Please ensure the door is locked.", zh: "請確保門已上鎖。" }] },
  { id: 1138, word: "document", pos: "n./v.", zh: "文件、記錄", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Please bring the required documents.", zh: "請帶來所需的文件。" }] },
  { id: 1139, word: "constant", pos: "adj.", zh: "持續的、不變的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Constant practice leads to improvement.", zh: "持續練習帶來進步。" }] },
  { id: 1140, word: "component", pos: "n.", zh: "組成部分", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Each component plays an important role.", zh: "每個組成部分都扮演重要角色。" }] },
  { id: 1141, word: "core", pos: "n./adj.", zh: "核心", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Trust is at the core of our values.", zh: "信任是我們價值觀的核心。" }] },
  { id: 1142, word: "immigrate", pos: "v.", zh: "移民", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Many people immigrate for better opportunities.", zh: "許多人為更好的機會而移民。" }] },
  { id: 1143, word: "emphasis", pos: "n.", zh: "強調、重點", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "There is increasing emphasis on creativity.", zh: "對創造力的強調日益增加。" }] },
  { id: 1144, word: "valid", pos: "adj.", zh: "有效的、合理的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "She made a valid argument.", zh: "她提出了合理的論點。" }] },
  { id: 1145, word: "instance", pos: "n.", zh: "例子、實例", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "For instance, consider the case of Japan.", zh: "舉例來說，看看日本的情況。" }] },
  { id: 1146, word: "consent", pos: "n.", zh: "同意", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Parental consent is required.", zh: "需要家長的同意。" }] },
  { id: 1147, word: "physical", pos: "adj.", zh: "身體的、實體的", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Physical exercise improves mental health.", zh: "身體運動改善心理健康。" }] },
  { id: 1148, word: "fund", pos: "n./v.", zh: "基金、資助", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The research was funded by the EU.", zh: "這項研究由歐盟資助。" }] },
  { id: 1149, word: "dominate", pos: "v.", zh: "支配、主導", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "English dominates international business.", zh: "英語主導國際商務。" }] },
  { id: 1150, word: "outcome", pos: "n.", zh: "結果", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The outcome of the trial was unexpected.", zh: "審判的結果出乎意料。" }] },
  { id: 1151, word: "specify", pos: "v.", zh: "指定、具體說明", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Please specify the date and time.", zh: "請具體說明日期和時間。" }] },
  { id: 1152, word: "volume", pos: "n.", zh: "量、音量", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The volume of traffic has tripled.", zh: "交通量增加了三倍。" }] },
  { id: 1153, word: "task", pos: "n.", zh: "任務", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "This task requires careful planning.", zh: "這個任務需要仔細規劃。" }] },
  { id: 1154, word: "layer", pos: "n.", zh: "層", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The ozone layer protects us from UV rays.", zh: "臭氧層保護我們不受紫外線傷害。" }] },
  { id: 1155, word: "maximise", pos: "v.", zh: "最大化", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "We aim to maximise our impact.", zh: "我們目標是最大化我們的影響力。" }] },
  { id: 1156, word: "technique", pos: "n.", zh: "技巧、技術", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "This technique is widely used.", zh: "這個技術被廣泛使用。" }] },
  { id: 1157, word: "correspond", pos: "v.", zh: "對應、通信", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The numbers correspond to specific items.", zh: "這些數字對應到特定項目。" }] },
  { id: 1158, word: "locate", pos: "v.", zh: "找到、位於", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The store is located downtown.", zh: "這家店位於市中心。" }] },
  { id: 1159, word: "constrain", pos: "v.", zh: "約束、限制", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Budget limits constrain our options.", zh: "預算限制約束了我們的選擇。" }] },
  { id: 1160, word: "interact", pos: "v.", zh: "互動", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Children learn by interacting with others.", zh: "孩童透過與他人互動來學習。" }] },
  { id: 1161, word: "illustrate", pos: "v.", zh: "說明、例證", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "These figures illustrate the trend.", zh: "這些數字說明了這個趨勢。" }] },
  { id: 1162, word: "deduce", pos: "v.", zh: "推論", level: 6, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "We can deduce the cause from the evidence.", zh: "我們可以從證據推論出原因。" }] },
  { id: 1163, word: "coordinate", pos: "v.", zh: "協調", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "She coordinates the team's activities.", zh: "她協調團隊的活動。" }] },
  { id: 1164, word: "compensate", pos: "v.", zh: "補償", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The company compensated the affected workers.", zh: "公司補償了受影響的員工。" }] },
  { id: 1165, word: "imply", pos: "v.", zh: "暗示、意味著", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "His silence implies disagreement.", zh: "他的沉默意味著不同意。" }] },
  { id: 1166, word: "philosophy", pos: "n.", zh: "哲學", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Their company philosophy is customer-first.", zh: "他們公司的理念是顧客至上。" }] },
  { id: 1167, word: "negate", pos: "v.", zh: "否定、抵消", level: 7, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The new evidence negates our earlier conclusion.", zh: "新證據否定了我們先前的結論。" }] },
  { id: 1168, word: "justify", pos: "v.", zh: "證明...是合理的", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "How do you justify this decision?", zh: "你如何證明這個決定是合理的？" }] },
  { id: 1169, word: "scheme", pos: "n.", zh: "方案、計畫", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The government launched a new welfare scheme.", zh: "政府推出新的福利方案。" }] },
  { id: 1170, word: "sequence", pos: "n.", zh: "順序、序列", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Follow the sequence of steps.", zh: "依照步驟順序進行。" }] },
  { id: 1171, word: "publish", pos: "v.", zh: "出版、發表", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "The book was published in 2020.", zh: "這本書於 2020 年出版。" }] },
  { id: 1172, word: "remove", pos: "v.", zh: "移除", level: 4, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Please remove your shoes before entering.", zh: "進入前請脫鞋。" }] },
  { id: 1173, word: "register", pos: "v./n.", zh: "登記、註冊", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Students must register online.", zh: "學生必須在線上登記。" }] },

  // ============================================
  // === AWL Sublist 4 ===
  // ============================================
  { id: 1180, word: "stress", pos: "n./v.", zh: "壓力、強調", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Stress can affect your health.", zh: "壓力會影響健康。" }] },
  { id: 1181, word: "statistic", pos: "n.", zh: "統計數字", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "These statistics are alarming.", zh: "這些統計數字令人擔憂。" }] },
  { id: 1182, word: "concentrate", pos: "v.", zh: "專注", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "I find it hard to concentrate.", zh: "我很難專注。" }] },
  { id: 1183, word: "domestic", pos: "adj.", zh: "國內的、家庭的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Domestic flights are cheaper than international.", zh: "國內航班比國際航班便宜。" }] },
  { id: 1184, word: "debate", pos: "n./v.", zh: "辯論、爭論", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The issue remains a matter of debate.", zh: "這個議題仍存在爭議。" }] },
  { id: 1185, word: "commit", pos: "v.", zh: "承諾、犯下", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "She committed herself to the project.", zh: "她全心投入這個計畫。" }] },
  { id: 1186, word: "mechanism", pos: "n.", zh: "機制", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The body has natural defense mechanisms.", zh: "身體有自然的防禦機制。" }] },
  { id: 1187, word: "grant", pos: "n./v.", zh: "補助金、授予", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "He received a research grant.", zh: "他獲得了研究補助金。" }] },
  { id: 1188, word: "professional", pos: "adj./n.", zh: "專業的、專業人士", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "She is a professional photographer.", zh: "她是專業攝影師。" }] },
  { id: 1189, word: "overall", pos: "adv./adj.", zh: "整體上", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Overall, the project was successful.", zh: "整體來說，計畫很成功。" }] },
  { id: 1190, word: "hypothesis", pos: "n.", zh: "假說", level: 6, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Scientists tested the hypothesis.", zh: "科學家測試了這個假說。" }] },
  { id: 1191, word: "investigate", pos: "v.", zh: "調查", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Police are investigating the case.", zh: "警方正在調查這個案件。" }] },
  { id: 1192, word: "summary", pos: "n.", zh: "摘要", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Write a summary of the article.", zh: "為這篇文章寫一份摘要。" }] },
  { id: 1193, word: "impose", pos: "v.", zh: "強加、課徵", level: 6, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The government imposed new taxes.", zh: "政府課徵新稅。" }] },
  { id: 1194, word: "civil", pos: "adj.", zh: "公民的、民事的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Civil rights are protected by law.", zh: "公民權利受法律保護。" }] },
  { id: 1195, word: "code", pos: "n.", zh: "代碼、規範", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Each product has a unique code.", zh: "每項產品都有獨特的代碼。" }] },
  { id: 1196, word: "series", pos: "n.", zh: "系列", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "There has been a series of accidents.", zh: "發生了一連串的意外。" }] },
  { id: 1197, word: "apparent", pos: "adj.", zh: "明顯的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "It is apparent that changes are needed.", zh: "顯然需要改變。" }] },
  { id: 1198, word: "ethnic", pos: "adj.", zh: "種族的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The city is home to many ethnic groups.", zh: "這個城市有許多族群。" }] },
  { id: 1199, word: "contrast", pos: "n./v.", zh: "對比", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "There is a sharp contrast between the two.", zh: "兩者之間有強烈對比。" }] },
  { id: 1200, word: "output", pos: "n.", zh: "產出、輸出", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Industrial output rose by 5%.", zh: "工業產出增加 5%。" }] },
  { id: 1201, word: "goal", pos: "n.", zh: "目標", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Set clear goals for yourself.", zh: "為自己設立清楚的目標。" }] },
  { id: 1202, word: "cycle", pos: "n.", zh: "循環、週期", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The water cycle is essential to life.", zh: "水循環對生命至關重要。" }] },
  { id: 1203, word: "internal", pos: "adj.", zh: "內部的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "There are internal conflicts in the company.", zh: "公司內部有衝突。" }] },
  { id: 1204, word: "dimension", pos: "n.", zh: "維度、面向", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The problem has many dimensions.", zh: "這個問題有許多面向。" }] },
  { id: 1205, word: "resolve", pos: "v.", zh: "解決", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "They resolved the dispute peacefully.", zh: "他們和平地解決了爭端。" }] },
  { id: 1206, word: "approximate", pos: "adj./v.", zh: "大約的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The approximate cost is $500.", zh: "大約成本為 500 美元。" }] },
  { id: 1207, word: "hence", pos: "adv.", zh: "因此", level: 6, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Demand is rising; hence, prices increase.", zh: "需求上升，因此價格也上漲。" }] },
  { id: 1208, word: "principal", pos: "adj./n.", zh: "主要的、校長", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The principal cause is unclear.", zh: "主要原因不明。" }] },
  { id: 1209, word: "attitude", pos: "n.", zh: "態度", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "She has a positive attitude.", zh: "她有正面的態度。" }] },
  { id: 1210, word: "retain", pos: "v.", zh: "保留", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Companies struggle to retain talent.", zh: "公司努力留住人才。" }] },
  { id: 1211, word: "implement", pos: "v.", zh: "實施、執行", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The new system was implemented last year.", zh: "新系統去年實施。" }] },
  { id: 1212, word: "sum", pos: "n.", zh: "總和", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The sum of all parts is greater than the whole.", zh: "各部分的總和大於整體。" }] },
  { id: 1213, word: "access", pos: "n./v.", zh: "取得、進入", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Everyone should have access to education.", zh: "每個人都應該有受教育的機會。" }] },
  { id: 1214, word: "project", pos: "n./v.", zh: "計畫、預測", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Experts project a 3% growth.", zh: "專家預測 3% 的成長。" }] },
  { id: 1215, word: "obvious", pos: "adj.", zh: "明顯的", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The answer is not obvious.", zh: "答案並不明顯。" }] },
  { id: 1216, word: "undertake", pos: "v.", zh: "承擔、進行", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "She undertook the difficult task.", zh: "她承擔了這個困難的任務。" }] },
  { id: 1217, word: "option", pos: "n.", zh: "選項", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Consider all available options.", zh: "考慮所有可行的選項。" }] },
  { id: 1218, word: "attribute", pos: "n./v.", zh: "特質、歸因於", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "She attributes her success to hard work.", zh: "她將成功歸因於努力工作。" }] },
  { id: 1219, word: "communicate", pos: "v.", zh: "溝通", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Good leaders communicate clearly.", zh: "好的領導者溝通清楚。" }] },
  { id: 1220, word: "predict", pos: "v.", zh: "預測", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "It is hard to predict the weather.", zh: "天氣難以預測。" }] },
  { id: 1221, word: "occupy", pos: "v.", zh: "佔據", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The building occupies an entire block.", zh: "這棟建築佔據了整個街區。" }] },
  { id: 1222, word: "error", pos: "n.", zh: "錯誤", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Spot the errors in this sentence.", zh: "找出這個句子中的錯誤。" }] },
  { id: 1223, word: "integrate", pos: "v.", zh: "整合", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The systems are fully integrated.", zh: "這些系統完全整合。" }] },
  { id: 1224, word: "label", pos: "n./v.", zh: "標籤、貼標", level: 4, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Read the food labels carefully.", zh: "仔細閱讀食品標籤。" }] },
  { id: 1225, word: "parameter", pos: "n.", zh: "參數", level: 6, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "Define the parameters of the study.", zh: "界定研究的參數。" }] },
  { id: 1226, word: "regime", pos: "n.", zh: "政權、制度", level: 6, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The regime collapsed in 1989.", zh: "這個政權於 1989 年倒台。" }] },
  { id: 1227, word: "prior", pos: "adj.", zh: "之前的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "No prior experience is required.", zh: "不需要先前經驗。" }] },
  { id: 1228, word: "annual", pos: "adj.", zh: "年度的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The annual report is now available.", zh: "年度報告現已發布。" }] },
  { id: 1229, word: "phase", pos: "n.", zh: "階段", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "We are entering the final phase.", zh: "我們正進入最後階段。" }] },
  { id: 1230, word: "status", pos: "n.", zh: "地位、狀態", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "The status of women has changed.", zh: "女性的地位已改變。" }] },
  { id: 1231, word: "parallel", pos: "adj./n.", zh: "平行的", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "There are parallels between the two cases.", zh: "兩個案例之間有相似之處。" }] },
  { id: 1232, word: "emerge", pos: "v.", zh: "浮現、出現", level: 5, category: "AWL SL4", source: "AWL SL4", purpose: "passive", examples: [{ en: "New evidence has emerged.", zh: "新的證據已出現。" }] },

  // ============================================
  // === AWL Sublist 5 ===
  // ============================================
  { id: 1240, word: "generate", pos: "v.", zh: "產生", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Solar panels generate electricity.", zh: "太陽能板產生電力。" }] },
  { id: 1241, word: "target", pos: "n./v.", zh: "目標", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "We met our sales target.", zh: "我們達成了銷售目標。" }] },
  { id: 1242, word: "adjust", pos: "v.", zh: "調整", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She adjusted the volume on the radio.", zh: "她調整了收音機的音量。" }] },
  { id: 1243, word: "logic", pos: "n.", zh: "邏輯", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Your argument has a clear logic.", zh: "你的論點邏輯清楚。" }] },
  { id: 1244, word: "image", pos: "n.", zh: "形象、影像", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The company is trying to improve its image.", zh: "公司試圖改善其形象。" }] },
  { id: 1245, word: "generation", pos: "n.", zh: "世代", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "This generation grew up with smartphones.", zh: "這個世代從小就有智慧型手機。" }] },
  { id: 1246, word: "stable", pos: "adj.", zh: "穩定的", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The economy remains stable.", zh: "經濟保持穩定。" }] },
  { id: 1247, word: "expose", pos: "v.", zh: "暴露、揭露", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Workers are exposed to harmful chemicals.", zh: "工人暴露於有害化學物質中。" }] },
  { id: 1248, word: "academy", pos: "n.", zh: "學院", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She graduated from a prestigious academy.", zh: "她畢業於一所著名的學院。" }] },
  { id: 1249, word: "orient", pos: "v.", zh: "定向、適應", level: 6, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "New students need time to orient themselves.", zh: "新生需要時間適應。" }] },
  { id: 1250, word: "equivalent", pos: "adj./n.", zh: "等同於", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "One dollar is equivalent to 30 NT dollars.", zh: "一美元等同於 30 新台幣。" }] },
  { id: 1251, word: "external", pos: "adj.", zh: "外部的", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "External factors influence the outcome.", zh: "外部因素影響結果。" }] },
  { id: 1252, word: "mental", pos: "adj.", zh: "心理的", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Mental health is as important as physical health.", zh: "心理健康跟身體健康一樣重要。" }] },
  { id: 1253, word: "trend", pos: "n.", zh: "趨勢", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The trend shows steady growth.", zh: "趨勢顯示穩定成長。" }] },
  { id: 1254, word: "enable", pos: "v.", zh: "使...能夠", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Technology enables remote work.", zh: "科技讓遠距工作成為可能。" }] },
  { id: 1255, word: "energy", pos: "n.", zh: "能量、活力", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Renewable energy is becoming popular.", zh: "可再生能源越來越受歡迎。" }] },
  { id: 1256, word: "sustain", pos: "v.", zh: "維持、支持", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "It is hard to sustain rapid growth.", zh: "難以維持快速成長。" }] },
  { id: 1257, word: "style", pos: "n.", zh: "風格", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Her writing style is clear and direct.", zh: "她的寫作風格清晰直接。" }] },
  { id: 1258, word: "consult", pos: "v.", zh: "諮詢", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Always consult a doctor first.", zh: "請先諮詢醫生。" }] },
  { id: 1259, word: "medical", pos: "adj.", zh: "醫療的", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "He needs immediate medical attention.", zh: "他需要立即的醫療救助。" }] },
  { id: 1260, word: "welfare", pos: "n.", zh: "福利", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The welfare of children is paramount.", zh: "兒童的福利最為重要。" }] },
  { id: 1261, word: "objective", pos: "n./adj.", zh: "目標、客觀的", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "What is the main objective of the study?", zh: "這項研究的主要目標是什麼？" }] },
  { id: 1262, word: "ratio", pos: "n.", zh: "比例", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The student-teacher ratio is high.", zh: "師生比例很高。" }] },
  { id: 1263, word: "conflict", pos: "n./v.", zh: "衝突", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The two sides remain in conflict.", zh: "雙方仍處於衝突中。" }] },
  { id: 1264, word: "challenge", pos: "n./v.", zh: "挑戰", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "We face many challenges ahead.", zh: "我們面臨許多挑戰。" }] },
  { id: 1265, word: "revenue", pos: "n.", zh: "收益、稅收", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Annual revenue exceeded $10 million.", zh: "年度收益超過 1000 萬美元。" }] },
  { id: 1266, word: "psychology", pos: "n.", zh: "心理學", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She studied psychology at university.", zh: "她在大學讀心理學。" }] },
  { id: 1267, word: "decline", pos: "n./v.", zh: "下降、衰退", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Sales have declined sharply.", zh: "銷售量急遽下降。" }] },
  { id: 1268, word: "aware", pos: "adj.", zh: "知道、意識到的", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Are you aware of the risks?", zh: "你意識到這些風險嗎？" }] },
  { id: 1269, word: "capacity", pos: "n.", zh: "能力、容量", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The stadium has a capacity of 50,000.", zh: "這座體育場可容納 5 萬人。" }] },
  { id: 1270, word: "evolve", pos: "v.", zh: "演化", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Species evolve over time.", zh: "物種隨時間演化。" }] },
  { id: 1271, word: "modify", pos: "v.", zh: "修改", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "We modified the design slightly.", zh: "我們稍微修改了設計。" }] },
  { id: 1272, word: "symbol", pos: "n.", zh: "符號、象徵", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The dove is a symbol of peace.", zh: "鴿子是和平的象徵。" }] },
  { id: 1273, word: "contact", pos: "n./v.", zh: "聯絡", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Please contact us for more information.", zh: "更多資訊請聯絡我們。" }] },
  { id: 1274, word: "enforce", pos: "v.", zh: "強制執行", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The law must be enforced.", zh: "法律必須執行。" }] },
  { id: 1275, word: "expand", pos: "v.", zh: "擴張", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The company plans to expand overseas.", zh: "公司計劃向海外擴張。" }] },
  { id: 1276, word: "precise", pos: "adj.", zh: "精確的", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Give a precise definition of the term.", zh: "對這個詞給予精確的定義。" }] },
  { id: 1277, word: "version", pos: "n.", zh: "版本", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "This is the latest version of the software.", zh: "這是軟體最新版本。" }] },
  { id: 1278, word: "substitute", pos: "n./v.", zh: "替代品、替代", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Margarine is a substitute for butter.", zh: "人造奶油是奶油的替代品。" }] },
  { id: 1279, word: "draft", pos: "n./v.", zh: "草稿", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She wrote the first draft yesterday.", zh: "她昨天寫了初稿。" }] },
  { id: 1280, word: "notion", pos: "n.", zh: "概念、想法", level: 6, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She rejected the notion of failure.", zh: "她拒絕接受失敗的概念。" }] },
  { id: 1281, word: "reject", pos: "v.", zh: "拒絕", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Her application was rejected.", zh: "她的申請被拒絕。" }] },
  { id: 1282, word: "entity", pos: "n.", zh: "實體", level: 6, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Each branch operates as a separate entity.", zh: "每家分公司獨立運作。" }] },
  { id: 1283, word: "margin", pos: "n.", zh: "邊緣、利潤率", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "He won by a narrow margin.", zh: "他以微小差距獲勝。" }] },
  { id: 1284, word: "pursue", pos: "v.", zh: "追求", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She decided to pursue a career in law.", zh: "她決定追求法律事業。" }] },
  { id: 1285, word: "network", pos: "n.", zh: "網路、人脈", level: 4, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "She has a wide professional network.", zh: "她有廣大的專業人脈。" }] },
  { id: 1286, word: "monitor", pos: "v./n.", zh: "監控", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Doctors monitor the patient's condition.", zh: "醫生監控病人的狀況。" }] },
  { id: 1287, word: "prime", pos: "adj.", zh: "主要的、首要的", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "Safety is our prime concern.", zh: "安全是我們的首要考量。" }] },
  { id: 1288, word: "amend", pos: "v.", zh: "修正、修改", level: 6, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "The law was amended last year.", zh: "這項法律去年被修改。" }] },
  { id: 1289, word: "alter", pos: "v.", zh: "改變", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "We may need to alter our plans.", zh: "我們可能需要改變計畫。" }] },
  { id: 1290, word: "perspective", pos: "n.", zh: "觀點", level: 5, category: "AWL SL5", source: "AWL SL5", purpose: "passive", examples: [{ en: "From a different perspective, this looks promising.", zh: "從不同的觀點看，這看起來很有希望。" }] },

  // ============================================
  // === AWL Sublist 6 ===
  // ============================================
  { id: 1300, word: "utilise", pos: "v.", zh: "利用", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "We need to utilise our resources better.", zh: "我們需要更好地利用資源。" }] },
  { id: 1301, word: "lecture", pos: "n.", zh: "演講、講課", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The lecture was both interesting and informative.", zh: "這場演講既有趣又有資訊性。" }] },
  { id: 1302, word: "inhibit", pos: "v.", zh: "抑制", level: 7, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Shyness can inhibit personal growth.", zh: "害羞可能抑制個人成長。" }] },
  { id: 1303, word: "rational", pos: "adj.", zh: "理性的", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Make a rational decision based on facts.", zh: "根據事實做出理性的決定。" }] },
  { id: 1304, word: "accuracy", pos: "n.", zh: "準確度", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The accuracy of the data is essential.", zh: "資料的準確度至關重要。" }] },
  { id: 1305, word: "explicit", pos: "adj.", zh: "明確的", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She gave explicit instructions.", zh: "她給了明確的指示。" }] },
  { id: 1306, word: "assign", pos: "v.", zh: "分配、指派", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Each student is assigned a topic.", zh: "每位學生被分配一個題目。" }] },
  { id: 1307, word: "author", pos: "n.", zh: "作者", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She is the author of three books.", zh: "她是三本書的作者。" }] },
  { id: 1308, word: "incorporate", pos: "v.", zh: "納入、合併", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The design incorporates traditional elements.", zh: "這個設計納入了傳統元素。" }] },
  { id: 1309, word: "minimum", pos: "n./adj.", zh: "最低限度", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The minimum wage was raised.", zh: "最低工資被提高。" }] },
  { id: 1310, word: "underlie", pos: "v.", zh: "為...的基礎", level: 7, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Several factors underlie the problem.", zh: "幾個因素是這個問題的根源。" }] },
  { id: 1311, word: "trace", pos: "v./n.", zh: "追蹤、痕跡", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "We can trace the problem back to 2015.", zh: "我們可以追溯這個問題到 2015 年。" }] },
  { id: 1312, word: "edit", pos: "v.", zh: "編輯", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She edits the company magazine.", zh: "她編輯公司雜誌。" }] },
  { id: 1313, word: "cooperate", pos: "v.", zh: "合作", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The two countries agreed to cooperate.", zh: "兩國同意合作。" }] },
  { id: 1314, word: "index", pos: "n.", zh: "指數、索引", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The cost of living index rose.", zh: "生活成本指數上升。" }] },
  { id: 1315, word: "aggregate", pos: "n./v.", zh: "總計", level: 7, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The aggregate cost was over $1 million.", zh: "總成本超過 100 萬美元。" }] },
  { id: 1316, word: "transport", pos: "n./v.", zh: "運輸", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Public transport is convenient here.", zh: "這裡的大眾運輸很方便。" }] },
  { id: 1317, word: "exceed", pos: "v.", zh: "超過", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Demand exceeds supply.", zh: "需求超過供給。" }] },
  { id: 1318, word: "migrate", pos: "v.", zh: "遷徙", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Birds migrate south in winter.", zh: "鳥類冬天往南遷徙。" }] },
  { id: 1319, word: "overseas", pos: "adv./adj.", zh: "海外的", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Many students study overseas.", zh: "許多學生到海外留學。" }] },
  { id: 1320, word: "display", pos: "v./n.", zh: "展示", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Artworks were displayed in the gallery.", zh: "藝術品在畫廊展出。" }] },
  { id: 1321, word: "subsidy", pos: "n.", zh: "補貼", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The government provides subsidies for farmers.", zh: "政府為農民提供補貼。" }] },
  { id: 1322, word: "incentive", pos: "n.", zh: "誘因", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Tax cuts are an incentive for businesses.", zh: "減稅是企業的誘因。" }] },
  { id: 1323, word: "presume", pos: "v.", zh: "假設、認為", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "I presume you have a good reason.", zh: "我認為你有充分理由。" }] },
  { id: 1324, word: "flexible", pos: "adj.", zh: "彈性的", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "We offer flexible working hours.", zh: "我們提供彈性工時。" }] },
  { id: 1325, word: "federal", pos: "adj.", zh: "聯邦的", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Federal law overrides state law.", zh: "聯邦法律凌駕於州法之上。" }] },
  { id: 1326, word: "domain", pos: "n.", zh: "領域", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "This is outside my domain of expertise.", zh: "這超出我的專業領域。" }] },
  { id: 1327, word: "ignorance", pos: "n.", zh: "無知", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Ignorance of the law is no excuse.", zh: "不知法不是藉口。" }] },
  { id: 1328, word: "abstract", pos: "adj.", zh: "抽象的", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Abstract concepts are hard to explain.", zh: "抽象概念難以解釋。" }] },
  { id: 1329, word: "attach", pos: "v.", zh: "附上", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Please attach your resume.", zh: "請附上你的履歷。" }] },
  { id: 1330, word: "scope", pos: "n.", zh: "範圍", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "This is beyond the scope of the study.", zh: "這超出了研究的範圍。" }] },
  { id: 1331, word: "allocate", pos: "v.", zh: "分配", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Funds were allocated to each project.", zh: "資金已分配給各個專案。" }] },
  { id: 1332, word: "ministry", pos: "n.", zh: "部會、部門", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The Ministry of Education announced new rules.", zh: "教育部公布了新規定。" }] },
  { id: 1333, word: "gender", pos: "n.", zh: "性別", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Gender equality remains an important issue.", zh: "性別平等仍是重要議題。" }] },
  { id: 1334, word: "recover", pos: "v.", zh: "復原", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She recovered quickly from the illness.", zh: "她迅速從疾病中復原。" }] },
  { id: 1335, word: "neutral", pos: "adj.", zh: "中立的", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Switzerland remained neutral during the war.", zh: "瑞士在戰爭期間保持中立。" }] },
  { id: 1336, word: "input", pos: "n.", zh: "投入、輸入", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "We welcome your input on the proposal.", zh: "我們歡迎你對提案的意見。" }] },
  { id: 1337, word: "brief", pos: "adj.", zh: "簡短的", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Please give a brief introduction.", zh: "請做簡短的介紹。" }] },
  { id: 1338, word: "intelligence", pos: "n.", zh: "智力、情報", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Artificial intelligence is advancing rapidly.", zh: "人工智慧正快速發展。" }] },
  { id: 1339, word: "interval", pos: "n.", zh: "間隔", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Take a break at regular intervals.", zh: "定期休息一下。" }] },
  { id: 1340, word: "expert", pos: "n./adj.", zh: "專家", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Experts disagree on this issue.", zh: "專家對此議題意見分歧。" }] },
  { id: 1341, word: "bond", pos: "n.", zh: "債券、紐帶", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "There is a strong bond between them.", zh: "他們之間有強烈的情感連結。" }] },
  { id: 1342, word: "transform", pos: "v.", zh: "轉變", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The internet transformed how we work.", zh: "網路改變了我們的工作方式。" }] },
  { id: 1343, word: "initiate", pos: "v.", zh: "發起、開始", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "The company initiated a new program.", zh: "公司發起了新計畫。" }] },
  { id: 1344, word: "capable", pos: "adj.", zh: "有能力的", level: 4, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She is capable of great achievements.", zh: "她有能力獲得巨大成就。" }] },
  { id: 1345, word: "precede", pos: "v.", zh: "先於、在...之前", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Bad weather preceded the disaster.", zh: "災難發生前先是壞天氣。" }] },
  { id: 1346, word: "estate", pos: "n.", zh: "地產、莊園", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Real estate prices are rising.", zh: "房地產價格上漲中。" }] },
  { id: 1347, word: "motive", pos: "n.", zh: "動機", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Her motive remains unclear.", zh: "她的動機仍不明。" }] },
  { id: 1348, word: "cite", pos: "v.", zh: "引用、引述", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She cited several studies in her paper.", zh: "她在論文中引用了幾項研究。" }] },
  { id: 1349, word: "discriminate", pos: "v.", zh: "歧視、區分", level: 6, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "Companies must not discriminate based on age.", zh: "公司不得基於年齡進行歧視。" }] },
  { id: 1350, word: "instruct", pos: "v.", zh: "指示、教導", level: 5, category: "AWL SL6", source: "AWL SL6", purpose: "passive", examples: [{ en: "She instructed the team on the new procedures.", zh: "她指導團隊新的程序。" }] },

  // ============================================
  // === AWL Sublist 7 ===
  // ============================================
  { id: 1360, word: "release", pos: "v./n.", zh: "釋放、發布", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The film will be released next month.", zh: "這部電影下個月發行。" }] },
  { id: 1361, word: "deny", pos: "v.", zh: "否認", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "He denied any wrongdoing.", zh: "他否認任何不當行為。" }] },
  { id: 1362, word: "ultimate", pos: "adj.", zh: "最終的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The ultimate goal is world peace.", zh: "最終目標是世界和平。" }] },
  { id: 1363, word: "adapt", pos: "v.", zh: "適應", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Children adapt quickly to new environments.", zh: "孩童能很快適應新環境。" }] },
  { id: 1364, word: "differentiate", pos: "v.", zh: "區分", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "It is hard to differentiate the twins.", zh: "很難區分這對雙胞胎。" }] },
  { id: 1365, word: "intervene", pos: "v.", zh: "介入、干預", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The UN intervened in the conflict.", zh: "聯合國介入了這場衝突。" }] },
  { id: 1366, word: "survive", pos: "v.", zh: "存活", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Only the fittest will survive.", zh: "只有最強壯的才能存活。" }] },
  { id: 1367, word: "innovate", pos: "v.", zh: "創新", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Companies must innovate to stay competitive.", zh: "公司必須創新才能保持競爭力。" }] },
  { id: 1368, word: "advocate", pos: "v./n.", zh: "倡導、提倡者", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "She advocates for women's rights.", zh: "她為女權發聲。" }] },
  { id: 1369, word: "simulate", pos: "v.", zh: "模擬", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Computers can simulate real-world conditions.", zh: "電腦可以模擬真實世界的狀況。" }] },
  { id: 1370, word: "isolate", pos: "v.", zh: "孤立、隔離", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Patients were isolated to prevent spread.", zh: "病人被隔離以防擴散。" }] },
  { id: 1371, word: "unique", pos: "adj.", zh: "獨特的", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Every culture has its unique traditions.", zh: "每種文化都有獨特的傳統。" }] },
  { id: 1372, word: "channel", pos: "n.", zh: "頻道、管道", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Use the right channel to file complaints.", zh: "使用正確的管道提出申訴。" }] },
  { id: 1373, word: "paradigm", pos: "n.", zh: "典範", level: 7, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The discovery led to a paradigm shift.", zh: "這項發現帶來典範轉移。" }] },
  { id: 1374, word: "empirical", pos: "adj.", zh: "實證的", level: 7, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "There is empirical evidence to support this.", zh: "有實證證據支持這一點。" }] },
  { id: 1375, word: "ideology", pos: "n.", zh: "意識形態", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Political ideology shapes policy.", zh: "政治意識形態形塑政策。" }] },
  { id: 1376, word: "media", pos: "n.", zh: "媒體", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Social media influences public opinion.", zh: "社群媒體影響公眾意見。" }] },
  { id: 1377, word: "confirm", pos: "v.", zh: "確認", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Please confirm your attendance.", zh: "請確認你會出席。" }] },
  { id: 1378, word: "convert", pos: "v.", zh: "轉換", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The factory was converted into offices.", zh: "這座工廠被改成辦公室。" }] },
  { id: 1379, word: "submit", pos: "v.", zh: "提交", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Submit your application by Friday.", zh: "週五前提交你的申請。" }] },
  { id: 1380, word: "dynamic", pos: "adj.", zh: "充滿活力的、動態的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The team has a dynamic leader.", zh: "這個團隊有個充滿活力的領導者。" }] },
  { id: 1381, word: "quote", pos: "v./n.", zh: "引用", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "She often quotes famous authors.", zh: "她常引用知名作家的話。" }] },
  { id: 1382, word: "transmit", pos: "v.", zh: "傳送", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The disease is transmitted through air.", zh: "這種疾病經由空氣傳播。" }] },
  { id: 1383, word: "thesis", pos: "n.", zh: "論文、論點", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "She is working on her doctoral thesis.", zh: "她正在寫博士論文。" }] },
  { id: 1384, word: "reverse", pos: "v./adj.", zh: "顛倒、相反", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The decision was reversed on appeal.", zh: "這個決定在上訴後被推翻。" }] },
  { id: 1385, word: "identical", pos: "adj.", zh: "完全相同的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The twins look identical.", zh: "這對雙胞胎長得一模一樣。" }] },
  { id: 1386, word: "eliminate", pos: "v.", zh: "消除", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "We must eliminate waste in the system.", zh: "我們必須消除系統中的浪費。" }] },
  { id: 1387, word: "sole", pos: "adj.", zh: "唯一的", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "She is the sole survivor of the crash.", zh: "她是這場墜機的唯一倖存者。" }] },
  { id: 1388, word: "comprehensive", pos: "adj.", zh: "全面的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "She gave a comprehensive overview.", zh: "她做了全面的概述。" }] },
  { id: 1389, word: "globe", pos: "n.", zh: "全球、地球", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Climate change affects the entire globe.", zh: "氣候變遷影響整個地球。" }] },
  { id: 1390, word: "classic", pos: "adj./n.", zh: "經典的", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "This is a classic example of poor planning.", zh: "這是規劃不良的典型例子。" }] },
  { id: 1391, word: "guarantee", pos: "n./v.", zh: "保證", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Hard work doesn't guarantee success.", zh: "努力不保證成功。" }] },
  { id: 1392, word: "foundation", pos: "n.", zh: "基礎、基金會", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Reading is the foundation of learning.", zh: "閱讀是學習的基礎。" }] },
  { id: 1393, word: "equip", pos: "v.", zh: "裝備、配備", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The school is equipped with modern facilities.", zh: "這所學校配備了現代設施。" }] },
  { id: 1394, word: "prohibit", pos: "v.", zh: "禁止", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Smoking is prohibited in public spaces.", zh: "公共場所禁止吸菸。" }] },
  { id: 1395, word: "contrary", pos: "adj.", zh: "相反的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Contrary to popular belief, eggs are healthy.", zh: "與大眾的觀念相反，雞蛋是健康的。" }] },
  { id: 1396, word: "aid", pos: "n./v.", zh: "援助", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Foreign aid helps developing countries.", zh: "對外援助幫助開發中國家。" }] },
  { id: 1397, word: "topic", pos: "n.", zh: "話題", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Climate change is a hot topic.", zh: "氣候變遷是熱門話題。" }] },
  { id: 1398, word: "adult", pos: "n.", zh: "成人", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "This film is for adults only.", zh: "這部電影限成人觀看。" }] },
  { id: 1399, word: "extract", pos: "v.", zh: "提取", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Oil is extracted from olives.", zh: "從橄欖中提取橄欖油。" }] },
  { id: 1400, word: "decade", pos: "n.", zh: "十年", level: 4, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The technology has improved over the past decade.", zh: "科技在過去十年已大幅進步。" }] },
  { id: 1401, word: "hierarchy", pos: "n.", zh: "階級制度", level: 6, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The company has a strict hierarchy.", zh: "這家公司有嚴格的階級制度。" }] },
  { id: 1402, word: "priority", pos: "n.", zh: "優先事項", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Safety is our top priority.", zh: "安全是我們最重要的優先事項。" }] },
  { id: 1403, word: "voluntary", pos: "adj.", zh: "自願的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "Participation is entirely voluntary.", zh: "參與完全自願。" }] },
  { id: 1404, word: "visible", pos: "adj.", zh: "可見的", level: 5, category: "AWL SL7", source: "AWL SL7", purpose: "passive", examples: [{ en: "The improvement is clearly visible.", zh: "改善是清楚可見的。" }] },

  // ============================================
  // === AWL Sublist 8 ===
  // ============================================
  { id: 1420, word: "currency", pos: "n.", zh: "貨幣", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The euro is the official currency.", zh: "歐元是官方貨幣。" }] },
  { id: 1421, word: "schedule", pos: "n./v.", zh: "時程表", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Please follow the schedule strictly.", zh: "請嚴格依照時程表。" }] },
  { id: 1422, word: "detect", pos: "v.", zh: "偵測", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Sensors detect any movement.", zh: "感測器會偵測任何動作。" }] },
  { id: 1423, word: "virtual", pos: "adj.", zh: "虛擬的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Virtual meetings have become common.", zh: "虛擬會議已變得普遍。" }] },
  { id: 1424, word: "tense", pos: "adj./n.", zh: "緊張的、時態", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The atmosphere was tense.", zh: "氣氛很緊張。" }] },
  { id: 1425, word: "displace", pos: "v.", zh: "替代、迫使遷移", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Many were displaced by the war.", zh: "許多人因戰爭而流離失所。" }] },
  { id: 1426, word: "commodity", pos: "n.", zh: "商品、原物料", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Oil is an important commodity.", zh: "石油是重要的原物料。" }] },
  { id: 1427, word: "highlight", pos: "v./n.", zh: "強調、重點", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The report highlights key findings.", zh: "這份報告強調主要發現。" }] },
  { id: 1428, word: "arbitrary", pos: "adj.", zh: "任意的", level: 7, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The choice seems arbitrary.", zh: "這個選擇似乎是隨意的。" }] },
  { id: 1429, word: "reinforce", pos: "v.", zh: "強化", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Repetition reinforces learning.", zh: "重複能強化學習。" }] },
  { id: 1430, word: "appendix", pos: "n.", zh: "附錄", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "See the appendix for details.", zh: "細節請參閱附錄。" }] },
  { id: 1431, word: "paragraph", pos: "n.", zh: "段落", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Each paragraph develops one idea.", zh: "每段發展一個觀點。" }] },
  { id: 1432, word: "offset", pos: "v./n.", zh: "抵消", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Higher costs were offset by efficiency.", zh: "較高的成本被效率提升所抵消。" }] },
  { id: 1433, word: "intense", pos: "adj.", zh: "強烈的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "There was intense pressure to succeed.", zh: "有極大的成功壓力。" }] },
  { id: 1434, word: "fluctuate", pos: "v.", zh: "波動", level: 7, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Prices fluctuate daily.", zh: "價格每天波動。" }] },
  { id: 1435, word: "visual", pos: "adj.", zh: "視覺的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Visual learners prefer images.", zh: "視覺型學習者偏好圖像。" }] },
  { id: 1436, word: "terminate", pos: "v.", zh: "終止", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The contract was terminated.", zh: "合約已終止。" }] },
  { id: 1437, word: "random", pos: "adj.", zh: "隨機的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Participants were chosen at random.", zh: "參與者是隨機選出的。" }] },
  { id: 1438, word: "induce", pos: "v.", zh: "誘發", level: 7, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Stress can induce headaches.", zh: "壓力可能誘發頭痛。" }] },
  { id: 1439, word: "uniform", pos: "adj./n.", zh: "一致的、制服", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The data shows a uniform pattern.", zh: "資料顯示一致的模式。" }] },
  { id: 1440, word: "chart", pos: "n./v.", zh: "圖表", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The chart shows population growth.", zh: "圖表顯示人口成長。" }] },
  { id: 1441, word: "guideline", pos: "n.", zh: "指導方針", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Follow the safety guidelines.", zh: "請遵守安全指導方針。" }] },
  { id: 1442, word: "denote", pos: "v.", zh: "表示", level: 7, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The red light denotes danger.", zh: "紅燈表示危險。" }] },
  { id: 1443, word: "radical", pos: "adj.", zh: "激進的、根本的", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Radical changes are needed.", zh: "需要根本的改變。" }] },
  { id: 1444, word: "inspect", pos: "v.", zh: "檢查", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Officials inspected the building.", zh: "官員檢查了這棟建築。" }] },
  { id: 1445, word: "plus", pos: "prep.", zh: "加上", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Two plus two equals four.", zh: "二加二等於四。" }] },
  { id: 1446, word: "abandon", pos: "v.", zh: "放棄、遺棄", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "They abandoned the project.", zh: "他們放棄了這個專案。" }] },
  { id: 1447, word: "deviate", pos: "v.", zh: "偏離", level: 7, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Do not deviate from the plan.", zh: "不要偏離計畫。" }] },
  { id: 1448, word: "appreciate", pos: "v.", zh: "感謝、欣賞", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "I appreciate your help.", zh: "我感謝你的幫助。" }] },
  { id: 1449, word: "thereby", pos: "adv.", zh: "藉此", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "She studied hard, thereby passing the exam.", zh: "她努力讀書，因此通過了考試。" }] },
  { id: 1450, word: "revise", pos: "v.", zh: "修訂", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The document was revised twice.", zh: "這份文件被修訂了兩次。" }] },
  { id: 1451, word: "implicit", pos: "adj.", zh: "隱含的", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "There was implicit agreement.", zh: "有隱含的同意。" }] },
  { id: 1452, word: "eventual", pos: "adj.", zh: "最終的", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "His eventual goal is to start a business.", zh: "他的最終目標是創業。" }] },
  { id: 1453, word: "bias", pos: "n.", zh: "偏見", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The study showed clear bias.", zh: "這項研究顯示明顯偏見。" }] },
  { id: 1454, word: "via", pos: "prep.", zh: "經由", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Send the file via email.", zh: "用電子郵件傳送檔案。" }] },
  { id: 1455, word: "contradict", pos: "v.", zh: "矛盾、反駁", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "His actions contradict his words.", zh: "他的行為與言語矛盾。" }] },
  { id: 1456, word: "theme", pos: "n.", zh: "主題", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The theme of the book is loss.", zh: "這本書的主題是失去。" }] },
  { id: 1457, word: "practitioner", pos: "n.", zh: "從業人員", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "She is a medical practitioner.", zh: "她是醫療從業人員。" }] },
  { id: 1458, word: "nuclear", pos: "adj.", zh: "核能的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Nuclear power is controversial.", zh: "核能發電具爭議性。" }] },
  { id: 1459, word: "conform", pos: "v.", zh: "遵守、符合", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Products must conform to safety standards.", zh: "產品必須符合安全標準。" }] },
  { id: 1460, word: "exploit", pos: "v.", zh: "利用、剝削", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Companies should not exploit workers.", zh: "公司不應剝削工人。" }] },
  { id: 1461, word: "accompany", pos: "v.", zh: "陪伴", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Children must be accompanied by adults.", zh: "兒童必須有成人陪同。" }] },
  { id: 1462, word: "vehicle", pos: "n.", zh: "車輛", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Electric vehicles are eco-friendly.", zh: "電動車是環保的。" }] },
  { id: 1463, word: "drama", pos: "n.", zh: "戲劇", level: 4, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "She studied drama at university.", zh: "她在大學讀戲劇。" }] },
  { id: 1464, word: "contemporary", pos: "adj.", zh: "當代的", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Contemporary art is often abstract.", zh: "當代藝術常是抽象的。" }] },
  { id: 1465, word: "complement", pos: "v.", zh: "互補", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The wine complements the meal.", zh: "這款酒與餐點相配。" }] },
  { id: 1466, word: "clarify", pos: "v.", zh: "釐清", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Let me clarify this point.", zh: "讓我釐清這一點。" }] },
  { id: 1467, word: "manipulate", pos: "v.", zh: "操縱", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Statistics can be manipulated to mislead.", zh: "統計數字可以被操弄來誤導人。" }] },
  { id: 1468, word: "automate", pos: "v.", zh: "自動化", level: 6, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "Many tasks can be automated.", zh: "許多工作可以自動化。" }] },
  { id: 1469, word: "restore", pos: "v.", zh: "恢復", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "They worked to restore the old building.", zh: "他們努力修復這棟老建築。" }] },
  { id: 1470, word: "prospect", pos: "n.", zh: "前景", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "The job prospects are good.", zh: "就業前景很好。" }] },
  { id: 1471, word: "minimise", pos: "v.", zh: "最小化", level: 5, category: "AWL SL8", source: "AWL SL8", purpose: "passive", examples: [{ en: "We aim to minimise risks.", zh: "我們致力於將風險最小化。" }] },

  // ============================================
  // === AWL Sublist 9 ===
  // ============================================
  { id: 1480, word: "vision", pos: "n.", zh: "視力、願景", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The leader has a clear vision.", zh: "這位領導者有清楚的願景。" }] },
  { id: 1481, word: "mediate", pos: "v.", zh: "調解", level: 7, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "A third party will mediate the dispute.", zh: "第三方將調解這場爭端。" }] },
  { id: 1482, word: "insight", pos: "n.", zh: "洞察、見解", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Her book offers fresh insights.", zh: "她的書提供新的見解。" }] },
  { id: 1483, word: "controversy", pos: "n.", zh: "爭議", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The decision caused much controversy.", zh: "這個決定引起許多爭議。" }] },
  { id: 1484, word: "restrain", pos: "v.", zh: "克制、約束", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She could not restrain her excitement.", zh: "她無法克制興奮。" }] },
  { id: 1485, word: "qualitative", pos: "adj.", zh: "質性的", level: 7, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The study used qualitative methods.", zh: "這項研究使用質性方法。" }] },
  { id: 1486, word: "ethic", pos: "n.", zh: "倫理", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Medical ethics is a complex field.", zh: "醫學倫理是個複雜的領域。" }] },
  { id: 1487, word: "analogy", pos: "n.", zh: "類比", level: 7, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She used an analogy to explain.", zh: "她用類比來說明。" }] },
  { id: 1488, word: "inherent", pos: "adj.", zh: "固有的", level: 7, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "There are inherent risks in any sport.", zh: "任何運動都有固有的風險。" }] },
  { id: 1489, word: "refine", pos: "v.", zh: "精煉、改進", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "We need to refine our approach.", zh: "我們需要改進方法。" }] },
  { id: 1490, word: "temporary", pos: "adj.", zh: "暫時的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "This is only a temporary solution.", zh: "這只是暫時的解決方法。" }] },
  { id: 1491, word: "mature", pos: "adj.", zh: "成熟的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She is very mature for her age.", zh: "以她的年齡來說她很成熟。" }] },
  { id: 1492, word: "minimal", pos: "adj.", zh: "最小的", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The damage was minimal.", zh: "損害很小。" }] },
  { id: 1493, word: "diminish", pos: "v.", zh: "減少", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Her interest has diminished.", zh: "她的興趣已減少。" }] },
  { id: 1494, word: "portion", pos: "n.", zh: "部分、份量", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "A large portion of the budget goes to education.", zh: "大部分預算用於教育。" }] },
  { id: 1495, word: "duration", pos: "n.", zh: "持續時間", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The duration of the trip is two weeks.", zh: "這趟旅程持續兩週。" }] },
  { id: 1496, word: "distort", pos: "v.", zh: "扭曲", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Media often distorts the facts.", zh: "媒體常扭曲事實。" }] },
  { id: 1497, word: "intermediate", pos: "adj.", zh: "中級的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She is in the intermediate class.", zh: "她在中級班。" }] },
  { id: 1498, word: "behalf", pos: "n.", zh: "代表（on behalf of）", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "I'm speaking on behalf of the team.", zh: "我代表團隊發言。" }] },
  { id: 1499, word: "sphere", pos: "n.", zh: "領域、球體", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "This is outside my sphere of expertise.", zh: "這超出我的專業領域。" }] },
  { id: 1500, word: "mutual", pos: "adj.", zh: "相互的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Friendship requires mutual respect.", zh: "友誼需要相互尊重。" }] },
  { id: 1501, word: "overlap", pos: "v./n.", zh: "重疊", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "The two studies overlap significantly.", zh: "這兩項研究有顯著重疊。" }] },
  { id: 1502, word: "format", pos: "n.", zh: "格式", level: 4, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Please follow the standard format.", zh: "請依照標準格式。" }] },
  { id: 1503, word: "manual", pos: "n./adj.", zh: "手冊、人工的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Read the manual before using.", zh: "使用前請閱讀手冊。" }] },
  { id: 1504, word: "preliminary", pos: "adj.", zh: "初步的", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Preliminary results look promising.", zh: "初步結果看起來很有希望。" }] },
  { id: 1505, word: "attain", pos: "v.", zh: "達到、獲得", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "He attained his goal through perseverance.", zh: "他靠毅力達成目標。" }] },
  { id: 1506, word: "device", pos: "n.", zh: "裝置", level: 4, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Mobile devices are everywhere.", zh: "行動裝置無處不在。" }] },
  { id: 1507, word: "devote", pos: "v.", zh: "致力於", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She devoted her life to teaching.", zh: "她奉獻一生於教學。" }] },
  { id: 1508, word: "assure", pos: "v.", zh: "向...保證", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "I assure you it's safe.", zh: "我向你保證這是安全的。" }] },
  { id: 1509, word: "integral", pos: "adj.", zh: "不可或缺的", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She is an integral part of the team.", zh: "她是團隊不可或缺的一員。" }] },
  { id: 1510, word: "military", pos: "adj./n.", zh: "軍事的", level: 4, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Military spending has increased.", zh: "軍事支出已增加。" }] },
  { id: 1511, word: "route", pos: "n.", zh: "路線", level: 4, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "We took a different route home.", zh: "我們走了不同的路線回家。" }] },
  { id: 1512, word: "erode", pos: "v.", zh: "侵蝕、削弱", level: 7, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Trust has been eroded over time.", zh: "信任隨時間被侵蝕。" }] },
  { id: 1513, word: "violate", pos: "v.", zh: "違反", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "They violated the agreement.", zh: "他們違反了協議。" }] },
  { id: 1514, word: "protocol", pos: "n.", zh: "規範、協定", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Follow the safety protocol.", zh: "遵守安全規範。" }] },
  { id: 1515, word: "scenario", pos: "n.", zh: "情境", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Consider the worst-case scenario.", zh: "考慮最壞的情況。" }] },
  { id: 1516, word: "passive", pos: "adj.", zh: "被動的", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "He took a passive role in the project.", zh: "他在這個專案中扮演被動角色。" }] },
  { id: 1517, word: "supplement", pos: "n./v.", zh: "補充", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She takes vitamin supplements daily.", zh: "她每天服用維他命補充品。" }] },
  { id: 1518, word: "medium", pos: "n.", zh: "媒介", level: 5, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "Television remains a powerful medium.", zh: "電視仍是強大的媒介。" }] },
  { id: 1519, word: "coherent", pos: "adj.", zh: "連貫的", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "She gave a coherent argument.", zh: "她提出了連貫的論點。" }] },
  { id: 1520, word: "compatible", pos: "adj.", zh: "相容的", level: 6, category: "AWL SL9", source: "AWL SL9", purpose: "passive", examples: [{ en: "This software is compatible with your system.", zh: "這個軟體與你的系統相容。" }] },

  // ============================================
  // === AWL Sublist 10 ===
  // ============================================
  { id: 1530, word: "panel", pos: "n.", zh: "小組、面板", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "A panel of experts reviewed the report.", zh: "一個專家小組審查了這份報告。" }] },
  { id: 1531, word: "persist", pos: "v.", zh: "堅持、持續", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The problem persists despite efforts.", zh: "儘管努力過，問題仍然存在。" }] },
  { id: 1532, word: "invoke", pos: "v.", zh: "援引、調用", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She invoked her right to remain silent.", zh: "她援引了保持沉默的權利。" }] },
  { id: 1533, word: "pose", pos: "v.", zh: "造成（問題）", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Climate change poses a serious threat.", zh: "氣候變遷造成嚴重威脅。" }] },
  { id: 1534, word: "incline", pos: "v./n.", zh: "傾向", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "I am inclined to agree with her.", zh: "我傾向同意她。" }] },
  { id: 1535, word: "undergo", pos: "v.", zh: "經歷", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The patient will undergo surgery.", zh: "病人將接受手術。" }] },
  { id: 1536, word: "conceive", pos: "v.", zh: "構想、設想", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "He conceived the idea years ago.", zh: "他幾年前就構想出這個點子。" }] },
  { id: 1537, word: "encounter", pos: "v./n.", zh: "遇到", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She encountered many obstacles.", zh: "她遇到許多障礙。" }] },
  { id: 1538, word: "collapse", pos: "v./n.", zh: "倒塌、崩潰", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The bridge collapsed last year.", zh: "這座橋去年倒塌了。" }] },
  { id: 1539, word: "intrinsic", pos: "adj.", zh: "內在的", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "He has intrinsic motivation to learn.", zh: "他有內在的學習動機。" }] },
  { id: 1540, word: "assemble", pos: "v.", zh: "集合、組裝", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The team assembled to discuss the plan.", zh: "團隊集合討論計畫。" }] },
  { id: 1541, word: "convince", pos: "v.", zh: "說服", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She convinced me to try again.", zh: "她說服我再試一次。" }] },
  { id: 1542, word: "reluctance", pos: "n.", zh: "不情願", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "He showed reluctance to participate.", zh: "他表現出不情願參與。" }] },
  { id: 1543, word: "odd", pos: "adj.", zh: "奇怪的", level: 4, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Something odd happened today.", zh: "今天發生了奇怪的事。" }] },
  { id: 1544, word: "notwithstanding", pos: "prep.", zh: "儘管", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Notwithstanding the rain, the event continued.", zh: "儘管下雨，活動仍繼續進行。" }] },
  { id: 1545, word: "colleague", pos: "n.", zh: "同事", level: 4, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She gets along well with her colleagues.", zh: "她跟同事們相處融洽。" }] },
  { id: 1546, word: "enormous", pos: "adj.", zh: "巨大的", level: 4, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "There is enormous potential here.", zh: "這裡有巨大的潛力。" }] },
  { id: 1547, word: "compile", pos: "v.", zh: "編纂、整理", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She compiled a list of resources.", zh: "她整理了一份資源清單。" }] },
  { id: 1548, word: "depress", pos: "v.", zh: "使...沮喪、壓低", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The news depressed everyone.", zh: "這個消息讓大家沮喪。" }] },
  { id: 1549, word: "whereby", pos: "adv.", zh: "藉以", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "A system whereby workers earn bonuses.", zh: "一套讓員工賺取獎金的系統。" }] },
  { id: 1550, word: "levy", pos: "n./v.", zh: "徵稅", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The government levied a new tax.", zh: "政府徵收新稅。" }] },
  { id: 1551, word: "nonetheless", pos: "adv.", zh: "儘管如此", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "It's expensive; nonetheless, it's worth it.", zh: "雖然貴，但仍值得。" }] },
  { id: 1552, word: "integrity", pos: "n.", zh: "誠信、完整性", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Her integrity is beyond question.", zh: "她的誠信無庸置疑。" }] },
  { id: 1553, word: "adjacent", pos: "adj.", zh: "鄰近的", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The library is adjacent to the school.", zh: "圖書館就在學校旁邊。" }] },
  { id: 1554, word: "ongoing", pos: "adj.", zh: "持續的", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Research is ongoing in this field.", zh: "這個領域的研究仍持續進行。" }] },
  { id: 1555, word: "albeit", pos: "conj.", zh: "雖然", level: 7, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She succeeded, albeit with difficulty.", zh: "她成功了，雖然過程艱難。" }] },
  { id: 1556, word: "so-called", pos: "adj.", zh: "所謂的", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The so-called experts disagreed.", zh: "所謂的專家意見不一致。" }] },
  { id: 1557, word: "straightforward", pos: "adj.", zh: "直接的、簡單明瞭的", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "The instructions are straightforward.", zh: "說明很簡單明瞭。" }] },
  { id: 1558, word: "likewise", pos: "adv.", zh: "同樣地", level: 5, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "She studied hard; likewise, her brother.", zh: "她努力讀書，她哥哥也是。" }] },
  { id: 1559, word: "forthcoming", pos: "adj.", zh: "即將到來的", level: 6, category: "AWL SL10", source: "AWL SL10", purpose: "passive", examples: [{ en: "Her forthcoming book is highly anticipated.", zh: "她即將出版的書受到高度期待。" }] },

  // ============================================
  // === 主題詞庫：環境 / 氣候（2000-2079）===
  // ============================================
  { id: 2000, word: "greenhouse gas", pos: "n.", zh: "溫室氣體", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Greenhouse gases trap heat in the atmosphere.", zh: "溫室氣體將熱困在大氣中。" }] },
  { id: 2001, word: "global warming", pos: "n.", zh: "全球暖化", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Global warming threatens coastal cities.", zh: "全球暖化威脅沿海城市。" }] },
  { id: 2002, word: "carbon footprint", pos: "n.", zh: "碳足跡", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Reduce your carbon footprint by using public transport.", zh: "用大眾運輸來減少你的碳足跡。" }] },
  { id: 2003, word: "fossil fuel", pos: "n.", zh: "化石燃料", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Burning fossil fuels releases carbon dioxide.", zh: "燃燒化石燃料會釋放二氧化碳。" }] },
  { id: 2004, word: "renewable energy", pos: "n.", zh: "可再生能源", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wind and solar are renewable energy sources.", zh: "風能和太陽能是可再生能源。" }] },
  { id: 2005, word: "solar power", pos: "n.", zh: "太陽能", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Solar power is becoming more affordable.", zh: "太陽能越來越便宜。" }] },
  { id: 2006, word: "wind turbine", pos: "n.", zh: "風力發電機", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wind turbines generate clean electricity.", zh: "風力發電機產生乾淨的電力。" }] },
  { id: 2007, word: "recycling", pos: "n.", zh: "回收", level: 4, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Recycling reduces waste in landfills.", zh: "回收減少了垃圾掩埋場的垃圾。" }] },
  { id: 2008, word: "landfill", pos: "n.", zh: "垃圾掩埋場", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Most plastic ends up in landfills.", zh: "大多數塑膠最後都進了掩埋場。" }] },
  { id: 2009, word: "biodegradable", pos: "adj.", zh: "可生物分解的", level: 7, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Biodegradable packaging is more eco-friendly.", zh: "可分解的包裝對環境更友善。" }] },
  { id: 2010, word: "endangered species", pos: "n.", zh: "瀕危物種", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Pandas are an endangered species.", zh: "熊貓是瀕危物種。" }] },
  { id: 2011, word: "extinction", pos: "n.", zh: "滅絕", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many species face the threat of extinction.", zh: "許多物種面臨滅絕威脅。" }] },
  { id: 2012, word: "drought", pos: "n.", zh: "乾旱", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "The drought has lasted three months.", zh: "乾旱已持續三個月。" }] },
  { id: 2013, word: "flood", pos: "n./v.", zh: "洪水", level: 4, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "The flood caused widespread damage.", zh: "洪水造成大範圍破壞。" }] },
  { id: 2014, word: "natural disaster", pos: "n.", zh: "天然災害", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Earthquakes are devastating natural disasters.", zh: "地震是毀滅性的天然災害。" }] },
  { id: 2015, word: "climate change", pos: "n.", zh: "氣候變遷", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Climate change affects everyone.", zh: "氣候變遷影響每個人。" }] },
  { id: 2016, word: "ozone layer", pos: "n.", zh: "臭氧層", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "The ozone layer protects us from UV radiation.", zh: "臭氧層保護我們不受紫外線傷害。" }] },
  { id: 2017, word: "acid rain", pos: "n.", zh: "酸雨", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Acid rain damages forests and lakes.", zh: "酸雨損害森林和湖泊。" }] },
  { id: 2018, word: "wildlife", pos: "n.", zh: "野生生物", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Conservation efforts protect wildlife.", zh: "保育工作保護野生生物。" }] },
  { id: 2019, word: "ecosystem", pos: "n.", zh: "生態系統", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Each ecosystem has unique species.", zh: "每個生態系統有獨特的物種。" }] },
  { id: 2020, word: "habitat loss", pos: "n.", zh: "棲息地喪失", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Habitat loss is the main cause of extinction.", zh: "棲息地喪失是滅絕的主因。" }] },
  { id: 2021, word: "afforestation", pos: "n.", zh: "造林", level: 7, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Afforestation helps combat climate change.", zh: "造林有助於對抗氣候變遷。" }] },
  { id: 2022, word: "ecological", pos: "adj.", zh: "生態的", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Ecological balance is essential.", zh: "生態平衡至關重要。" }] },
  { id: 2023, word: "contamination", pos: "n.", zh: "汙染", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Water contamination poses health risks.", zh: "水汙染造成健康風險。" }] },
  { id: 2024, word: "toxic", pos: "adj.", zh: "有毒的", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Toxic chemicals harm marine life.", zh: "有毒化學物質傷害海洋生物。" }] },
  { id: 2025, word: "marine", pos: "adj.", zh: "海洋的", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Marine life is threatened by pollution.", zh: "海洋生物受汙染威脅。" }] },
  { id: 2026, word: "carbon dioxide", pos: "n.", zh: "二氧化碳", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Trees absorb carbon dioxide.", zh: "樹木吸收二氧化碳。" }] },
  { id: 2027, word: "emission reduction", pos: "n.", zh: "減排", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Emission reduction targets must be met.", zh: "必須達成減排目標。" }] },
  { id: 2028, word: "sustainable development", pos: "n.", zh: "永續發展", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Sustainable development balances growth and environment.", zh: "永續發展平衡發展與環境。" }] },
  { id: 2029, word: "eco-friendly", pos: "adj.", zh: "環保的", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Choose eco-friendly products when possible.", zh: "盡量選擇環保產品。" }] },
  { id: 2030, word: "preservation", pos: "n.", zh: "保存", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Preservation of forests is crucial.", zh: "森林保存至關重要。" }] },
  { id: 2031, word: "ecologist", pos: "n.", zh: "生態學家", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Ecologists warn about losing biodiversity.", zh: "生態學家警告生物多樣性流失。" }] },
  { id: 2032, word: "raw material", pos: "n.", zh: "原物料", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Steel is a key raw material.", zh: "鋼鐵是關鍵原物料。" }] },
  { id: 2033, word: "exhaust fumes", pos: "n.", zh: "廢氣", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Exhaust fumes worsen air quality.", zh: "廢氣惡化空氣品質。" }] },
  { id: 2034, word: "non-renewable", pos: "adj.", zh: "不可再生的", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Coal is a non-renewable resource.", zh: "煤炭是不可再生資源。" }] },
  { id: 2035, word: "global temperature", pos: "n.", zh: "全球氣溫", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Global temperature has risen significantly.", zh: "全球氣溫已大幅上升。" }] },
  { id: 2036, word: "sea level", pos: "n.", zh: "海平面", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Rising sea levels threaten islands.", zh: "海平面上升威脅島嶼。" }] },
  { id: 2037, word: "polar ice cap", pos: "n.", zh: "極地冰帽", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Polar ice caps are melting rapidly.", zh: "極地冰帽快速融化。" }] },
  { id: 2038, word: "rainforest", pos: "n.", zh: "雨林", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "The Amazon rainforest is being destroyed.", zh: "亞馬遜雨林正在被破壞。" }] },
  { id: 2039, word: "vegetation", pos: "n.", zh: "植被", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Dense vegetation covers the mountain.", zh: "濃密的植被覆蓋山脈。" }] },
  { id: 2040, word: "organic", pos: "adj.", zh: "有機的", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Organic food has become popular.", zh: "有機食品越來越受歡迎。" }] },
  { id: 2041, word: "pesticide", pos: "n.", zh: "農藥", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Pesticides can harm beneficial insects.", zh: "農藥可能傷害益蟲。" }] },
  { id: 2042, word: "agriculture", pos: "n.", zh: "農業", level: 4, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Modern agriculture relies on machinery.", zh: "現代農業依賴機械。" }] },
  { id: 2043, word: "irrigation", pos: "n.", zh: "灌溉", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Irrigation systems waste much water.", zh: "灌溉系統浪費許多水。" }] },
  { id: 2044, word: "groundwater", pos: "n.", zh: "地下水", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Groundwater levels are dropping.", zh: "地下水位下降中。" }] },
  { id: 2045, word: "water scarcity", pos: "n.", zh: "缺水", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Water scarcity affects millions.", zh: "缺水影響數百萬人。" }] },
  { id: 2046, word: "deplete", pos: "v.", zh: "耗盡", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "We are depleting natural resources.", zh: "我們正在耗盡天然資源。" }] },
  { id: 2047, word: "regenerate", pos: "v.", zh: "再生", level: 6, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Forests can regenerate over time.", zh: "森林可以隨時間再生。" }] },
  { id: 2048, word: "emit", pos: "v.", zh: "排放", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Cars emit harmful gases.", zh: "汽車排放有害氣體。" }] },
  { id: 2049, word: "smog", pos: "n.", zh: "霧霾", level: 5, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Smog blankets the city in winter.", zh: "霧霾在冬天籠罩城市。" }] },
  { id: 2050, word: "particulate matter", pos: "n.", zh: "懸浮微粒", level: 7, category: "環境氣候", source: "主題詞庫", purpose: "passive", examples: [{ en: "Particulate matter damages the lungs.", zh: "懸浮微粒損害肺部。" }] },

  // ============================================
  // === 主題詞庫：科技 / 數位（2100-2179）===
  // ============================================
  { id: 2100, word: "smartphone", pos: "n.", zh: "智慧型手機", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Smartphones have changed our daily lives.", zh: "智慧型手機改變了我們的日常生活。" }] },
  { id: 2101, word: "device", pos: "n.", zh: "裝置", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Mobile devices are everywhere now.", zh: "行動裝置現在無所不在。" }] },
  { id: 2102, word: "gadget", pos: "n.", zh: "小裝置、小玩意", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "He loves trying new gadgets.", zh: "他喜歡嘗試新的小玩意。" }] },
  { id: 2103, word: "app", pos: "n.", zh: "應用程式", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "There's an app for almost everything.", zh: "幾乎什麼都有 app 可以用。" }] },
  { id: 2104, word: "software", pos: "n.", zh: "軟體", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Software updates improve security.", zh: "軟體更新改善安全性。" }] },
  { id: 2105, word: "hardware", pos: "n.", zh: "硬體", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The hardware needs upgrading.", zh: "硬體需要升級。" }] },
  { id: 2106, word: "cybersecurity", pos: "n.", zh: "網路安全", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Cybersecurity is a top priority.", zh: "網路安全是首要任務。" }] },
  { id: 2107, word: "hacker", pos: "n.", zh: "駭客", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Hackers stole millions of records.", zh: "駭客竊取了上百萬筆資料。" }] },
  { id: 2108, word: "data breach", pos: "n.", zh: "資料外洩", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The company suffered a major data breach.", zh: "公司遭遇重大資料外洩。" }] },
  { id: 2109, word: "privacy", pos: "n.", zh: "隱私", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Online privacy is increasingly difficult.", zh: "線上隱私越來越難維護。" }] },
  { id: 2110, word: "social media", pos: "n.", zh: "社群媒體", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Social media shapes public opinion.", zh: "社群媒體形塑公眾意見。" }] },
  { id: 2111, word: "platform", pos: "n.", zh: "平台", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "YouTube is the largest video platform.", zh: "YouTube 是最大的影音平台。" }] },
  { id: 2112, word: "streaming", pos: "n./v.", zh: "串流", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Streaming services have replaced cable TV.", zh: "串流服務取代了有線電視。" }] },
  { id: 2113, word: "broadband", pos: "n.", zh: "寬頻", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Fast broadband is essential for work.", zh: "快速寬頻是工作必需。" }] },
  { id: 2114, word: "wireless", pos: "adj.", zh: "無線的", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wireless technology is convenient.", zh: "無線科技很方便。" }] },
  { id: 2115, word: "cloud computing", pos: "n.", zh: "雲端運算", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Cloud computing has transformed business.", zh: "雲端運算改變了商業。" }] },
  { id: 2116, word: "database", pos: "n.", zh: "資料庫", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The database stores customer records.", zh: "資料庫儲存客戶記錄。" }] },
  { id: 2117, word: "encryption", pos: "n.", zh: "加密", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Encryption protects sensitive data.", zh: "加密保護敏感資料。" }] },
  { id: 2118, word: "virus", pos: "n.", zh: "病毒", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Always update your antivirus software.", zh: "請持續更新防毒軟體。" }] },
  { id: 2119, word: "innovation", pos: "n.", zh: "創新", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Innovation drives economic growth.", zh: "創新推動經濟成長。" }] },
  { id: 2120, word: "obsolete", pos: "adj.", zh: "過時的", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Fax machines have become obsolete.", zh: "傳真機已過時。" }] },
  { id: 2121, word: "cutting-edge", pos: "adj.", zh: "尖端的", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The lab uses cutting-edge technology.", zh: "實驗室使用尖端科技。" }] },
  { id: 2122, word: "user-friendly", pos: "adj.", zh: "易於使用的", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The app is very user-friendly.", zh: "這個 app 非常容易使用。" }] },
  { id: 2123, word: "digital literacy", pos: "n.", zh: "數位素養", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Digital literacy is essential today.", zh: "數位素養在今日至關重要。" }] },
  { id: 2124, word: "remote work", pos: "n.", zh: "遠距工作", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Remote work has become mainstream.", zh: "遠距工作已成為主流。" }] },
  { id: 2125, word: "telecommute", pos: "v.", zh: "遠距上班", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many employees prefer to telecommute.", zh: "許多員工偏好遠距上班。" }] },
  { id: 2126, word: "video conference", pos: "n.", zh: "視訊會議", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Video conferences save time and money.", zh: "視訊會議節省時間和金錢。" }] },
  { id: 2127, word: "screen time", pos: "n.", zh: "螢幕時間", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Excessive screen time harms children's eyes.", zh: "過多的螢幕時間傷害兒童視力。" }] },
  { id: 2128, word: "addiction", pos: "n.", zh: "上癮", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Smartphone addiction is a growing concern.", zh: "手機上癮是日益嚴重的問題。" }] },
  { id: 2129, word: "cyberbullying", pos: "n.", zh: "網路霸凌", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Cyberbullying affects many teenagers.", zh: "網路霸凌影響許多青少年。" }] },
  { id: 2130, word: "misinformation", pos: "n.", zh: "假訊息", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Misinformation spreads quickly online.", zh: "假訊息在網路上迅速傳播。" }] },
  { id: 2131, word: "fake news", pos: "n.", zh: "假新聞", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Fake news influences elections.", zh: "假新聞影響選舉。" }] },
  { id: 2132, word: "search engine", pos: "n.", zh: "搜尋引擎", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Google is the dominant search engine.", zh: "Google 是主要的搜尋引擎。" }] },
  { id: 2133, word: "e-commerce", pos: "n.", zh: "電子商務", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "E-commerce has reshaped retail.", zh: "電子商務重塑了零售業。" }] },
  { id: 2134, word: "online shopping", pos: "n.", zh: "線上購物", level: 4, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Online shopping is convenient but risky.", zh: "線上購物方便但有風險。" }] },
  { id: 2135, word: "cashless", pos: "adj.", zh: "無現金的", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Society is moving toward a cashless economy.", zh: "社會正邁向無現金經濟。" }] },
  { id: 2136, word: "digital divide", pos: "n.", zh: "數位落差", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The digital divide affects rural communities.", zh: "數位落差影響鄉村社區。" }] },
  { id: 2137, word: "internet of things", pos: "n.", zh: "物聯網", level: 7, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "The internet of things connects everyday devices.", zh: "物聯網連結日常裝置。" }] },
  { id: 2138, word: "robotics", pos: "n.", zh: "機器人技術", level: 6, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Robotics is transforming manufacturing.", zh: "機器人技術正在改變製造業。" }] },
  { id: 2139, word: "drone", pos: "n.", zh: "無人機", level: 5, category: "科技數位", source: "主題詞庫", purpose: "passive", examples: [{ en: "Drones are used for delivery and photography.", zh: "無人機用於配送和攝影。" }] },

  // ============================================
  // === 主題詞庫：教育 / 學習（2200-2279）===
  // ============================================
  { id: 2200, word: "academic", pos: "adj.", zh: "學術的", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Her academic performance is excellent.", zh: "她的學業表現優秀。" }] },
  { id: 2201, word: "undergraduate", pos: "n.", zh: "大學生", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She is an undergraduate at Oxford.", zh: "她是牛津大學的大學生。" }] },
  { id: 2202, word: "postgraduate", pos: "n./adj.", zh: "研究生", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "He is doing postgraduate research.", zh: "他在做研究生研究。" }] },
  { id: 2203, word: "thesis", pos: "n.", zh: "論文", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She defended her thesis last week.", zh: "她上週為論文答辯。" }] },
  { id: 2204, word: "dissertation", pos: "n.", zh: "畢業論文", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Writing a dissertation takes months.", zh: "寫畢業論文需要好幾個月。" }] },
  { id: 2205, word: "campus", pos: "n.", zh: "校園", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The campus is beautiful in spring.", zh: "春天的校園很美。" }] },
  { id: 2206, word: "faculty", pos: "n.", zh: "教職員、學院", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The faculty includes many experts.", zh: "教職員包含許多專家。" }] },
  { id: 2207, word: "lecturer", pos: "n.", zh: "講師", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The lecturer explained the topic clearly.", zh: "講師清楚地解釋了主題。" }] },
  { id: 2208, word: "tutor", pos: "n.", zh: "導師、家教", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She hired a tutor for her son.", zh: "她為兒子請了家教。" }] },
  { id: 2209, word: "tutorial", pos: "n.", zh: "輔導課", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Online tutorials help students learn.", zh: "線上教學影片幫助學生學習。" }] },
  { id: 2210, word: "seminar", pos: "n.", zh: "研討會", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The seminar attracted leading experts.", zh: "這場研討會吸引了頂尖專家。" }] },
  { id: 2211, word: "workshop", pos: "n.", zh: "工作坊", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The writing workshop was very helpful.", zh: "寫作工作坊很有幫助。" }] },
  { id: 2212, word: "syllabus", pos: "n.", zh: "教學大綱", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Check the syllabus for assignment dates.", zh: "查看教學大綱以確認作業日期。" }] },
  { id: 2213, word: "assignment", pos: "n.", zh: "作業", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Submit your assignment by Friday.", zh: "週五前繳交作業。" }] },
  { id: 2214, word: "deadline", pos: "n.", zh: "截止期限", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The deadline is approaching.", zh: "截止期限快到了。" }] },
  { id: 2215, word: "plagiarism", pos: "n.", zh: "抄襲", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Plagiarism is taken very seriously.", zh: "抄襲被嚴格看待。" }] },
  { id: 2216, word: "citation", pos: "n.", zh: "引用", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Always include proper citations.", zh: "請務必正確引用來源。" }] },
  { id: 2217, word: "peer review", pos: "n.", zh: "同儕審查", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The paper passed peer review.", zh: "這篇論文通過了同儕審查。" }] },
  { id: 2218, word: "scholarly", pos: "adj.", zh: "學術的、博學的", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She published several scholarly articles.", zh: "她發表了幾篇學術文章。" }] },
  { id: 2219, word: "discipline", pos: "n.", zh: "學科、紀律", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Physics is a challenging discipline.", zh: "物理學是個具挑戰性的學科。" }] },
  { id: 2220, word: "extracurricular", pos: "adj.", zh: "課外的", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Extracurricular activities build character.", zh: "課外活動培養人格。" }] },
  { id: 2221, word: "rote learning", pos: "n.", zh: "死記硬背", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Rote learning has its limitations.", zh: "死記硬背有其局限。" }] },
  { id: 2222, word: "critical thinking", pos: "n.", zh: "批判性思考", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Schools should teach critical thinking.", zh: "學校應教授批判性思考。" }] },
  { id: 2223, word: "problem-solving", pos: "n.", zh: "解決問題", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Problem-solving skills are vital.", zh: "解決問題的能力很重要。" }] },
  { id: 2224, word: "interactive", pos: "adj.", zh: "互動的", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Interactive learning is more engaging.", zh: "互動式學習較吸引人。" }] },
  { id: 2225, word: "self-study", pos: "n.", zh: "自學", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Self-study requires discipline.", zh: "自學需要紀律。" }] },
  { id: 2226, word: "distance learning", pos: "n.", zh: "遠距學習", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Distance learning expanded during the pandemic.", zh: "遠距學習在疫情期間擴展。" }] },
  { id: 2227, word: "compulsory", pos: "adj.", zh: "強制的", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Education is compulsory until age 16.", zh: "16 歲前必須接受教育。" }] },
  { id: 2228, word: "elective", pos: "adj./n.", zh: "選修的", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Choose two elective courses.", zh: "選兩門選修課。" }] },
  { id: 2229, word: "kindergarten", pos: "n.", zh: "幼稚園", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Children start kindergarten at age 5.", zh: "兒童 5 歲開始上幼稚園。" }] },
  { id: 2230, word: "preschool", pos: "n.", zh: "學前教育", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Preschool education shapes early development.", zh: "學前教育影響早期發展。" }] },
  { id: 2231, word: "elementary", pos: "adj.", zh: "基礎的、小學的", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The book teaches elementary math.", zh: "這本書教基礎數學。" }] },
  { id: 2232, word: "graduate", pos: "v./n.", zh: "畢業、畢業生", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She will graduate this June.", zh: "她今年六月畢業。" }] },
  { id: 2233, word: "alumni", pos: "n.", zh: "校友", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The alumni network is very supportive.", zh: "校友網絡非常支持。" }] },
  { id: 2234, word: "tuition fee", pos: "n.", zh: "學費", level: 4, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "University tuition fees continue to rise.", zh: "大學學費持續上漲。" }] },
  { id: 2235, word: "student loan", pos: "n.", zh: "學生貸款", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many graduates struggle with student loans.", zh: "許多畢業生為學貸所苦。" }] },
  { id: 2236, word: "vocational training", pos: "n.", zh: "職業訓練", level: 6, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vocational training prepares students for jobs.", zh: "職業訓練讓學生為就業做準備。" }] },
  { id: 2237, word: "lifelong learning", pos: "n.", zh: "終身學習", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Lifelong learning is essential today.", zh: "今日終身學習至關重要。" }] },
  { id: 2238, word: "literacy rate", pos: "n.", zh: "識字率", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The literacy rate has improved globally.", zh: "全球識字率已提升。" }] },
  { id: 2239, word: "dropout", pos: "n.", zh: "輟學者", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "The school has a high dropout rate.", zh: "這所學校輟學率很高。" }] },
  { id: 2240, word: "qualification", pos: "n.", zh: "資格、學歷", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "She has impressive qualifications.", zh: "她有令人印象深刻的學歷。" }] },
  { id: 2241, word: "discipline (subject)", pos: "n.", zh: "學科", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Economics is an interdisciplinary field.", zh: "經濟學是跨學科領域。" }] },
  { id: 2242, word: "memorise", pos: "v.", zh: "記住、背誦", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Try to understand rather than memorise.", zh: "試著理解而非背誦。" }] },
  { id: 2243, word: "comprehension", pos: "n.", zh: "理解力", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Reading comprehension takes practice.", zh: "閱讀理解需要練習。" }] },
  { id: 2244, word: "fluency", pos: "n.", zh: "流利度", level: 5, category: "教育學習", source: "主題詞庫", purpose: "passive", examples: [{ en: "Fluency comes with consistent practice.", zh: "流利度來自持續練習。" }] },

  // ============================================
  // === 主題詞庫：健康 / 醫療（2300-2379）===
  // ============================================
  { id: 2300, word: "well-being", pos: "n.", zh: "幸福、健康", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Mental well-being is just as important as physical.", zh: "心理健康跟身體健康一樣重要。" }] },
  { id: 2301, word: "lifestyle", pos: "n.", zh: "生活方式", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "A healthy lifestyle reduces disease risk.", zh: "健康的生活方式降低疾病風險。" }] },
  { id: 2302, word: "balanced diet", pos: "n.", zh: "均衡飲食", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "A balanced diet provides all nutrients.", zh: "均衡飲食提供所有營養。" }] },
  { id: 2303, word: "obesity", pos: "n.", zh: "肥胖", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Obesity rates are rising worldwide.", zh: "全球肥胖率上升中。" }] },
  { id: 2304, word: "junk food", pos: "n.", zh: "垃圾食物", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Junk food contains too much sugar and salt.", zh: "垃圾食物含太多糖和鹽。" }] },
  { id: 2305, word: "calorie", pos: "n.", zh: "卡路里", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Count your daily calorie intake.", zh: "計算每日卡路里攝取量。" }] },
  { id: 2306, word: "nutrient", pos: "n.", zh: "營養素", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vegetables provide essential nutrients.", zh: "蔬菜提供必要的營養素。" }] },
  { id: 2307, word: "vitamin", pos: "n.", zh: "維他命", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vitamin C boosts the immune system.", zh: "維他命 C 增強免疫系統。" }] },
  { id: 2308, word: "immune system", pos: "n.", zh: "免疫系統", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Exercise strengthens the immune system.", zh: "運動增強免疫系統。" }] },
  { id: 2309, word: "chronic", pos: "adj.", zh: "慢性的", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Diabetes is a chronic disease.", zh: "糖尿病是慢性疾病。" }] },
  { id: 2310, word: "diabetes", pos: "n.", zh: "糖尿病", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Diabetes can be managed with diet.", zh: "糖尿病可透過飲食管理。" }] },
  { id: 2311, word: "cardiovascular", pos: "adj.", zh: "心血管的", level: 7, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Running improves cardiovascular health.", zh: "跑步改善心血管健康。" }] },
  { id: 2312, word: "mental health", pos: "n.", zh: "心理健康", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Mental health awareness is growing.", zh: "心理健康意識提升中。" }] },
  { id: 2313, word: "depression", pos: "n.", zh: "憂鬱症", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Depression affects millions worldwide.", zh: "憂鬱症影響全球數百萬人。" }] },
  { id: 2314, word: "anxiety", pos: "n.", zh: "焦慮", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Anxiety has become increasingly common.", zh: "焦慮越來越普遍。" }] },
  { id: 2315, word: "stress management", pos: "n.", zh: "壓力管理", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Stress management techniques include meditation.", zh: "壓力管理技巧包含冥想。" }] },
  { id: 2316, word: "burnout", pos: "n.", zh: "倦怠", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many workers experience burnout.", zh: "許多員工經歷職業倦怠。" }] },
  { id: 2317, word: "insomnia", pos: "n.", zh: "失眠", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Insomnia affects work performance.", zh: "失眠影響工作表現。" }] },
  { id: 2318, word: "fatigue", pos: "n.", zh: "疲勞", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Chronic fatigue can indicate illness.", zh: "慢性疲勞可能代表生病。" }] },
  { id: 2319, word: "prescription", pos: "n.", zh: "處方", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "You need a prescription for this medicine.", zh: "這個藥需要處方。" }] },
  { id: 2320, word: "vaccine", pos: "n.", zh: "疫苗", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vaccines prevent many diseases.", zh: "疫苗預防許多疾病。" }] },
  { id: 2321, word: "vaccination", pos: "n.", zh: "接種疫苗", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vaccination rates have dropped.", zh: "疫苗接種率下降。" }] },
  { id: 2322, word: "epidemic", pos: "n.", zh: "流行病", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "The flu epidemic spread quickly.", zh: "流感流行病迅速擴散。" }] },
  { id: 2323, word: "pandemic", pos: "n.", zh: "大流行", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "The pandemic changed the world.", zh: "這場大流行改變了世界。" }] },
  { id: 2324, word: "outbreak", pos: "n.", zh: "爆發", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "There was an outbreak of measles.", zh: "麻疹爆發了。" }] },
  { id: 2325, word: "symptom", pos: "n.", zh: "症狀", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Common symptoms include fever and cough.", zh: "常見症狀包括發燒和咳嗽。" }] },
  { id: 2326, word: "diagnose", pos: "v.", zh: "診斷", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "She was diagnosed with cancer.", zh: "她被診斷出癌症。" }] },
  { id: 2327, word: "surgery", pos: "n.", zh: "手術", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "He had heart surgery last year.", zh: "他去年動了心臟手術。" }] },
  { id: 2328, word: "therapy", pos: "n.", zh: "治療、療法", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Physical therapy aids recovery.", zh: "物理治療有助於復原。" }] },
  { id: 2329, word: "rehabilitation", pos: "n.", zh: "復健", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Rehabilitation takes time and effort.", zh: "復健需要時間和努力。" }] },
  { id: 2330, word: "wellness", pos: "n.", zh: "健康", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wellness programs benefit employees.", zh: "健康計畫對員工有益。" }] },
  { id: 2331, word: "preventive", pos: "adj.", zh: "預防的", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Preventive care saves lives.", zh: "預防保健能挽救生命。" }] },
  { id: 2332, word: "checkup", pos: "n.", zh: "健康檢查", level: 4, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Get a yearly medical checkup.", zh: "每年做健康檢查。" }] },
  { id: 2333, word: "hygiene", pos: "n.", zh: "衛生", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Good hygiene prevents infection.", zh: "良好衛生預防感染。" }] },
  { id: 2334, word: "sanitation", pos: "n.", zh: "衛生設施", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Poor sanitation causes disease.", zh: "衛生條件差導致疾病。" }] },
  { id: 2335, word: "contagious", pos: "adj.", zh: "傳染性的", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Measles is highly contagious.", zh: "麻疹具高度傳染性。" }] },
  { id: 2336, word: "infectious", pos: "adj.", zh: "感染性的", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wash hands to prevent infectious diseases.", zh: "洗手以預防感染性疾病。" }] },
  { id: 2337, word: "lifespan", pos: "n.", zh: "壽命", level: 5, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Average lifespan has increased.", zh: "平均壽命增加了。" }] },
  { id: 2338, word: "ageing population", pos: "n.", zh: "高齡化人口", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Japan has an ageing population.", zh: "日本是高齡化人口。" }] },
  { id: 2339, word: "dementia", pos: "n.", zh: "失智症", level: 6, category: "健康醫療", source: "主題詞庫", purpose: "passive", examples: [{ en: "Dementia affects memory and cognition.", zh: "失智症影響記憶與認知。" }] },

  // ============================================
  // === 主題詞庫：商業 / 工作（2400-2479）===
  // ============================================
  { id: 2400, word: "entrepreneur", pos: "n.", zh: "創業家", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Successful entrepreneurs take risks.", zh: "成功的創業家會冒險。" }] },
  { id: 2401, word: "startup", pos: "n.", zh: "新創公司", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The startup raised $2 million.", zh: "這家新創公司募集了 200 萬美元。" }] },
  { id: 2402, word: "corporation", pos: "n.", zh: "企業、公司", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Multinational corporations dominate the market.", zh: "跨國企業主導市場。" }] },
  { id: 2403, word: "stakeholder", pos: "n.", zh: "利害關係人", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "All stakeholders were consulted.", zh: "所有利害關係人都被諮詢。" }] },
  { id: 2404, word: "shareholder", pos: "n.", zh: "股東", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Shareholders voted on the proposal.", zh: "股東就提案投票。" }] },
  { id: 2405, word: "profit margin", pos: "n.", zh: "利潤率", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The profit margin is shrinking.", zh: "利潤率正在縮小。" }] },
  { id: 2406, word: "revenue", pos: "n.", zh: "營收", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Revenue grew by 20% this quarter.", zh: "本季營收成長 20%。" }] },
  { id: 2407, word: "bankruptcy", pos: "n.", zh: "破產", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The company filed for bankruptcy.", zh: "公司申請破產。" }] },
  { id: 2408, word: "monopoly", pos: "n.", zh: "壟斷", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The company has a monopoly on the market.", zh: "這家公司壟斷市場。" }] },
  { id: 2409, word: "competition", pos: "n.", zh: "競爭", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Fierce competition drives innovation.", zh: "激烈的競爭推動創新。" }] },
  { id: 2410, word: "consumer", pos: "n.", zh: "消費者", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Consumer demand is shifting.", zh: "消費者需求正在改變。" }] },
  { id: 2411, word: "supply and demand", pos: "n.", zh: "供需", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Prices reflect supply and demand.", zh: "價格反映供需。" }] },
  { id: 2412, word: "investment", pos: "n.", zh: "投資", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Property is a long-term investment.", zh: "房地產是長期投資。" }] },
  { id: 2413, word: "stock market", pos: "n.", zh: "股市", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The stock market is volatile.", zh: "股市波動不定。" }] },
  { id: 2414, word: "inflation", pos: "n.", zh: "通膨", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Inflation reduces purchasing power.", zh: "通膨降低購買力。" }] },
  { id: 2415, word: "recession", pos: "n.", zh: "經濟衰退", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The country is in a recession.", zh: "這個國家陷入經濟衰退。" }] },
  { id: 2416, word: "unemployment", pos: "n.", zh: "失業", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Youth unemployment is a concern.", zh: "青年失業是個問題。" }] },
  { id: 2417, word: "workforce", pos: "n.", zh: "勞動力", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The workforce is becoming more diverse.", zh: "勞動力越來越多元。" }] },
  { id: 2418, word: "outsource", pos: "v.", zh: "外包", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many companies outsource customer service.", zh: "許多公司外包客戶服務。" }] },
  { id: 2419, word: "productivity", pos: "n.", zh: "生產力", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Better sleep boosts productivity.", zh: "好的睡眠提升生產力。" }] },
  { id: 2420, word: "efficiency", pos: "n.", zh: "效率", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Automation improves efficiency.", zh: "自動化提升效率。" }] },
  { id: 2421, word: "deadline", pos: "n.", zh: "截止期限", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "We must meet the deadline.", zh: "我們必須趕上截止日。" }] },
  { id: 2422, word: "promotion", pos: "n.", zh: "升遷", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "She got a promotion last month.", zh: "她上個月升職了。" }] },
  { id: 2423, word: "salary", pos: "n.", zh: "薪資", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "She earns a competitive salary.", zh: "她薪資有競爭力。" }] },
  { id: 2424, word: "wage", pos: "n.", zh: "工資", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The minimum wage was raised.", zh: "最低工資被調漲。" }] },
  { id: 2425, word: "career path", pos: "n.", zh: "職涯路徑", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Choose a career path that suits you.", zh: "選擇適合你的職涯路徑。" }] },
  { id: 2426, word: "self-employed", pos: "adj.", zh: "自雇的", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "She is self-employed as a designer.", zh: "她是自雇設計師。" }] },
  { id: 2427, word: "freelance", pos: "adj./v.", zh: "自由業的", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Freelance writers work from home.", zh: "自由作家在家工作。" }] },
  { id: 2428, word: "full-time", pos: "adj.", zh: "全職的", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "She has a full-time job.", zh: "她有全職工作。" }] },
  { id: 2429, word: "part-time", pos: "adj.", zh: "兼職的", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "He works part-time while studying.", zh: "他邊讀書邊兼差。" }] },
  { id: 2430, word: "internship", pos: "n.", zh: "實習", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Internships provide valuable experience.", zh: "實習提供寶貴的經驗。" }] },
  { id: 2431, word: "recruit", pos: "v.", zh: "招募", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The company is recruiting engineers.", zh: "公司正在招募工程師。" }] },
  { id: 2432, word: "resume", pos: "n.", zh: "履歷", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Update your resume regularly.", zh: "定期更新履歷。" }] },
  { id: 2433, word: "interview", pos: "n./v.", zh: "面試", level: 4, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "She has a job interview tomorrow.", zh: "她明天有工作面試。" }] },
  { id: 2434, word: "negotiate", pos: "v.", zh: "協商", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "He negotiated a higher salary.", zh: "他協商到更高的薪資。" }] },
  { id: 2435, word: "merge", pos: "v.", zh: "合併", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The two companies merged last year.", zh: "兩家公司去年合併。" }] },
  { id: 2436, word: "acquisition", pos: "n.", zh: "收購", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The acquisition was worth $5 billion.", zh: "這項收購價值 50 億美元。" }] },
  { id: 2437, word: "downsize", pos: "v.", zh: "縮編、裁員", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "The company was forced to downsize.", zh: "公司被迫縮編。" }] },
  { id: 2438, word: "redundancy", pos: "n.", zh: "裁員、冗餘", level: 6, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many workers face redundancy.", zh: "許多員工面臨被裁員。" }] },
  { id: 2439, word: "work-life balance", pos: "n.", zh: "工作與生活平衡", level: 5, category: "商業工作", source: "主題詞庫", purpose: "passive", examples: [{ en: "Work-life balance is increasingly valued.", zh: "工作與生活平衡越來越受重視。" }] },

  // ============================================
  // === 主題詞庫：社會 / 政府（2500-2579）===
  // ============================================
  { id: 2500, word: "democracy", pos: "n.", zh: "民主", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Democracy requires citizen participation.", zh: "民主需要公民參與。" }] },
  { id: 2501, word: "election", pos: "n.", zh: "選舉", level: 4, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The election was hotly contested.", zh: "選舉競爭激烈。" }] },
  { id: 2502, word: "policy maker", pos: "n.", zh: "政策制定者", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Policy makers must consider all factors.", zh: "政策制定者必須考慮所有因素。" }] },
  { id: 2503, word: "legislation", pos: "n.", zh: "立法、法規", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "New legislation was passed.", zh: "通過了新法規。" }] },
  { id: 2504, word: "regulation", pos: "n.", zh: "法規、條例", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Industry regulations have tightened.", zh: "業界規範變嚴格。" }] },
  { id: 2505, word: "citizenship", pos: "n.", zh: "公民身分", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "She acquired British citizenship.", zh: "她取得了英國公民身分。" }] },
  { id: 2506, word: "civil rights", pos: "n.", zh: "公民權利", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Civil rights protect all citizens.", zh: "公民權利保護所有公民。" }] },
  { id: 2507, word: "human rights", pos: "n.", zh: "人權", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Human rights are universal.", zh: "人權是普世的。" }] },
  { id: 2508, word: "discrimination", pos: "n.", zh: "歧視", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Discrimination based on race is illegal.", zh: "基於種族的歧視是違法的。" }] },
  { id: 2509, word: "equality", pos: "n.", zh: "平等", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Gender equality remains a goal.", zh: "性別平等仍是目標。" }] },
  { id: 2510, word: "inequality", pos: "n.", zh: "不平等", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Income inequality has grown.", zh: "收入不平等加劇。" }] },
  { id: 2511, word: "poverty", pos: "n.", zh: "貧窮", level: 4, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Millions live in extreme poverty.", zh: "數百萬人生活在極度貧困中。" }] },
  { id: 2512, word: "wealth", pos: "n.", zh: "財富", level: 4, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Wealth is unevenly distributed.", zh: "財富分配不均。" }] },
  { id: 2513, word: "homeless", pos: "adj.", zh: "無家可歸的", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The city helps homeless people.", zh: "城市幫助無家可歸的人。" }] },
  { id: 2514, word: "welfare", pos: "n.", zh: "福利", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Social welfare supports the needy.", zh: "社會福利支持有需要的人。" }] },
  { id: 2515, word: "taxation", pos: "n.", zh: "稅收", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Higher taxation funds public services.", zh: "較高的稅收資助公共服務。" }] },
  { id: 2516, word: "subsidy", pos: "n.", zh: "補貼", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Farmers receive government subsidies.", zh: "農民收到政府補貼。" }] },
  { id: 2517, word: "infrastructure", pos: "n.", zh: "基礎建設", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Roads and bridges are key infrastructure.", zh: "道路橋樑是關鍵基礎建設。" }] },
  { id: 2518, word: "urbanisation", pos: "n.", zh: "都市化", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Rapid urbanisation creates challenges.", zh: "快速都市化帶來挑戰。" }] },
  { id: 2519, word: "migration", pos: "n.", zh: "遷移", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Migration patterns are changing.", zh: "遷移模式正在改變。" }] },
  { id: 2520, word: "immigrant", pos: "n.", zh: "移民", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Immigrants contribute to the economy.", zh: "移民貢獻於經濟。" }] },
  { id: 2521, word: "refugee", pos: "n.", zh: "難民", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Refugees need international support.", zh: "難民需要國際援助。" }] },
  { id: 2522, word: "diversity", pos: "n.", zh: "多元", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Cultural diversity enriches society.", zh: "文化多元豐富社會。" }] },
  { id: 2523, word: "integration", pos: "n.", zh: "融合", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Integration takes time and effort.", zh: "融合需要時間和努力。" }] },
  { id: 2524, word: "globalisation", pos: "n.", zh: "全球化", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Globalisation connects markets worldwide.", zh: "全球化連結全球市場。" }] },
  { id: 2525, word: "civic", pos: "adj.", zh: "公民的", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Voting is a civic duty.", zh: "投票是公民義務。" }] },
  { id: 2526, word: "campaign", pos: "n./v.", zh: "活動、競選", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The campaign raised awareness.", zh: "這場活動提高了意識。" }] },
  { id: 2527, word: "protest", pos: "n./v.", zh: "抗議", level: 4, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Thousands joined the protest.", zh: "數千人加入抗議。" }] },
  { id: 2528, word: "advocacy", pos: "n.", zh: "倡議", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Her advocacy made a difference.", zh: "她的倡議產生了影響。" }] },
  { id: 2529, word: "censorship", pos: "n.", zh: "審查制度", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Censorship limits free speech.", zh: "審查制度限制言論自由。" }] },
  { id: 2530, word: "freedom of speech", pos: "n.", zh: "言論自由", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Freedom of speech is a basic right.", zh: "言論自由是基本權利。" }] },
  { id: 2531, word: "criminal justice", pos: "n.", zh: "刑事司法", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The criminal justice system needs reform.", zh: "刑事司法系統需要改革。" }] },
  { id: 2532, word: "law enforcement", pos: "n.", zh: "執法", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Law enforcement protects citizens.", zh: "執法保護公民。" }] },
  { id: 2533, word: "verdict", pos: "n.", zh: "判決", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The jury delivered its verdict.", zh: "陪審團做出判決。" }] },
  { id: 2534, word: "trial", pos: "n.", zh: "審判", level: 4, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The trial lasted three weeks.", zh: "審判持續了三週。" }] },
  { id: 2535, word: "convict", pos: "v.", zh: "判定有罪", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "He was convicted of fraud.", zh: "他被判定詐欺有罪。" }] },
  { id: 2536, word: "social media influence", pos: "n.", zh: "社群媒體影響", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Social media influence shapes elections.", zh: "社群媒體影響形塑選舉。" }] },
  { id: 2537, word: "demographic", pos: "n./adj.", zh: "人口統計的", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Demographic shifts affect the economy.", zh: "人口結構變化影響經濟。" }] },
  { id: 2538, word: "generation gap", pos: "n.", zh: "代溝", level: 5, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "The generation gap can cause misunderstandings.", zh: "代溝可能造成誤解。" }] },
  { id: 2539, word: "social mobility", pos: "n.", zh: "社會流動", level: 6, category: "社會政府", source: "主題詞庫", purpose: "passive", examples: [{ en: "Education boosts social mobility.", zh: "教育促進社會流動。" }] },

  // === 主題詞庫：旅遊 / 交通（2600-2659）===
  { id: 2600, word: "destination", pos: "n.", zh: "目的地", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Bali is a popular tourist destination.", zh: "峇里島是熱門旅遊目的地。" }] },
  { id: 2601, word: "itinerary", pos: "n.", zh: "行程表", level: 6, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "She planned a detailed itinerary.", zh: "她規劃了詳細的行程表。" }] },
  { id: 2602, word: "accommodation", pos: "n.", zh: "住宿", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "We booked accommodation in advance.", zh: "我們提前訂了住宿。" }] },
  { id: 2603, word: "backpacker", pos: "n.", zh: "背包客", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "Backpackers travel on a tight budget.", zh: "背包客以低預算旅遊。" }] },
  { id: 2604, word: "sightseeing", pos: "n.", zh: "觀光", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "We spent the day sightseeing.", zh: "我們花了一天觀光。" }] },
  { id: 2605, word: "tourist attraction", pos: "n.", zh: "觀光景點", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "The Eiffel Tower is a major tourist attraction.", zh: "艾菲爾鐵塔是主要觀光景點。" }] },
  { id: 2606, word: "landmark", pos: "n.", zh: "地標", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "The cathedral is a famous landmark.", zh: "這座大教堂是著名地標。" }] },
  { id: 2607, word: "souvenir", pos: "n.", zh: "紀念品", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "She bought souvenirs for her family.", zh: "她為家人買了紀念品。" }] },
  { id: 2608, word: "passport", pos: "n.", zh: "護照", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "My passport expires next year.", zh: "我的護照明年過期。" }] },
  { id: 2609, word: "visa", pos: "n.", zh: "簽證", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Apply for a visa before traveling.", zh: "旅遊前申請簽證。" }] },
  { id: 2610, word: "boarding pass", pos: "n.", zh: "登機證", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Keep your boarding pass handy.", zh: "把登機證放在手邊。" }] },
  { id: 2611, word: "departure", pos: "n.", zh: "出發", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Check the departure time.", zh: "查看出發時間。" }] },
  { id: 2612, word: "arrival", pos: "n.", zh: "抵達", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Arrival is scheduled for 6 PM.", zh: "預計下午 6 點抵達。" }] },
  { id: 2613, word: "layover", pos: "n.", zh: "轉機停留", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "We have a 3-hour layover in Tokyo.", zh: "我們在東京轉機停留 3 小時。" }] },
  { id: 2614, word: "jet lag", pos: "n.", zh: "時差", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "It takes days to recover from jet lag.", zh: "要好幾天才能適應時差。" }] },
  { id: 2615, word: "luggage", pos: "n.", zh: "行李", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "My luggage was lost during the flight.", zh: "我的行李在飛行中遺失了。" }] },
  { id: 2616, word: "customs", pos: "n.", zh: "海關", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Declare all items at customs.", zh: "在海關申報所有物品。" }] },
  { id: 2617, word: "currency exchange", pos: "n.", zh: "貨幣兌換", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Currency exchange rates fluctuate daily.", zh: "貨幣匯率每日波動。" }] },
  { id: 2618, word: "commute", pos: "v./n.", zh: "通勤", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "She commutes by train.", zh: "她搭火車通勤。" }] },
  { id: 2619, word: "congestion", pos: "n.", zh: "壅塞", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "Traffic congestion is a major issue.", zh: "交通壅塞是大問題。" }] },
  { id: 2620, word: "rush hour", pos: "n.", zh: "尖峰時段", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Avoid driving during rush hour.", zh: "避免在尖峰時段開車。" }] },
  { id: 2621, word: "public transport", pos: "n.", zh: "大眾運輸", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "Public transport is reliable here.", zh: "這裡的大眾運輸很可靠。" }] },
  { id: 2622, word: "pedestrian", pos: "n.", zh: "行人", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "Pedestrians have right of way at crossings.", zh: "行人在斑馬線有優先權。" }] },
  { id: 2623, word: "highway", pos: "n.", zh: "高速公路", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "The highway was closed due to an accident.", zh: "高速公路因事故封閉。" }] },
  { id: 2624, word: "metro / underground", pos: "n.", zh: "地鐵", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "The London Underground is extensive.", zh: "倫敦地鐵範圍廣大。" }] },
  { id: 2625, word: "fare", pos: "n.", zh: "車費", level: 4, category: "旅遊交通", source: "主題詞庫", purpose: "active", examples: [{ en: "The bus fare is $2.50.", zh: "公車車費是 2.5 美元。" }] },
  { id: 2626, word: "carpool", pos: "v./n.", zh: "共乘", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "We carpool to work to save money.", zh: "我們共乘上班以省錢。" }] },
  { id: 2627, word: "cyclist", pos: "n.", zh: "騎自行車的人", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "More cyclists are on the road.", zh: "路上有更多自行車騎士。" }] },
  { id: 2628, word: "vehicle emissions", pos: "n.", zh: "車輛排放", level: 6, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "Vehicle emissions pollute the air.", zh: "車輛排放汙染空氣。" }] },
  { id: 2629, word: "electric vehicle", pos: "n.", zh: "電動車", level: 5, category: "旅遊交通", source: "主題詞庫", purpose: "passive", examples: [{ en: "Electric vehicles are gaining popularity.", zh: "電動車越來越受歡迎。" }] },

  // === 主題詞庫：食物（2700-2759）===
  { id: 2700, word: "cuisine", pos: "n.", zh: "菜餚、料理", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Italian cuisine is famous worldwide.", zh: "義大利料理舉世聞名。" }] },
  { id: 2701, word: "delicacy", pos: "n.", zh: "美味、佳餚", level: 6, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "Caviar is considered a delicacy.", zh: "魚子醬被視為佳餚。" }] },
  { id: 2702, word: "vegetarian", pos: "n./adj.", zh: "素食者", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "She has been a vegetarian for years.", zh: "她吃素已多年。" }] },
  { id: 2703, word: "vegan", pos: "n./adj.", zh: "純素的", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Vegan diets exclude all animal products.", zh: "純素飲食排除所有動物產品。" }] },
  { id: 2704, word: "gluten-free", pos: "adj.", zh: "無麩質的", level: 5, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "Gluten-free options are now common.", zh: "無麩質選項現在很常見。" }] },
  { id: 2705, word: "processed food", pos: "n.", zh: "加工食品", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Processed food often contains additives.", zh: "加工食品常含添加劑。" }] },
  { id: 2706, word: "fast food", pos: "n.", zh: "速食", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Fast food is convenient but unhealthy.", zh: "速食方便但不健康。" }] },
  { id: 2707, word: "takeaway", pos: "n.", zh: "外帶", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "We ordered takeaway last night.", zh: "我們昨晚叫了外帶。" }] },
  { id: 2708, word: "ingredient", pos: "n.", zh: "食材、成分", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Fresh ingredients make the best meals.", zh: "新鮮食材做出最棒的餐點。" }] },
  { id: 2709, word: "recipe", pos: "n.", zh: "食譜", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "She follows her grandmother's recipe.", zh: "她遵循奶奶的食譜。" }] },
  { id: 2710, word: "appetizer", pos: "n.", zh: "開胃菜", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Start with a light appetizer.", zh: "先從清淡的開胃菜開始。" }] },
  { id: 2711, word: "dessert", pos: "n.", zh: "甜點", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "I'll have ice cream for dessert.", zh: "我甜點要冰淇淋。" }] },
  { id: 2712, word: "beverage", pos: "n.", zh: "飲料", level: 5, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "Sugary beverages cause health issues.", zh: "含糖飲料造成健康問題。" }] },
  { id: 2713, word: "spicy", pos: "adj.", zh: "辛辣的", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Thai food can be very spicy.", zh: "泰式料理可能很辣。" }] },
  { id: 2714, word: "savoury", pos: "adj.", zh: "鹹的、可口的", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "I prefer savoury snacks to sweet.", zh: "比起甜的我比較喜歡鹹的零食。" }] },
  { id: 2715, word: "homemade", pos: "adj.", zh: "自製的", level: 4, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Homemade bread tastes better.", zh: "自製麵包比較好吃。" }] },
  { id: 2716, word: "organic food", pos: "n.", zh: "有機食物", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Organic food is grown without pesticides.", zh: "有機食物不用農藥種植。" }] },
  { id: 2717, word: "GMO", pos: "n.", zh: "基因改造作物", level: 6, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "GMOs are controversial.", zh: "基改作物具爭議性。" }] },
  { id: 2718, word: "food waste", pos: "n.", zh: "食物浪費", level: 5, category: "食物", source: "主題詞庫", purpose: "active", examples: [{ en: "Food waste is a global problem.", zh: "食物浪費是全球問題。" }] },
  { id: 2719, word: "food security", pos: "n.", zh: "糧食安全", level: 6, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "Climate change threatens food security.", zh: "氣候變遷威脅糧食安全。" }] },
  { id: 2720, word: "malnutrition", pos: "n.", zh: "營養不良", level: 6, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "Malnutrition affects child development.", zh: "營養不良影響兒童發展。" }] },
  { id: 2721, word: "cravings", pos: "n.", zh: "強烈渴望", level: 5, category: "食物", source: "主題詞庫", purpose: "passive", examples: [{ en: "She has cravings for chocolate.", zh: "她渴望吃巧克力。" }] },

  // === 主題詞庫：媒體 / 娛樂（2800-2859）===
  { id: 2800, word: "broadcast", pos: "v./n.", zh: "播放、廣播", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "The game was broadcast live.", zh: "這場比賽現場直播。" }] },
  { id: 2801, word: "journalism", pos: "n.", zh: "新聞業", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "Independent journalism is vital.", zh: "獨立新聞業至關重要。" }] },
  { id: 2802, word: "headline", pos: "n.", zh: "頭條", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "The story made headlines worldwide.", zh: "這個故事登上全球頭條。" }] },
  { id: 2803, word: "advertisement", pos: "n.", zh: "廣告", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "TV advertisements influence consumers.", zh: "電視廣告影響消費者。" }] },
  { id: 2804, word: "subscription", pos: "n.", zh: "訂閱", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "She has a Netflix subscription.", zh: "她有 Netflix 訂閱。" }] },
  { id: 2805, word: "binge-watch", pos: "v.", zh: "追劇、連續看", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "I binge-watched the series last weekend.", zh: "我上週末連續追完整部劇。" }] },
  { id: 2806, word: "celebrity", pos: "n.", zh: "名人", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "She became a celebrity overnight.", zh: "她一夜成名。" }] },
  { id: 2807, word: "influencer", pos: "n.", zh: "網紅", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "Influencers shape consumer behavior.", zh: "網紅形塑消費行為。" }] },
  { id: 2808, word: "documentary", pos: "n.", zh: "紀錄片", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "The documentary won an award.", zh: "這部紀錄片得獎了。" }] },
  { id: 2809, word: "podcast", pos: "n.", zh: "Podcast", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "I listen to podcasts during my commute.", zh: "我通勤時聽 Podcast。" }] },
  { id: 2810, word: "audience", pos: "n.", zh: "觀眾", level: 4, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "The audience was enthusiastic.", zh: "觀眾很熱情。" }] },
  { id: 2811, word: "censorship", pos: "n.", zh: "審查", level: 6, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "Media censorship limits free expression.", zh: "媒體審查限制表達自由。" }] },
  { id: 2812, word: "tabloid", pos: "n.", zh: "小報", level: 6, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "Tabloids often spread sensational news.", zh: "小報常散播聳動新聞。" }] },
  { id: 2813, word: "biased", pos: "adj.", zh: "偏頗的", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "The report appears biased.", zh: "這份報告似乎有偏見。" }] },
  { id: 2814, word: "objective", pos: "adj.", zh: "客觀的", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "Reporters should remain objective.", zh: "記者應保持客觀。" }] },
  { id: 2815, word: "viral", pos: "adj.", zh: "瘋傳的", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "The video went viral overnight.", zh: "這支影片一夜爆紅。" }] },
  { id: 2816, word: "clickbait", pos: "n.", zh: "釣魚標題", level: 6, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "Many headlines are clickbait.", zh: "許多標題都是釣魚標題。" }] },
  { id: 2817, word: "live stream", pos: "n.", zh: "直播", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "She does daily live streams.", zh: "她每天做直播。" }] },
  { id: 2818, word: "soundtrack", pos: "n.", zh: "原聲帶", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "active", examples: [{ en: "The film's soundtrack is amazing.", zh: "這部片的原聲帶很棒。" }] },
  { id: 2819, word: "blockbuster", pos: "n.", zh: "賣座大片", level: 5, category: "媒體娛樂", source: "主題詞庫", purpose: "passive", examples: [{ en: "The movie was a summer blockbuster.", zh: "這部電影是夏季賣座大片。" }] },

  // === 主題詞庫：家庭 / 人際（2900-2959）===
  { id: 2900, word: "nuclear family", pos: "n.", zh: "核心家庭", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "The nuclear family is becoming smaller.", zh: "核心家庭越來越小。" }] },
  { id: 2901, word: "extended family", pos: "n.", zh: "大家庭", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "Asian cultures value the extended family.", zh: "亞洲文化重視大家庭。" }] },
  { id: 2902, word: "single-parent", pos: "adj.", zh: "單親的", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "Single-parent families face unique challenges.", zh: "單親家庭面臨獨特挑戰。" }] },
  { id: 2903, word: "sibling", pos: "n.", zh: "兄弟姊妹", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "She has three siblings.", zh: "她有三個兄弟姊妹。" }] },
  { id: 2904, word: "spouse", pos: "n.", zh: "配偶", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "Bring your spouse to the dinner.", zh: "帶你的配偶來晚餐。" }] },
  { id: 2905, word: "in-laws", pos: "n.", zh: "姻親", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "We visit her in-laws every Christmas.", zh: "我們每年聖誕節去拜訪她的姻親。" }] },
  { id: 2906, word: "household", pos: "n.", zh: "家戶", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "The average household has 3.2 people.", zh: "平均每戶有 3.2 人。" }] },
  { id: 2907, word: "upbringing", pos: "n.", zh: "教養", level: 6, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "She had a strict upbringing.", zh: "她受嚴格的教養。" }] },
  { id: 2908, word: "parenting", pos: "n.", zh: "教養", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Parenting styles vary across cultures.", zh: "教養方式因文化而異。" }] },
  { id: 2909, word: "bond", pos: "n.", zh: "親密關係", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "They share a strong bond.", zh: "他們有深厚的情感連結。" }] },
  { id: 2910, word: "intimate", pos: "adj.", zh: "親密的", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "They have an intimate friendship.", zh: "他們有親密的友誼。" }] },
  { id: 2911, word: "long-distance relationship", pos: "n.", zh: "遠距戀愛", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Long-distance relationships are challenging.", zh: "遠距戀愛很有挑戰。" }] },
  { id: 2912, word: "engagement", pos: "n.", zh: "訂婚", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "They announced their engagement.", zh: "他們宣布訂婚。" }] },
  { id: 2913, word: "divorce", pos: "n./v.", zh: "離婚", level: 4, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Divorce rates have increased.", zh: "離婚率上升。" }] },
  { id: 2914, word: "custody", pos: "n.", zh: "監護權", level: 6, category: "家庭人際", source: "主題詞庫", purpose: "passive", examples: [{ en: "She got custody of the children.", zh: "她取得孩子的監護權。" }] },
  { id: 2915, word: "adoption", pos: "n.", zh: "領養", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Adoption can be a long process.", zh: "領養過程可能很長。" }] },
  { id: 2916, word: "rebellious", pos: "adj.", zh: "叛逆的", level: 6, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Teenagers often go through a rebellious phase.", zh: "青少年常經歷叛逆期。" }] },
  { id: 2917, word: "discipline (parenting)", pos: "n.", zh: "管教", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Children need consistent discipline.", zh: "兒童需要一致的管教。" }] },
  { id: 2918, word: "generation gap", pos: "n.", zh: "代溝", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "The generation gap creates misunderstandings.", zh: "代溝造成誤解。" }] },
  { id: 2919, word: "peer pressure", pos: "n.", zh: "同儕壓力", level: 5, category: "家庭人際", source: "主題詞庫", purpose: "active", examples: [{ en: "Peer pressure affects teenagers.", zh: "同儕壓力影響青少年。" }] },

  // === 主題詞庫：動詞片語高頻（3000-3099）===
  { id: 3000, word: "come up with", pos: "v.phr.", zh: "想出（點子）", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She came up with a brilliant idea.", zh: "她想出了一個絕妙的點子。" }] },
  { id: 3001, word: "look up to", pos: "v.phr.", zh: "尊敬", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "I look up to my older brother.", zh: "我很尊敬我哥哥。" }] },
  { id: 3002, word: "look down on", pos: "v.phr.", zh: "瞧不起", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Don't look down on others.", zh: "別瞧不起別人。" }] },
  { id: 3003, word: "put up with", pos: "v.phr.", zh: "忍受", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "I can't put up with the noise.", zh: "我受不了這個噪音。" }] },
  { id: 3004, word: "get along with", pos: "v.phr.", zh: "與...相處", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She gets along well with everyone.", zh: "她跟每個人都處得來。" }] },
  { id: 3005, word: "give up", pos: "v.phr.", zh: "放棄", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Don't give up on your dreams.", zh: "不要放棄你的夢想。" }] },
  { id: 3006, word: "carry out", pos: "v.phr.", zh: "執行", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "They carried out the research.", zh: "他們執行了這項研究。" }] },
  { id: 3007, word: "bring up", pos: "v.phr.", zh: "撫養 / 提起", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She brought up the topic at dinner.", zh: "她在晚餐時提起這個話題。" }] },
  { id: 3008, word: "look forward to", pos: "v.phr.", zh: "期待", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "I look forward to your reply.", zh: "我期待你的回覆。" }] },
  { id: 3009, word: "keep up with", pos: "v.phr.", zh: "跟上", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "It's hard to keep up with the news.", zh: "很難跟上新聞。" }] },
  { id: 3010, word: "make up for", pos: "v.phr.", zh: "彌補", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Nothing can make up for lost time.", zh: "沒有什麼能彌補失去的時間。" }] },
  { id: 3011, word: "take advantage of", pos: "v.phr.", zh: "利用、佔便宜", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Take advantage of the opportunity.", zh: "把握這個機會。" }] },
  { id: 3012, word: "set up", pos: "v.phr.", zh: "建立、設置", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "They set up a new business.", zh: "他們開了新生意。" }] },
  { id: 3013, word: "deal with", pos: "v.phr.", zh: "處理", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "How do you deal with stress?", zh: "你怎麼處理壓力？" }] },
  { id: 3014, word: "take into account", pos: "v.phr.", zh: "考慮到", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Take all factors into account.", zh: "考慮所有因素。" }] },
  { id: 3015, word: "rule out", pos: "v.phr.", zh: "排除", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "We can't rule out the possibility.", zh: "我們不能排除這個可能性。" }] },
  { id: 3016, word: "back up", pos: "v.phr.", zh: "支持 / 備份", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Always back up your data.", zh: "務必備份你的資料。" }] },
  { id: 3017, word: "figure out", pos: "v.phr.", zh: "弄清楚", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "I can't figure out how this works.", zh: "我搞不懂這怎麼用。" }] },
  { id: 3018, word: "pick up", pos: "v.phr.", zh: "撿起、學會", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "He picked up Japanese quickly.", zh: "他很快學會了日文。" }] },
  { id: 3019, word: "turn down", pos: "v.phr.", zh: "拒絕、調低", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She turned down the offer.", zh: "她拒絕了這個提議。" }] },
  { id: 3020, word: "turn out", pos: "v.phr.", zh: "結果是", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "It turned out to be a good decision.", zh: "結果證明是個好決定。" }] },
  { id: 3021, word: "stand out", pos: "v.phr.", zh: "突出、顯眼", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She stands out in any crowd.", zh: "她在任何人群中都顯眼。" }] },
  { id: 3022, word: "stand for", pos: "v.phr.", zh: "代表", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "What does UN stand for?", zh: "UN 代表什麼？" }] },
  { id: 3023, word: "go through", pos: "v.phr.", zh: "經歷", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "She went through a tough time.", zh: "她經歷了艱難時刻。" }] },
  { id: 3024, word: "look into", pos: "v.phr.", zh: "調查", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "We'll look into the matter.", zh: "我們會調查此事。" }] },
  { id: 3025, word: "come across", pos: "v.phr.", zh: "偶然遇到", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "I came across an interesting article.", zh: "我偶然看到一篇有趣文章。" }] },
  { id: 3026, word: "run out of", pos: "v.phr.", zh: "用完", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "We're running out of milk.", zh: "我們的牛奶快用完了。" }] },
  { id: 3027, word: "break down", pos: "v.phr.", zh: "故障、崩潰", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "The car broke down on the highway.", zh: "車子在高速公路上拋錨了。" }] },
  { id: 3028, word: "take off", pos: "v.phr.", zh: "起飛、脫掉", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "The flight takes off at 8 AM.", zh: "班機 8 點起飛。" }] },
  { id: 3029, word: "show off", pos: "v.phr.", zh: "炫耀", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "He likes to show off his car.", zh: "他喜歡炫耀他的車。" }] },
  { id: 3030, word: "back out", pos: "v.phr.", zh: "退出、反悔", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "He backed out at the last minute.", zh: "他在最後一刻反悔。" }] },
  { id: 3031, word: "fall behind", pos: "v.phr.", zh: "落後", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Don't fall behind on your studies.", zh: "課業不要落後。" }] },
  { id: 3032, word: "catch up", pos: "v.phr.", zh: "趕上", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Let's catch up over coffee.", zh: "我們喝咖啡聊聊近況。" }] },
  { id: 3033, word: "carry on", pos: "v.phr.", zh: "繼續", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Carry on with your work.", zh: "繼續你的工作。" }] },
  { id: 3034, word: "get rid of", pos: "v.phr.", zh: "擺脫", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "We need to get rid of old furniture.", zh: "我們需要處理掉舊家具。" }] },
  { id: 3035, word: "make sense", pos: "v.phr.", zh: "合理、有道理", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "That doesn't make sense.", zh: "那不合理。" }] },
  { id: 3036, word: "pay attention to", pos: "v.phr.", zh: "注意", level: 4, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Pay attention to the details.", zh: "注意細節。" }] },
  { id: 3037, word: "play a role in", pos: "v.phr.", zh: "扮演角色", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "Genetics plays a role in health.", zh: "基因在健康中扮演角色。" }] },
  { id: 3038, word: "shed light on", pos: "v.phr.", zh: "闡明", level: 6, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "The study sheds light on the issue.", zh: "這項研究闡明了這個問題。" }] },
  { id: 3039, word: "raise awareness", pos: "v.phr.", zh: "提高意識", level: 5, category: "動詞片語", source: "主題詞庫", purpose: "active", examples: [{ en: "The campaign raises awareness about cancer.", zh: "這個活動提高癌症意識。" }] },

  // === 主題詞庫：形容詞高頻（3100-3199）===
  { id: 3100, word: "outstanding", pos: "adj.", zh: "傑出的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Her performance was outstanding.", zh: "她的表現傑出。" }] },
  { id: 3101, word: "remarkable", pos: "adj.", zh: "卓越的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "He made remarkable progress.", zh: "他有卓越的進步。" }] },
  { id: 3102, word: "extraordinary", pos: "adj.", zh: "非凡的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She has an extraordinary talent.", zh: "她有非凡的天分。" }] },
  { id: 3103, word: "exceptional", pos: "adj.", zh: "傑出的、例外的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Exceptional cases require special treatment.", zh: "例外情況需要特別處理。" }] },
  { id: 3104, word: "impressive", pos: "adj.", zh: "令人印象深刻的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Her resume is impressive.", zh: "她的履歷令人印象深刻。" }] },
  { id: 3105, word: "fascinating", pos: "adj.", zh: "迷人的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The documentary was fascinating.", zh: "這部紀錄片很吸引人。" }] },
  { id: 3106, word: "compelling", pos: "adj.", zh: "引人入勝的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She made a compelling argument.", zh: "她提出引人入勝的論點。" }] },
  { id: 3107, word: "thought-provoking", pos: "adj.", zh: "發人深省的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The book is thought-provoking.", zh: "這本書發人深省。" }] },
  { id: 3108, word: "comprehensive", pos: "adj.", zh: "全面的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "We offer comprehensive coverage.", zh: "我們提供全面保障。" }] },
  { id: 3109, word: "thorough", pos: "adj.", zh: "徹底的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She conducted a thorough investigation.", zh: "她進行了徹底調查。" }] },
  { id: 3110, word: "sophisticated", pos: "adj.", zh: "精密的、高雅的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The system is highly sophisticated.", zh: "這個系統非常精密。" }] },
  { id: 3111, word: "complex", pos: "adj.", zh: "複雜的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The issue is more complex than it seems.", zh: "這個問題比看起來複雜。" }] },
  { id: 3112, word: "intricate", pos: "adj.", zh: "錯綜複雜的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The design has intricate patterns.", zh: "這個設計有錯綜複雜的圖案。" }] },
  { id: 3113, word: "subtle", pos: "adj.", zh: "細微的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "There is a subtle difference between them.", zh: "兩者間有細微的差異。" }] },
  { id: 3114, word: "obvious", pos: "adj.", zh: "明顯的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The mistake was obvious.", zh: "錯誤很明顯。" }] },
  { id: 3115, word: "subtle", pos: "adj.", zh: "細微的、隱晦的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The subtle changes went unnoticed.", zh: "細微的變化沒被注意到。" }] },
  { id: 3116, word: "vague", pos: "adj.", zh: "模糊的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Her instructions were vague.", zh: "她的指示很模糊。" }] },
  { id: 3117, word: "ambiguous", pos: "adj.", zh: "模糊不清的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The wording is ambiguous.", zh: "這個措辭模糊不清。" }] },
  { id: 3118, word: "explicit", pos: "adj.", zh: "明確的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She gave explicit instructions.", zh: "她給了明確的指示。" }] },
  { id: 3119, word: "implicit", pos: "adj.", zh: "隱含的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "There was implicit agreement.", zh: "有隱含的同意。" }] },
  { id: 3120, word: "lucrative", pos: "adj.", zh: "獲利豐厚的", level: 7, category: "形容詞高頻", source: "主題詞庫", purpose: "passive", examples: [{ en: "It's a lucrative business.", zh: "這是個賺錢的生意。" }] },
  { id: 3121, word: "feasible", pos: "adj.", zh: "可行的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Is this plan feasible?", zh: "這個計畫可行嗎？" }] },
  { id: 3122, word: "viable", pos: "adj.", zh: "可行的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "We need viable alternatives.", zh: "我們需要可行的替代方案。" }] },
  { id: 3123, word: "practical", pos: "adj.", zh: "實用的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Give me a practical solution.", zh: "給我實用的解決方法。" }] },
  { id: 3124, word: "pragmatic", pos: "adj.", zh: "務實的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Take a pragmatic approach.", zh: "採取務實的方式。" }] },
  { id: 3125, word: "ambitious", pos: "adj.", zh: "有抱負的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She has ambitious plans.", zh: "她有遠大的計畫。" }] },
  { id: 3126, word: "modest", pos: "adj.", zh: "謙虛的、適度的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "He's modest about his success.", zh: "他對成功很謙虛。" }] },
  { id: 3127, word: "humble", pos: "adj.", zh: "謙遜的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She remained humble despite fame.", zh: "成名後她仍保持謙遜。" }] },
  { id: 3128, word: "arrogant", pos: "adj.", zh: "傲慢的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Nobody likes arrogant people.", zh: "沒人喜歡傲慢的人。" }] },
  { id: 3129, word: "diligent", pos: "adj.", zh: "勤奮的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She is a diligent student.", zh: "她是勤奮的學生。" }] },
  { id: 3130, word: "lazy", pos: "adj.", zh: "懶惰的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "He's too lazy to exercise.", zh: "他懶得運動。" }] },
  { id: 3131, word: "responsible", pos: "adj.", zh: "負責的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Be responsible for your actions.", zh: "為自己的行為負責。" }] },
  { id: 3132, word: "reliable", pos: "adj.", zh: "可靠的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She's a reliable friend.", zh: "她是個可靠的朋友。" }] },
  { id: 3133, word: "trustworthy", pos: "adj.", zh: "值得信賴的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Choose trustworthy sources.", zh: "選擇值得信賴的來源。" }] },
  { id: 3134, word: "credible", pos: "adj.", zh: "可信的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Is this a credible source?", zh: "這是可信的來源嗎？" }] },
  { id: 3135, word: "optimistic", pos: "adj.", zh: "樂觀的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She remains optimistic.", zh: "她保持樂觀。" }] },
  { id: 3136, word: "pessimistic", pos: "adj.", zh: "悲觀的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "He's pessimistic about the future.", zh: "他對未來悲觀。" }] },
  { id: 3137, word: "enthusiastic", pos: "adj.", zh: "熱情的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She's enthusiastic about her work.", zh: "她對工作充滿熱情。" }] },
  { id: 3138, word: "indifferent", pos: "adj.", zh: "漠不關心的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "He seems indifferent to politics.", zh: "他似乎對政治漠不關心。" }] },
  { id: 3139, word: "passionate", pos: "adj.", zh: "熱情的、有熱忱的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "She's passionate about photography.", zh: "她對攝影充滿熱情。" }] },
  { id: 3140, word: "indispensable", pos: "adj.", zh: "不可或缺的", level: 6, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Smartphones have become indispensable.", zh: "智慧型手機變得不可或缺。" }] },
  { id: 3141, word: "negligible", pos: "adj.", zh: "微不足道的", level: 7, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The risk is negligible.", zh: "風險微不足道。" }] },
  { id: 3142, word: "abundant", pos: "adj.", zh: "豐富的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The country has abundant resources.", zh: "這個國家資源豐富。" }] },
  { id: 3143, word: "scarce", pos: "adj.", zh: "稀少的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "Water is becoming scarce.", zh: "水變得稀少。" }] },
  { id: 3144, word: "diverse", pos: "adj.", zh: "多元的", level: 5, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "We have a diverse team.", zh: "我們有多元的團隊。" }] },
  { id: 3145, word: "uniform", pos: "adj.", zh: "一致的", level: 4, category: "形容詞高頻", source: "主題詞庫", purpose: "active", examples: [{ en: "The results show a uniform pattern.", zh: "結果顯示一致的模式。" }] },
  { id: 3146, word: "tune", pos: "v./n.", zh: "調音 / 曲調", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "He always starts by getting us to tune our guitars.", zh: "他總是先讓我們調音。" }] },
  { id: 3147, word: "by ear", pos: "phr.", zh: "憑聽覺、靠耳朵", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "Some people have an app they use, but others do it by ear.", zh: "有些人用 app，但有人靠耳朵調音。" }] },
  { id: 3148, word: "strumming", pos: "n.", zh: "刷弦", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "We usually spend about ten minutes doing some strumming.", zh: "我們通常花十分鐘做刷弦練習。" }] },
  { id: 3149, word: "chord", pos: "n.", zh: "和弦", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "Gary reminds us where to put our fingers for each chord.", zh: "Gary 提醒我們每個和弦的指法。" }] },
  { id: 3150, word: "plectrum", pos: "n.", zh: "撥片", level: 6, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "passive", examples: [{ en: "So is that using ... what are they called ... plectrums?", zh: "是用那個 ... 叫什麼來著 ... 撥片嗎？" }] },
  { id: 3151, word: "fingerpicking", pos: "n.", zh: "指彈", level: 6, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "Do you do any fingerpicking?", zh: "你們會學指彈嗎？" }] },
  { id: 3152, word: "recording", pos: "n.", zh: "錄音", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "He often brings a recording of a song and plays it to us first.", zh: "他常常會帶一首歌的錄音先放給我們聽。" }] },
  { id: 3153, word: "individual notes", pos: "n.", zh: "單音", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "We pick out the individual notes from a tune he's made up.", zh: "我們從他編的曲子裡挑出單音。" }] },
  { id: 3154, word: "keep time", pos: "phr.", zh: "保持節奏", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "We're so bad at keeping time, so Gary starts clapping.", zh: "我們完全抓不到節奏，所以 Gary 開始拍手。" }] },
  { id: 3155, word: "clap", pos: "v.", zh: "拍手", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "Gary starts clapping to help us.", zh: "Gary 開始拍手幫我們抓拍。" }] },
  { id: 3156, word: "pick out", pos: "phr. v.", zh: "挑出、分辨出", level: 5, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "We pick out the individual notes from a tune.", zh: "我們從曲子中挑出單音。" }] },
  { id: 3157, word: "make up", pos: "phr. v.", zh: "編造、自創", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "It's a tune he's made up.", zh: "這是他自己編的曲子。" }] },
  { id: 3158, word: "hand out", pos: "phr. v.", zh: "發放", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "He hands out the song.", zh: "他把歌譜發給我們。" }] },
  { id: 3159, word: "go round", pos: "phr. v.", zh: "走動巡視", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "Gary goes round and helps them.", zh: "Gary 走動巡視並幫忙他們。" }] },
  { id: 3160, word: "get used to", pos: "phr.", zh: "習慣於", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "I've got used to it now.", zh: "我現在已經習慣了。" }] },
  { id: 3161, word: "concentrate", pos: "v.", zh: "專心", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "People like it because they can really concentrate.", zh: "大家喜歡這部分因為可以全神貫注。" }] },
  { id: 3162, word: "impressive", pos: "adj.", zh: "令人印象深刻的", level: 4, category: "吉他/音樂", source: "聽力 Guitar Lesson C19T2P1", purpose: "active", examples: [{ en: "If we're all playing well, it sounds quite impressive.", zh: "如果大家都彈得好，聽起來相當不錯。" }] },
  { id: 3163, word: "invertebrate", pos: "n.", zh: "無脊椎動物", level: 6, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "For my project on invertebrates, I chose to study tardigrades.", zh: "為了無脊椎動物項目，我選擇研究水熊蟲。" }] },
  { id: 3164, word: "tardigrade", pos: "n.", zh: "緩步動物（水熊蟲）", level: 7, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "Tardigrades are microscopic animals.", zh: "水熊蟲是微型動物。" }] },
  { id: 3165, word: "microscopic", pos: "adj.", zh: "微小的、需顯微鏡才能看的", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "These are microscopic animals.", zh: "這些是需顯微鏡才能看的動物。" }] },
  { id: 3166, word: "phylum", pos: "n.", zh: "門（生物分類）", level: 7, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "They belong to the phylum Tardigrada.", zh: "牠們屬於緩步動物門。" }] },
  { id: 3167, word: "segment", pos: "n.", zh: "體節、區段", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "The body comprises four segments.", zh: "身體由四節組成。" }] },
  { id: 3168, word: "barrel", pos: "n.", zh: "桶（形容圓筒形狀）", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They have a body which is short, and also rounded — a bit like a barrel.", zh: "牠們的身體短而圓，有點像桶。" }] },
  { id: 3169, word: "claw", pos: "n.", zh: "爪", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Each segment has between four and eight sharp claws.", zh: "每個體節有四到八個尖銳的爪。" }] },
  { id: 3170, word: "disc", pos: "n.", zh: "圓盤、吸盤", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Some species have discs which enable them to cling on to surfaces.", zh: "有些品種有吸盤，可以附著在表面上。" }] },
  { id: 3171, word: "respiratory organ", pos: "n.", zh: "呼吸器官", level: 6, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "They don't have any respiratory organs.", zh: "牠們沒有任何呼吸器官。" }] },
  { id: 3172, word: "cavity", pos: "n.", zh: "腔、空洞", level: 6, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "A fluid fills the cavity of the body.", zh: "一種液體充滿身體的腔內。" }] },
  { id: 3173, word: "stylet", pos: "n.", zh: "針狀口器", level: 7, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "The mouth has teeth called stylets.", zh: "嘴巴有稱為 stylets 的牙齒結構。" }] },
  { id: 3174, word: "pierce", pos: "v.", zh: "刺穿", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "These are sharp enough to pierce plant or animal cells.", zh: "這些足以刺穿植物或動物細胞。" }] },
  { id: 3175, word: "habitat", pos: "n.", zh: "棲息地", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They live in a variety of habitats.", zh: "牠們生活在各種棲息地。" }] },
  { id: 3176, word: "resilient", pos: "adj.", zh: "韌性強的、適應力強的", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Tardigrades are very resilient.", zh: "水熊蟲非常具有適應力。" }] },
  { id: 3177, word: "radiation", pos: "n.", zh: "輻射", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Tardigrades are capable of surviving radiation.", zh: "水熊蟲能在輻射下存活。" }] },
  { id: 3178, word: "withstand", pos: "v.", zh: "抵擋、承受", level: 6, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They can withstand temperatures as cold as -200 degrees.", zh: "牠們能承受低至零下 200 度的溫度。" }] },
  { id: 3179, word: "centigrade", pos: "n./adj.", zh: "攝氏", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "-200 degrees centigrade.", zh: "攝氏零下 200 度。" }] },
  { id: 3180, word: "asteroid", pos: "n.", zh: "小行星", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "In the event of an asteroid hitting the earth.", zh: "如果有小行星撞擊地球的話。" }] },
  { id: 3181, word: "extinction", pos: "n.", zh: "滅絕", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They have survived five mass extinctions.", zh: "牠們挺過了五次大滅絕。" }] },
  { id: 3182, word: "cryptobiosis", pos: "n.", zh: "隱生狀態", level: 7, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "They enter a state called cryptobiosis.", zh: "牠們會進入一種叫做隱生的狀態。" }] },
  { id: 3183, word: "metabolism", pos: "n.", zh: "代謝", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Their metabolism drops to less than one percent of normal.", zh: "牠們的代謝率降到正常水平的不到 1%。" }] },
  { id: 3184, word: "revive", pos: "v.", zh: "復甦、復活", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Scientists revived two tardigrades that had been tuns for more than 30 years.", zh: "科學家讓兩隻已成桶狀體 30 多年的水熊蟲復活。" }] },
  { id: 3185, word: "protein", pos: "n.", zh: "蛋白質", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Tardigrades produce a protein that protects their DNA.", zh: "水熊蟲會產生一種保護 DNA 的蛋白質。" }] },
  { id: 3186, word: "consume", pos: "v.", zh: "攝取、消耗", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Tardigrades consume liquids in order to survive.", zh: "水熊蟲攝取液體以維持生存。" }] },
  { id: 3187, word: "moss", pos: "n.", zh: "苔蘚", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They suck the juices from moss.", zh: "牠們吸食苔蘚中的汁液。" }] },
  { id: 3188, word: "seaweed", pos: "n.", zh: "海藻（拼字弱點⭐）", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They extract fluid from seaweed.", zh: "牠們從海藻中提取液體。" }] },
  { id: 3189, word: "prey on", pos: "phr. v.", zh: "捕食", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Species prey on other tardigrades.", zh: "有些品種以其他水熊蟲為食。" }] },
  { id: 3190, word: "conservation status", pos: "n.", zh: "保育狀態", level: 6, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "passive", examples: [{ en: "Let me wrap up by saying a few words about the conservation status of tardigrades.", zh: "最後簡單講一下水熊蟲的保育狀態。" }] },
  { id: 3191, word: "endangered", pos: "adj.", zh: "瀕危的", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They are not on any endangered list.", zh: "牠們不在任何瀕危名單上。" }] },
  { id: 3192, word: "thriving", pos: "adj.", zh: "繁榮生長的", level: 5, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "Some researchers have described them as thriving.", zh: "一些研究人員描述牠們正在繁榮生長。" }] },
  { id: 3193, word: "evaluate", pos: "v.", zh: "評估", level: 4, category: "水熊蟲/動物學", source: "聽力 Tardigrades C19T2P4", purpose: "active", examples: [{ en: "They have not been evaluated by the IUCN.", zh: "牠們還沒被世界自然保護聯盟評估過。" }] },
  { id: 3194, word: "Industrial Revolution", pos: "n.", zh: "工業革命", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "The Industrial Revolution began in Britain in the mid-1700s.", zh: "工業革命於 18 世紀中葉始於英國。" }] },
  { id: 3195, word: "agrarian", pos: "adj.", zh: "農業的", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "A largely rural, agrarian society.", zh: "一個以鄉村為主、農業為主的社會。" }] },
  { id: 3196, word: "rural", pos: "adj.", zh: "鄉村的", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "A largely rural society.", zh: "以鄉村為主的社會。" }] },
  { id: 3197, word: "urban", pos: "adj.", zh: "都市的", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Transformed into an industrialised, urban one.", zh: "轉變為工業化、都市化的社會。" }] },
  { id: 3198, word: "industrialised", pos: "adj.", zh: "工業化的", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Industrialised, urban one.", zh: "工業化、都市化的社會。" }] },
  { id: 3199, word: "textile", pos: "n.", zh: "紡織品", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Textile factories that opened around the country.", zh: "全國各地開設的紡織工廠。" }] },
  { id: 3200, word: "steam engine", pos: "n.", zh: "蒸汽機", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "The first modern steam engine.", zh: "第一台現代蒸汽機。" }] },
  { id: 3201, word: "pump", pos: "v.", zh: "抽（水）", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Machines that pumped water out of mines.", zh: "從礦井中抽水的機器。" }] },
  { id: 3202, word: "piston", pos: "n.", zh: "活塞", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "Forward and backward strokes of the piston.", zh: "活塞的前後衝程。" }] },
  { id: 3203, word: "stroke", pos: "n.", zh: "衝程", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The forward and backward strokes of the piston.", zh: "活塞的前後衝程。" }] },
  { id: 3204, word: "gear mechanism", pos: "n.", zh: "齒輪裝置", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The gear mechanism produced rotary motion.", zh: "齒輪裝置產生旋轉運動。" }] },
  { id: 3205, word: "rotary motion", pos: "n.", zh: "旋轉運動", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "Connected to produced rotary motion.", zh: "連接以產生旋轉運動。" }] },
  { id: 3206, word: "locomotive", pos: "n.", zh: "機車、火車頭", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "A steam-powered locomotive.", zh: "蒸汽動力的機車。" }] },
  { id: 3207, word: "canal", pos: "n.", zh: "運河", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Along Britain's canals.", zh: "沿著英國的運河。" }] },
  { id: 3208, word: "cottage industry", pos: "n.", zh: "家庭手工業", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The British textile business was a true cottage industry.", zh: "英國紡織業是真正的家庭手工業。" }] },
  { id: 3209, word: "workshop", pos: "n.", zh: "工作坊", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Work performed in small workshops.", zh: "工作在小型工作坊中完成。" }] },
  { id: 3210, word: "spinner", pos: "n.", zh: "紡紗工", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "Individual spinners, weavers and dyers.", zh: "個別的紡紗工、織布工和染色工。" }] },
  { id: 3211, word: "weaver", pos: "n.", zh: "織布工", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "Spinners, weavers and dyers.", zh: "紡紗工、織布工和染色工。" }] },
  { id: 3212, word: "dyer", pos: "n.", zh: "染色工", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "Spinners, weavers and dyers.", zh: "紡紗工、織布工和染色工。" }] },
  { id: 3213, word: "spinning jenny", pos: "n.", zh: "珍妮紡紗機", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The spinning jenny and the power loom.", zh: "珍妮紡紗機與動力織布機。" }] },
  { id: 3214, word: "power loom", pos: "n.", zh: "動力織布機", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The spinning jenny and the power loom.", zh: "珍妮紡紗機與動力織布機。" }] },
  { id: 3215, word: "yarn", pos: "n.", zh: "紗", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Spinning yarn and thread.", zh: "紡紗線和線。" }] },
  { id: 3216, word: "labour", pos: "n.", zh: "勞動力", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Relatively little labour was required to produce cloth.", zh: "生產布料需要的勞動力相對較少。" }] },
  { id: 3217, word: "smelt", pos: "v.", zh: "熔煉", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The smelting of iron ore with coke.", zh: "用焦炭熔煉鐵礦石。" }] },
  { id: 3218, word: "iron ore", pos: "n.", zh: "鐵礦石", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Smelting of iron ore with coke.", zh: "用焦炭熔煉鐵礦石。" }] },
  { id: 3219, word: "coke", pos: "n.", zh: "焦炭", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "A material made by heating coal.", zh: "通過加熱煤炭製成的材料。" }] },
  { id: 3220, word: "coal", pos: "n.", zh: "煤", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "The demand for coal grew rapidly.", zh: "煤的需求迅速增長。" }] },
  { id: 3221, word: "charcoal", pos: "n.", zh: "木炭", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Instead of the traditional charcoal.", zh: "取代傳統的木炭。" }] },
  { id: 3222, word: "quality", pos: "n.", zh: "品質（題目踩坑點⭐）", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Metals that were of a higher quality.", zh: "品質更好的金屬。" }] },
  { id: 3223, word: "technique", pos: "n.", zh: "技術（拼字弱點⭐）", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Chief among the new techniques.", zh: "新技術中最核心的。" }] },
  { id: 3224, word: "telegraphy", pos: "n.", zh: "電報", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "The first commercial telegraphy system.", zh: "第一套商業電報系統。" }] },
  { id: 3225, word: "patent", pos: "v.", zh: "取得專利", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Patented the first telegraphy system.", zh: "為第一套電報系統申請了專利。" }] },
  { id: 3226, word: "signalling", pos: "n.", zh: "信號系統", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Used for railway signalling in the UK.", zh: "用於英國的鐵路信號系統。" }] },
  { id: 3227, word: "collision", pos: "n.", zh: "碰撞", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "An effective means of avoiding collisions.", zh: "有效避免碰撞的方法。" }] },
  { id: 3228, word: "urbanisation", pos: "n.", zh: "城市化", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "This rapid urbanisation brought significant challenges.", zh: "這種快速城市化帶來了重大挑戰。" }] },
  { id: 3229, word: "overcrowded", pos: "adj.", zh: "過度擁擠的", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Overcrowded cities suffered from pollution.", zh: "過度擁擠的城市深受污染之苦。" }] },
  { id: 3230, word: "pollution", pos: "n.", zh: "污染", level: 4, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Cities suffered from pollution.", zh: "城市深受污染之苦。" }] },
  { id: 3231, word: "sanitation", pos: "n.", zh: "衛生設備（拼字弱點⭐）", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Inadequate sanitation in overcrowded cities.", zh: "過度擁擠城市的衛生設備不足。" }] },
  { id: 3232, word: "inadequate", pos: "adj.", zh: "不足的", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Pollution and inadequate sanitation.", zh: "污染與衛生設備不足。" }] },
  { id: 3233, word: "Luddite", pos: "n.", zh: "盧德派分子（反機械工人）", level: 7, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "passive", examples: [{ en: "A group of British workers known as Luddites.", zh: "一群被稱為盧德派的英國工人。" }] },
  { id: 3234, word: "livelihood", pos: "n.", zh: "生計", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Robbing them of their livelihood.", zh: "奪走他們的生計。" }] },
  { id: 3235, word: "apprentice", pos: "n.", zh: "學徒", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Ned Ludd, a young apprentice.", zh: "Ned Ludd，一位年輕學徒。" }] },
  { id: 3236, word: "wreck", pos: "v.", zh: "破壞、毀掉", level: 5, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Rumoured to have wrecked a textile machine.", zh: "傳說他曾搗毀一台紡織機。" }] },
  { id: 3237, word: "uprising", pos: "n.", zh: "起義、暴動", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "Responded to the uprisings.", zh: "回應暴動。" }] },
  { id: 3238, word: "unrest", pos: "n.", zh: "動盪不安", level: 6, category: "工業革命", source: "閱讀 Industrial Revolution C19T2P1", purpose: "active", examples: [{ en: "The unrest finally reached its peak.", zh: "動盪終於達到高峰。" }] },
  { id: 3239, word: "harbour", pos: "n.", zh: "港口", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "Kite Place — it's the area by the harbour.", zh: "風箏廣場——就是港口邊的那個區域。" }] },
  { id: 3240, word: "organic", pos: "adj.", zh: "有機的", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "There's a really nice organic shop there.", zh: "那裡有一家非常不錯的有機商店。" }] },
  { id: 3241, word: "warehouse", pos: "n.", zh: "倉庫", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "I think it used to be a warehouse.", zh: "我想它以前是一間倉庫。" }] },
  { id: 3242, word: "pavement", pos: "n.", zh: "人行道", level: 5, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "There's a big sign on the pavement.", zh: "人行道上有一個大招牌。" }] },
  { id: 3243, word: "minibus", pos: "n.", zh: "小巴", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "There's a minibus that goes to the supermarket.", zh: "有一輛迷你巴士會開往超市。" }] },
  { id: 3244, word: "packaging", pos: "n.", zh: "包裝", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "I want to avoid all the plastic packaging.", zh: "我想避開所有的塑膠包裝。" }] },
  { id: 3245, word: "a dozen", pos: "phr.", zh: "一打、十二個", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "I need about a dozen prawns for that.", zh: "我大概需要一打蝦來做那道菜。" }] },
  { id: 3246, word: "prawn", pos: "n.", zh: "蝦", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "I need about 12 prawns for that.", zh: "做那道菜我需要大約 12 隻蝦。" }] },
  { id: 3247, word: "shellfish", pos: "n.", zh: "貝類", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "The salmon is always very good and the shellfish.", zh: "鮭魚一向很好，貝類也是。" }] },
  { id: 3248, word: "samphire", pos: "n.", zh: "海蓬子（一種海草）", level: 7, category: "食物採購", source: "聽力 C19T3P1", purpose: "passive", examples: [{ en: "Have you ever tried samphire? It's a type of seaweed.", zh: "你吃過海蓬子嗎？那是一種海草。" }] },
  { id: 3249, word: "spice", pos: "n.", zh: "香料", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "A lot of spices you can put in a curry.", zh: "很多可以放進咖哩裡的香料。" }] },
  { id: 3250, word: "coconut", pos: "n.", zh: "椰子", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "Spices and things like coconut.", zh: "香料還有椰子之類的東西。" }] },
  { id: 3251, word: "loaf", pos: "n.", zh: "一條（麵包）", level: 4, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "I'd like to buy a brown loaf.", zh: "我想買一條黑麵包。" }] },
  { id: 3252, word: "tart", pos: "n.", zh: "塔、餡餅", level: 5, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "They have a whole range of tarts.", zh: "他們有各種口味的塔。" }] },
  { id: 3253, word: "ripe", pos: "adj.", zh: "成熟的", level: 5, category: "食物採購", source: "聽力 C19T3P1", purpose: "active", examples: [{ en: "Mangoes are not always ripe.", zh: "芒果不一定都是熟的。" }] },
  { id: 3254, word: "supervisor", pos: "n.", zh: "主管", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "I'm Kaeden, one of the supervisors.", zh: "我是凱登，主管之一。" }] },
  { id: 3255, word: "staffroom", pos: "n.", zh: "員工休息室", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "I'll take you to the staffroom.", zh: "我帶你去員工休息室。" }] },
  { id: 3256, word: "letter of appointment", pos: "n.", zh: "任命書", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Show my letter of appointment and pick up my badge.", zh: "出示任命書並領取識別證。" }] },
  { id: 3257, word: "badge", pos: "n.", zh: "識別證", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Pick up my badge at the front desk.", zh: "在前台領取我的識別證。" }] },
  { id: 3258, word: "locker", pos: "n.", zh: "置物櫃", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Put your coat and rucksack in one of the lockers.", zh: "把大衣和背包放進其中一個置物櫃。" }] },
  { id: 3259, word: "uniform", pos: "n.", zh: "制服", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Tiffany will give you a uniform.", zh: "蒂芙尼會給你一套制服。" }] },
  { id: 3260, word: "sell-by date", pos: "n.", zh: "保存期限", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Check sell-by dates on the bread and cakes.", zh: "檢查麵包和蛋糕的保存期限。" }] },
  { id: 3261, word: "price label", pos: "n.", zh: "價格標籤", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Put a new price label on the packaging.", zh: "在包裝上貼一張新的價格標籤。" }] },
  { id: 3262, word: "re-stock", pos: "v.", zh: "補貨", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Re-stock with plastic boxes if needed.", zh: "如有需要就補充塑膠盒。" }] },
  { id: 3263, word: "cardboard", pos: "n.", zh: "紙板、瓦楞紙", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Lots of flat cardboard boxes at one end of the counter.", zh: "櫃台一端有很多扁平的紙箱。" }] },
  { id: 3264, word: "storeroom", pos: "n.", zh: "儲藏室", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "You should bring more from the storeroom.", zh: "你要從儲藏室拿更多來。" }] },
  { id: 3265, word: "weighing scales", pos: "n.", zh: "磅秤", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Clean the area, including wiping the weighing scales.", zh: "清潔該區域，包括擦拭磅秤。" }] },
  { id: 3266, word: "cold-room", pos: "n.", zh: "冷藏室", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "You'll need to get more ice from the cold-room.", zh: "你需要從冷藏室拿更多的冰。" }] },
  { id: 3267, word: "frostbite", pos: "n.", zh: "凍傷", level: 6, category: "超市職場", source: "聽力 C19T4P1", purpose: "passive", examples: [{ en: "It's cold enough in there to get frostbite.", zh: "那裡冷到足以造成凍傷。" }] },
  { id: 3268, word: "thermal", pos: "adj.", zh: "保暖的、隔熱的", level: 5, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Make sure you put on thermal gloves.", zh: "務必戴上保暖手套。" }] },
  { id: 3269, word: "rucksack", pos: "n.", zh: "背包", level: 4, category: "超市職場", source: "聽力 C19T4P1", purpose: "active", examples: [{ en: "Put your coat and rucksack in one of the lockers.", zh: "把大衣和背包放進其中一個置物櫃。" }] },
  { id: 3270, word: "upward", pos: "adj.", zh: "向上的（方向，注意不是 upper）", level: 4, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "Firstly, there was an overall upward trend.", zh: "首先，整體呈現一個上升趨勢。" }] },
  { id: 3271, word: "opposite", pos: "adj.", zh: "相反的", level: 4, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "In contrast, the figure for Asia showed the opposite trend.", zh: "相比之下，亞洲的數字顯示出相反的趨勢。" }] },
  { id: 3272, word: "proportion", pos: "n.", zh: "比例（拼字弱點⭐，不是 portion）", level: 5, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "Then, the proportion fell sharply in the last five years.", zh: "接著，這個比例在最後五年急遽下降。" }] },
  { id: 3273, word: "peak", pos: "v.", zh: "達到高峰", level: 5, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "The figure peaked in 2010.", zh: "這個數字在 2010 年達到高峰。" }] },
  { id: 3274, word: "level off", pos: "phr.", zh: "走平、持平（不是 level up）", level: 5, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "The unemployment rate leveled off.", zh: "失業率維持持平。" }] },
  { id: 3275, word: "whereas", pos: "conj.", zh: "而（句中連兩個子句作對比）", level: 5, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "Exports rose sharply, whereas imports remained stable.", zh: "出口量大幅上升，而進口量維持穩定。" }] },
  { id: 3276, word: "in contrast", pos: "phr.", zh: "相比之下（句首）", level: 5, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "In contrast, the figure for Asia was much lower.", zh: "相比之下，亞洲的數字低得多。" }] },
  { id: 3277, word: "likewise", pos: "adv.", zh: "同樣地（句首，同向連接）", level: 6, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "Likewise, the number of women increased.", zh: "同樣地，女性人數也增加了。" }] },
  { id: 3278, word: "conversely", pos: "adv.", zh: "相反地（句首，異向連接）", level: 6, category: "寫作連接詞", source: "寫作 U2 連接詞", purpose: "active", examples: [{ en: "Conversely, sales of tea declined.", zh: "相反地，茶的銷量下降了。" }] },
  { id: 3279, word: "approximately", pos: "adv.", zh: "大約（拼字弱點⭐ ap-prox-i-mate-ly）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Coffee sales rose to approximately 110,000 in 2020.", zh: "咖啡銷量在 2020 年上升到大約 11 萬。" }] },
  { id: 3280, word: "roughly", pos: "adv.", zh: "大約（口語）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "The figure stood at roughly 50%.", zh: "這個數字大約是 50%。" }] },
  { id: 3281, word: "just over", pos: "phr.", zh: "剛超過（值在數字上方）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Smart TVs were owned by just over half of households.", zh: "智慧電視的擁有率剛超過一半家戶。" }] },
  { id: 3282, word: "just under", pos: "phr.", zh: "剛不到（值在數字下方）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Tablets were owned by just under half of households.", zh: "平板的擁有率剛不到一半家戶。" }] },
  { id: 3283, word: "slightly more than", pos: "phr.", zh: "略多於", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Cars accounted for slightly more than half of all sales.", zh: "汽車佔了略多於一半的總銷量。" }] },
  { id: 3284, word: "slightly less than", pos: "phr.", zh: "略少於", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "The unemployment rate fell to slightly less than 5%.", zh: "失業率跌到略少於 5%。" }] },
  { id: 3285, word: "exactly", pos: "adv.", zh: "恰好（修飾數字用副詞，不是 exact）", level: 4, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "The proportion remained stable at exactly 25%.", zh: "這個比例維持在恰好 25%。" }] },
  { id: 3286, word: "precisely", pos: "adv.", zh: "精確地", level: 6, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Sales stood at precisely 100,000 units.", zh: "銷量精確落在 10 萬單位。" }] },
  { id: 3287, word: "accounted for", pos: "phr.", zh: "佔了（適用比例分配，如圓餅圖）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Cars accounted for just over half of all sales.", zh: "汽車佔了略超過一半的總銷量。" }] },
  { id: 3288, word: "by far", pos: "phr.", zh: "遠遠（強調最高級）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Smartphones were by far the most owned device.", zh: "智慧型手機是遠遠最多人擁有的裝置。" }] },
  { id: 3289, word: "peak at", pos: "phr.", zh: "在某值達到高峰（不是 peak to）", level: 5, category: "寫作精確度詞", source: "寫作 U3 精確度詞", purpose: "active", examples: [{ en: "Unemployment peaked at about 8% in 2018.", zh: "失業率在 2018 年達到大約 8% 的高峰。" }] },

  // === 聽力 C19T3P4 微塑料 ===
  { id: 3290, word: "microplastic", pos: "n.", zh: "微塑料", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Microplastics are tiny pieces of plastic smaller than five millimetres.", zh: "微塑料是尺寸小於五毫米的塑料碎片。" }] },
  { id: 3291, word: "microfibre", pos: "n.", zh: "微纖維", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Threads and microfibres detach from synthetic clothing every time they're put in a washing machine.", zh: "合成衣物每次放進洗衣機，線和微纖維就會脫落。" }] },
  { id: 3292, word: "synthetic", pos: "adj.", zh: "合成的、人造的", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Fibres from synthetic clothing enter the water system during washing.", zh: "合成衣物的纖維在洗滌時進入水系統。" }] },
  { id: 3293, word: "fibre", pos: "n.", zh: "纖維", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Fibres from some clothing detach during washing.", zh: "某些衣物的纖維會在洗滌時脫落。" }] },
  { id: 3294, word: "break down", pos: "phr.v.", zh: "分解", level: 4, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Big pieces of plastic waste break down into microscopic particles over time.", zh: "大塊塑料垃圾會隨時間分解成微小顆粒。" }] },
  { id: 3295, word: "tyre", pos: "n.", zh: "輪胎", level: 4, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Tyres wear down as cars and lorries travel along road surfaces.", zh: "汽車和卡車行駛時輪胎會磨損。" }] },
  { id: 3296, word: "food chain", pos: "n.", zh: "食物鏈", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Microplastics enter the food chain through bottled and tap water.", zh: "微塑料透過瓶裝水和自來水進入食物鏈。" }] },
  { id: 3297, word: "tap water", pos: "n.", zh: "自來水", level: 4, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Microplastics have been detected in tap water.", zh: "自來水中已檢測到微塑料。" }] },
  { id: 3298, word: "conclusive", pos: "adj.", zh: "確鑿的、結論性的", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "There is not yet conclusive proof that microplastics cause significant harm to people.", zh: "目前還沒有確鑿證據證明微塑料對人體造成嚴重傷害。" }] },
  { id: 3299, word: "legislation", pos: "n.", zh: "法規、立法", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "There is legislation which prevents manufacturers from adding plastic microbeads to shower gels.", zh: "有法規禁止製造商在沐浴露中添加塑料微珠。" }] },
  { id: 3300, word: "microbead", pos: "n.", zh: "塑料微珠", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Plastic microbeads are banned in shower gels, facial cleansers and toothpaste.", zh: "沐浴露、洗面乳和牙膏中禁止使用塑料微珠。" }] },
  { id: 3301, word: "toothpaste", pos: "n.", zh: "牙膏", level: 4, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Toothpaste with plastic microbeads is banned in many countries.", zh: "含塑料微珠的牙膏在許多國家被禁止。" }] },
  { id: 3302, word: "deposit", pos: "v.", zh: "沉積、放置", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Microplastics are deposited in the soil by rain.", zh: "微塑料透過降雨沉積在土壤中。" }] },
  { id: 3303, word: "fertiliser", pos: "n.", zh: "肥料（注意不是 fertilize）", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Many of the fertilisers used by farmers contain microplastics.", zh: "農民使用的許多肥料都含有微塑料。" }] },
  { id: 3304, word: "fertile", pos: "adj.", zh: "肥沃的", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Earthworms mix nutrients into the soil, thereby making it more fertile.", zh: "蚯蚓把養分混入土壤，使其更肥沃。" }] },
  { id: 3305, word: "earthworm", pos: "n.", zh: "蚯蚓", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Earthworms are an essential component of our agricultural system.", zh: "蚯蚓是農業系統的重要組成部分。" }] },
  { id: 3306, word: "digestive tract", pos: "n.", zh: "消化道", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "The team studied the effects of microplastics on the digestive tracts of earthworms.", zh: "團隊研究了微塑料對蚯蚓消化道的影響。" }] },
  { id: 3307, word: "topsoil", pos: "n.", zh: "表土", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "These worms live in topsoil and mix nutrients into the soil.", zh: "這些蚯蚓住在表土，把養分混進土壤。" }] },
  { id: 3308, word: "nutrient", pos: "n.", zh: "養分", level: 5, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "Worms mix nutrients into the soil to make it more fertile.", zh: "蚯蚓把養分混進土壤使其更肥沃。" }] },
  { id: 3309, word: "ingest", pos: "v.", zh: "攝入、吞食", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "The microplastic particles were ingested by the earthworms in the soil.", zh: "微塑料顆粒被土壤中的蚯蚓吞食。" }] },
  { id: 3310, word: "biodegradable", pos: "adj.", zh: "可生物降解的", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "The particles included biodegradable PLA and conventional polyethylene.", zh: "顆粒包含可生物降解的 PLA 與傳統聚乙烯。" }] },
  { id: 3311, word: "inhibit", pos: "v.", zh: "抑制", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "The researchers asked whether microplastics would ultimately inhibit plant growth.", zh: "研究人員想知道微塑料是否最終會抑制植物生長。" }] },
  { id: 3312, word: "germinate", pos: "v.", zh: "發芽", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "A lower percentage than normal of the rye grass seeds germinated.", zh: "黑麥草種子的發芽率低於正常水平。" }] },
  { id: 3313, word: "perennial", pos: "adj.", zh: "多年生的", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "They planted perennial rye grass for the study.", zh: "他們種植多年生黑麥草進行研究。" }] },
  { id: 3314, word: "impoverished", pos: "adj.", zh: "貧瘠的、貧窮的", level: 6, category: "聽力環境", source: "聽力 C19T3P4 微塑料", examples: [{ en: "When soil becomes impoverished by microplastics, ecosystems and society are negatively impacted.", zh: "當土壤因微塑料而變得貧瘠，生態系統和社會都會受到負面影響。" }] },

  // === 聽力 C19T4P4 植樹造林 ===
  { id: 3315, word: "reforestation", pos: "n.", zh: "植樹造林、重新造林", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Reforestation projects should include a range of tree species.", zh: "植樹造林計畫應包含多樣的樹種。" }] },
  { id: 3316, word: "restoration", pos: "n.", zh: "修復、恢復", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "The restoration of mangrove forests created real benefits for the community.", zh: "紅樹林修復為社區創造了實際的利益。" }] },
  { id: 3317, word: "invasive species", pos: "n.", zh: "入侵物種", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Invasive species are often in competition with native species.", zh: "入侵物種常與本地物種競爭。" }] },
  { id: 3318, word: "native species", pos: "n.", zh: "本地物種", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Invasive species may threaten the long-term survival of native species.", zh: "入侵物種可能威脅本地物種的長期生存。" }] },
  { id: 3319, word: "competition with", pos: "phr.", zh: "與……競爭（注意搭配 with，不是 to）", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Invasive species are often in competition with native species.", zh: "入侵物種常與本地物種競爭。" }] },
  { id: 3320, word: "biodiversity", pos: "n.", zh: "生物多樣性", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Invasive species contribute to the global biodiversity crisis.", zh: "入侵物種加劇了全球生物多樣性危機。" }] },
  { id: 3321, word: "genetic diversity", pos: "n.", zh: "基因多樣性", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Use tree seeds with a high genetic diversity to increase resistance to disease.", zh: "使用基因多樣性高的種子可增強抗病能力。" }] },
  { id: 3322, word: "resilience", pos: "n.", zh: "韌性、恢復力", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Seeds with low genetic diversity lower the resilience of restored forests.", zh: "基因多樣性低的種子降低恢復林的韌性。" }] },
  { id: 3323, word: "vulnerable to", pos: "phr.", zh: "易受……影響", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Low genetic diversity makes restored forests vulnerable to disease.", zh: "基因多樣性低使恢復林容易受疾病侵害。" }] },
  { id: 3324, word: "carbon capture", pos: "n.", zh: "碳捕獲", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Restoring biodiversity that will maximise carbon capture is key.", zh: "恢復可最大化碳捕獲的生物多樣性是關鍵。" }] },
  { id: 3325, word: "keystone species", pos: "n.", zh: "關鍵物種", level: 7, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Figs are a keystone species in maintaining wildlife populations.", zh: "無花果樹是維持野生動物族群的關鍵物種。" }] },
  { id: 3326, word: "seed disperser", pos: "n.", zh: "種子傳播者", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Animals and birds act as natural seed dispersers.", zh: "動物與鳥類是天然的種子傳播者。" }] },
  { id: 3327, word: "accelerate", pos: "v.", zh: "加速", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Fig trees accelerate the speed of the recovery process.", zh: "無花果樹加快了生態恢復的速度。" }] },
  { id: 3328, word: "mangrove", pos: "n.", zh: "紅樹林", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "The restoration of mangrove forests in Madagascar created real benefits.", zh: "馬達加斯加紅樹林的修復創造了實際利益。" }] },
  { id: 3329, word: "fig tree", pos: "n.", zh: "無花果樹", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "A variety of native fig trees were planted in Lampang Province.", zh: "南邦府種植了多種本地無花果樹。" }] },
  { id: 3330, word: "savanna", pos: "n.", zh: "熱帶草原", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "It's better to avoid savannas as these ecosystems already capture carbon.", zh: "最好避開熱帶草原，因為這些生態系已能捕獲碳。" }] },
  { id: 3331, word: "degraded", pos: "adj.", zh: "退化的", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Drones help prioritise areas of degraded forest for restoration.", zh: "無人機協助對退化林地排出修復優先順序。" }] },
  { id: 3332, word: "illegal logging", pos: "n.", zh: "非法砍伐", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Parts of the Amazon are devastated by rearing cattle and illegal logging.", zh: "亞馬遜部分地區因養牛和非法砍伐而受到嚴重破壞。" }] },
  { id: 3333, word: "exploit", pos: "v.", zh: "利用、開發、剝削", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Reforesting areas currently exploited for agriculture should be avoided.", zh: "目前用於農業的地區應避免重新造林。" }] },
  { id: 3334, word: "devastated", pos: "adj.", zh: "受嚴重破壞的", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Parts of the Amazon are being devastated by human activities.", zh: "亞馬遜部分地區因人類活動而受到嚴重破壞。" }] },
  { id: 3335, word: "rearing cattle", pos: "phr.", zh: "養牛", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Rearing cattle and illegal logging are the main causes of forest loss.", zh: "養牛和非法砍伐是森林流失的主因。" }] },
  { id: 3336, word: "drone", pos: "n.", zh: "無人機", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Drone technology helps monitor areas of degraded forest.", zh: "無人機技術有助於監測退化林地。" }] },
  { id: 3337, word: "prioritise", pos: "v.", zh: "優先處理", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Drones help prioritise areas for forest restoration.", zh: "無人機協助對森林修復區域排出優先順序。" }] },
  { id: 3338, word: "intervention", pos: "n.", zh: "干預", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Detailed maps identify high-priority areas for intervention.", zh: "詳細的地圖能標出優先干預的區域。" }] },
  { id: 3339, word: "quantify", pos: "v.", zh: "量化", level: 6, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Drones are used to identify and quantify how parts of the Amazon are being devastated.", zh: "無人機被用來識別並量化亞馬遜地區的破壞程度。" }] },
  { id: 3340, word: "make a living from", pos: "phr.", zh: "以……為生", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Mangrove destruction made it difficult for people to make a living from fishing.", zh: "紅樹林被破壞讓人們難以靠捕魚為生。" }] },
  { id: 3341, word: "defence against", pos: "phr.", zh: "對……的防禦", level: 5, category: "聽力環境", source: "聽力 C19T4P4 植樹造林", examples: [{ en: "Mangroves act as a defence against the increased threat of flooding.", zh: "紅樹林能抵禦日益增加的洪水威脅。" }] },

  // === 聽力 C19T3P3 麵包再利用 + 食物趨勢 ===
  { id: 3342, word: "vegan", pos: "adj./n.", zh: "純素的 / 純素者", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "She's making a vegan alternative to eggs.", zh: "她在做雞蛋的純素替代品。" }] },
  { id: 3343, word: "chickpea", pos: "n.", zh: "鷹嘴豆", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "I'm using chickpeas as an alternative to eggs.", zh: "我用鷹嘴豆作為雞蛋的替代品。" }] },
  { id: 3344, word: "stale", pos: "adj.", zh: "（食物）不新鮮、變硬的", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "The basic process was breaking the stale bread down to a paste.", zh: "基本流程是把舊麵包打成糊狀。" }] },
  { id: 3345, word: "appetising", pos: "adj.", zh: "開胃的、誘人的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "I added fruit and vegetables to make them a more appetising colour.", zh: "我加了水果和蔬菜讓顏色更開胃。" }] },
  { id: 3346, word: "touch-sensitive sensor", pos: "n.", zh: "觸控感應器", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "A company developed touch-sensitive sensors for food labels.", zh: "一家公司開發了食品標籤用的觸控感應器。" }] },
  { id: 3347, word: "visually impaired", pos: "adj.", zh: "視障的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "It started as a project to help visually impaired people.", zh: "這個專案最初是為了幫助視障人士。" }] },
  { id: 3348, word: "fit to eat", pos: "phr.", zh: "適合食用", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "The label helps people know whether food is fit to eat.", zh: "這標籤幫助人們判斷食物是否能吃。" }] },
  { id: 3349, word: "food trend", pos: "n.", zh: "食物趨勢", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "I was reading an article about food trends.", zh: "我讀了一篇關於食物趨勢的文章。" }] },
  { id: 3350, word: "proactive", pos: "adj.", zh: "主動積極的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Retailers need to be more proactive to encourage local products.", zh: "零售商需要更主動地鼓勵本地產品。" }] },
  { id: 3351, word: "unnecessary packaging", pos: "n.", zh: "不必要的包裝", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Everyone's aware of the need for a reduction in unnecessary packaging.", zh: "大家都知道要減少不必要的包裝。" }] },
  { id: 3352, word: "stricter regulations", pos: "n.", zh: "更嚴格的法規", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Stricter regulations on packaging are needed.", zh: "包裝需要更嚴格的法規。" }] },
  { id: 3353, word: "gluten-free", pos: "adj.", zh: "無麩質的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Gluten-free food has become widespread.", zh: "無麩質食品已經普及。" }] },
  { id: 3354, word: "lactose-free", pos: "adj.", zh: "無乳糖的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Lactose-free products are popular among people with intolerances.", zh: "無乳糖產品在不耐症族群中很受歡迎。" }] },
  { id: 3355, word: "allergy", pos: "n.", zh: "過敏", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "People with allergies often buy gluten-free food.", zh: "過敏人士常買無麩質食物。" }] },
  { id: 3356, word: "intolerance", pos: "n.", zh: "不耐症", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Food intolerances are not the same as allergies.", zh: "食物不耐症與過敏不同。" }] },
  { id: 3357, word: "widespread", pos: "adj.", zh: "普遍的、廣泛的", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Gluten-free food already seems to be widespread.", zh: "無麩質食物似乎已經很普及。" }] },
  { id: 3358, word: "cynical", pos: "adj.", zh: "懷疑的、不信任的", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "I'm cynical about branded products related to celebrity chefs.", zh: "我對名廚相關的品牌產品持懷疑態度。" }] },
  { id: 3359, word: "celebrity chef", pos: "n.", zh: "名廚", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "People buy products with celebrity chefs' names on.", zh: "人們會買標有名廚名字的產品。" }] },
  { id: 3360, word: "ready-made", pos: "adj.", zh: "現成的", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "I bought a ready-made spice mix and it didn't taste of anything.", zh: "我買了一包現成的混合香料，根本沒味道。" }] },
  { id: 3361, word: "ghost kitchen", pos: "n.", zh: "幽靈廚房（只外送）", level: 6, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "Ghost kitchens produce takeaway food but the public never visit.", zh: "幽靈廚房做外送餐點，但公眾從不會去。" }] },
  { id: 3362, word: "kept quiet", pos: "phr.", zh: "保持低調、不公開", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "People aren't aware of ghost kitchens — it's all kept quiet.", zh: "人們不知道幽靈廚房——這件事一直保持低調。" }] },
  { id: 3363, word: "take a risk", pos: "phr.", zh: "冒險", level: 4, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "They might be taking a big risk by self-medicating with mushrooms.", zh: "他們自己用蘑菇治病可能是在冒大險。" }] },
  { id: 3364, word: "health concern", pos: "n.", zh: "健康問題", level: 5, category: "聽力食物", source: "聽力 C19T3P3 食物趨勢", examples: [{ en: "People use mushrooms to treat various health concerns.", zh: "人們用蘑菇治療各種健康問題。" }] },

  // === 聽力 C19T3P2 兒童書展 + 童書推薦 ===
  { id: 3365, word: "illustrator", pos: "n.", zh: "插畫家", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The workshop is led by the well-known illustrator Mark Keane.", zh: "工作坊由知名插畫家 Mark Keane 主持。" }] },
  { id: 3366, word: "role play", pos: "n.", zh: "角色扮演", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "There's an opportunity for aspiring actors to do some role play.", zh: "有志當演員的孩子有機會做角色扮演。" }] },
  { id: 3367, word: "aspiring", pos: "adj.", zh: "有志於……的", level: 6, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "An opportunity for aspiring actors to do role play.", zh: "讓有志當演員的孩子做角色扮演的機會。" }] },
  { id: 3368, word: "deaf", pos: "adj.", zh: "失聰的、聾的", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Superheroes is a chance for deaf children to share their reading experiences.", zh: "「超級英雄」是讓聾啞孩子分享閱讀經驗的機會。" }] },
  { id: 3369, word: "hearing impaired", pos: "adj.", zh: "聽力受損的", level: 6, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The author is herself hearing impaired.", zh: "作家本身也聽力受損。" }] },
  { id: 3370, word: "disability", pos: "n.", zh: "殘疾、障礙", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The workshop is aimed at children with a disability.", zh: "工作坊針對身心障礙兒童。" }] },
  { id: 3371, word: "loneliness", pos: "n.", zh: "孤獨", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The workshop encourages children to describe loneliness.", zh: "工作坊鼓勵孩子描寫孤獨的情境。" }] },
  { id: 3372, word: "mental health", pos: "n.", zh: "心理健康", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Speak up is part of a series of workshops on mental health.", zh: "「勇敢發聲」是心理健康主題系列工作坊之一。" }] },
  { id: 3373, word: "heart-warming", pos: "adj.", zh: "暖心的", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Jump for joy is a heart-warming, best-selling story.", zh: "《Jump for joy》是一個暖心的暢銷故事。" }] },
  { id: 3374, word: "prize-winning", pos: "adj.", zh: "得獎的", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The workshop will be led by a prize-winning author.", zh: "工作坊由得獎作家主持。" }] },
  { id: 3375, word: "gold medal", pos: "n.", zh: "金牌、金獎", level: 4, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The book received the gold medal at the Waterford Awards.", zh: "這本書在 Waterford 獎項中獲得金獎。" }] },
  { id: 3376, word: "raise awareness of", pos: "phr.", zh: "提高對……的認識", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The book raises awareness of a particular culture.", zh: "這本書讓人認識某個特定文化。" }] },
  { id: 3377, word: "roots", pos: "n.", zh: "根源、文化背景", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The festival helps children learn about their Jamaican roots.", zh: "這個節日幫助孩子認識他們的牙買加根源。" }] },
  { id: 3378, word: "immigration", pos: "n.", zh: "移民", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The book deals with the serious issue of immigration.", zh: "這本書探討移民這個嚴肅議題。" }] },
  { id: 3379, word: "language barrier", pos: "n.", zh: "語言障礙", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The boy faces the language barrier at school.", zh: "男孩在學校面對語言障礙。" }] },
  { id: 3380, word: "hilarious", pos: "adj.", zh: "非常好笑的", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "The book has hilarious stick drawings on every page.", zh: "這本書每頁都有非常好笑的火柴人插畫。" }] },
  { id: 3381, word: "cry with laughter", pos: "phr.", zh: "笑到流淚", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "This book actually made me cry with laughter.", zh: "這本書真的讓我笑到流淚。" }] },
  { id: 3382, word: "audio book", pos: "n.", zh: "有聲書", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Let your children listen to audio books if you don't have time to read aloud.", zh: "沒時間朗讀就讓孩子聽有聲書。" }] },
  { id: 3383, word: "librarian", pos: "n.", zh: "圖書館員", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Librarians can recommend new authors and genres.", zh: "圖書館員可以推薦新作者和類型。" }] },
  { id: 3384, word: "genre", pos: "n.", zh: "類型、文體", level: 6, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "Children often read the same genre all the time.", zh: "孩子常一直讀同一類型的書。" }] },
  { id: 3385, word: "distraction", pos: "n.", zh: "分心的事物", level: 5, category: "聽力兒童閱讀", source: "聽力 C19T3P2 兒童書展", examples: [{ en: "There are so many distractions for kids these days.", zh: "現在孩子面對的誘惑太多了。" }] },

  // === 閱讀 C20T2P2 拖延症 ===
  { id: 3386, word: "procrastination", pos: "n.", zh: "拖延", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastination is the habit of delaying a necessary task.", zh: "拖延是把必要任務延後的習慣。" }] },
  { id: 3387, word: "procrastinate", pos: "v.", zh: "拖延", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "We all procrastinate from time to time.", zh: "我們都會時不時地拖延。" }] },
  { id: 3388, word: "put off", pos: "phr.v.", zh: "拖延、延後", level: 4, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "We're more likely to put off tasks that make us anxious.", zh: "讓我們焦慮的任務我們更容易拖延。" }] },
  { id: 3389, word: "berate", pos: "v.", zh: "責備、訓斥", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Berating ourselves won't stop us procrastinating again.", zh: "責備自己無法阻止我們再次拖延。" }] },
  { id: 3390, word: "contrary to popular belief", pos: "phr.", zh: "與大眾觀念相反", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Contrary to popular belief, procrastination is not due to laziness.", zh: "與大眾觀念相反，拖延並非因為懶惰。" }] },
  { id: 3391, word: "false assumption", pos: "n.", zh: "錯誤假設", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "The article corrects false assumptions about why people procrastinate.", zh: "文章修正了人們為何拖延的錯誤假設。" }] },
  { id: 3392, word: "mood management", pos: "n.", zh: "情緒管理", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastination is caused by poor mood management.", zh: "拖延是由情緒管理不佳所引起的。" }] },
  { id: 3393, word: "mood repair", pos: "n.", zh: "情緒修復", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "The 'mood repair' we experience through procrastination is temporary.", zh: "拖延帶來的「情緒修復」只是暫時的。" }] },
  { id: 3394, word: "self-esteem", pos: "n.", zh: "自尊", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Difficult tasks can damage our self-esteem.", zh: "困難的任務可能損害我們的自尊。" }] },
  { id: 3395, word: "self-worth", pos: "n.", zh: "自我價值感", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Thinking about the task threatens our sense of self-worth.", zh: "想到任務會威脅我們的自我價值感。" }] },
  { id: 3396, word: "anxious", pos: "adj.", zh: "焦慮的", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Difficult tasks make us anxious, so we put them off.", zh: "困難的任務讓我們焦慮，所以我們拖延。" }] },
  { id: 3397, word: "perfectionist", pos: "n.", zh: "完美主義者（拼字 ct 不是 vt）", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Perfectionists tend to procrastinate because they worry about harsh judgement.", zh: "完美主義者傾向拖延，因為他們擔心受到嚴厲評斷。" }] },
  { id: 3398, word: "guilt", pos: "n.", zh: "罪惡感", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastinators are often left with a sense of guilt.", zh: "拖延者常被罪惡感纏繞。" }] },
  { id: 3399, word: "vicious cycle", pos: "n.", zh: "惡性循環", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Finding better emotion management is one route out of the vicious cycle.", zh: "更好的情緒管理是擺脫惡性循環的一條路。" }] },
  { id: 3400, word: "reinforce", pos: "v.", zh: "強化", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Guilt reinforces their tendency to procrastinate.", zh: "罪惡感強化了他們拖延的傾向。" }] },
  { id: 3401, word: "overly critical", pos: "adj.", zh: "過度自我批判的", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "We should admit we feel bad, but not be overly critical of ourselves.", zh: "我們可以承認難過，但不該過度自我批判。" }] },
  { id: 3402, word: "compassion", pos: "n.", zh: "同情、慈悲", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Feeling compassion for ourselves can help break the procrastination cycle.", zh: "對自己懷有同情有助於打破拖延循環。" }] },
  { id: 3403, word: "fend off", pos: "phr.v.", zh: "抵擋、擋開", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Evidence-based strategies can help us fend off distractions.", zh: "有實證的策略能幫助我們抵擋干擾。" }] },
  { id: 3404, word: "get back on track", pos: "phr.", zh: "回到正軌", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "This can make it easier to get back on track.", zh: "這能讓我們更容易回到正軌。" }] },
  { id: 3405, word: "neurological", pos: "adj.", zh: "神經學的", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "There is neurological evidence linking procrastination and emotion.", zh: "有神經學證據連結拖延與情緒。" }] },
  { id: 3406, word: "brain imaging", pos: "n.", zh: "腦部影像", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Research involving brain imaging found differences in chronic procrastinators.", zh: "腦部影像研究發現長期拖延者有差異。" }] },
  { id: 3407, word: "detection of threats", pos: "phr.", zh: "偵測威脅", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Areas of the brain linked to detection of threats differ between procrastinators.", zh: "與威脅偵測相關的腦區在拖延者身上有差異。" }] },
  { id: 3408, word: "emotion regulation", pos: "n.", zh: "情緒調節", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Emotion regulation is different in chronic procrastinators.", zh: "長期拖延者的情緒調節能力有差異。" }] },
  { id: 3409, word: "evidence-based", pos: "adj.", zh: "有實證根據的", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "There are evidence-based strategies for managing procrastination.", zh: "有實證根據的策略可以管理拖延。" }] },
  { id: 3410, word: "correlate with", pos: "v.phr.", zh: "與……相關", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastination correlates with serious health problems.", zh: "拖延與嚴重的健康問題相關。" }] },
  { id: 3411, word: "chronic", pos: "adj.", zh: "慢性的、長期的", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Chronic procrastinators show different brain patterns.", zh: "長期拖延者顯示不同的腦部模式。" }] },
  { id: 3412, word: "demographics", pos: "n.", zh: "人口統計特徵", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "The result holds after accounting for personality traits and demographics.", zh: "排除人格特質與人口統計後結果仍成立。" }] },
  { id: 3413, word: "misconduct", pos: "n.", zh: "不當行為", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastinators were more likely to engage in study-related misconduct.", zh: "拖延者更可能涉及與學業相關的不當行為。" }] },
  { id: 3414, word: "plagiarism", pos: "n.", zh: "抄襲", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Cheating and plagiarism are study-related misconduct.", zh: "作弊與抄襲屬於學業相關的不當行為。" }] },
  { id: 3415, word: "fraudulent", pos: "adj.", zh: "詐欺的", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "They used fraudulent excuses to get deadline extensions.", zh: "他們用詐欺的藉口取得截止日延期。" }] },
  { id: 3416, word: "annual income", pos: "n.", zh: "年收入", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Regular procrastinators had less annual income.", zh: "經常拖延者的年收入較低。" }] },
  { id: 3417, word: "employment stability", pos: "n.", zh: "就業穩定性", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "Procrastinators had less employment stability.", zh: "拖延者的就業穩定性較差。" }] },
  { id: 3418, word: "toll", pos: "n.", zh: "損害、代價", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "People think of procrastination's toll on productivity.", zh: "人們想到拖延對生產力造成的損害。" }] },
  { id: 3419, word: "prone to", pos: "adj.phr.", zh: "易於……的", level: 6, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "People prone to procrastination had a 63% greater risk of poor heart health.", zh: "易於拖延的人心臟健康風險增加 63%。" }] },
  { id: 3420, word: "coping strategies", pos: "n.", zh: "應對策略", level: 5, category: "閱讀心理", source: "閱讀 C20T2P2 拖延症", examples: [{ en: "They use destructive coping strategies to manage stress.", zh: "他們用具破壞性的應對策略來處理壓力。" }] },

  // === 雅思核心字（2026-05-21 自選 60 字）===
  { id: 3421, word: "earnest", pos: "adj.", zh: "認真的、堅決的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Matthews was in earnest conversation with a young girl.", zh: "馬修斯正在和一名年輕女子認真地交談。" }] },
  { id: 3422, word: "adolescence", pos: "n.", zh: "青春、青春期", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Some young people become self-conscious in early adolescence.", zh: "有些年輕人在青春期早期會突然變得害羞。" }] },
  { id: 3423, word: "grave", pos: "adj./n.", zh: "嚴重的；墳墓", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Matthew's life is in grave danger.", zh: "馬修的生命處在嚴重危險中。" }] },
  { id: 3424, word: "intrigue", pos: "v./n.", zh: "激起興趣；陰謀", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Other people's houses always intrigued her.", zh: "別人的房子總讓她感到好奇。" }] },
  { id: 3425, word: "stipulate", pos: "v.", zh: "規定、約定", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Laws stipulate the maximum interest rate that banks can charge.", zh: "法律規定銀行可以收取的最高利率。" }] },
  { id: 3426, word: "eradicate", pos: "v.", zh: "根除、消除", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "This problem has now been completely eradicated.", zh: "這個問題現在已經徹底根除。" }] },
  { id: 3427, word: "delirium", pos: "n.", zh: "神智昏迷；極度興奮", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Before she died she had fits of delirium.", zh: "她去世前一陣陣地胡言亂語。" }] },
  { id: 3428, word: "pole", pos: "n.", zh: "極（地理／物理）", level: 4, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "the distance from pole to equator", zh: "從極到赤道的距離" }] },
  { id: 3429, word: "herd", pos: "n./v.", zh: "獸群、牧口群；把趕到一起", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Stefano used a motorcycle to herd the sheep.", zh: "斯特凡諾騎一輛摩托車趕羊群。" }] },
  { id: 3430, word: "stitch", pos: "n.", zh: "縫紉；縫線；（劇烈）刺痛", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "He had to have ten stitches in his head.", zh: "他頭上不得不縫了十針。" }] },
  { id: 3431, word: "slag", pos: "n.", zh: "礦渣、爐渣、熔渣", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Steel slag is a waste material from metal production.", zh: "鋼渣是金屬生產的廢料。" }] },
  { id: 3432, word: "clash", pos: "v./n.", zh: "衝突、抵觸；金屬碰撞聲", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Troops clashed near the border.", zh: "軍隊在邊境附近發生衝突。" }] },
  { id: 3433, word: "strap", pos: "n./v.", zh: "皮帶、帶；用帶束住", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The strap of my bag is broken.", zh: "我包上的帶子斷了。" }] },
  { id: 3434, word: "trench", pos: "n.", zh: "地溝、戰壕", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Workers dug a trench for gas lines.", zh: "工人們挖了一條溝來鋪設煤氣管道。" }] },
  { id: 3435, word: "vain", pos: "adj.", zh: "徒勞的、無效的；自負的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Men can be just as vain as women.", zh: "男人也可以和女人一樣自負。" }] },
  { id: 3436, word: "exempt", pos: "v./adj.", zh: "免除、被豁免的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The new rules exempt the user from legal liability.", zh: "新規定讓使用者免除法律責任。" }] },
  { id: 3437, word: "dwell", pos: "v.", zh: "居住；詳述", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "They dwelt in the forest.", zh: "他們住在森林裡。" }] },
  { id: 3438, word: "misgiving", pos: "n.", zh: "懷疑、疑慮", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Opponents of nuclear energy have deep misgivings about its safety.", zh: "反核能人士對其安全性深感疑慮。" }] },
  { id: 3439, word: "vex", pos: "v.", zh: "使煩惱、使苦惱", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "It vexed me to think of others gossiping behind my back.", zh: "想到別人在我背後說閒話讓我很煩心。" }] },
  { id: 3440, word: "sue", pos: "v.", zh: "控訴、控告、請求", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "If the builders don't fulfil the contract, we'll sue.", zh: "如果建商不履行合同，我們就提起訴訟。" }] },
  { id: 3441, word: "haphazard", pos: "adj./adv.", zh: "雜亂的、任意的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The words were put together in a sort of haphazard way.", zh: "這些字以某種雜亂的方式被組合起來。" }] },
  { id: 3442, word: "allot", pos: "v.", zh: "分配、撥給", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The seats are allotted to the candidates with the most votes.", zh: "席位分配給得票最多的候選人。" }] },
  { id: 3443, word: "psychiatry", pos: "n.", zh: "精神病學", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Psychiatry is a branch of medical science.", zh: "精神病學是醫學的一個分支。" }] },
  { id: 3444, word: "posture", pos: "n.", zh: "姿勢、姿態、態度", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "her upright posture", zh: "她筆挺的姿勢" }] },
  { id: 3445, word: "perception", pos: "n.", zh: "感覺、知覺", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "What do you think their perception will be?", zh: "你覺得他們的知覺會是怎樣的？" }] },
  { id: 3446, word: "paranoia", pos: "n.", zh: "偏執狂、妄想狂", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "They capitalize on panic and paranoia.", zh: "他們利用恐慌和偏執狂。" }] },
  { id: 3447, word: "alongside", pos: "adv./prep.", zh: "在旁、靠近", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "We use the whiteboards alongside one of the walls.", zh: "我們用沿著其中一面牆的白色書寫板。" }] },
  { id: 3448, word: "canteen", pos: "n.", zh: "食堂、小賣部、餐具箱、水壺", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Rennie had eaten his supper in the canteen.", zh: "Rennie 已在食堂吃過晚飯。" }] },
  { id: 3449, word: "supreme", pos: "adj.", zh: "最高的、最大的、最重要的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "the Supreme Allied Commander in Europe", zh: "歐洲盟軍最高指揮官" }] },
  { id: 3450, word: "reasonable", pos: "adj.", zh: "明智的、合理的、公平的", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "a reasonable request", zh: "合情合理的要求" }] },
  { id: 3451, word: "naught", pos: "n.", zh: "無、零", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "All our efforts came to naught.", zh: "我們所有的努力都失敗了。" }] },
  { id: 3452, word: "cushion", pos: "n./v.", zh: "墊子、坐墊；緩衝", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "a velvet cushion", zh: "天鵝絨墊子" }] },
  { id: 3453, word: "mimic", pos: "adj./v.", zh: "假裝的、模仿的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "mimic warfare", zh: "模擬戰爭" }] },
  { id: 3454, word: "vicinity", pos: "n.", zh: "鄰近、附近", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The stolen car was found in the vicinity of the station.", zh: "失竊的汽車在車站附近被找到。" }] },
  { id: 3455, word: "toss", pos: "v./n.", zh: "扔、拋；搖擺", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Toss the carrots in some butter before serving.", zh: "上桌前把胡蘿蔔下放在黃油裡攪拌一下。" }] },
  { id: 3456, word: "shred", pos: "n./v.", zh: "碎片；撕碎", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Cut the cabbage into fine long shreds.", zh: "把這捲心菜切成細長條。" }] },
  { id: 3457, word: "disperse", pos: "v.", zh: "（使）散開、使疏散", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Police used tear gas to disperse the crowd.", zh: "警察用催淚瓦斯驅散人群。" }] },
  { id: 3458, word: "edition", pos: "n.", zh: "版本、版次", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "a paperback edition", zh: "平裝本" }] },
  { id: 3459, word: "fetter", pos: "n./v.", zh: "腳鐐；束縛", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "fettered by family responsibilities", zh: "受家庭責任的束縛" }] },
  { id: 3460, word: "renaissance", pos: "n.", zh: "文藝復興；復興、勃發", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "the Renaissance masterpieces in London's galleries", zh: "倫敦美術館裡的文藝復興時期傑作" }] },
  { id: 3461, word: "proceeding", pos: "n.", zh: "程序、進程；訴訟", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "John is taking legal proceedings against his ex-partner.", zh: "John 正在對他的前合夥人提起法律訴訟。" }] },
  { id: 3462, word: "abridge", pos: "v.", zh: "（書等）刪節", level: 7, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "A book publisher may alter or abridge a work with permission.", zh: "圖書出版商在獲得許可後可以修改或刪節作品。" }] },
  { id: 3463, word: "dome", pos: "n.", zh: "圓屋頂", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "the dome of the Capitol", zh: "國會大廈的穹頂" }] },
  { id: 3464, word: "reckon", pos: "v.", zh: "計算、估計、認為", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The expression 'full moon' means the day the moon is reckoned from its first appearance.", zh: "「滿月」指從新月初現算起的第 14 天。" }] },
  { id: 3465, word: "rarely", pos: "adv.", zh: "非常地、難得、很少", level: 4, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "He rarely speaks in public.", zh: "他很少在公開場合發言。" }] },
  { id: 3466, word: "imitation", pos: "n.", zh: "模仿、仿造、仿製品", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The remake of 'Casablanca' was a pale imitation.", zh: "《卡薩布蘭加》的翻拍版只是個蒼白的仿製。" }] },
  { id: 3467, word: "steward", pos: "n.", zh: "乘務員、服務員、組織者", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "race stewards", zh: "比賽組織者" }] },
  { id: 3468, word: "abound", pos: "v.", zh: "多、富於", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Rumors of such coordination abound.", zh: "關於這類協調的傳言很多。" }] },
  { id: 3469, word: "colonial", pos: "adj.", zh: "殖民地的", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "the struggle against colonial rule", zh: "反抗殖民統治的鬥爭" }] },
  { id: 3470, word: "immense", pos: "adj.", zh: "廣大的、巨大的", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "People who travel by rail still read an immense amount.", zh: "搭火車旅行的人們仍然閱讀很多。" }] },
  { id: 3471, word: "placard", pos: "n.", zh: "招貼、布告", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "a huge placard saying 'Welcome to Derbyville'", zh: "印有「歡迎來到德比維爾」的巨幅標語牌" }] },
  { id: 3472, word: "flavour", pos: "n./v.", zh: "味、風味、調味、特點", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Which flavour do you want — chocolate or vanilla?", zh: "你要哪種味道的，巧克力還是香草？" }] },
  { id: 3473, word: "exchange", pos: "v./n.", zh: "交換、兌換", level: 4, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Four of my cassettes for your Madonna CD is a fair exchange.", zh: "拿我四盒卡帶換你的瑪丹娜光碟很公平。" }] },
  { id: 3474, word: "pamphlet", pos: "n.", zh: "小冊子", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "a political pamphlet", zh: "政治宣傳冊" }] },
  { id: 3475, word: "module", pos: "n.", zh: "量度單位、模組", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "You choose five modules in the first year.", zh: "第一年你要選五門課程。" }] },
  { id: 3476, word: "gentle", pos: "adj.", zh: "文雅的、有禮貌的、溫柔的", level: 4, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Arthur was a very gentle, caring person.", zh: "阿瑟是一個非常溫柔體貼的人。" }] },
  { id: 3477, word: "annoy", pos: "v.", zh: "使煩惱、使生氣", level: 4, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "What annoyed him most was that he had received no apology.", zh: "最令他生氣的是他沒收到道歉。" }] },
  { id: 3478, word: "luminous", pos: "adj.", zh: "發光的、發亮的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "Her large dark eyes were almost luminous.", zh: "她那雙黑色的大眼睛幾乎是閃閃發光的。" }] },
  { id: 3479, word: "exclaim", pos: "v.", zh: "呼叫、驚叫", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "'No!' she exclaimed in shock.", zh: "「不！」她震驚地喊道。" }] },
  { id: 3480, word: "pertinent", pos: "adj.", zh: "貼切的、中肯的", level: 6, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "He asked me a lot of very pertinent questions.", zh: "他問了我許多非常切中要點的問題。" }] },
  { id: 3481, word: "certify", pos: "v.", zh: "（發給證書）證明", level: 5, category: "雅思核心", source: "雅思核心 2026-05-21", examples: [{ en: "The accounts were certified by an auditor.", zh: "這些帳目經審計員核實。" }] },

  // === 聽力 C19T3P3 科學實驗設計 ===
  { id: 3482, word: "practical teaching", pos: "n.", zh: "實踐教學", level: 5, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "How are you getting on with the practical teaching?", zh: "你的實踐教學進展如何？" }] },
  { id: 3483, word: "struggle with", pos: "v.phr.", zh: "苦於、難以應付", level: 5, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "I'm really struggling with my Year 12 science class.", zh: "12 年級的科學課讓我很吃力。" }] },
  { id: 3484, word: "confidentiality", pos: "n.", zh: "保密性", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "Confidentiality would be an issue with medical records.", zh: "醫療記錄的保密性會是個問題。" }] },
  { id: 3485, word: "food supplement", pos: "n.", zh: "食物補充劑", level: 5, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "We could look at food supplements like extra iron and protein.", zh: "我們可以研究像鐵和蛋白質這類食物補充劑。" }] },
  { id: 3486, word: "specially bred", pos: "adj.", zh: "專門培育的", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "Experimental mice are specially bred for experiments.", zh: "實驗鼠是專門為實驗培育的。" }] },
  { id: 3487, word: "food intake", pos: "n.", zh: "食物攝取量", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "The experiment looks at whether mice can control their food intake.", zh: "實驗看老鼠能否控制自己的食物攝取量。" }] },
  { id: 3488, word: "control group", pos: "n.", zh: "對照組", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "Group A would be the control group.", zh: "A 組是對照組。" }] },
  { id: 3489, word: "food colouring", pos: "n.", zh: "食用色素", level: 5, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "You could use food colouring to tag the mice.", zh: "你可以用食用色素標記老鼠。" }] },
  { id: 3490, word: "weighing chamber", pos: "n.", zh: "稱重艙", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "Place them in a weighing chamber to stop the mice from running away.", zh: "把牠們放進稱重艙以防老鼠跑走。" }] },
  { id: 3491, word: "weight gain", pos: "n.", zh: "體重增加", level: 5, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "We measured the weight gain of each mouse.", zh: "我們量了每隻老鼠的體重增加量。" }] },
  { id: 3492, word: "standard deviation", pos: "n.", zh: "標準差", level: 7, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "We work out the average and the standard deviation.", zh: "我們算出平均值和標準差。" }] },
  { id: 3493, word: "variable", pos: "n.", zh: "變項、變量", level: 6, category: "聽力科學", source: "聽力 C19T3P3 實驗設計", examples: [{ en: "You could do a follow-up experiment adding another variable.", zh: "你可以做後續實驗加入另一個變項。" }] },

  // === 閱讀 C20T2P3 機器人裁判 ===
  { id: 3494, word: "umpire", pos: "n.", zh: "裁判（棒球／網球）", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "DeJesus became the first umpire to use ABS.", zh: "DeJesus 成為第一個使用 ABS 的裁判。" }] },
  { id: 3495, word: "strike zone", pos: "n.", zh: "好球帶", level: 5, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "A ball that passes through the strike zone is considered a strike.", zh: "穿越好球帶的球被視為好球。" }] },
  { id: 3496, word: "judgment call", pos: "n.", zh: "主觀判決", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "Calling a strike was previously a judgment call by the umpire.", zh: "判好球以前是裁判的主觀判決。" }] },
  { id: 3497, word: "commission", pos: "v.", zh: "委託", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "MLB commissioned the new system.", zh: "MLB 委託了這套新系統。" }] },
  { id: 3498, word: "contraption", pos: "n.", zh: "奇特裝置", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "The contraption looked like a large black pizza box.", zh: "這個裝置看起來像一個又大又黑的披薩盒。" }] },
  { id: 3499, word: "heckling", pos: "n.", zh: "起哄、喝倒采", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "There was no heckling when DeJesus announced the calls.", zh: "DeJesus 宣布判決時沒有人起哄。" }] },
  { id: 3500, word: "tweak", pos: "v.", zh: "微調", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "MLB decided to tweak the dimensions of the zone.", zh: "MLB 決定微調好球帶的尺寸。" }] },
  { id: 3501, word: "amend", pos: "v.", zh: "修改、修訂", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "They had to amend the size of the strike zone.", zh: "他們得修改好球帶的尺寸。" }] },
  { id: 3502, word: "dimensions", pos: "n.", zh: "尺寸、規模", level: 5, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "MLB tweaked the dimensions of the zone.", zh: "MLB 微調了好球帶的尺寸。" }] },
  { id: 3503, word: "consensus", pos: "n.", zh: "共識", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "The consensus was that ABS is profoundly consistent.", zh: "共識是 ABS 非常一致。" }] },
  { id: 3504, word: "profoundly", pos: "adv.", zh: "極為地、深刻地", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS is profoundly consistent.", zh: "ABS 非常一致。" }] },
  { id: 3505, word: "algorithm", pos: "n.", zh: "演算法", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "This is part of a movement to use algorithms to take the hard choices out of life.", zh: "這是用演算法把生活中的艱難選擇拿掉的一部分。" }] },
  { id: 3506, word: "discretion", pos: "n.", zh: "自由裁量、主觀判斷空間", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "Historically, a certain discretion has been appreciated in sports.", zh: "歷史上，運動中的某種主觀裁量是被珍視的。" }] },
  { id: 3507, word: "controversy", pos: "n.", zh: "爭議", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS will reduce controversy in the game.", zh: "ABS 會減少場上的爭議。" }] },
  { id: 3508, word: "unforgiving", pos: "adj.", zh: "嚴苛、不寬容的", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS is unforgiving and pedantic.", zh: "ABS 既嚴苛又拘泥細節。" }] },
  { id: 3509, word: "pedantic", pos: "adj.", zh: "拘泥細節的、學究的", level: 7, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS is unforgiving and pedantic, almost legalistic.", zh: "ABS 既嚴苛又拘泥細節，幾乎像律師。" }] },
  { id: 3510, word: "dissenting", pos: "adj.", zh: "持異議的", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "Some players share a dissenting stance toward the robots.", zh: "一些球員對機器人持異議的立場。" }] },
  { id: 3511, word: "stance", pos: "n.", zh: "立場、態度", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "Players have a dissenting stance toward the robots.", zh: "球員對機器人持異議的立場。" }] },
  { id: 3512, word: "terrified of", pos: "adj.phr.", zh: "害怕……的", level: 5, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "Executives are terrified of losing younger fans.", zh: "高層怕失去年輕球迷。" }] },
  { id: 3513, word: "ruled out", pos: "phr.v.", zh: "排除（可能性）", level: 5, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "These fixes were ruled out as potential solutions.", zh: "這些方案被排除作為潛在解法。" }] },
  { id: 3514, word: "flatten", pos: "v.", zh: "（比喻）變得單調", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "The fastball flattened the game into strikeouts and home runs.", zh: "快速球讓比賽變得只剩三振和全壘打。" }] },
  { id: 3515, word: "retain", pos: "v.", zh: "保留、維持", level: 5, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS was an attempt to retain a young audience.", zh: "ABS 是嘗試留住年輕觀眾的方法。" }] },
  { id: 3516, word: "feasible", pos: "adj.", zh: "可行的", level: 6, category: "閱讀體育科技", source: "閱讀 C20T2P3 機器人裁判", examples: [{ en: "ABS makes changes to the shape of the strike zone feasible.", zh: "ABS 讓改變好球帶形狀變得可行。" }] }
];

const CATEGORIES = [...new Set(VOCAB.map(v => v.category))].sort();
const SOURCES = [...new Set(VOCAB.map(v => v.source.split(' ')[0]))].sort();
