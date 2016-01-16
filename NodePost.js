var http = require('http');
var queryString = require('querystring');

http
		.createServer(
				function(req, res) {

					var data = '';
					req.on('data', function(chunk) {
						data += chunk;
					});

					req
							.on(
									'end',
									function() {
										var userName = queryString.parse(data)['username'];
										res.writeHead(200, {
											'content-type' : 'text/html'
										});
										res.write("UserName: " + userName + " is registered successfully");
										res.end("<form action='http://localhost:7777/login' method='post'>Enter User Name: <input type='text' name='username' value=''/><br/><input type='submit' name='submit' value='submit'></form>");
									});
				}).listen(7777);

console.log("Server Started");