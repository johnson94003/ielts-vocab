// 雅思口說 Task 1 練習資料庫
// 結構：{ id, topic, question, zh(我的中文), concise(精簡版), extended(加長版),
//        frames:[{en,zh}], usage:[{zh,en,note}], pron:[{word,ipa,tip}] }

const SPEAKING = [
  {
    id: 1,
    topic: "工作",
    question: "Do you work or are you a student?",
    zh: "我現在獨立工作，職業是營養師。平常主要協助他人透過飲食達成目標（提升運動表現、增肌、減脂）。我非常喜歡這份工作，因為飲食可以帶給大家各式各樣的改變。",
    concise: "I work for myself as a nutritionist. Basically, I help people reach their goals through their diet — things like improving their sports performance, building muscle, or losing fat.",
    extended: "I really enjoy it, to be honest, because I've seen how the right food can make all kinds of difference to people.",
    frames: [
      { en: "I work for myself as a ___", zh: "自雇職業開場" },
      { en: "things like A, B, or C", zh: "列舉，比 firstly/secondly 自然" },
      { en: "make all kinds of difference to ___", zh: "帶來各種改變" },
      { en: "Basically / to be honest", zh: "緩衝詞" }
    ],
    usage: [
      { zh: "獨立工作", en: "I work for myself / I'm self-employed", note: "不要用 work independently，英文怪" },
      { zh: "透過飲食", en: "through their diet", note: "diet 這裡＝飲食，不是節食" },
      { zh: "增肌減脂", en: "building muscle / losing fat", note: "健身圈自然講法" }
    ],
    pron: [
      { word: "nutritionist", ipa: "/njuˈtrɪʃənɪst/", tip: "重音在 tri" },
      { word: "muscle", ipa: "/ˈmʌsl/", tip: "唸 mass-l，c 不發音" }
    ]
  },
  {
    id: 2,
    topic: "職業動機",
    question: "Why did you choose to become a nutritionist?",
    zh: "以前很喜歡運動，加上網路上有很多討論運動與營養關係的影片，便決定認真學習。投入後才發現營養能幫助這麼多人；也注意到網路上很多知識缺乏科學根據，容易誤導大眾。這更讓我決心做好這份工作。",
    concise: "Well, I've always been into sport, and I used to watch a lot of online videos about how exercise and nutrition are connected — so I decided to study it properly. Once I got into the job, I realised just how much nutrition can help people.",
    extended: "At the same time, I noticed that a lot of the information online isn't really backed by science and can mislead people — and to be honest, that's what made me even more determined to do this well.",
    frames: [
      { en: "I've always been into ___", zh: "一直熱衷於…" },
      { en: "so I decided to ___", zh: "所以我決定…" },
      { en: "Once I got into ___, I realised ___", zh: "投入後才發現…" },
      { en: "that's what made me determined to ___", zh: "這讓我下定決心…" }
    ],
    usage: [
      { zh: "認真學習", en: "study it properly", note: "也可 study it seriously" },
      { zh: "投入這份工作後", en: "Once I got into the job", note: "get into ＝ 投入/開始做" },
      { zh: "缺乏科學根據", en: "isn't backed by science", note: "backed by science ＝ 有科學支持" },
      { zh: "造成誤解", en: "mislead people", note: "動詞，誤導" }
    ],
    pron: [
      { word: "determined", ipa: "/dɪˈtɜːmɪnd/", tip: "重音在 ter" },
      { word: "science", ipa: "/ˈsaɪəns/", tip: "sai-əns" }
    ]
  },
  {
    id: 3,
    topic: "空閒",
    question: "What do you do in your free time?",
    zh: "除了工作以外，最喜歡的是鐵人三項訓練。每天早上第一件事就是暖身、去跑步；下午或晚上再選游泳或單車。就連出去玩都會安排訓練，除非累到動不了才休息。",
    concise: "Apart from work, my favourite thing is definitely triathlon training. The first thing I do every morning is warm up and go for a run, and then later in the day — usually the afternoon or evening — I'll do either swimming or cycling.",
    extended: "I'm pretty serious about it, to be honest — even when I go away somewhere, I still fit in some training. The only exception is when I'm completely worn out; that's the only time I'll rest.",
    frames: [
      { en: "Apart from ___, my favourite thing is ___", zh: "除了…，我最愛…" },
      { en: "The first thing I do every morning is ___", zh: "每天早上第一件事…" },
      { en: "fit in some ___", zh: "忙碌中擠出時間做…" },
      { en: "The only exception is when ___", zh: "唯一例外是當…" }
    ],
    usage: [
      { zh: "去跑步", en: "go for a run", note: "不是 do running" },
      { zh: "安排運動", en: "fit in some training", note: "fit in ＝ 擠出時間做" },
      { zh: "累到動不了", en: "completely worn out", note: "比 tired 強" }
    ],
    pron: [
      { word: "triathlon", ipa: "/traɪˈæθlɒn/", tip: "重音 a（tri-A-thlon）" },
      { word: "worn out", ipa: "", tip: "連讀 worn-out" }
    ]
  },
  {
    id: 4,
    topic: "住處",
    question: "Where are you living now? Do you live in a house or a flat?",
    zh: "住在台灣新北市，目前和家人住在華廈。很喜歡這裡，因為生活機能方便，便利商店多、交通便利、生活資源充沛。",
    concise: "I'm currently living in New Taipei City with my family, in a mid-rise apartment. I really like it here, mainly because everything's so handy — there are convenience stores everywhere and the transport links are great, so pretty much everything I need is within easy reach.",
    extended: "I'd say it's a really easy place to live, and I don't think I'd want to move anytime soon.",
    frames: [
      { en: "I'm currently living in ___ with ___", zh: "現在住哪、跟誰" },
      { en: "mainly because ___", zh: "主要因為…" },
      { en: "the transport links are great", zh: "交通方便的道地講法" },
      { en: "everything is within easy reach", zh: "生活機能好" }
    ],
    usage: [
      { zh: "華廈", en: "a mid-rise apartment", note: "台灣特有詞，講 apartment / a flat 即可" },
      { zh: "方便（別重複 convenient）", en: "handy / well-connected / within easy reach", note: "三種換著用" },
      { zh: "pretty much", en: "幾乎、差不多", note: "緩衝詞，唸快輕帶過；pretty 此處＝相當，不是漂亮" }
    ],
    pron: [
      { word: "convenient", ipa: "/kənˈviːniənt/", tip: "重音在 ve" },
      { word: "apartment", ipa: "/əˈpɑːtmənt/", tip: "重音在 part" }
    ]
  },
  {
    id: 5,
    topic: "未來計畫",
    question: "Do you have any plans for the future?",
    zh: "下一步計畫是出國讀書，因為想了解國外運動科學的發展，並更接近專業運動員。所以現在從最一開始的英文雅思開始準備。",
    concise: "I'm actually planning to study abroad. What I'd really like to do is learn how sports science is developing in other countries, and ideally work more closely with professional athletes.",
    extended: "That's why I'm currently starting from square one — getting my English up to speed by preparing for IELTS.",
    frames: [
      { en: "I'm actually planning to ___", zh: "我其實打算…" },
      { en: "What I'd really like to do is ___", zh: "我真正想做的是…（重點後推，高分句型）" },
      { en: "That's why I'm currently ___", zh: "這就是為什麼我現在正在…" },
      { en: "start from square one", zh: "從頭開始" }
    ],
    usage: [
      { zh: "出國讀書", en: "study abroad", note: "" },
      { zh: "更接近專業運動員", en: "work more closely with professional athletes", note: "比 get closer to 更有目的性" },
      { zh: "讓英文達到水準", en: "get my English up to speed", note: "get+受詞+up to speed ＝ 使役，把…催到該有水準" }
    ],
    pron: [
      { word: "athletes", ipa: "/ˈæθliːts/", tip: "⚠️ 只有兩音節 ATH-leets，不是三音節" },
      { word: "professional", ipa: "/prəˈfeʃənl/", tip: "重音在 fe" }
    ]
  },
  {
    id: 6,
    topic: "家鄉",
    question: "Where are you from? / Tell me about your hometown.",
    zh: "我是台灣人，住在台北，台灣的首都。最喜歡這邊的人都很友善、親切。還有全台最高的 101 大樓。",
    concise: "I'm from Taiwan, and I live in Taipei, which is the capital. What I like most about it is the people — they're really friendly and welcoming. It's also home to Taipei 101, which used to be the tallest building in the world.",
    extended: "It's a pretty lively city, to be honest. There's always something going on, and pretty much everything you need is close by.",
    frames: [
      { en: "I'm from ___, and I live in ___, which is ___", zh: "國家＋城市＋補充，一句串起來" },
      { en: "What I like most about it is ___", zh: "最喜歡的點" },
      { en: "It's home to ___", zh: "這裡有〔某地標〕，比 there is 高級" },
      { en: "There's always something going on", zh: "總是很熱鬧" }
    ],
    usage: [
      { zh: "友善又親切", en: "friendly and welcoming", note: "welcoming ＝ 讓人感覺被歡迎；別重複 friendly" },
      { zh: "全台最高的 101", en: "used to be the tallest building in the world", note: "比「全台最高」更有亮點" },
      { zh: "這裡有 101", en: "It's home to Taipei 101", note: "be home to ＝ 某地擁有某物" }
    ],
    pron: [
      { word: "capital", ipa: "/ˈkæpɪtl/", tip: "KAP-i-tl，重音第一" },
      { word: "welcoming", ipa: "/ˈwelkəmɪŋ/", tip: "WEL-kə-ming 三音節" }
    ]
  },
  {
    id: 7,
    topic: "飲食",
    question: "Do you enjoy cooking? / What kind of food do you like?",
    zh: "非常喜歡煮飯，尤其中式料理，因為調味很豐富，像蝦仁炒飯這種。而且因為我是營養師，所以可以搭配不同的營養素。",
    concise: "Yeah, I'm really into cooking, especially Chinese food, mainly because the flavours are so rich — something like shrimp fried rice, for example. And since I'm a nutritionist, I tend to balance the different nutrients when I cook, so the meals are tasty but still healthy.",
    extended: "I actually find it quite relaxing, and it's nice to know exactly what's going into my food.",
    frames: [
      { en: "I'm really into ___", zh: "我很喜歡…，講興趣萬用句" },
      { en: "something like ___, for example", zh: "舉例，自然不生硬" },
      { en: "since I'm a ___, I tend to ___", zh: "身為…，我通常會…（自然帶出職業）" },
      { en: "tasty but still healthy", zh: "好吃又健康，對比結構" }
    ],
    usage: [
      { zh: "調味豐富", en: "the flavours are so rich", note: "rich ＝ 濃郁豐富" },
      { zh: "搭配不同營養素", en: "balance the different nutrients", note: "balance ＝ 調配，比 match nutrients 自然" },
      { zh: "因為我是營養師", en: "since I'm a nutritionist", note: "since＝因為，跟 because 換著用" }
    ],
    pron: [
      { word: "flavours", ipa: "/ˈfleɪvəz/", tip: "FLAY-vəz，長音 a" },
      { word: "nutrients", ipa: "/ˈnjuːtriənts/", tip: "NEW-tri-ənts 三音節" }
    ]
  },
  {
    id: 8,
    topic: "運動",
    question: "Do you do any sport or exercise?",
    zh: "太喜歡鐵人三項，每週大概訓練 10-15 小時。起初是受極限鐵人三項影片影響，想獨立完成這件事，享受的是進步的過程。",
    concise: "I'm really into triathlon — I train around 10 to 15 hours a week. It actually started when I came across some videos of extreme triathlons, and I really wanted to take on that kind of challenge myself. What I love most about it is the sense of progress.",
    extended: "It's a great way to push myself, and there's always something to work on, whether it's swimming, cycling or running.",
    frames: [
      { en: "I train around ___ hours a week", zh: "一週練幾小時" },
      { en: "It actually started when ___", zh: "起初是因為…" },
      { en: "I came across ___", zh: "偶然看到…" },
      { en: "What I love most about it is ___", zh: "最愛的點" }
    ],
    usage: [
      { zh: "受影片影響", en: "came across some videos", note: "come across ＝ 偶然看到，比 was influenced by 自然" },
      { zh: "想獨立完成", en: "take on that kind of challenge myself", note: "take on ＝ 接下挑戰" },
      { zh: "享受進步的過程", en: "the sense of progress", note: "名詞講法很高級" }
    ],
    pron: [
      { word: "triathlon", ipa: "/traɪˈæθlɒn/", tip: "tri-A-thlon，重音中間，θ別漏" },
      { word: "progress", ipa: "/ˈprəʊɡres/", tip: "名詞 PRO-gress，重音前" }
    ]
  },
  {
    id: 9,
    topic: "健康",
    question: "What do you do to stay healthy?",
    zh: "為了健康做三件事：① 睡足 7-8 小時 ② 吃得營養、盡量原型食物 ③ 持續運動，沒訓練也保持活動量。",
    concise: "There are basically three things I try to do. First, I make sure I get enough sleep — around 7 to 8 hours. I also try to eat well, mostly whole foods rather than processed stuff. And on top of that, I stay active — even on my rest days, I make sure I keep moving.",
    extended: "For me, the key is just being consistent. None of it is complicated; it's more about sticking to these habits every day.",
    frames: [
      { en: "There are basically three things I try to do", zh: "先給數字框架" },
      { en: "First, … I also … And on top of that, …", zh: "三點串接詞" },
      { en: "I make sure I ___", zh: "我會確保我…" },
      { en: "mostly A rather than B", zh: "主要 A 而非 B" },
      { en: "For me, the key is ___", zh: "對我來說關鍵是…" }
    ],
    usage: [
      { zh: "吃得營養", en: "eat well", note: "別講 eat nutritiously，太書面" },
      { zh: "原型食物", en: "whole foods", note: "營養圈標準英文" },
      { zh: "保持活動量", en: "stay active / keep moving", note: "" },
      { zh: "持之以恆", en: "being consistent", note: "consistent ＝ 持續一致，高分詞" }
    ],
    pron: [
      { word: "whole", ipa: "/həʊl/", tip: "hole，w 不發音" },
      { word: "consistent", ipa: "/kənˈsɪstənt/", tip: "kən-SIS-tənt，重音中間" }
    ]
  },
  {
    id: 10,
    topic: "日常作息",
    question: "Can you describe your typical day? / your daily routine",
    zh: "起床第一件事是暖身、跑步，接著準備早餐和工作。工作後再第二次訓練，最後休息看書、睡覺。平日假日基本一樣。",
    concise: "My day usually starts with a warm-up and a run — that's the first thing I do. After that, I have breakfast and get on with work. Once I've finished working, I'll do a second training session, and then I usually wind down by reading before I go to bed. To be honest, my weekdays and weekends are pretty much the same.",
    extended: "I know it sounds quite repetitive, but I actually like having that kind of structure — it keeps me on track with my training.",
    frames: [
      { en: "My day usually starts with ___", zh: "一天從…開始" },
      { en: "After that, … Once I've finished …, … and then …", zh: "時間串接，核心" },
      { en: "get on with work", zh: "著手工作" },
      { en: "wind down by ___", zh: "靠…放鬆收尾" }
    ],
    usage: [
      { zh: "開始工作", en: "get on with work", note: "get on with ＝ 著手進行" },
      { zh: "第二次訓練", en: "a second training session", note: "session ＝ 一次訓練" },
      { zh: "放鬆收尾", en: "wind down by reading", note: "wind down ＝ 慢下來放鬆" },
      { zh: "訓練不脫節", en: "keeps me on track with ___", note: "on track ＝ 在正軌上" }
    ],
    pron: [
      { word: "routine", ipa: "/ruːˈtiːn/", tip: "roo-TEEN，重音在後" },
      { word: "repetitive", ipa: "/rɪˈpetətɪv/", tip: "ri-PET-ə-tiv，重音 PET" }
    ]
  },
  {
    id: 11,
    topic: "旅行",
    question: "Do you like travelling? / Do you enjoy visiting new places?",
    zh: "蠻喜歡旅行，大概每一兩個月一次。喜歡去不同城市放鬆，偏好沒規劃的那種，通常國內為主。旅行讓我看到不一樣的生活模式、增加大腦刺激。",
    concise: "I'd say I do, yeah. I usually go away every month or two. I like visiting different cities just to relax, and I'm more of a go-with-the-flow person — I don't really plan things out. It's mostly domestic travel for me.",
    extended: "What I enjoy most is getting to see different ways of living. It's quite refreshing, and it gives my mind a bit of a change.",
    frames: [
      { en: "I'd say I do, yeah", zh: "先輕鬆回應" },
      { en: "I usually go away every ___", zh: "每隔…出遊一次" },
      { en: "I'm more of a ___ person", zh: "我比較是…型的人" },
      { en: "What I enjoy most is ___", zh: "我最享受的是…" }
    ],
    usage: [
      { zh: "沒規劃的那種", en: "a go-with-the-flow person", note: "go with the flow ＝ 隨性" },
      { zh: "國內旅行", en: "domestic travel", note: "domestic ＝ 國內的" },
      { zh: "不一樣的生活模式", en: "different ways of living", note: "比 life patterns 自然" },
      { zh: "大腦刺激", en: "gives my mind a change", note: "別講 brain stimulation，太生硬" }
    ],
    pron: [
      { word: "domestic", ipa: "/dəˈmestɪk/", tip: "də-MES-tik，重音中間" },
      { word: "refreshing", ipa: "/rɪˈfreʃɪŋ/", tip: "ri-FRESH-ing" }
    ]
  },
  {
    id: 12,
    topic: "天氣",
    question: "What's the weather like where you live? / Do you like it?",
    zh: "最喜歡秋天，介於不會太冷也不會太熱、又有風。我們國家四季分明，蠻喜歡這種變化，帶給我不同的生活感受。",
    concise: "My favourite is definitely autumn. It's that time of year when it's not too cold and not too hot, and there's usually a nice breeze. Where I live, we get four distinct seasons, so I quite like that sense of change — each one gives me a slightly different feel to daily life.",
    extended: "Autumn is also the best season for training, to be honest, because the weather's comfortable and it's much easier to be out running or cycling.",
    frames: [
      { en: "My favourite is definitely ___", zh: "我最愛的絕對是…" },
      { en: "It's that time of year when ___", zh: "描述季節的高分句型" },
      { en: "Where I live, we get ___", zh: "我住的地方有…" },
      { en: "I quite like that sense of ___", zh: "蠻喜歡那種…的感覺" }
    ],
    usage: [
      { zh: "有風", en: "a nice breeze", note: "微風，比 wind 正面" },
      { zh: "四季分明", en: "four distinct seasons", note: "distinct ＝ 分明的" },
      { zh: "喜歡這種變化", en: "that sense of change", note: "sense of ＋名詞" },
      { zh: "不同的生活感受", en: "a slightly different feel to daily life", note: "feel 當名詞" }
    ],
    pron: [
      { word: "autumn", ipa: "/ˈɔːtəm/", tip: "AW-təm，n 不發音" },
      { word: "distinct", ipa: "/dɪˈstɪŋkt/", tip: "dis-TINKT，重音後" }
    ]
  },
  {
    id: 13,
    topic: "音樂",
    question: "What kind of music do you like? / Do you enjoy music?",
    zh: "最喜歡爵士樂，給我一種自由的感覺。最喜歡開車或騎車時聽，因為那時候不需要動腦。",
    concise: "My favourite is jazz, actually. There's something about it that gives me a sense of freedom. I most enjoy listening to music when I'm driving or cycling, mainly because those are the moments when I don't really have to think about anything.",
    extended: "It helps me switch off and just relax. Jazz in particular has a really laid-back feel, so it suits those moments perfectly.",
    frames: [
      { en: "My favourite is ___, actually", zh: "我最愛的其實是…" },
      { en: "There's something about it that ___", zh: "講感覺的高分句型" },
      { en: "I most enjoy ___ when I'm ___", zh: "我最享受在…時做…" },
      { en: "It helps me ___", zh: "它幫我…" }
    ],
    usage: [
      { zh: "給我自由的感覺", en: "gives me a sense of freedom", note: "sense of freedom" },
      { zh: "不需要動腦", en: "I don't have to think about anything", note: "別翻 no need to use brain" },
      { zh: "放空", en: "switch off", note: "不去想事情，道地" },
      { zh: "慵懶輕鬆", en: "a laid-back feel", note: "laid-back ＝ 悠閒" }
    ],
    pron: [
      { word: "jazz", ipa: "/dʒæz/", tip: "jazz，j 濁音別唸成 yaz" },
      { word: "laid-back", ipa: "/ˌleɪdˈbæk/", tip: "layd-back，連讀" }
    ]
  }
];

const SPEAKING_TOPICS = [...new Set(SPEAKING.map(s => s.topic))];
