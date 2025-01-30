// // for 

// for(let i=0;i<10;i++){
//     const element=i;
//     if(element==5){ 
//     console.log(element +" is the best number");
//     }
//     console.log(i);
// }

// // while 

// let myArray=["flash","batman","superman"]

// let arr=0;
// while(arr<myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr=arr+1;
// }

// //do-while

// let score=11;
// do{
//     console.log(`score is ${score}`);
//     score++;
// } while(score<=20);


// for of loop

// const arr =[1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings="Hello World"

// for(const greet of greetings){
//     console.log(`Each character is ${greet} `);
// }


//Map 

// const map=new Map();

// map.set('IN',"India")
// map.set('PAK',"Pakistan")
// map.set('US',"USA")

// // console.log(map)

// for(const [key,value] of map){
//     console.log(key, '->',value);
// }

// const myObject ={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for(const [key,value] of myObject){
//     console.log(key,':-' ,value);
// }   // for of loop doesnt work on objects 


// therefore we use for in loop 
// it is use on objects as well as on othr places too 

// const myObject2={
//     'js':" javascript",
//     'cpp':"cplusplus",
//     'java':"java"
// }

// for(const key in myObject2){
//     console.log(key,'->',myObject2[key]);
// }


// for of gives values 
// for in gives key 


// for each loop 

// const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach ( (item,index,coding)=>{
//   console.log(item,index,coding);
// })

// const myCoding=[
//     {
//         languageName: "javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName: "java",
//         languageFileName:"java"
//     },
//     {
//         languageName: "python",
//         languageFileName:"py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })


// //problem 
// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//        return item;
// })
// console.log(values); // here value isnt returned;

//soln

// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=>num>=4)
// console.log(newNums);  // using filter we can return the values 


// const newNums1 = myNums.filter((num)=>{
//    return num>=4  // if curly braces are used then return statement is required 

// })

// // exa from video

// let userBooks=books.filter((bk)=>bk.genre==='History')
// console.log(userBooks);


//  userBooks=books.filter((bk)=>{ return bk.publish>=2000})
// console.log(userBooks);

//similar for map as filter 

 //chaining

 const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums = myNums
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)

console.log(newNums)


// reduce 
const array1=[1,2,3,4,5];
const initialValue=0;

const sumWithInitial=array1.reduce(
    (accumulator,currentValue)=>accumulator+currentValue,
    initialValue
)
console.log(sumWithInitial)