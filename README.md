# IELTS Vocab

雅思單字互動學習網站。從個人練習中累積的單字，附例句、發音、三種測驗模式。

## 功能

### 📘 單字瀏覽
- 點單字即可發音（英式 TTS）
- 按主題、難度、狀態篩選
- 標記 ⭐ / 已掌握 ✓（用 localStorage 存）
- 搜尋（中英都可）

### 📝 三種測驗模式
1. **聽寫**：聽發音輸入單字（最像雅思聽力）
2. **例句填空**：看上下文 4 選 1（像閱讀填空）
3. **中翻英**：看中文輸入英文（口說/寫作必備）

### 自動進度追蹤
- 答錯自動加 ⭐
- 連續答對 3 次自動標 ✓
- 可只考標記字 / 未掌握字

## 本機使用

雙擊 `index.html` 用瀏覽器打開即可。所有資料存在瀏覽器 localStorage。

## 部署到 GitHub Pages

### 首次設定

1. 在 GitHub 建一個新 repo（例如 `ielts-vocab`）
2. 在這個資料夾執行：

```bash
git init
git remote add origin git@github.com:你的帳號/ielts-vocab.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

3. 部署：

```bash
python3 deploy.py
```

4. 第一次部署後，到 GitHub repo 設定 → Pages → Source 選擇 `gh-pages` 分支

### 後續更新

```bash
python3 deploy.py
```

部署完約 1-2 分鐘 GitHub Pages 才會生效。

## 新增單字

編輯 `js/data.js`，按既有格式加入：

```js
{
  id: 999,
  word: "example",
  pos: "n.",
  zh: "例子",
  level: 5,
  category: "名詞",
  source: "出處",
  examples: [{
    en: "This is an example sentence.",
    zh: "這是一個例句。"
  }]
}
```

## 技術

- 純 HTML + CSS + Vanilla JS（無框架）
- Web Speech API 處理發音
- localStorage 存進度
- 行動裝置友善（手機可用）
