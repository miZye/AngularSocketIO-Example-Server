var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, () => {
    console.log('listening on *:3000');
})

io.on('connection', (socket) => {

    console.log("user connected")


    socket.on("message", (msg) => {
        console.log(msg)
        io.emit('messagechat', msg)
    })

    socket.on('disconnect', () => {
        console.log("user disconnected")
    })
})
