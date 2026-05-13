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
  { id: 1173, word: "register", pos: "v./n.", zh: "登記、註冊", level: 5, category: "AWL SL3", source: "AWL SL3", purpose: "passive", examples: [{ en: "Students must register online.", zh: "學生必須在線上登記。" }] }
];

const CATEGORIES = [...new Set(VOCAB.map(v => v.category))].sort();
const SOURCES = [...new Set(VOCAB.map(v => v.source.split(' ')[0]))].sort();
