const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==="/"){
        res.end("Hello! from About Page");
    }
    else if(req.url==="/contact"){
        res.end("Hello! from Contact Page");
    }
    else{
        res.writeHead(404,{ "Content-type":"text/html" });
        res.end("<h1>Error 404</h1>");
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening t0 port: 8000')
})