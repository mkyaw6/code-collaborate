//initializing
const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;

//socket.io initializing
const socket = require('socket.io');

//server setup
const server = app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})

//socket connection
const io = socket(server);

//holds data for all users currently active
var allUsers = {};
io.on('connection', (socket) => {
    var id = socket.id;
    //sends updated code to all users
    socket.on('codeUpdate', (data) =>{
        io.sockets.emit('codeUpdate', data);
    })
    //sends updated user list to all users
    socket.on('newUser', (data) => {
        allUsers[id] = data;
        io.sockets.emit('newUser', allUsers);  
    })
    //removes disconnected user and sends updated user list to all users
    socket.on('disconnect', () => {
        delete allUsers[id];
        io.sockets.emit('newUser', allUsers);
      });
});

