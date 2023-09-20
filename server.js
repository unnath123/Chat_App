const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server); // this io should be instance that is associated with http and express
const PORT = 8880; 

io.on("connection",(socket)=>{
    socket.on("secret message",(data)=>{
        io.emit("secret message",data)
    })
    // console.log(socket.id);
})

app.use(express.static('public'));
server.listen(PORT);