var http = require('http');
var server = http.createServer(function (req,res){
    if  (req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> this is home page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>its about about</h1>')
        res.end();
    }
    else if (res.url=="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> its a contact page</h1>')
        res.end();
    }
});
        server.listen(3434);
        console.log("run successfully");