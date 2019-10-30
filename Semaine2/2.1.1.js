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
    let coef = Math.floor(hauteurBloc/210000)
    return (50/(Math.pow(2,coef)))
}

function bitcoinsEnCirculation(hauteurBloc){
    let reste = hauteurBloc
    let total = 50
    let i = 0
    while(reste>0){
        if((reste/209999)>1){
            total += 209999*(50/Math.pow(2,i))
            reste -= 209999
        }else{
            total += reste *(50/Math.pow(2,i))
            reste = 0 
        }
        i++
    }
    return total
}

console.log(bitcoinsEnCirculation(0))
//50
console.log(bitcoinsEnCirculation(1))
//100
console.log(bitcoinsEnCirculation(210000))
//10500025
console.log(bitcoinsEnCirculation(2100001))
//20979492.28515624

console.log(210000*50)