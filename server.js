const { Server } = require("socket.io"); // Socket.IOのServerクラスをインポート
const http = require("http"); // HTTPモジュールをインポート

// HTTPサーバーを作成
const server = http.createServer();

// Socket.IOのサーバーを作成し、CORS（Cross-Origin Resource Sharing）を許可
const io = new Server(server, {
    cors: { origin: "*" } // すべてのオリジンからの接続を許可
});

// クライアントが接続したときの処理
io.on("connection", (socket) => {
    console.log("🛎️ ユーザーが接続しました:", socket.id);

    // クライアントからのメッセージを受信
    socket.on("chat message", (msg) => {
        console.log(`メッセージ受信: ${msg}`);
        io.emit("chat message", msg); // 受信したメッセージをすべてのクライアントに送信
    });

    // クライアントが切断したときの処理
    socket.on("disconnect", () => {
        console.log("ユーザーが切断しました:", socket.id);
    });
});

// サーバーをポート3000で起動
server.listen(3000, () => {
    console.log("🚀 WebSocketサーバーがポート3000で起動しました");
});