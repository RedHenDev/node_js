
// First, import the express module.
// This variable gives us access, then, to
// the express framework (library).
var express = require('express');

// The above variable stores a js function call, which
// creates an express application.

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));



// Now that we've intalled socket.io (npm install socket.io --save), we can grab it's framework.
var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    // Print the id of every new connection.
    console.log('New connection = ' + socket.id);
}


// Create folder for project.
// Create empty .js file ready for server code.
// Run command prompt, and navigate to
// project folder's directory (cd ... ls);
// Write npm init to create .json file.
// Now, npm install express --save.
// --save means 'save express as a module associated
// with this project'. See dependencies change to .json.


//const http = require('http');
//
////const hostname = '127.0.0.1';
//const hostname = '108.167.172.163';
////const port = 3000;
//const port = 21;
//
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello, Prof. Falken\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});