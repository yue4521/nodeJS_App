const { app, BrowserWindow } = require("electron");
const { fork } = require("child_process");

let mainWindow;
let serverProcess;

app.whenReady().then(() => {
    // WebSocketサーバーを別プロセスで起動
    // 追記:これがないとうまく接続できない
    serverProcess = fork("./server.js");

    // ウィンドウ作成
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false // レンダラーで Node.js API を使用可能に
        }
    });

    mainWindow.loadFile("index.html");

    app.on("window-all-closed", () => {
        if (serverProcess) serverProcess.kill();
        app.quit();
    });
});