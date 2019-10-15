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
    return crypto.createHash("sha256").update(chaine).digest("hex")
}

function condensatCeption(chaine){
    return sha256(sha256(chaine))
}

console.log("Condensat:", pseudohachage(process.argv[2]))
console.log("Condensat:", sha256(process.argv[2]))
console.log("Condensat:", condensatCeption(process.argv[2]))