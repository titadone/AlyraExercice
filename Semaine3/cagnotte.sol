pragma solidity ^0.5.7;

contract CagnotteFestival{

    mapping (address => uint) organisateurs;

    constructor() public {
        organisateurs[msg.sender] = 100;
    }

    function transfererOrga(address orga, uint parts) public {
        organisateurs[orga] = parts;
        organisateurs[]
    }

}