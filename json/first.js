//  JSON : Javascript object notation
//  is lightweight format for storing and transporting data
//  is often used when data is send from server to web


const obj = {
    name:'nikhil',
    age:20,
    job:"student"
}

// Converting object to JSON:   JSON.stringify()
// const jsonData = JSON.stringify(obj);
// console.log(jsonData);


// // Converting  JSON to object:   JSON.parse()
// const jsonToObj = JSON.parse(jsonData);
// console.log(jsonToObj);


// 1.convert obj to json
// 2.add to another file
// 3.readfile
// 4.convert back to json object


const jsonData = JSON.stringify(obj);
const fs = require("fs");
fs.writeFile('abc.json',jsonData,(err)=>{
    console.log("Written Successfully");
})

// fs.readFile('abc.json','utf-8',(err,data)=>{
//     console.log(data); 
//     const jsonObj = JSON.parse(data);
//     console.log(jsonObj);
// })


