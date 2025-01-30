// if 
const isUserLogedIn=true
const temperature =41

if(temperature<50){
    console.log("temp less than 50");
}
else{
    console.log("temp is greater than 50 ");
}
if (isUserLogedIn){

}

 if(2==="2"){  // here if == is used then console get executed while it is not correct 

    console.log("executed");
 }

 const score=200

 if(score>100){
    let power="fly"  // use let not const as power should be within the scope 
    console.log(`User power:${power}`);
 }
 console.log(`User power:${power}`);



 const balance=1000
 if(balance<500){
    console.log("less than");
 }
 else if(balance<750){
    console.log("less than 750");
 }
 else{
    console.log("less than 1200");
 } 


 const userEmail="h@hitesh.ai"

 if(userEmail){  // her user email is considered as true 
   console.log("Got user Email"); // for empty string considered as false
 }                                // Empty array as true 
 else{
   console.log("Dont have user Email");
 }


 //false value
//  1] false ,0,-0,BigInt 0n, "",null ,undefined,NaN

//truthy
// "0", 'false', " ",[],{},function(){}


const emptyObj={}

if(Object.keys(emptyObj).length===0){
   console.log("Object is empty");
}

// Nullish coalescing operaator (??) : null undefined 

let val1;

// val1= 5 ??10   
console.log(val1); // gives 5 as output but whenever there is confusion in the ans then we can use it 

val1=null ?? 15  // gives 15 as output
console.log(val1);