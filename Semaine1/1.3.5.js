const crypto = require("crypto")
var RIPEMD160 = require('ripemd160')
const Base58 = require('base58')

function sha256(chaine){
    //Convertir value en décimal
    entreBuffer = Buffer.from(chaine)
    return crypto.createHash("sha3-256").update(entreBuffer).digest()
}
//Alea de 32 octets
let alea = crypto.randomBytes(32)
//premier hash en SHA-256 sur 32 octects 
//Second Hash en RIPEMD160 sur 20 octets
let hash160 = new RIPEMD160().update(sha256(alea)).digest()



let prefixe
let val
let fin
if(process.argv[2] == "-t"){
    prefixe = "0x6f"+hash160.toString("hex")
    val = sha256(sha256(prefixe))
    fin = prefixe+val.toString("hex").substr(0,8)
}else{
    prefixe = "0x00"+hash160.toString("hex")
    val = sha256(sha256(prefixe))
    fin = prefixe+val.toString("hex").substr(0,8)
}



console.log(alea)
console.log(hash160)
console.log(prefixe)
console.log(val.toString("hex"))
console.log(val.toString("hex").substr(0,8))
console.log(fin)
console.log(Buffer.from(fin,"binary"))
console.log(Base58(Buffer.from(fin,"binary")))