
function firstpalindrome(chaine){
    for (let i = 0; i < chaine.length/2; i++) {
        console.log(chaine[i])
        if(chaine[i] != chaine[(chaine.length-(i+1))]){
            console.log("Ce n'est pas un palindromme")
            return false
        }
    }
    return true
}

function palindrome(mot){
    if( (mot.length == 0) || (mot.length == 1) ){
        return true
    }else if(mot[0] == mot[mot.length-1]){
        return palindrome( mot.substring(1, (mot.length-1)) )
    }
    return false
    
}

function estPalindrome(chaine){
    if(palindrome(chaine)){
        console.log(chaine,"est un palindrome")
    }else{
        console.log(chaine,"n'est PAS un palindrome")
    }
}
console.log(palindrome("ANNA"))