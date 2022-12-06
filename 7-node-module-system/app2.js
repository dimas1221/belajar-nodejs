const fs = require('fs')

const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


// rl.question('nama lengkap :', (username)=> {
//    rl.question('email :', (email)=>{
//     rl.question('password :', (password)=>{
//         rl.question('umur :', (umur)=>{
            
//             const registrasi ={username, email, password, umur}
//             const file = fs.readFileSync('data/register.json', 'utf8')
//             const regis = JSON.parse(file)

//             regis.push(registrasi)

//             fs.writeFileSync('data/register.json', JSON.stringify(regis))
//             console.log('thanks')

//             rl.close()
//         })
//     })
//    }) 
// })

const baca = fs.readFileSync('data/register.json(nama)', 'utf8')
console.log (baca)