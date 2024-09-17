// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var urlParts = url.parse(request.url);
    var path = urlParts.pathname;
    console.log(path);

    // If the request is for the root directory
    if (path == '/') {
        fs.readFile('./index.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
    // If the request is for the comments page
    else if (path == '/comments') {
        fs.readFile('./comments.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
    // If the request is for the comments JSON
    else if (path == '/comments.json') {
        fs.readFile('./comments.json', function(error, data){
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(data);
            response.end();
        });
    }
    // If the request is for the comments JSON
    else if (path == '/comments.js') {
        fs.readFile('./comments.js', function(error, data){
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            response.write(data);
            response.end();
        });
    }
});

server