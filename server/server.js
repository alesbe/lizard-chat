const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, { cors: { origin: "*" } });

// Express config
app.use(cors());
app.get('/', function (req, res) {
  res.send('Lizard Chat').status(200);
})

// Socket.IO config
io.on('connection', (socket) => {
    console.log("New client connected!");

    /**
     * Executed when a client enters a room
     * 
     * Joins user to req.room and emits the name of the new user to all the room users
     */
    socket.on('clientJoin', (req) => {
        console.log(`Moving user ${req.username} to room ${req.room}`);

        socket.join(req.room);

        io.to(req.room).emit('newRoomUser', { username: req.username })
    })

    // Dissconnect
    socket.on('dissconnect', () => {
        console.log("Client disconnected");
    })
});

// Server initialization
const port = process.env.PORT || 8000;
server.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server running at port ${port}`)
});