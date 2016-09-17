var express = require('express')
, stylus = require('stylus')
, nib = require('nib')
//, sio = require('..//..//lib//socket.io'); //Original
, sio = require('socket.io');                //Updated
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

