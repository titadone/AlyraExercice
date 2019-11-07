pragma solidity ^0.5.7;

contract Assemblee {
    address[] membres;
    Decision[] decisions;
    Decision d;
    string public nombAssemblee;
    address[] admins;

    constructor(string memory nom) public {
        nombAssemblee = nom;
        admins.push(msg.sender);
    }

    struct Decision{
        string description;
        uint votesPour;
        uint votesContre;
        mapping (address => bool) aVote;
        bool clos;
    }

    function rejoindre() public {
        membres.push(msg.sender);
    }

    function estMembre(address utilisateur) public view returns (bool) {
        bool find = false;
        for (uint i = 0; i<membres.length; i++) {
            if(membres[i] == utilisateur){
                find = true;
            }
        }
        return find;
    }

    function proposerDecision(string memory description) public {
        if(estMembre(msg.sender)){
            d.description = description;
            d.votesPour = 0;
            d.votesContre = 0;
            d.clos = false;
            decisions.push(d);
        }
    }

    function voter(uint indice, bool value) public {
        if(decisions[indice].aVote[msg.sender] == false && decisions[indice].clos == false){
            if(value){
                decisions[indice].votesPour += 1;
            }else{
                decisions[indice].votesContre += 1;
            }
            decisions[indice].aVote[msg.sender] = true;
        }
    }

    function comptabiliser(uint indice) public view returns (int){
        return int(decisions[indice].votesPour-decisions[indice].votesContre);
    }

    function demissionAdmin() public{
        for (uint i = 0; i<admins.length; i++) {
            if(admins[i] == msg.sender){
                admins[i].pop();
            }
        }
    }
}