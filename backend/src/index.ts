import { Server, Socket } from "socket.io";
import http from "http";

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

type ExtendSocket = Socket & {
    username?: string;
}

io.use((socket: ExtendSocket, next: (err?: any) => void) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }

  socket.username = username

  next();
});

io.on("connection", (socket) => {
    const users = [];
    for (let [id, socket] of io.of('/').sockets) {
        users.push({
            userID: id,
            username: (socket as ExtendSocket).username
        })
    }

    socket.emit('users', users);

    socket.broadcast.emit('user connected', {
        userID: socket.id,
        username: (socket as ExtendSocket).username
    }); 

    socket.on('private message', ({content, to}) => {
        socket.to(to).emit('private message', {
            content,
            from: socket.id
        })
    });
});

httpServer.listen(4000, 'localhost', () => {
    console.log('Server running at http://localhost:4000/');
});

