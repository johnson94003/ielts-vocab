// === 測驗頁邏輯 ===

const STORAGE_KEY = "ielts_vocab_progress";
const STREAK_KEY = "ielts_vocab_streak";

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
const progress = loadProgress();

function getStatus(id) {
  return progress[id] || { starred: false, mastered: false, correctStreak: 0 };
}
function setStatus(id, key, value) {
  if (!progress[id]) progress[id] = { starred: false, mastered: false, correctStreak: 0 };
  progress[id][key] = value;
  saveProgress(progress);
}

// === 每日打卡 ===
function loadStreak() {
  try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { days: [], todayCount: 0, lastDate: "" }; }
  catch (e) { return { days: [], todayCount: 0, lastDate: "" }; }
}
function saveStreak(s) { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); }
function recordPracticeToday() {
  const s = loadStreak();
  const today = new Date().toISOString().slice(0, 10);
  if (s.lastDate !== today) {
    s.todayCount = 0;
    s.lastDate = today;
    if (!s.days.includes(today)) s.days.push(today);
  }
  s.todayCount++;
  saveStreak(s);
}
function getStreakInfo() {
  const s = loadStreak();
  const today = new Date().toISOString().slice(0, 10);
  // 計算連續天數
  let streak = 0;
  let d = new Date();
  while (true) {
    const dateStr = d.toISOString().slice(0, 10);
    if (s.days.includes(dateStr)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  return {
    todayCount: s.lastDate === today ? s.todayCount : 0,
    streak: streak,
  };
}

// === TTS ===
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const ukVoice = voices.find(v => v.lang === "en-GB" || v.lang.startsWith("en-GB"));
  if (ukVoice) utter.voice = ukVoice;
  window.speechSynthesis.speak(utter);
}
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}

// === 拼字寬容判斷 ===
function normaliseSpelling(s) {
  // UK ↔ US 拼字統一
  return s
    .toLowerCase()
    .trim()
    .replace(/our\b/g, "or")        // colour → color
    .replace(/ise\b/g, "ize")       // analyse → analyze, customise → customize
    .replace(/ising\b/g, "izing")
    .replace(/ised\b/g, "ized")
    .replace(/isation/g, "ization") // organisation → organization
    .replace(/yse\b/g, "yze")       // analyse → analyze
    .replace(/tre\b/g, "ter")       // centre → center, theatre → theater
    .replace(/ogue\b/g, "og")       // catalogue → catalog
    .replace(/ence\b/g, "ense");    // defence → defense
}

function isAnswerCorrect(userInput, correctWord) {
  const user = (userInput || "").trim().toLowerCase();
  const correct = correctWord.toLowerCase();
  if (user === correct) return true;
  // UK/US 拼字寬容
  if (normaliseSpelling(user) === normaliseSpelling(correct)) return true;
  // 複數/變化形寬容（單字版）
  if (!correct.includes(" ")) {
    const variants = buildWordVariants(correct);
    if (variants.some(v => v.toLowerCase() === user)) return true;
  }
  return false;
}

// === 自訂彈窗 ===
function customConfirm(message, onYes) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-msg">${message}</div>
      <div class="modal-actions">
        <button class="btn-secondary modal-no">取消</button>
        <button class="btn-primary modal-yes">確定</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".modal-yes").addEventListener("click", () => {
    overlay.remove();
    onYes();
  });
  overlay.querySelector(".modal-no").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });
}

// === 狀態 ===
let quizMode = null;
let quizQueue = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizWrong = 0;
let wrongAnswers = [];
let currentAnswered = false;

// === DOM ===
const $modeSelect = document.getElementById("modeSelect");
const $quizArea = document.getElementById("quizArea");
const $resultArea = document.getElementById("resultArea");
const $progress = document.getElementById("quizProgress");
const $score = document.getElementById("quizScore");
const $questionBox = document.getElementById("questionBox");
const $answerBox = document.getElementById("answerBox");
const $feedbackBox = document.getElementById("feedbackBox");
const $nextBtn = document.getElementById("nextBtn");
const $quitBtn = document.getElementById("quitQuiz");

// === 初始化類別下拉選單 ===
const $catSelect = document.getElementById("quizCategory");
if ($catSelect && typeof CATEGORIES !== "undefined") {
  CATEGORIES.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    $catSelect.appendChild(opt);
  });
}

// === URL 參數預設（例如從「我的單字」過來時 ?scope=starred）===
function applyURLParams() {
  const params = new URLSearchParams(window.location.search);
  const scopeEl = document.getElementById("quizScope");
  if (params.get("scope") && scopeEl) {
    scopeEl.value = params.get("scope");
  }
}
applyURLParams();

