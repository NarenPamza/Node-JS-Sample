var http = require('http');
var queryString = require('querystring');
var url = require('url');

http.createServer(function (req,res) {
	
	var query=url.parse(req.url).query;
	var userName = queryString.parse(query)['username'];
	res.writeHead(200,{'content-type' : 'text/html' });
	res.write("UserName: " + userName + " is registered successfully");
	res.end();
}).listen(7777);

console.log("Server Started");