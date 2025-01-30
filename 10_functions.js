function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName // gives function reference 

sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1 , number2){
   let result =number1 +number2;
   return result; 
}
// addTwoNumbers(3,4);

addTwoNumbers(3 ,"4");
 
addTwoNumbers(3,null);

const result=addTwoNumbers(3,5);

// console.log("Result :",result);

function loginUserMessage(username="sam"){  // default value 
    if(username===undefined){
        console.log("please enter a username");
        return ;
    }
    return `${username} just logged in`
}
loginUserMessage("hitesh");