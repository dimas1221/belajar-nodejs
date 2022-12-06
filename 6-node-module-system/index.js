// console.log('hello')

// const cetakNama = (nama)=> `Hi, nama saya ${nama}`

// console.log(cetakNama('dimas'))

// console.log(window)

// Require memanggil file js dari file lain
// const fs =  require('fs') //core module
// const cetakNama = require ('./coba') //import lokal module
// const moment = require('moment') //third party module

const coba = require('./coba')


// console.log('hello ')
console.log (coba.cetakNama('dim'), coba.PI, coba.mhs.cetakMhs(), new coba.Orang())