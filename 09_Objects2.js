const tinderUser=new Object()

 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false;

console.log(tinderUser)

const regularUser = {
    email:"somename@gmail.com",
    fullName:{
        firstname:"H",
        secondname:"C"
    }
}
console.log(regularUser.fullName?.firstname); // check whether the full name exist or not 


const obj1 ={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
// or
const obj3={...obj1,...obj2}  // object spreading and then combining 

console.log(obj3);

const users =[
    {
        id:1,
        email: "h1@gmail.com"
    },
    {
        id:2,
        email: "h2@gmail.com"
    },
    {
        id:3,
        email: "h3@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




