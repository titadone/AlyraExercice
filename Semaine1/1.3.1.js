
function chiffreCesar(chaine, decalage){
    newchaine = ""
    for( let i =0; i<chaine.length; i++){
        newchaine += String.fromCharCode(chaine[i].charCodeAt()+decalage);
    }
    return newchaine
}

console.log(chiffreCesar("abc",1))