function calculerDifficulte(cible){
    return ((Math.pow(2,16)-1 )*Math.pow(2 ,208))/cible
}

function calculerDifficule(bits){
    let nombrebits = bits.substring(2,4)
    let taille = bits.length
    console.log(nombrebits)
    console.log((taille-2)/2)
    let tailletotale = parseInt(nombrebits,16)
    for(i=0 ;i<tailletotale; i++)
    console.log("taille ",parseInt(nombrebits,16))
    
    //let nombre = parseInt(, 16)
}


calculerDifficule("0x1C0ae493")