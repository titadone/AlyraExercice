function occurence(chaine){
    let tab = new Map();
    for(let i = 0; i<chaine.length;i++){
        if(tab.has(chaine[i])){
            tab.set(chaine[i],tab.get(chaine[i])+1)
        }else{
            tab.set(chaine[i],1)
        }
    }
    console.log(tab)
    tab.forEach(value,key){
        console.log(`${key}, ${value}`);
        tab.get
    }
}

occurence("Etre contesté, c’est être constaté")
