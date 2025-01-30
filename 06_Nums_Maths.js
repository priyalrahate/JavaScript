const score =400;

const balance=new Number(100)
console.log(balance); 

console.log(balance.toString());
console.log(balance.toString().length)

console.log(balance.toFixed(2));

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));
console.log(Math.abs(-4));

console.log(Math.random()); // always give value between 0 and 1;

console.log((Math.random()*10) +1);

const min=10;
const max=20;

//Note below line *** Imp ***** 
console.log(Math.floor(Math.random()*(max-min+1))+min); 