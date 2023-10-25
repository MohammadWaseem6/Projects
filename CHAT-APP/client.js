const chatbox = document.getElementById("chat-content");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
const serverUrl = "ws://localhost:8080"; // Replace with your WebSocket server URL
const socket = new WebSocket(serverUrl);

socket.addEventListener("open", (event) => {
  console.log("Connected to the server");
});

socket.addEventListener("message", (event) => {
  const message = document.createElement("div");
  message.textContent = event.data;
  chatbox.appendChild(message);
});

sendButton.addEventListener("click", (event) => {
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
});