// === 顯示每日打卡（在模式選擇頁）===
function renderStreak() {
  const info = getStreakInfo();
  const $streakArea = document.getElementById("streakInfo");
  if ($streakArea) {
    $streakArea.innerHTML = `🔥 連續 <strong>${info.streak}</strong> 天｜今日已練 <strong>${info.todayCount}</strong> 題`;
  }
}
renderStreak();

// === 啟動 ===
document.querySelectorAll(".mode-card").forEach(btn => {
  btn.addEventListener("click", () => {
    quizMode = btn.dataset.mode;
    startQuiz();
  });
});

function startQuiz() {
  const length = document.getElementById("quizLength").value;
  const scope = document.getElementById("quizScope").value;
  const purposeEl = document.getElementById("quizPurpose");
  const categoryEl = document.getElementById("quizCategory");
  const purpose = purposeEl ? purposeEl.value : "all";
  const category = categoryEl ? categoryEl.value : "";

  // 篩選題庫
  let pool = VOCAB.slice();
  if (scope === "starred") {
    pool = pool.filter(v => getStatus(v.id).starred);
  } else if (scope === "unmastered") {
    pool = pool.filter(v => !getStatus(v.id).mastered);
  }
  if (purpose !== "all") {
    pool = pool.filter(v => v.purpose === purpose);
  }
  if (category) {
    pool = pool.filter(v => v.category === category);
  }

  if (pool.length < 4) {
    alert("題庫不足 4 字（測驗需要至少 4 字當干擾項）");
    return;
  }

  shuffle(pool);
  if (length !== "all") {
    pool = pool.slice(0, parseInt(length));
  }

  quizQueue = pool;
  quizIndex = 0;
  quizCorrect = 0;
  quizWrong = 0;
  wrongAnswers = [];

  $modeSelect.style.display = "none";
  $resultArea.style.display = "none";
  $quizArea.style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  if (quizIndex >= quizQueue.length) {
    finishQuiz();
    return;
  }

  currentAnswered = false;
  const item = quizQueue[quizIndex];
  $progress.textContent = `${quizIndex + 1} / ${quizQueue.length}`;
  $score.textContent = `✓ ${quizCorrect}  ✗ ${quizWrong}`;
  $feedbackBox.style.display = "none";
  $feedbackBox.classList.remove("show");
  $nextBtn.style.display = "none";

  if (quizMode === "dictation") {
    renderDictation(item);
  } else if (quizMode === "cloze") {
    renderCloze(item);
  } else if (quizMode === "zh2en") {
    renderZh2En(item);
  }
}

// === 模式 1：聽寫 ===
function renderDictation(item) {
  $questionBox.innerHTML = `
    <div class="prompt">點按鈕播放發音，然後輸入聽到的單字</div>
    <button class="audio-btn" id="playBtn">🔊</button>
    <div class="cloze-zh" style="margin-top:12px;">提示：${escapeHtml(item.pos)} · 雅思 ${item.level}+</div>
  `;
  $answerBox.innerHTML = `
    <input type="text" id="dictInput" placeholder="輸入聽到的單字..." autocomplete="off" autocapitalize="off" />
    <div class="answer-row">
      <button class="btn-secondary btn-skip" id="skipBtn">跳過</button>
      <button class="btn-primary btn-submit" id="submitBtn">送出</button>
    </div>
  `;
  document.getElementById("playBtn").addEventListener("click", () => speak(item.word));
  // 自動播放一次
  setTimeout(() => speak(item.word), 300);

  const input = document.getElementById("dictInput");
  input.focus();
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submitDictation(item);
  });

  document.getElementById("submitBtn").addEventListener("click", () => submitDictation(item));
  document.getElementById("skipBtn").addEventListener("click", () => skipQuestion(item));
}

function submitDictation(item) {
  if (currentAnswered) return;
  const input = document.getElementById("dictInput");
  const user = (input.value || "").trim();
  const ok = isAnswerCorrect(user, item.word);
  handleAnswer(item, ok, user);
}

// === 模式 2：例句填空 ===
function buildWordVariants(word) {
  // 處理單字的常見變化形（複數、過去式、ing 形式）
  const variants = new Set([word]);
  // 多字片語：直接整組
  if (word.includes(" ")) return [...variants];
  if (word.endsWith("y")) {
    const stem = word.slice(0, -1);
    variants.add(stem + "ies");
    variants.add(stem + "ied");
    variants.add(word + "ing"); // studying
  } else if (word.endsWith("e")) {
    variants.add(word + "s");
    variants.add(word + "d");
    variants.add(word.slice(0, -1) + "ing");
  } else {
    variants.add(word + "s");
    variants.add(word + "es");
    variants.add(word + "ed");
    variants.add(word + "ing");
  }
  // 按長度由長到短排序（避免短的先 match）
  return [...variants].sort((a, b) => b.length - a.length);
}

