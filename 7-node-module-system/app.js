// core module

// file sistem
const fs = require('fs');

// menuliskan string ke file (synchronus)
// try {
// fs.writeFileSync('data/test.txt', 'hello word secara sincraonus')
// } catch (e){
//     console.log(e)
// }

// menuliskan string ke file (asynchronus)
// fs.writeFile('data/test.txt', 'hello wors scr asincronus', (e) => {
//     console.log(e)
// })

// membaca isi file secara syncronus
// const data = fs.readFileSync('data/test.txt', 'utf-8')

// console.log(data)

// membaca isi file secara syncronus
// fs.readFile('data/test.txt', 'utf-8', (err, data) =>{
//     if (err) throw err;
//     console.log(data)
// })

// readline
const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan no hp :', (noHp) =>{
        const contact ={ nama, noHp}
        const fille = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(fille)

        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

        console.log ('thanks u')
        rl.close()
    })
})
