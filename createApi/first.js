const http = require('http');

const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/api.json`,(err)=>{
    console.log("readed successfully");
})
const objData = JSON.parse(data);

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("This is About page");
    }
    else if(req.url==="/contact"){
        res.end("This is contact page");
    }
    else if(req.url==="/api"){
        res.writeHead(200,{"context-type":"appication/json"})
        // res.end(objData[0].name);
        res.end(data);

    }
    else{
        res.writeHead(404,{"context-tye":"text/html"});
        res.end("<h1> Error 404! </h1>");
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to port: 8000');
})