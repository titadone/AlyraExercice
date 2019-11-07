pragma solidity ^0.5.7;
//pragma experimental ABIEncoderV2;

contract Artiste{

    struct Artiste{
        address addresse;
        string nom;
        uint256 reputation;
    }

    Artiste[] list_artistes;
    mapping(address => uint) reputation;

    function inscription(string memory nom) public{
        Artiste a  = new Artiste() ;
        a.nom = nom;
        a.reputation = 1;
    }

}