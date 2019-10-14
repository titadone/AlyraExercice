const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Deviner le numero entre 0 et 10")
let solution = Math.floor(Math.random()*10+1)
rli.on("line",(userinput)=>{
    console.log("Vous avez entré:",userinput, "essaye encore !")
    if (userinput == solution){
        console.log("Trouvé !")
        rli.close()
    }
})