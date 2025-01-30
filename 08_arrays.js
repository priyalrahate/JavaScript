let myArr=[0,1,2,3,4,5,6];

const myHeroes=["sh","su"];
console.log(myHeroes[0]);

// myArr.push(7);
// myArr.pop();

myArr.unshift(9); //add 9 at the start of arr-probelm -shift alll value of array
myArr.shift();

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr=myArr.join()
console.log(myArr);

console.log(newArr);
console.log(typeof newArr);

//slice ,splice 

console.log("A ",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

