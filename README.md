## 一、作品說明
2024 年 4 月利用後端培訓課程的預習內容，使用 Node.js 建立 RESTful API 並部屬到 Render 網路雲端服務。這是為了測試前端專案使用 AJAX 串接 API 而開發的，它是一個簡易的今日代辦紀錄系統。該系統提供新增和刪除代辦事項的功能。

## 二、開發工具介紹
- 作業系統：Windows 11（64 bit）
- 開發工具：Visual Studio（版本 1.82.10）
- JavaScript 框架：Vue 3（Options API 寫法）
  - 套件：axios
- Vue3 建構工具（預處理器）：Vite （ Node.js 版本 18.17.1 ）
  - 套件：pinia
- 切版框架：Bootstrap 5
  - CSS 預處理器：SCSS

## 三、專案資料夾架構
```
├── src                          # 專案的主要的開發檔案。
│   ├── assets/              # 包含應用程式的靜態資源，如圖像、字體等。
│            └── base/       # 定義常用的HTML元素初始設定。
│            └── layout/    # 針對各分頁中重複區塊進行樣式定義。
│            └── untils/     # 匯入其他scss檔案中的工具如變數、自行定義的字型樣式、間距。
│   ├── components/   # 專案程式中可重複使用元件或Pinia Store。
│   ├── router/             # 建立專案程式的路由表，讓系統能透過路徑去管控要執行哪個頁面裡的哪個元件。
│   ├── views/             # 專案程式的頁面元件，用於建立不同的頁面。
│   ├── App.vue          # 專案程式的主應用程式元件，也可以說是整個網頁的根元件。
│   ├── main.js            # 專案的程式進入點，所有檔案都需要跟main.js 有關連性才能被正確編譯。
├── index.html            # 專案程式的主要HTML文件，內容對應載入JavaScript的main.js檔案和渲染應用程式。
├── package.json        # 專案的npm套件管理檔案。
├── README.md      # 說明專案與運行的文件。
└── vite.config.js        # Vite的設定檔案，用於配置建置工具Vite的行為（包含專案編譯路徑設定）。
```

## 四、執行專案
```
npm install   #依照 vite 專案中 package.json 檔案內的項目進行安裝

npm run dev   #執行 vite 專案
```

## 五、後端 API 來源
- 自行開發
  - https://github.com/JennyDisc/Todolist
- 套件
  - uuid （版本 v4）

## 六、設計稿資訊
- 自行設計
