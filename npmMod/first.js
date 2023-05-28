// Downgraded version 4.1.2

const chalk = require('chalk');
const validator = require('validator');
// CHALK module🌞🌈
console.log(chalk.blue('Hello world!'));

console.log(chalk.bgCyan('hello Nik'));

console.log(chalk.bold('hello Nik'));

const txt = chalk.blue('Vin');
console.log(txt);


console.log(chalk.green.underline('Success'));
console.log(chalk.green.underline.inverse('Success'));


// VALIDATOR🚨🚩

// checking email is valid or not 
const eml = validator.isEmail('nikhil@mailo.com');
console.log(eml?chalk.green(eml):chalk.red(eml));
console.log(eml);

