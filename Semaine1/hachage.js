const crypto = require("crypto")

function pseudohachage(chaine){
    let condensat = 0
    for (let i = 0; i<chaine.length; i++){
        //hash sur 16bit
        condensat += (chaine.charCodeAt(i) * 100**(i+1)) % (2** 256)
    }
    return condensat.toString("16")
}


function sha256(chaine){
    return crypto.createHash("sha3-256", "hex").update(chaine).digest("hex")
}

function doubleHash(chaine){
    //changé le message en decimal
    entreBuffer = Buffer.from(chaine)
    hash = crypto.createHash("sha3-256").update(entreBuffer).digest()

    return crypto.createHash("sha3-256").update(hash).digest()
}

function cleCondensat(chaine){
    return crypto.createHash("sha3-256").update(chaine).digest().substring(0,8)
}

function verif(cle, message){
    if(cleCondensat(message) == cle){
        return true
    }else{
        return false
    }
}

//Founction qui donne la chaine dont le hash commence par 66
function randomHash(){
    //info
}

console.log("Condensat de Condensat:", doubleHash(process.argv[2]))
console.log("Condensat:", sha256(process.argv[2]))
console.log("Clé de Condensat:", cleCondensat(process.argv[2]))
console.log("Verification Message:", verif("9169bf3e","pomme"))
