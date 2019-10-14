const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Deviner le numero entre 0 et 10")
let solution = Math.floor(Math.random()*10+1)
rli.on("line",(userinput)=>{
    console.log(`Vous avez entré: ${userinput}, essaye encore (solution vaut ${solution})!`)
    if (userinput == solution){
        console.log("Trouvé !")
        rli.close()
    }
    if(userinput>10){
        console.log("Attention le nombre est compris entre 0 et 10 uniquement")
    }
    if(userinput>solution){
        console.log("Indice, la solution est plus petit que",userinput)
    }
    if(userinput<solution){
        console.log("Indice la solution est plus grande que",userinput)
    }
})