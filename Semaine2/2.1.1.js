function calculerDifficulte(cible){
    return ((Math.pow(2,16)-1 )*Math.pow(2 ,208))/cible
}

function calculerDifficule(bits){
    let nombrebits = bits.substring(2,4)
    let tailleajust = (bits.length-2)/2
    let chaine = bits.replace(nombrebits,"")
    let tailletotale = parseInt(nombrebits,16)
    for(let i=0 ;i<=tailletotale-tailleajust; i++){
        chaine+= "00"
    }
    let nombre = parseInt(chaine, 16)
    return calculerDifficulte(nombre)
}


function blocReajustement(hauteurBloc){
    if(hauteurBloc%2016==0){
        return true
    }
    return false
}


function recompenseBloc(hauteurBloc){
    
}
console.log(blocReajustement(556416))