var app =require('express')();
var http = require('http').Server(app);
var io =require('socket.io')(http);

app.get('/', function(req,res)
{
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket)
{
     console.log('Listening on *:3000');
});

http.listen(process.env.PORT, function()
{
    console.log('Listening on *:3000');
});



