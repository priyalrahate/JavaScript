const marvel_heroes=["thor","IronMan","SpiderMan"]
const dc_heroes=["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes); //contain dc_heoes array at 4th index 
console.log(marvel_heroes[3][1]); // gives flash

 const all_heroes=marvel_heroes.concat(dc_heroes); // concat join in new Array 
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes];  // spread operator 


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:hitesh})) // gives empty vlaue for key -value 

let score1=100
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))  //gives array of all score values 


