class Noeud {
    constructor(val) {
        this.valeur = val;
        this.gauche = undefined;
        this.droite = undefined;
        this.parent = undefined;
    }
    
    // Affiche la valeur du noeud et la valeur de ses deux enfants et de son parent
    toString() {
        var out = "Noeud " + this.valeur + ":  L";
        
        this.gauche === undefined ? out += "-" : out += this.gauche.valeur;
        out += " R";
        
        this.droite === undefined ? out += "-" : out += this.droite.valeur;
        out += " P";
        
        this.parent === undefined ? out += "-" : out += this.parent.valeur;
        log(out);
    }
}
class Arbre {
    constructor() {
        this.racine = undefined;
    }
    
    //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(valeur) {
        while(){

        }
        return 
        
    }
    
    //Méthode pour ajouter un noeud
    ajouterNoeud(valeur) {
        //Si arbre vide
        if (this.racine == undefined ){
            this.racine = new Noeud(valeur)
        }
        else{
            if(this.racine.gauche == undefined){
                this.racine.gauche = new Noeud(valeur)
            }else if(this.racine.droit == undefined){
                this.racine.droit = new Noeud(valeur)
            }
            
        }
    }
    
    //Méthode pour supprimer un noeud
    supprimerNoeud(valeur) {
        if(this.racine.valeur == valeur){
            this.racine.valeur = undefined
        }else{
            this.racine.supprimerNoeud(valeur)
        }
    }
    
    //Méthode pour afficher l’arbre selon un parcours infixe
    //Cette méthode doit retournée un tableau contenant la valeur des noeuds
    infixe() {
        let tableau
        
    }
    
    //Méthode pour afficher la valeur d'un noeud à partir de sa valeur
    printNoeud (valeur) {
        let noeud = this.trouverNoeud(valeur);
        if (noeud !== undefined) noeud.toString();
    }
}

let a = new Arbre();
a.ajouterNoeud(30);
a.ajouterNoeud(18);
a.ajouterNoeud(24);
a.ajouterNoeud(11);
a.ajouterNoeud(33);
a.ajouterNoeud(13);
a.ajouterNoeud(40);
a.ajouterNoeud(46);
a.ajouterNoeud(14);
a.ajouterNoeud(21);
a.ajouterNoeud(12);
a.ajouterNoeud(10);
a.ajouterNoeud(31);
a.ajouterNoeud(35);
a.ajouterNoeud(32);

console.log(a.racine.toString);

//console.log(a.infixe());