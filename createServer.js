var http=require("http");
var fs = require('fs');

var provideResponse=function(req,res){
	console.log(req.url.split("&")[0].slice(15),req.url.split("&")[1])
	var filePath = '.' + req.url;

	(filePath == './') && (filePath = './index.html');

	fs.readFile(filePath, function(error, content) {
		if (error) {
			res.writeHead(404)
			res.end("<html><center><h2>404:Not Found</h2></center></html>")
		};
        res.end(content);
	});
};

http.createServer(provideResponse).listen(1111);

// server.listen(3000,function(){
// 	console.log("server running on port :"+ 3000);
// });