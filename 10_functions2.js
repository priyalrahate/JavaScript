function calculateCartPrice(val1,val2,...num1){
return num1;
}
console.log(calculateCartPrice(200,400,500,2000)); // gives 500,2000


const user={
    username:"hitesh",
    price:99
}

function handleObject(anyObject){
    console.log(`Username is${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
returnSecondValue(myNewArray);


// SCOPE IN FUNCTION 

if(true){
    let a=10
    const b=20
    var c=30
}
console.log(a); //gives error
console.log(b); // gives error
console.log(c); // gives value var van execute outside scope too

// therefore do not use var 


let a =100; // global 
if(true){
    let a=10  //local 
    const b=20
}

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    console.log(website)
    two()

}
one()



