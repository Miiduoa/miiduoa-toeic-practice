# TOEIC 練習 MVP（靜態網站）

這是一個純前端、無後端的 TOEIC Listening 練習小站（MVP）。

## 本機開啟（推薦）

直接雙擊 `index.html` 也能跑，但部分瀏覽器對音檔/資源的路徑限制較嚴格；建議用本機 HTTP server。

### 用 Python

```bash
cd miiduoa-toeic-practice
python3 -m http.server 5173
```

然後開啟：<http://localhost:5173>

## 部署到 GitHub Pages（自動）

本 repo 已附上 GitHub Actions workflow：`.github/workflows/pages.yml`

### 一次性設定（Repo Settings）

1. 到 GitHub repo → **Settings** → **Pages**
2. **Build and deployment**：選 **GitHub Actions**

之後只要 push 到 `main`，Actions 會自動部署到 Pages。

> 若你之前選的是「Deploy from a branch」，請改成「GitHub Actions」。

## 素材

- `assets/set1/audio/`：各題音檔
- `assets/set1/images_png/`：Part 1 題目圖片（PNG）
- `assets/set1/Part1_all.mp3` / `Part2_all.mp3`：整段拼接音檔

