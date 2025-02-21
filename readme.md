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
├── renderer.js         # レンダラープロセス
├── style.css        # カスタムスタイル
├── package.json     # プロジェクト情報
└── .gitignore       # Git管理除外リスト
```

##  ビルド
```
npm run build
```

## プロセスの役割

|プロセス | 役割 | 担当ファイル |
| ---- | ---- | ---- |
| メインプロセス| Electronのアプリ制御（ウィンドウ作成・サーバー起動）| main.js |
| レンダラープロセス | UI制御（メッセージの送受信・表示）|	renderer.js |
| WebSocketサーバー | クライアント間のメッセージ管理 | server.js |