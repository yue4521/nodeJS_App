#  Electron Chat App

リアルタイムでメッセージをやり取りできる **Electron × WebSocket** のチャットアプリ。

## インストール & 実行
```bash
git clone https://github.com/your-username/nodeJS_App.git
cd nodeJS_App
npm install
node server.js  # サーバー起動
npm start       # アプリ起動
```

##  ファイル構成

```
electron-chat-app/
├── server.js        # WebSocketサーバー
├── main.js          # Electron メインプロセス
├── index.html       # フロントエンド（UI）
├── index.js         # レンダラープロセス
├── style.css        # カスタムスタイル
├── package.json     # プロジェクト情報
└── .gitignore       # Git管理除外リスト
```

##  ビルド
```
npm run build
```