function renderCloze(item) {
  const example = item.examples[0];
  // 空格長度約略匹配單字長度
  const wordLen = item.word.replace(/\s/g, "").length;
  const blank = "_".repeat(Math.max(4, Math.min(wordLen, 14)));
  const variants = buildWordVariants(item.word);
  const re = new RegExp(`\\b(${variants.map(escapeRegex).join("|")})\\b`, "i");
  let sentence = example.en.replace(re, `<span class="cloze-blank">${blank}</span>`);
  // 後備：如果沒匹配到，至少把 item.word 強制替換
  if (!sentence.includes("cloze-blank")) {
    const fallbackRe = new RegExp(escapeRegex(item.word), "i");
    sentence = example.en.replace(fallbackRe, `<span class="cloze-blank">${blank}</span>`);
  }

  // 產生 4 個選項
  const choices = [item.word];
  const pool = VOCAB.filter(v => v.id !== item.id && v.pos === item.pos);
  shuffle(pool);
  while (choices.length < 4 && pool.length > 0) {
    choices.push(pool.shift().word);
  }
  if (choices.length < 4) {
    const all = VOCAB.filter(v => v.id !== item.id);
    shuffle(all);
    while (choices.length < 4 && all.length > 0) {
      const w = all.shift().word;
      if (!choices.includes(w)) choices.push(w);
    }
  }
  shuffle(choices);

  $questionBox.innerHTML = `
    <div class="prompt">選擇正確的單字填入空格</div>
    <div class="cloze-sentence">${sentence}</div>
    <div class="cloze-hint-wrap">
      <button class="btn-hint" id="hintBtn">💡 顯示中文提示</button>
      <div class="cloze-zh-hidden" id="hintText" style="display:none;">${escapeHtml(example.zh)}</div>
    </div>
  `;
  $answerBox.innerHTML = `
    <div class="choices"></div>
    <div class="answer-row" style="margin-top:8px;">
      <button class="btn-secondary btn-skip" id="skipBtn">跳過</button>
    </div>
  `;
  const $choices = $answerBox.querySelector(".choices");
  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c;
    btn.addEventListener("click", () => {
      if (currentAnswered) return;
      const ok = c === item.word;
      if (ok) btn.classList.add("correct");
      else {
        btn.classList.add("wrong");
        $choices.querySelectorAll(".choice-btn").forEach(b => {
          if (b.textContent === item.word) b.classList.add("correct");
        });
      }
      handleAnswer(item, ok, c);
    });
    $choices.appendChild(btn);
  });

  // 提示按鈕
  document.getElementById("hintBtn").addEventListener("click", () => {
    const $h = document.getElementById("hintText");
    const $b = document.getElementById("hintBtn");
    if ($h.style.display === "none") {
      $h.style.display = "block";
      $b.textContent = "🔼 隱藏中文";
    } else {
      $h.style.display = "none";
      $b.textContent = "💡 顯示中文提示";
    }
  });

  document.getElementById("skipBtn").addEventListener("click", () => skipQuestion(item));
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// === 模式 3：中翻英 ===
function renderZh2En(item) {
  $questionBox.innerHTML = `
    <div class="prompt">看中文，輸入英文</div>
    <div class="chinese">${escapeHtml(item.zh)}</div>
    <div class="cloze-zh" style="margin-top:8px;">${escapeHtml(item.pos)} · 雅思 ${item.level}+</div>
  `;
  $answerBox.innerHTML = `
    <input type="text" id="zh2enInput" placeholder="輸入英文單字..." autocomplete="off" autocapitalize="off" />
    <div class="answer-row">
      <button class="btn-secondary btn-skip" id="skipBtn">跳過</button>
      <button class="btn-primary btn-submit" id="submitBtn">送出</button>
    </div>
  `;
  const input = document.getElementById("zh2enInput");
  input.focus();
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submitZh2En(item);
  });

  document.getElementById("submitBtn").addEventListener("click", () => submitZh2En(item));
  document.getElementById("skipBtn").addEventListener("click", () => skipQuestion(item));
}

function submitZh2En(item) {
  if (currentAnswered) return;
  const input = document.getElementById("zh2enInput");
  const user = (input.value || "").trim();
  const ok = isAnswerCorrect(user, item.word);
  handleAnswer(item, ok, user);
}

// === 跳過 ===
function skipQuestion(item) {
  if (currentAnswered) return;
  handleAnswer(item, false, "(跳過)");
}

