// console.log('hello word')

//function
function cetakNama(nama){
    return ` hallo  saya ${nama}`;
}

//variabel
const PI = 3.14

//object
const mhs ={
    nama : 'dody',
    umur : '13',

    cetakMhs(){
        return `halo nama saya ${this.nama} dan saya ${this.umur} tahun.`
    },
}

//class
class Orang {
    constructor() {
        console.log('objk orng tlkkjjj')
    }
}
//jiak cuma butuh 1
// module.exports =cetakNama

//jika butuh banyak
// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mhs = mhs
// module.exports.Orang = Orang

//atau
// module.exports = {
//     cetakNama: cetakNama,
//     PI : PI,
//     mhs : mhs,
//     Orang: Orang,
// }

//atau
module.exports = {
    cetakNama,
    PI,
    mhs,
    Orang,
}