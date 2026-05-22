// === 單字瀏覽頁邏輯 ===

const STORAGE_KEY = "ielts_vocab_progress";
const STREAK_KEY = "ielts_vocab_streak";
const STAR_LIMIT = 20;

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

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

const progress = loadProgress();

function getStatus(id) {
  const s = progress[id] || {};
  return {
    starred: s.starred || false,
    starredAt: s.starredAt || null,
    mastered: s.mastered || false,
    correctStreak: s.correctStreak || 0,
  };
}

function setStatus(id, key, value) {
  if (!progress[id]) progress[id] = { starred: false, mastered: false, correctStreak: 0 };
  progress[id][key] = value;
  saveProgress(progress);
}

function countStarredUnmastered() {
  return VOCAB.filter(v => {
    const s = getStatus(v.id);
    return s.starred && !s.mastered;
  }).length;
}

function showStarLimitModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-msg">你已經標了 ${STAR_LIMIT} 個 ⭐，先把這些複習完（會的按 ✓）再加新的。</div>
      <div class="modal-actions">
        <button class="btn-secondary modal-no">知道了</button>
        <button class="btn-primary modal-yes">前往複習</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".modal-yes").addEventListener("click", () => {
    overlay.remove();
    window.location.href = "my-words.html";
  });
  overlay.querySelector(".modal-no").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });
}

// === TTS (Web Speech API) ===
function speak(text) {
  if (!window.speechSynthesis) {
    alert("您的瀏覽器不支援發音功能");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.9;
  utter.pitch = 1;

  // 優先使用英式 voice
  const voices = window.speechSynthesis.getVoices();
  const ukVoice = voices.find(v => v.lang === "en-GB" || v.lang.startsWith("en-GB"));
  if (ukVoice) utter.voice = ukVoice;

  window.speechSynthesis.speak(utter);
}

// 預載 voices
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}

// === 渲染 ===
const $list = document.getElementById("vocabList");
const $search = document.getElementById("search");
const $catFilter = document.getElementById("categoryFilter");
const $levelFilter = document.getElementById("levelFilter");
const $statusFilter = document.getElementById("statusFilter");
const $totalCount = document.getElementById("totalCount");
const $masteredCount = document.getElementById("masteredCount");
const $starredCount = document.getElementById("starredCount");

// 填入主題選項
CATEGORIES.forEach(cat => {
  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  $catFilter.appendChild(opt);
});

function renderVocab() {
  const keyword = $search.value.toLowerCase().trim();
  const category = $catFilter.value;
  const level = $levelFilter.value;
  const status = $statusFilter.value;

  let list = VOCAB.filter(v => {
    if (keyword && !v.word.toLowerCase().includes(keyword) && !v.zh.includes(keyword)) return false;
    if (category && v.category !== category) return false;
    if (level && v.level !== parseInt(level)) return false;
    const s = getStatus(v.id);
    if (status === "starred" && !s.starred) return false;
    if (status === "mastered" && !s.mastered) return false;
    if (status === "unmastered" && s.mastered) return false;
    return true;
  });

  $list.innerHTML = "";
  if (list.length === 0) {
    $list.innerHTML = '<div style="text-align:center;padding:40px;color:#7f8c8d;">沒有符合的單字</div>';
  } else {
    list.forEach(v => {
      const s = getStatus(v.id);
      const card = document.createElement("div");
      card.className = "vocab-card";
      if (s.starred) card.classList.add("starred");
      if (s.mastered) card.classList.add("mastered");
      if (document.getElementById("flipMode")?.checked) card.classList.add("flip-mode");

      const examplesHtml = v.examples.map(ex => `
        <div class="vocab-example">
          <div class="en" data-sentence="${escapeHtml(ex.en)}">${escapeHtml(ex.en)} <span class="play-sentence" title="念整句">🔊</span></div>
          <div class="zh-trans">${escapeHtml(ex.zh)}</div>
        </div>
      `).join("");

      card.innerHTML = `
        <div class="vocab-head">
          <div class="vocab-word" data-word="${escapeHtml(v.word)}">${escapeHtml(v.word)}</div>
          <div class="vocab-actions">
            <button class="btn-icon star-btn ${s.starred ? "active" : ""}" data-id="${v.id}" title="標記">⭐</button>
            <button class="btn-icon mastered-btn ${s.mastered ? "active" : ""}" data-id="${v.id}" title="已掌握">✓</button>
          </div>
        </div>
        <div class="vocab-meta">
          <span class="pos">${escapeHtml(v.pos)}</span>
          <span class="level">雅思 ${v.level}+</span>
          <span>${escapeHtml(v.category)}</span>
          <span>${escapeHtml(v.source)}</span>
        </div>
        <div class="vocab-zh">${escapeHtml(v.zh)}</div>
        ${examplesHtml}
      `;
      $list.appendChild(card);
    });
  }

  updateStats();
}

function updateStats() {
  const total = VOCAB.length;
  const mastered = VOCAB.filter(v => getStatus(v.id).mastered).length;
  const starred = VOCAB.filter(v => getStatus(v.id).starred).length;
  $totalCount.textContent = `共 ${total} 字`;
  $masteredCount.textContent = `✓ 已掌握 ${mastered}`;
  $starredCount.textContent = `⭐ 標記 ${starred}`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 事件
$list.addEventListener("click", e => {
  if (e.target.classList.contains("vocab-word")) {
    speak(e.target.dataset.word);
  } else if (e.target.classList.contains("star-btn")) {
    const id = parseInt(e.target.dataset.id);
    const s = getStatus(id);
    if (!s.starred) {
      if (countStarredUnmastered() >= STAR_LIMIT) {
        showStarLimitModal();
        return;
      }
      setStatus(id, "starred", true);
      setStatus(id, "starredAt", new Date().toISOString());
    } else {
      setStatus(id, "starred", false);
      setStatus(id, "starredAt", null);
    }
    renderVocab();
  } else if (e.target.classList.contains("mastered-btn")) {
    const id = parseInt(e.target.dataset.id);
    const s = getStatus(id);
    setStatus(id, "mastered", !s.mastered);
    renderVocab();
  } else if (e.target.classList.contains("play-sentence")) {
    // 念整句
    const en = e.target.closest(".en").dataset.sentence;
    speak(en);
  } else if (e.target.closest(".vocab-card.flip-mode")) {
    // 翻面模式：點卡片翻開
    const card = e.target.closest(".vocab-card.flip-mode");
    card.classList.toggle("revealed");
  }
});

// 翻面模式切換
const $flipMode = document.getElementById("flipMode");
if ($flipMode) {
  $flipMode.checked = localStorage.getItem("flipMode") === "1";
  if ($flipMode.checked) document.querySelector(".vocab-list")?.classList.add("flip-active");
  $flipMode.addEventListener("change", () => {
    localStorage.setItem("flipMode", $flipMode.checked ? "1" : "0");
    renderVocab();
  });
}

$search.addEventListener("input", renderVocab);
$catFilter.addEventListener("change", renderVocab);
$levelFilter.addEventListener("change", renderVocab);
$statusFilter.addEventListener("change", renderVocab);

renderVocab();
renderStreak();
