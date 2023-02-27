const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require('./config/db')

const topic = require('./routes/api/topic')
const chat = require('./routes/api/chat')

connectDB()
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("already_joined", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(express.json({
  extended:false
}))

app.use('/api/topic', topic)
app.use('/api/chat', chat)

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
