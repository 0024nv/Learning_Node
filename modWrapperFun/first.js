// Our node.js code behind the scene works in a wrapper function
// due to module wrapper our variable scope is private

// (function(exports,require,module,__filename,__dirname){
//     const fs = require('fs');
//     const name = 'Module wrapper function';
//     console.log(name);
// }
// )();
console.log(__filename);
console.log(__dirname);