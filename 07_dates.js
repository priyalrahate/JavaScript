let myDate=new Date()

console.log(myDate.toString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object 

// let myCreatedDate=new Date(2023,0,23)

// let myCreatedDate = new Date(2023,0,23,5,3);

let myCreatedDate=new Date("2023-01-14") // YY-MM-DD

console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekDay:"long"
})


 