const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Devinez un nombre entre 1 et 100")
let solution = Math.floor(Math.random()*100+1)
console.log("DEBUG: ",solution)
rli.on("line",(userinput)=>{
    if (userinput == solution){
        console.log("Exact !")
        rli.close()
    }
    let difference = userinput-solution
    if(difference>10){
        console.log("C'est beaucoup moins")
    }
    if((difference>=6) && (difference<=10)){
        console.log("C'est un peu moins")
    }
    if(difference >0 && difference <=5){
        console.log("C'est un tout petit peu moins")
    }
    if(difference <-10){
        console.log("C'est beaucoup plus")
    }
    if(difference <=-6 && difference>=-10){
        console.log("C'est un peu plus")
    }
    if(difference >= -5 && difference<0){
        console.log("C'est un tout petit peu plus")
    }
})