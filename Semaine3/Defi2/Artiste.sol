pragma solidity ^0.5.7;
//pragma experimental ABIEncoderV2;

contract ArtisteContract{

    struct Artiste{
        string nom;
        uint256 reputation;
    }

    mapping(address => Artiste) list_artiste;
    address[] list_ban;

    function inscription(string memory _nom) public{
        list_artiste[msg.sender].reputation = 1;
        list_artiste[msg.sender].nom = _nom;
    }

    function ban(address ban_user) public{
        list_artiste[ban_user].reputation = 0;
        list_ban.push(ban_user);
    }

}