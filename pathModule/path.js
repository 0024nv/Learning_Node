const path = require('path');

// directory name
console.log(path.dirname('D:\zzz_MERN/NodeJS/pathModule/path.js'));

// Extension name
console.log(path.extname('D:\zzz_MERN/NodeJS/pathModule/path.js'));

// File name
console.log(path.basename('D:\zzz_MERN/NodeJS/pathModule/path.js'));


//  To get all above 🚩
const all = path.parse('D:\zzz_MERN/NodeJS/pathModule/path.js');
console.log(all);
console.log(`name : ${all.name}`);