const { app, BrowserWindow } = require("electron");
// const { fork } = require("child_process"); // 子プロセスを作成するためのモジュール（未使用）

let mainWindow; // メインウィンドウの参照
let serverProcess; // WebSocketサーバープロセスの参照（現在コメントアウト）

// アプリケーションの準備が整ったら実行
app.whenReady().then(() => {
    // WebSocketサーバーを別プロセスで起動（現在コメントアウト）
    // 以前は必要だったが、接続が問題なくできるため現在は未使用
    // serverProcess = fork("./server.js");

    // メインウィンドウを作成
    mainWindow = new BrowserWindow({
        width: 800, // ウィンドウの幅
        height: 600, // ウィンドウの高さ
        webPreferences: {
            nodeIntegration: true, // レンダラープロセスで Node.js の機能を使用可能にする
            contextIsolation: false // セキュリティ上の隔離を無効化（Node.js API を直接使用可能に）
        }
    });

    // HTML ファイルをウィンドウに読み込む
    // mainWindow.loadFile("index.html");
    mainWindow.loadFile("./src/renderer/index.html");

    // すべてのウィンドウが閉じられたときの処理
    app.on("window-all-closed", () => {
        // サーバープロセスが起動していれば終了する（現在未使用）
        if (serverProcess) serverProcess.kill();
        
        // アプリケーションを終了
        app.quit();
    });
});
