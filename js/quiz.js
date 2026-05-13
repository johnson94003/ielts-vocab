// === 測驗頁邏輯 ===

const STORAGE_KEY = "ielts_vocab_progress";

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

  // 篩選題庫
  let pool = VOCAB.slice();
  if (scope === "starred") {
    pool = pool.filter(v => getStatus(v.id).starred);
  } else if (scope === "unmastered") {
    pool = pool.filter(v => !getStatus(v.id).mastered);
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
  `;
  document.getElementById("playBtn").addEventListener("click", () => speak(item.word));
  // 自動播放一次
  setTimeout(() => speak(item.word), 300);

  const input = document.getElementById("dictInput");
  input.focus();
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submitDictation(item);
  });

  // 加 submit button below
  const submit = document.createElement("button");
  submit.className = "btn-primary";
  submit.textContent = "送出";
  submit.style.marginTop = "12px";
  submit.style.width = "100%";
  submit.addEventListener("click", () => submitDictation(item));
  $answerBox.appendChild(submit);
}

function submitDictation(item) {
  if (currentAnswered) return;
  const input = document.getElementById("dictInput");
  const user = (input.value || "").trim().toLowerCase();
  const correct = item.word.toLowerCase();
  const ok = user === correct;
  handleAnswer(item, ok, user);
}

// === 模式 2：例句填空 ===
function renderCloze(item) {
  const example = item.examples[0];
  const blank = "______";
  // 把例句裡的單字（含複數變化）替換成底線
  const re = new RegExp(`\\b${escapeRegex(item.word)}(s|es|ed|ing|d)?\\b`, "i");
  const sentence = example.en.replace(re, `<span class="cloze-blank">${blank}</span>`);

  // 產生 4 個選項
  const choices = [item.word];
  const pool = VOCAB.filter(v => v.id !== item.id && v.pos === item.pos);
  shuffle(pool);
  while (choices.length < 4 && pool.length > 0) {
    choices.push(pool.shift().word);
  }
  // 如果同詞性不夠，補其他的
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
    <div class="cloze-zh">${escapeHtml(example.zh)}</div>
  `;
  $answerBox.innerHTML = `<div class="choices"></div>`;
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
        // 標出正確答案
        $choices.querySelectorAll(".choice-btn").forEach(b => {
          if (b.textContent === item.word) b.classList.add("correct");
        });
      }
      handleAnswer(item, ok, c);
    });
    $choices.appendChild(btn);
  });
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
  `;
  const input = document.getElementById("zh2enInput");
  input.focus();
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submitZh2En(item);
  });

  const submit = document.createElement("button");
  submit.className = "btn-primary";
  submit.textContent = "送出";
  submit.style.marginTop = "12px";
  submit.style.width = "100%";
  submit.addEventListener("click", () => submitZh2En(item));
  $answerBox.appendChild(submit);
}

function submitZh2En(item) {
  if (currentAnswered) return;
  const input = document.getElementById("zh2enInput");
  const user = (input.value || "").trim().toLowerCase();
  const correct = item.word.toLowerCase();
  const ok = user === correct;
  handleAnswer(item, ok, user);
}

// === 共通處理 ===
function handleAnswer(item, isCorrect, userAnswer) {
  currentAnswered = true;
  const example = item.examples[0];

  if (isCorrect) {
    quizCorrect++;
    // 連續答對 +1，達 3 次自動標 ✓
    const s = getStatus(item.id);
    setStatus(item.id, "correctStreak", (s.correctStreak || 0) + 1);
    if ((s.correctStreak || 0) + 1 >= 3 && !s.mastered) {
      setStatus(item.id, "mastered", true);
    }
    $feedbackBox.className = "feedback-box correct";
    $feedbackBox.innerHTML = `
      <div>✅ 答對！</div>
      <div class="answer-display">${escapeHtml(item.word)} 🔊</div>
      <div>${escapeHtml(item.zh)}</div>
      <div class="example-display">
        <em>${escapeHtml(example.en)}</em><br>
        <small>${escapeHtml(example.zh)}</small>
      </div>
    `;
  } else {
    quizWrong++;
    // 答錯：清空 streak，自動標 ⭐
    setStatus(item.id, "correctStreak", 0);
    setStatus(item.id, "starred", true);
    wrongAnswers.push(item);
    $feedbackBox.className = "feedback-box wrong";
    $feedbackBox.innerHTML = `
      <div>❌ 答錯</div>
      <div>你寫的：<strong>${escapeHtml(userAnswer || "(空白)")}</strong></div>
      <div class="answer-display">正解：${escapeHtml(item.word)} 🔊</div>
      <div>${escapeHtml(item.zh)}</div>
      <div class="example-display">
        <em>${escapeHtml(example.en)}</em><br>
        <small>${escapeHtml(example.zh)}</small>
      </div>
    `;
  }

  // 加發音按鈕功能
  $feedbackBox.querySelectorAll(".answer-display").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => speak(item.word));
  });

  $feedbackBox.style.display = "block";
  $nextBtn.style.display = "inline-block";
  $score.textContent = `✓ ${quizCorrect}  ✗ ${quizWrong}`;

  // 自動播放正解發音
  setTimeout(() => speak(item.word), 400);
}

$nextBtn.addEventListener("click", () => {
  quizIndex++;
  renderQuestion();
});

$quitBtn.addEventListener("click", () => {
  if (confirm("確定要退出嗎？目前的進度會丟失")) {
    $quizArea.style.display = "none";
    $modeSelect.style.display = "block";
  }
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
