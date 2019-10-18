
function chiffreCesar(chaine, decalage){
    newchaine = ""
    for(let i=0; i<chaine.length; i++){
        newchaine += String.fromCharCode(chaine[i].charCodeAt()+decalage);
    }
    return newchaine
}

function vigniere(message, cle){
    messageSansEspace = message.replace(" ", "")
    newchaine = ""
    compteur = 0
    while(compteur <messageSansEspace.length){
        for(let i=0 ; i<cle.length; i++){
            newchaine+= chiffreCesar(messageSansEspace[compteur],(cle[i].charCodeAt()-65))
            compteur+= 1   
        }
        newchaine+=" " 
    }
    return newchaine   
}

function dechiffre(motchiffre, cle){

}

console.log(vigniere("VOICIUNMESSAGE", "ABC"))
//console.log(defchiffre("VPKCJWNNGSTCGF","ABC"))