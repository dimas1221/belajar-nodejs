const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');

const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// ika folder data tdk ada maka akn di buat dg code di bawah
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}
// membuat file json jika belum ada file a
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    // membuat file dengan nilai array kosong
    fs.writeFileSync(dataPath, '[]','utf-8')
}

const p1 = () =>{
    return new Promise((resolve, rejects)=> {
        rl.question('masukan nama anda : ', (nama) => {
            resolve(nama)
        })
    })
}

const p2 = () =>{
    return new Promise((resolve, rejects)=> {
        rl.question('masukan nama anda : ', (email) => {
            resolve(email)
        })
    })
}

// fungsi utama untuk mengolah pertanyaan
const main = async () =>{
    const nama = await p1()
    const email = await p2()

    const contact ={ nama, email}
    const fille = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(fille)

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log ('terimaksih sudah mengisi data')
    rl.close()
}

main()
// rl.question('masukan nama anda : ', (nama) => {
//     rl.question('masukan no hp :', (noHp) =>{
//         const contact ={ nama, noHp}
//         const fille = fs.readFileSync('data/contacts.json', 'utf8')
//         const contacts = JSON.parse(fille)

//         contacts.push(contact)

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

//         console.log ('terimaksih sudah mengisi data')
//         rl.close()
//     })
// })
