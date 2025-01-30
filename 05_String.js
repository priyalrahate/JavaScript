const name="hitesh"
const repoCount=50;

// console.log(name+ repoCount+"Value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

let gameName=new String("   priyalRahate   ")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y')); 

const newString =gameName.substring(0 ,4)
console.log(newString);  // 4 is not included 

const anotherString =gameName.slice(0,4)
console.log(anotherString);

const anotherString2 =gameName.slice(-8,6)
console.log(anotherString2);

console.log(gameName.trim()); /// remove whiteSpaces from starting and end too


const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'))