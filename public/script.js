
// var socket = io();
// let username = "";
// const btn = document.getElementById("join-chat");
// const usernameInput = document.getElementById("username-input");
// const usernameForm = document.querySelector(".form-username");
// const chatroomContainer = document.querySelector(".chatroom-container");
// const messageInput = document.getElementById("message-input");
// const sendBtn = document.getElementById("send-button");
// const messagesContainer = document.querySelector(".messages");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//  username = usernameInput.value;
//   //   this will make sure username is not empty
//   if (username) {
//     usernameForm.style.display = "none";
//     chatroomContainer.style.display = "block";
//   }
// });

// sendBtn.addEventListener("click",(event)=>{
//     event.preventDefault();
//     let data= {
//         d:socket.id,
//         username:username,
//         message: messageInput.value
//     }
//     socket.emit("secret message",data)
//     appendMessage(data,"sent")
// })

// socket.on("secret message",(data)=>{
//     if(socket.id!==data.id){
//         appendMessage(data,"received")
//     }
   
// })

// function appendMessage(data, type){
//     let SentDiv = document.createElement("div");
//     SentDiv.innerText = data.username+": "+data.message;
//     if(type==="sent"){
//         console.log("this is working")
//         SentDiv.className = "message sent";
//     }
//     else{
//         console.log("here also it came")
//         SentDiv.className = "message";
//     }
//     messagesContainer.append(SentDiv)
//     messageInput.value = ""
// }




var socket = io();
let username = "";
const btn = document.getElementById("join-chat");
const usernameInput = document.getElementById("username-input");
const usernameForm = document.querySelector(".form-username");
const chatroomContainer = document.querySelector(".chatroom-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");
const messagesContainer = document.querySelector(".messages");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  username = usernameInput.value;
  //   this will make sure username is not empty
  if (username) {
    usernameForm.style.display = "none";
    chatroomContainer.style.display = "block";
  }
});

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let data = {
    id: socket.id,
    username: username,
    message: messageInput.value,
  };
  socket.emit("secret message", data);
  appendMessage(data, "sent");
});

socket.on("secret message", (data) => {
  if (data.id !== socket.id) {
    appendMessage(data, "recieved");
  }
});

function appendMessage(data, type) {
  var msgDiv = document.createElement("div");
  msgDiv.innerText = `${data.username} : ${data.message}`;
  if (type === "sent") {
    msgDiv.setAttribute("class", "message sent");
  } else {
    msgDiv.setAttribute("class", "message");
  }
  messagesContainer.append(msgDiv);
  messageInput.value = "";
}