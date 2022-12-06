
const contacts = require('./contacts.js')
// fungsi utama untuk mengolah pertanyaan
const main = async () =>{
    const nama = await contacts.pertanyaan('masukan nama :')
    const email = await contacts.pertanyaan('masukan email :')
    const noHp = await contacts.pertanyaan('masukan noHp :')

    contacts.simpanContact(nama, email, noHp)
}

main()