// === 共通處理 ===
function handleAnswer(item, isCorrect, userAnswer) {
  currentAnswered = true;
  recordPracticeToday();
  const example = item.examples[0];

  // 隱藏輸入區（讓使用者專心看回饋）
  const submitBtn = document.getElementById("submitBtn");
  const skipBtn = document.getElementById("skipBtn");
  if (submitBtn) submitBtn.style.display = "none";
  if (skipBtn) skipBtn.style.display = "none";

  if (isCorrect) {
    quizCorrect++;
    const s = getStatus(item.id);
    setStatus(item.id, "correctStreak", (s.correctStreak || 0) + 1);
    if ((s.correctStreak || 0) + 1 >= 3 && !s.mastered) {
      setStatus(item.id, "mastered", true);
    }
    $feedbackBox.className = "feedback-box correct";
    $feedbackBox.innerHTML = `
      <div class="feedback-title">✅ 答對！</div>
      <div class="answer-display" data-word="${escapeHtml(item.word)}">${escapeHtml(item.word)} 🔊</div>
      <div class="feedback-zh">${escapeHtml(item.zh)}</div>
      <div class="example-display">
        <em data-sentence="${escapeHtml(example.en)}">${escapeHtml(example.en)} <span class="play-sentence">🔊</span></em><br>
        <small>${escapeHtml(example.zh)}</small>
      </div>
    `;
  } else {
    quizWrong++;
    setStatus(item.id, "correctStreak", 0);
    setStatus(item.id, "starred", true);
    wrongAnswers.push(item);
    $feedbackBox.className = "feedback-box wrong";
    $feedbackBox.innerHTML = `
      <div class="feedback-title">❌ 答錯</div>
      <div class="feedback-your">你寫的：<strong>${escapeHtml(userAnswer || "(空白)")}</strong></div>
      <div class="answer-display" data-word="${escapeHtml(item.word)}">正解：${escapeHtml(item.word)} 🔊</div>
      <div class="feedback-zh">${escapeHtml(item.zh)}</div>
      <div class="example-display">
        <em data-sentence="${escapeHtml(example.en)}">${escapeHtml(example.en)} <span class="play-sentence">🔊</span></em><br>
        <small>${escapeHtml(example.zh)}</small>
      </div>
    `;
  }

  // 點答案發音
  $feedbackBox.querySelectorAll(".answer-display").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => speak(el.dataset.word));
  });

  // 點 🔊 念整句
  $feedbackBox.querySelectorAll(".play-sentence").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation();
      const sentence = el.closest("[data-sentence]").dataset.sentence;
      speak(sentence);
    });
  });

  $feedbackBox.style.display = "block";
  // 觸發動畫
  setTimeout(() => $feedbackBox.classList.add("show"), 10);

  $nextBtn.style.display = "inline-block";
  $nextBtn.focus();
  $score.textContent = `✓ ${quizCorrect}  ✗ ${quizWrong}`;

  setTimeout(() => speak(item.word), 400);
}

$nextBtn.addEventListener("click", () => {
  quizIndex++;
  renderQuestion();
});

// 鍵盤：答完後 Enter 直接下一題
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && currentAnswered && $quizArea.style.display !== "none") {
    quizIndex++;
    renderQuestion();
  }
});

$quitBtn.addEventListener("click", () => {
  customConfirm("確定要退出嗎？目前的進度會丟失。", () => {
    $quizArea.style.display = "none";
    $modeSelect.style.display = "block";
    renderStreak();
  });
});

// === 結算 ===
function finishQuiz() {
  $quizArea.style.display = "none";
  $resultArea.style.display = "block";

  const total = quizCorrect + quizWrong;
  document.getElementById("resultTotal").textContent = total;
  document.getElementById("resultCorrect").textContent = quizCorrect;
  document.getElementById("resultWrong").textContent = quizWrong;
  document.getElementById("resultRate").textContent =
    total === 0 ? "0%" : Math.round((quizCorrect / total) * 100) + "%";

  const $wrongList = document.getElementById("wrongList");
  $wrongList.innerHTML = "";
  if (wrongAnswers.length === 0) {
    $wrongList.innerHTML = '<li style="background:#e8f5e9;border-left-color:#4caf50;">🎉 沒有答錯的單字！</li>';
  } else {
    wrongAnswers.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="wrong-word">${escapeHtml(item.word)}</span>
        <span class="wrong-zh">${escapeHtml(item.zh)}</span>
      `;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => speak(item.word));
      $wrongList.appendChild(li);
    });
  }
}

document.getElementById("restartBtn").addEventListener("click", startQuiz);
document.getElementById("backToModeBtn").addEventListener("click", () => {
  $resultArea.style.display = "none";
  $modeSelect.style.display = "block";
  renderStreak();
});

// === Utils ===
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
