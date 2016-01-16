var http = require('http');

http.createServer(function(req, res) 
{
	res.write("Welcome");
	res.end();
}).listen(7777);
console.log("server started");