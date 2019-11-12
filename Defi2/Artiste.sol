pragma solidity ^0.5.11;
//pragma experimental ABIEncoderV2;

contract ArtisteContract{

    struct Artiste{
        string nom;
        uint256 reputation;
    }

    mapping(address => Artiste) list_artiste;
    mapping(address => bool) list_ban;
    address owner;

    constructor() public{
        owner = msg.sender;
    }

    modifier admin(){
        require(msg.sender == owner,"Vous n'etes pas admin");
        _;
    }

    function inscription(string memory _nom) public{
        require(list_ban[msg.sender] == true,"Vous êtes déjà banni!");

        list_artiste[msg.sender].reputation = 1;
        list_artiste[msg.sender].nom = _nom;
    }

    function ban(address ban_user) public admin{
        list_artiste[ban_user].reputation = 0;
        list_ban[ban_user] = true;
    }
}