// http.createServer() method includes request and response as parameter

// the request object can be used to get information about the current http request
// the response object can be used to send a response for a current Http request

// If the response from the http server is suppposed to be displayed as HTML , we shound 
// include an http header with the correct content type


const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Hello frnds from other  side!');
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to 8000 port');
})