// import { Server } from "socket.io";
// import express from "express";
// const app = express();
// const PORT = process.env.PORT || 3001;

// const httpServer = app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);
//   //show a welcome message when user join chat
//   socket.emit("message", "Hello, welcome to the chat!");
//   // show the user who has joined the chat
//   socket.broadcast.emit("message", `${socket.id.substring(0, 5)} has joined!`);

//   //if any user disconnect its also show that he is disconnected
//   socket.on("disconnect", () => {
//     io.emit("message", `${socket.id.substring(0, 5)} has left!`);
//   });

//   // show activity like typing and stop typing
//   socket.on("activity", (name) => {
//     socket.broadcast.emit("activity", name);
//   });

//   //send message
//   socket.on("message", (data) => {
//     io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
//   });
// });

import { Server } from "socket.io";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;
const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
});
