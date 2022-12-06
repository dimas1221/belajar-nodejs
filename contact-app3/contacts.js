const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');
const chalk = require('chalk')
const validator = require('validator')



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

// fungsi load contack
const loadContack = () =>{
    const fille = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(fille)
    return contacts
}

const simpanContact = (nama, email, noHp) =>{
    const contact ={ nama, email, noHp}
    // const fille = fs.readFileSync('data/contacts.json', 'utf8')
    // const contacts = JSON.parse(fille)
    const contacts = loadContack()
    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat){
        console.log(chalk.red.inverse.bold('contak sudah ada'))

        // agar tidk lanjut kebawah
        return false
    }

    // cek email
    if (email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('noHp tidak valid'))
            return false
        }
    }
    // cek nohp
    if(!validator.isMobilePhone(noHp, 'id-ID')){
        console.log(chalk.red.inverse.bold('email tidak valid'))
        return false
    }
    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log ('terimaksih sudah mengisi data')

}


const listContack = () =>{
    const contacts = loadContack()
    console.log(chalk.cyan.inverse.bold('daftar contack :'))
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} -- ${contact.noHp}`)
    })
}

const detailContack = (nama) =>{
    const contacts = loadContack()
    //toLowerCase() untuk menyamakan huruf kecil dan besar agar di baca huruf kecil semua
    const contact = contacts.find(
        (contact)=> contact.nama.toLowerCase() === nama.toLowerCase()
        )

        if(!contact) {
            console.log(chalk.red.inverse.bold(`${nama} nama tidak di temukan`))
            return false
        }

        console.log(chalk.blue.inverse.bold(contact.nama))
        console.log(chalk.blue.inverse.bold(contact.noHp))
        
        if (contact.email){
        console.log(chalk.blue.inverse.bold(contact.email))
        }
}

const deleteContack= (nama) => {
    const contacts = loadContack()

    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !==nama.toLowerCase()
    )

    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} nama tidak di temukan`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))

    console.log (`data contact ${nama} telah di hapus`)
}

module.exports = { simpanContact, listContack, detailContack, deleteContack}