let score ="33"

console.log(typeof score);  //string
console.log(typeof(score));  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)


//problem 

let score1 ="33abc"

let valueInNumber1 = Number(score)
console.log(typeof valueInNumber1)  // here the output will be - NaN
console.log(valueInNumber1);

//for score =null  output will be 0
//and for undefined the output will be NaN

// for boolean true output is 1 and vice versa for the false 
// for string -NaN (not in Number)  


// ********* OPERATION  **************

 let value =3;
 let negVal=-value
 console.log(negVal)


let str1="hello"
let str2=" priyal"

let str3=str1 +str2
console.log(str3)


console.log("1" +2)   //12
console.log(1+"2")   //12
console.log("1"+2+2); // 122
console.log(1+2+"2") //output -32   //the value which comes first will perform operation first

// console.log(+true);

