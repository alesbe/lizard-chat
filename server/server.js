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

    socket.on('enterChat', (req) => {
        console.log(req.name);
    })
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