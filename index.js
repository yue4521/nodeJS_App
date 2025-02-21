const socket = require("socket.io-client")("http://localhost:3000", {
    reconnection: true, // 接続が切れた場合に自動的に再接続する
    transports: ["websocket"] // WebSocketプロトコルを使用
});

// メッセージ表示用の要素を取得
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// 送信ボタンがクリックされたときの処理
sendBtn.addEventListener("click", () => {
    sendMessage();
});

// Enterキーが押されたときの処理
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") { // Enterキーが押された場合
        sendMessage();
    }
});

// メッセージ送信関数
function sendMessage() {
    const message = input.value.trim(); // 空白を削除したメッセージを取得
    if (message) { // メッセージが空でない場合に送信
        console.log(`📤sending: ${message}`); // 送信メッセージをコンソールに表示
        socket.emit("chat message", message); // サーバーにメッセージを送信
        input.value = ""; // 入力欄をクリア
    }
}

// メッセージを受信して画面に表示
socket.on("chat message", (msg) => {
    console.log(`📩receiving: ${msg}`); // 受信メッセージをコンソールに表示
    const msgElement = document.createElement("p"); // 新しい<p>要素を作成
    msgElement.textContent = msg; // 受信したメッセージを設定
    messagesDiv.appendChild(msgElement); // メッセージリストに追加
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // 最新のメッセージが見えるようにスクロール
});

// WebSocket接続状態のデバッグ用ログ
socket.on("connect", () => console.log("WebSocketに接続しました！")); // 接続成功時のログ
socket.on("disconnect", () => console.log("WebSocketが切断されました！")); // 切断時のログ
socket.on("connect_error", (err) => console.error("WebSocket接続エラー:", err)); // 接続エラー発生時のログ
