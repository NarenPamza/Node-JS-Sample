/**
 * http://usejsdoc.org/
 */
var file = require('fs');

file.readFile('input.txt',function(err,data){
	
	if(err)
		{
		return console.log(err);
		}
	console.log(data.toString());
});