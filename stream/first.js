const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // normal method
    // fs.readFile('abc.txt','utf-8',(err,data)=>{
    //    console.log(data);
    //     res.end(data.toString());
    // })


    // Streaming method

    const rstream = fs.createReadStream("abc.txt");

    // rstream.on("data",(chunkData)=>{
    //     console.log(chunkData.toString());
    //     res.write(chunkData);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("Page not found!");
    // })


    // OR 
    // PIPE :😍😍😍😍😍
    rstream.pipe(res);
    rstream.on("error",(err)=>{
            console.log(err);
            res.end("Page not found!");
        })
        
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listenning to port 8000");
})