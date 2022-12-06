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

const pertanyaan = (pertanyaan) =>{
    return new Promise((resolve, rejects)=> {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        })
    })
}

const simpanContact = (nama, email, noHp) =>{
    const contact ={ nama, email, noHp}
    const fille = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(fille)

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log ('terimaksih sudah mengisi data')
    rl.close()
}

module.exports = {pertanyaan, simpanContact}