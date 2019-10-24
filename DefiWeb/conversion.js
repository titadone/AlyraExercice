
function conversionHexToDec(chaine){
    let resultat = 0
    let tableau = [["1",1],["2",2],["3",3],["4",4],["5",5],["6",6],["7",7],["8",8],["9",9],["A",10],["B",11],["C",12],["D",13], ["E",14],["F",15],["a",10],["b",11],["c",12],["d",13], ["e",14],["f",15]]
    let hexa = new Map(tableau)
    for (let i = 0; i < chaine.length; i++) {
        resultat+= hexa.get(chaine[chaine.length-1-i])*(Math.pow(16,i));
    }
    return resultat
}

function conversionDecToHex(nombre){
    let tableau = [[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"],[9,"9"],[10,"A"],[11,"B"],[12,"C"],[13,"D"], [14,"E"],[15,"F"]]
    let hexa = new Map(tableau)
    let resultat = ""
    let intervalle = 0
    let i = 0
    let reste = nombre
    let profondeur = 0
    while(Math.pow(16,i)<nombre){
        i++
    }
    profondeur = i
    for(let j=0; j<profondeur;j++){
        intervalle = Math.floor(reste/Math.pow(16,i-1))
        reste = reste - intervalle*Math.pow(16,i-1)
        resultat+= hexa.get(intervalle)
        i--
    }
    if(resultat.length%2>0)
        return "Ox0"+resultat
    else
        return "Ox"+resultat
        
}

function conversionLittle(chaine){
    let chaineLittle = ""
    if(chaine.length%2>0){
        chaine = "0"+chaine
    }
    let i = 0
    while(i<chaine.length){
        chaineLittle+= chaine.slice(chaine.length-2-i,chaine.length-1-i+1)
        i+=2
    }
    return chaineLittle
}

//console.log(conversionHexToDec("2C"))
//console.log(conversionHexToDec("1EF"))
//console.log(conversionDecToHex(495))
//console.log(conversionLittle("1EF5A"))


$("document").ready(function(){
    $("#convertir").click(function() {
        let chaine = $("#deci").val();
        $("#result").html(conversionHexToDec(chaine));
    });

    $("#convertir2").click(function() {
        let chaine = $("#hex").val();
        console.log(conversionDecToHex(chaine))
        $("#result2").html(conversionDecToHex(chaine));
    });

    $("#convertir3").click(function() {
        let chaine = $("#hex2").val();
        $("#result3").html(conversionLittle(chaine));
    })
})