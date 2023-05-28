const http = require("http");
const fs = require('fs');
var requests = require("request");


const homeData = fs.readFileSync('index.html', 'utf-8');
// console.log(homeData);

const replaceVal =(hmData,orgVal)=>{
    let temp = hmData.replace("{%location%}",orgVal.name);
    temp = temp.replace("{%country%}",orgVal.sys.country);
    temp = temp.replace("{%temp%}",orgVal.main.temp);
    temp = temp.replace("{%tempMin%}",orgVal.main.temp_min);
    temp = temp.replace("{%tempMax%}",orgVal.main.temp_max);
    temp = temp.replace("{%tempStatus%}",orgVal.weather[0].main);
    return temp;

}
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&appid=8da200c11d71c230bc0b03bf0fed7656")
            .on("data", (chunkData) => {
                const objData = JSON.parse(chunkData);
                const arrData = [objData];
                // console.log(chunkData);
                // console.log(arrData);
                // console.log(arrData[0].main.temp)
                	
                const realTimeData = arrData.map((val)=>{
                   return replaceVal(homeData,val);
                }).join("");
                //  join is to convert our final array data 
                console.log(realTimeData);
                res.write(realTimeData)
            })
            .on("end", () => {
                res.end();
            })
            .on("error", (err) => {
            console.log(err);
            res.end("No page found");
        })
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("port: 8000");
})