
function factorielle(n){
    if(n>1){
        return n*factorielle(n-1)
    }else{
        return 1
    }
}

console.log(factorielle(process.argv[2]))