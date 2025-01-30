// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)

const { UnsupportedTransactionTypeError } = require("web3");

console.log("2">1); //true -convert string to num

console.log("02">1);

console.log(null>=0);  // true  // gives unpredictable result 

//similar for undefined 

//===

console.log("2"===2);



// *********  Stack And Heap  **********

// Stack (Primitive)   ,,  Heap (Non-primitive)

// Stack -Wee will get the copy of the variable 

// Heap- pointer point to the actual value 


let myYoutubename="priyaldon"

let anothername=myYoutubename
 anothername="chaiaurcode"

 console.log(myYoutubename)
 console.log(anothername)


 let userOne={
   email:"pr@gmail.com",
   upi :"pr@ybl"
 }

 let userTwo=userOne

 userTwo.email= "prahate@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);