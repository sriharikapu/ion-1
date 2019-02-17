pragma solidity ^0.5.2;

contract Coursetro {
    
    event Instructor(
       string name,
       uint age
    );

    // function setIns..

    // function getIns..
    
   string fName;
   uint age;

   function setInstructor(string memory _fName, uint _age) public {
       fName = _fName;
       age = _age;
       emit Instructor(_fName, _age);   
   }
   
   function getInstructor() view public returns (string memory, uint) {
       return (fName, age);
   }
   
}