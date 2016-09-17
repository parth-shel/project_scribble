//Function is a router between server.js and client for requests
/*module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index.html');
  });
  app.get('/about',function(req,res){
    res.render('about.html');
  });
}*/

var express = require('express')
, stylus = require('stylus')
, nib = require('nib')
//, sio = require('..//..//lib//socket.io'); //Original
, sio = require('socket.io');                //Updated

//app.listen(3000, function () {            //Original
app.listen(process.env.port, function () {  //Updated
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});
