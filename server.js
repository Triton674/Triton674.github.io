// Tout d'abbord on initialise notre application avec le framework Express 
// et la bibliothèque http integrée à node.
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// On gère les requêtes HTTP des utilisateurs en leur renvoyant les fichiers du dossier 'public'
app.use("/", express.static(__dirname + "/public"));

var server = require('http').createServer(app).listen(8080);

const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const index = '/index.html';
http.listen(3000, function(){
  console.log('Server is listening on *:3000');
});

let users = {} ;
var i = 0;
io.on('connection', function(socket){

	socket.on('create', function(data) {

    	socket.join(data.room);
    	socket.room = data.room
    	socket.username = data.username
    	socket.isynopsis = data.isynopsis
    	socket.idepixel = data.idepixel
    	socket.idezoom = data.idezoom
    	socket.ideflou = data.ideflou
    	socket.iplayermax = data.iplayermax
    	socket.ipuzzle = data.ipuzzle
    	socket.themeselected = data.themeselected

    	console.log(socket.id)
    	users[socket.id] = socket
    	console.log('create',data.room);
    	sendUsers(socket);
    });
    
    socket.on('join', function(data) {
    	console.log('joindata',data)
    	if(!io.sockets.adapter.rooms.get(data.room)){
    		console.log('notfound')
    		socket.emit('roomnotfound')
    		return
    	}
    	socket.username = data.username
    	socket.room = data.room
    	socket.room = data.room
    	socket.username = data.username
    	socket.isynopsis = data.isynopsis
    	socket.idepixel = data.idepixel
    	socket.idezoom = data.idezoom
    	socket.ideflou = data.ideflou
    	socket.iplayermax = data.iplayermax
    	socket.ipuzzle = data.ipuzzle
    	socket.themeselected = data.themeselected
    	console.log(socket.id)
    	users[socket.id] = socket
    	socket.join(data.room);

    	sendUsers(socket);
    	/*if(users.length === 0){
			hostPlayer = socket;
			users.push(socket);
		}else{
			users.push(socket);
		}*/
    });

	socket.on('username', (username) =>{
		socket.username = username;
		console.log('username',username)
		if(users.length === 0){
			hostPlayer = socket;
			users.push(socket);
		}else{
			users.push(socket);
		}
		sendUsers();
		
	})

  
  socket.on('disconnect', function(){
    console.log(`${socket.username} has left the game`)

		delete users[socket.id]
		sendUsers(socket);
  });
  socket.on('chat-message', function (message) {
    console.log('message : ' + message.text);
  });
});

function sendUsers(socket){
	if(!socket.room){
		return
	}
	const usernames = []
    	io.sockets.adapter.rooms.get(socket.room).forEach((user) =>{
    		usernames.push(users[user].username)
    	})

	io.to(socket.room).emit('users', usernames);
	
}


/*


io.on('connection', (socket) =>{
	console.log('A new user joined the game');

	socket.on('username', (username) =>{
		console.log(username);
		socket.username = username;

		sendUsers();
	})

	socket.on('disconnect', () =>{
		console.log(`${socket.username} has left the game`)

		users = users.filter((user) =>{
			return user !== socket;
		});
		sendUsers();
	});

	socket.on('line', (data) =>{
		socket.broadcast.emit('line', data);
	});

});
function sendUsers(){
	io.emit('users', users.map((user) =>{
		return{
			username: user.username,
			active: user === currentPlayer
		}
	}));
}*/