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

## バージョン
|パッケージ | バージョン |
| ---- | ---- |
| node | 20.18.2 |
| npm | 10.8.2 |
| electron-builder | 25.1.8 |
| electron | 34.2.0 |
| socket.io-client | 4.8.1 |
| socket.io | 4.8.1 |

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
