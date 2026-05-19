// === 我的單字頁面 ===

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

// === 每日打卡顯示 ===
function renderStreak() {
  try {
    const s = JSON.parse(localStorage.getItem(STREAK_KEY)) || { days: [], todayCount: 0, lastDate: "" };
    const today = new Date().toISOString().slice(0, 10);
    let streak = 0;
    let d = new Date();
    while (true) {
      const dateStr = d.toISOString().slice(0, 10);
      if (s.days.includes(dateStr)) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else break;
    }
    const todayCount = s.lastDate === today ? s.todayCount : 0;
    const $streak = document.getElementById("streakInfo");
    if ($streak) {
      $streak.innerHTML = `🔥 連續 <strong>${streak}</strong> 天｜今日已練 <strong>${todayCount}</strong> 題`;
    }
  } catch (e) {}
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

let currentTab = "starred";

function getFilteredList() {
  if (currentTab === "starred") {
    return VOCAB.filter(v => getStatus(v.id).starred && !getStatus(v.id).mastered);
  } else if (currentTab === "mastered") {
    return VOCAB.filter(v => getStatus(v.id).mastered);
  } else if (currentTab === "recent") {
    // 最近練過 = correctStreak > 0 或 starred 過的
    return VOCAB.filter(v => {
      const s = getStatus(v.id);
      return s.correctStreak > 0 || s.starred || s.mastered;
    });
  }
  return [];
}

function renderList() {
  const list = getFilteredList();
  const $list = document.getElementById("myList");
  const $empty = document.getElementById("emptyState");

  if (list.length === 0) {
    $list.innerHTML = "";
    $empty.style.display = "block";
  } else {
    $empty.style.display = "none";
    $list.innerHTML = list.map(v => {
      const s = getStatus(v.id);
      const ex = v.examples[0];
      return `
        <div class="vocab-card ${s.starred ? "starred" : ""} ${s.mastered ? "mastered" : ""}">
          <div class="vocab-head">
            <div class="vocab-word" data-word="${escapeHtml(v.word)}">${escapeHtml(v.word)}</div>
            <div class="vocab-actions">
              <button class="btn-icon star-btn ${s.starred ? "active" : ""}" data-id="${v.id}">⭐</button>
              <button class="btn-icon mastered-btn ${s.mastered ? "active" : ""}" data-id="${v.id}">✓</button>
            </div>
          </div>
          <div class="vocab-meta">
            <span class="pos">${escapeHtml(v.pos)}</span>
            <span class="level">雅思 ${v.level}+</span>
            <span>${escapeHtml(v.category)}</span>
            <span>${escapeHtml(v.source)}</span>
          </div>
          <div class="vocab-zh">${escapeHtml(v.zh)}</div>
          <div class="vocab-example">
            <div class="en" data-sentence="${escapeHtml(ex.en)}">${escapeHtml(ex.en)} <span class="play-sentence">🔊</span></div>
            <div class="zh-trans">${escapeHtml(ex.zh)}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 更新數量
  updateTabCounts();
}

function updateTabCounts() {
  const starred = VOCAB.filter(v => getStatus(v.id).starred && !getStatus(v.id).mastered).length;
  const mastered = VOCAB.filter(v => getStatus(v.id).mastered).length;
  const recent = VOCAB.filter(v => {
    const s = getStatus(v.id);
    return s.correctStreak > 0 || s.starred || s.mastered;
  }).length;
  document.getElementById("starredCount").textContent = starred;
  document.getElementById("masteredCount").textContent = mastered;
  document.getElementById("recentCount").textContent = recent;
}

// 切換 tab
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderList();
  });
});

// 卡片點擊事件
document.getElementById("myList").addEventListener("click", e => {
  if (e.target.classList.contains("vocab-word")) {
    speak(e.target.dataset.word);
  } else if (e.target.classList.contains("play-sentence")) {
    const sentence = e.target.closest(".en").dataset.sentence;
    speak(sentence);
  } else if (e.target.classList.contains("star-btn")) {
    const id = parseInt(e.target.dataset.id);
    const s = getStatus(id);
    setStatus(id, "starred", !s.starred);
    renderList();
  } else if (e.target.classList.contains("mastered-btn")) {
    const id = parseInt(e.target.dataset.id);
    const s = getStatus(id);
    setStatus(id, "mastered", !s.mastered);
    renderList();
  }
});

// 一鍵測驗 ⭐
document.getElementById("quizStarredBtn").addEventListener("click", () => {
  // 跳到 quiz 頁，預設範圍 = starred
  window.location.href = "quiz.html?scope=starred";
});

// 清空 ⭐
document.getElementById("clearStarredBtn").addEventListener("click", () => {
  if (!confirm("確定要清空所有 ⭐ 標記嗎？")) return;
  VOCAB.forEach(v => {
    if (getStatus(v.id).starred) setStatus(v.id, "starred", false);
  });
  renderList();
});

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

renderList();
renderStreak();
