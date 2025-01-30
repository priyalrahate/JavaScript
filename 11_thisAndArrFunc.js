// Note -inside arrow function we cannot use this .


const user={
    username:"kitchen",
    price:999,

    welcomeMessage: function (){
       console.log(`${this.username},welcome to website`) ;
       console.log(this);
    }
}

// user.welcomeMessage()
// username="sam"
// user.welcomeMessage();

console.log(this)  // after commenting above 3 line it give the empty object here but on console it willl give window object 


// ARROW FUNCTION \

// function chai(){
//     let username ="hitesh"
//     console.log(this.username);  // gives undefined 

// }
// chai()


// const chai=function(){
//     let username ="hitesh"
//         console.log(this.username); // gives undefined 
// }

const chai=()=>{
    username:"hitesh"
    console.log(username);
}

const addTwo=(num1,num2)=>{
    return num1+num2

}
console.log(addTwo(3,4));

const addTwo2 =(num1,num2)=> (num1+num2) // no return statement is required as no parenthesis is used 

const addTwo3=(num1,num2)=>({username:"hitesh"}) // for returning object use parenthesis 



// IIFE -- immediately Invoked Function expression 

(function chai(){
    console.log(`DB connected`);
})() ; // not use semicolon for ending                              // immediately invoked the function 


((name)=>{
    console.log(`DB connected Two ${name}`)
})('hitesh')  

// call stack 

