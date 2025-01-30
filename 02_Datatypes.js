// "use strict";  // treat all js code as newer version 

// alert (3+3) // we are using nodejs,not browsser

// let name ="Priyal"
// let age=21
// let isLoggedIn=false

//number => 2 to the power 53
//bigint
//string=>""
//boolean =>true/false
//null =>standalone value //empty value
//undefined=> value not assigned
//symbol -for finding uniqueness


//object 

//typeof -give datatype of variables 
//type of null is object 

console.log(typeof undefined)  // undefined 
console.log(typeof null) //object 



// ********** SUMMARY  ***********8

 // # primitive 
 // 7 types 
 /* 1] String boolean ,null ,undefined ,symbol,BigInt, number 

   2 ] reference type ->  non-primitive 
       arrays , Objects ,Functions 

*/

const id=Symbol('123')
const anotherId= Symbol('123')
    
console.log(id==anotherId)  // give false 



// Non-primitive 

// arrays ,Objects ,Functions 

const heroes=["sha","naa","dog"]

let myObj={
    name:"pr",
    age:21,
}

const myFunc=function(){
   console.log("hello");
}

//type of bifgInt -undefined 