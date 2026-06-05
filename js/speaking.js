// === 口說 Task 1 練習頁邏輯 ===

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// === TTS ===
function speak(text) {
  if (!window.speechSynthesis) { alert("您的瀏覽器不支援發音功能"); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const ukVoice = voices.find(v => v.lang && v.lang.startsWith("en-GB"));
  if (ukVoice) utter.voice = ukVoice;
  window.speechSynthesis.speak(utter);
}
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}

const $list = document.getElementById("speakingList");
const $topicFilter = document.getElementById("topicFilter");

// 填入主題篩選
SPEAKING_TOPICS.forEach(t => {
  const opt = document.createElement("option");
  opt.value = t; opt.textContent = t;
  $topicFilter.appendChild(opt);
});

function framesHtml(frames) {
  return frames.map(f => `
    <li><span class="frame-en" data-sentence="${escapeHtml(f.en)}">${escapeHtml(f.en)} <span class="play-mini" title="念">🔊</span></span>
    <span class="frame-zh">${escapeHtml(f.zh)}</span></li>`).join("");
}
function usageHtml(usage) {
  return usage.map(u => `
    <li><span class="u-zh">${escapeHtml(u.zh)}</span> →
    <span class="u-en">${escapeHtml(u.en)}</span>
    ${u.note ? `<span class="u-note">${escapeHtml(u.note)}</span>` : ""}</li>`).join("");
}
function pronHtml(pron) {
  return pron.map(p => `
    <li><span class="p-word" data-sentence="${escapeHtml(p.word)}">${escapeHtml(p.word)} <span class="play-mini" title="念">🔊</span></span>
    ${p.ipa ? `<span class="p-ipa">${escapeHtml(p.ipa)}</span>` : ""}
    <span class="p-tip">${escapeHtml(p.tip)}</span></li>`).join("");
}

function render() {
  const topic = $topicFilter.value;
  const list = SPEAKING.filter(s => !topic || s.topic === topic);
  $list.innerHTML = "";
  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "sp-card";
    card.innerHTML = `
      <div class="sp-head">
        <span class="sp-topic">${escapeHtml(s.topic)}</span>
        <span class="sp-qid">Q${s.id}</span>
      </div>
      <div class="sp-question" data-sentence="${escapeHtml(s.question)}">
        ${escapeHtml(s.question)} <span class="play-sentence" title="念題目">🔊</span>
      </div>

      <div class="sp-zh">💭 ${escapeHtml(s.zh)}</div>

      <div class="sp-answer-block">
        <div class="sp-label">精簡版 <span class="sp-hint">（先自己講，點擊顯示）</span></div>
        <div class="sp-answer blurred" data-sentence="${escapeHtml(s.concise)}">
          ${escapeHtml(s.concise)} <span class="play-sentence" title="念答案">🔊</span>
        </div>
      </div>

      <div class="sp-answer-block">
        <div class="sp-label">加長版</div>
        <div class="sp-answer blurred sp-ext" data-sentence="${escapeHtml(s.extended)}">
          ${escapeHtml(s.extended)} <span class="play-sentence" title="念答案">🔊</span>
        </div>
      </div>

      <details class="sp-more">
        <summary>句框零件 / 用字說明 / 發音</summary>
        <div class="sp-section-title">句框零件</div>
        <ul class="sp-frames">${framesHtml(s.frames)}</ul>
        <div class="sp-section-title">用字說明</div>
        <ul class="sp-usage">${usageHtml(s.usage)}</ul>
        <div class="sp-section-title">發音</div>
        <ul class="sp-pron">${pronHtml(s.pron)}</ul>
      </details>
    `;
    $list.appendChild(card);
  });
}

$list.addEventListener("click", e => {
  // 念整句
  if (e.target.classList.contains("play-sentence") || e.target.classList.contains("play-mini")) {
    e.stopPropagation();
    const host = e.target.closest("[data-sentence]");
    if (host) speak(host.dataset.sentence);
    return;
  }
  // 點模糊答案 → 顯示
  const ans = e.target.closest(".sp-answer.blurred");
  if (ans) {
    ans.classList.remove("blurred");
    return;
  }
});

$topicFilter.addEventListener("change", render);
render();
