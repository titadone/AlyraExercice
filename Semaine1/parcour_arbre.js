class Noeud{

    constructor(val){
        this.gauche = undefined
        this.droite = undefined
        this.valeur = val
    }


}

class Arbre{

    constructor(){
        this.racine = undefined;
    }

    function ajouter(val){
        if(this.racine == null){
            this.racine = Noeud(val)
        }else{

        }
    }


    function ajouterA(val,noeud){
        if(val<noeud.valeur){
            if(noeud.gauche != null){
                ajouterA(val,noeud.gauche)
            }else{
                noeud.gauche
            }
        }
    }
}