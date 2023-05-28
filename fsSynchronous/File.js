const fs = require('fs');

//  To create new folder
// fs.mkdirSync('created');

// Creating a new file 🎫
// fs.writeFileSync('File.txt','New File created');

// overWritting prev created file 🎫
// fs.writeFileSync('File.txt','Successfully overwrited');

// Appending in file    🎏
// fs.appendFileSync('File.txt','I am appended value');

// Reading file 📕
// Note: Node Js include additional data types called Buffer
// Buffer is used to store binary data while reading a file or receving packets over network
// const buf_data = fs.readFileSync('File.txt');
// console.log(`Buffer data is `);
// console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(`Original data is : ${org_data}`);

// Reading without Buffer
// const data = fs.readFileSync("FileRe.txt",'utf-8');
// console.log(data);

// Rename File 🧧
// fs.renameSync('File.txt','FileRe.txt')

// Delete File
// fs.unlinkSync('File_name');

// Delete Folder
// fs.rmdirSync('NewFile');
