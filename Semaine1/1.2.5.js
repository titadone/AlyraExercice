class Noeud {
    constructor(val) {
        this.valeur = val;
        this.gauche = undefined;
        this.droite = undefined;
        this.parent = undefined;
    }
    
    ajouter(valeur) {
        if (this.gauche == undefined)
            this.gauche = new Noeud(valeur)
        else if (this.droite == undefined)
            this.droite = new Noeud(valeur)
        else 
            this.gauche.ajouter(valeur)
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

    afficherSousArbre() {
    let sousArbre = this.valeur.toString()
    if(this.gauche)
      sousArbre += '('+ this.gauche.afficherSousArbre() +')'
    if(this.droite)
      sousArbre += '('+ this.droite.afficherSousArbre() +')'
    return  sousArbre
  }
}
class Arbre {
    constructor() {
        this.racine = undefined;
    }
    
    //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(valeur) {
        let sous = this.racine
        while(sous.gauche === undefined && sous.droite === undefined){
            if(sous.valeur == valeur){
                return sous
            }if(sous.gauche != undefined){
                sous.gauche.trouverNoeud(valeur)
            }
        }
        
    }
    
    //Méthode pour ajouter un noeud
    ajouterNoeud(valeur) {
        //Si arbre vide
        if (this.racine === undefined ){
            this.racine = new Noeud(valeur)
        }
        else{
            this.racine.ajouter(valeur)
        }
    }
    
    //Méthode pour supprimer un noeud
    supprimerNoeud(valeur) {
        sousAr = this.racine
        //feuille simple
        if(sousAr.gauche === undefined && sousAr.droite === undefined){
            if(sousAr.valeur == valeur){
                sousAr.valeur = undefined
            }
        }
        //un seul fils
        if(sousAr.gauche !== undefined && sousAr.droite === undefined){
            if(sousAr.valeur == valeur){
                sousAr.valeur = sousAr.gauche.valeur
            }
        }
        if(this.racine.valeur == valeur){
            this.racine.valeur = undefined
        }else{
            this.racine.supprimerNoeud(valeur)
        }
    }
    
    //Méthode pour afficher l’arbre selon un parcours infixe
    //Cette méthode doit retournée un tableau contenant la valeur des noeuds

    infixe() {
        let sousArbre = this.racine
        let arbreS = sousArbre.valeur
        while(sousArbre != undefined){
            if(sousArbre.gauche){
            arbreS += this.gauche.valeur
            sousArbre = this.gauche.afficherSousArbre()

            }else{
                arbreS += this.parent.droite.valeur
                sousArbre = this.parent.droite.afficherSousArbre()
            }
        }
        return arbreS
    }
    
    //Méthode pour afficher la valeur d'un noeud à partir de sa valeur
    printNoeud (valeur) {
        let noeud = this.trouverNoeud(valeur);
        if (noeud !== undefined) noeud.toString();
    }

    afficherArbre(){
        return this.racine.afficherSousArbre()
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

console.log(a.afficherArbre());

console.log(a.infixe());