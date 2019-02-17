pragma solidity ^0.5.0;

import "./Helpers.sol";

contract Murdoch is Helpers {
    mapping (address => address[]) private accountsToContracts;
    mapping (address => bool) private registeredAccounts;
    mapping (address => bool) private registeredContracts;
    address[] private accountsList;
    address[] private contractsList;

    function registerAccount(address _account) public onlySigner() {
        registeredAccounts[_account] = true;
        accountsList.push(_account);
    }

    function registerContract(address _contract, address owner) public onlySigner() {
        registeredContracts[_contract] = true;
        contractsList.push(_contract);
        accountsToContracts[owner].push(_contract);
    }

    function getAccounts() public view onlyOwner() returns (address[] memory) {
        return accountsList;
    }

    function getContracts() public view onlyOwner() returns (address[] memory) {
        return contractsList;
    }

    function getContractsByAccount(address _account) public view onlyOwner() returns (address[] memory) {
        return accountsToContracts[_account];
    }

    function topUpContract(address _contract) public payable onlyRegisteredAccount() {
        require (registeredContracts[_contract] == true, "Can't accept money for work we can't perform");
        emit topUp(_contract, msg.value);
    }

    function () external payable onlyRegisteredAccount() {
        // this method is NOT preferred
        address account = msg.sender;
        address contrct = accountsToContracts[account][1];
        emit topUp(contrct, msg.value);
    }

    event topUp(address contrct, uint256 amount);

    constructor () public {
        // this constructor is under construction
    }

    modifier onlyRegisteredAccount() {
        require(registeredAccounts[msg.sender] == true, "please register before paying thx");
        _;
    }
}