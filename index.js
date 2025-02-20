const socket = require("socket.io-client")("http://localhost:3000", {
    reconnection: true,
    transports: ["websocket"]
});

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// 送信ボタンクリック時の処理
sendBtn.addEventListener("click", () => {
    sendMessage();
});

// Enterキーで送信
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// メッセージ送信関数
function sendMessage() {
    const message = input.value.trim();
    if (message) {
        socket.emit("chat message", message);
        input.value = "";
    }
}

// メッセージを受信して表示
socket.on("chat message", (msg) => {
    const msgElement = document.createElement("p");
    msgElement.textContent = msg;
    messagesDiv.appendChild(msgElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// WebSocket デバッグ
socket.on("connect", () => console.log("WebSocketに接続しました！"));
socket.on("disconnect", () => console.log("WebSocketが切断されました！"));
socket.on("connect_error", (err) => console.error("WebSocket接続エラー:", err));