const accountId=144553
let accountEmail="hitesh@gmail.com"
var accountPassword ="12344"
accountCity="jaipur"  // possible too 

let accountState;  //undefined 
 
// accountId=2  //cannot change variable assigned by const

accountEmail="hv@c.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId);

/* 
do not use var beacause of issue in block scope    */

console.table([accountId,accountPassword,accountEmail,accountCity]);