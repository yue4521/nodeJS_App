const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log("ユーザーが接続しました:", socket.id);

    // クライアントからのメッセージ受信
    socket.on("chat message", (msg) => {
        console.log(`メッセージ受信: ${msg}`);
        io.emit("chat message", msg); // すべてのクライアントにメッセージ送信
    });

    socket.on("disconnect", () => {
        console.log("ユーザーが切断しました:", socket.id);
    });
});

// サーバー起動
server.listen(3000, () => {
    console.log("🚀 WebSocketサーバーがポート3000で起動しました");
});