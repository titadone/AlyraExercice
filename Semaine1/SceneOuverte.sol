pragma solidity ^0.5.11;
//On fixe la version de solidity en supprimant le ^
//Adresse Contrat 0x433E19461daBeD1eF0BfbA8940B014518D58657b
contract SceneOuverte{
    
    string[12] passagesArtistes;
    uint creneauxLibres = 12;
    uint tour;
    
    function sInscrire(string memory nomDArtiste) public {
        if (creneauxLibres > 0){
            passagesArtistes[12-creneauxLibres] = nomDArtiste;
            creneauxLibres -= 1; // Decrement la valeur de crenaux libres
        }
    }
    
    function passerArtisteSuivant() public{
        tour +=1;
    }
    
    function getTour() public view returns (uint){
        return tour;
    }
    //Affiche l'artiste qui est en cour
    function getArtisteEnCour() public view returns (string memory){
        return passagesArtistes[tour-1];
    }
    //Affiche l'artirste suivant
    function getArtisteSuivant() public view returns (string memory){
        return passagesArtistes[tour];
    }
}
