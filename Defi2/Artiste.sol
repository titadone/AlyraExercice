pragma solidity ^0.5.11;
//pragma experimental ABIEncoderV2;

contract ArtisteContract{

    struct Artiste{
        string nom;
        uint256 reputation;
    }

    mapping(address => Artiste) list_artiste;
    address[] list_ban;
    address owner;

    constructor(){
        owner = msg.sender;
    }

    modifier admin(){
        require(msg.sender == owner);
    }

    function inscription(string memory _nom) public{
        require(contains(msg.sender) == true , "Vous êtes déjà banni!");

        list_artiste[msg.sender].reputation = 1;
        list_artiste[msg.sender].nom = _nom;
    }

    function ban(address ban_user) public admin{
        list_artiste[ban_user].reputation = 0;
        list_ban.push(ban_user);
    }

    function contains(address is_ban) public (bool){
        return list_ban[is_ban];
    }
}