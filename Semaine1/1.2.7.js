const crypto = require("crypto")

function sha256(chaine){
    return crypto.createHash("sha3-256", "hex").update(chaine).digest("hex")
}

