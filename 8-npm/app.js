const validator = require('validator')

// npm untuk mewarnai text di terminal
const chalk = require('chalk')

// console.log(validator.isEmail('dhim12@gmail.com'))
// console.log(validator.isMobilePhone('081993434837', 'id-ID'))
const nama ='dimas'
const pesan = chalk`{bgGreen.black.bold lorem}, {bgBlue ipsum dolor} sit amet consterur adilicing. Nama ${nama}`
console.log(chalk.bgBlue('Hello'))
console.log(pesan)