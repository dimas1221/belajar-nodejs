// mengambil argumen dari comand line

// const { argv } = require("process")
const yargs = require("yargs")
const contacts = require('./contacts.js')

// membuat perintah comand line dg mengambil nilai index ke2
// const comand = process.argv[2]

// if(comand === 'add'){

// }else if(comand === 'remove'){

// }else if(comand === 'list'){

// }
//  membuat perintah comand line dg mengambil nilai index ke2 dengan yarg

// yargs.command('add', 'menambah data baru',()=>{},(argv)=>{
//     console.log(argv.nama)
// })

yargs.command({
    command: 'add',
    describe: 'menambah data contack',
    builder:{
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string',
        },
        noHp: {
            describe: 'nomor Hp',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.simpanContact(argv.nama, argv.email, argv.noHp)
        
    },
}).demandCommand() //otomatis menampilkan help

//view all nama and no contack
yargs.command({
    command: 'list',
    describe: 'menampilkan list nama dan no Hp',
    handler(){
        contacts.listContack();
    }
})

//menampilkan detail contack
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail contack berdasarkan nama',
    builder:{
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
handler(argv){
        contacts.detailContack(argv.nama);
    }
})

//hapus contack berdasarkan nama 
yargs.command({
    command: 'delete',
    describe: 'hapus contack berdasarkan nama',
    builder:{
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
handler(argv){
        contacts.deleteContack(argv.nama);
    }
})
yargs.parse()