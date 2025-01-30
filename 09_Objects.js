// objects form by literal is not singleton whereas form by formed by constructor is singleton 

  //object literals 

  const mySym = Symbol("key1")

  const JsUser= {
    name: "Hitesh",
    "full name":" H C",
    [mySym]: "mykey1",   // syntax 
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false
  }

  console.log(JsUser.email)
  console.log(JsUser["email"])  // here we have to pass email as string 

  //but what if key inside object is string then we have to sq bracket method 
 console.log(JsUser["full name"]);  
 
 console.log(JsUser[mySym]);

 JsUser.email="hitesh@chatgpt.com"
 Object.freeze(JsUser)   // here after freezing value  cannot be changed 

 JsUser.email= "hitesh@microsoft.com"
 console.log(JsUser);

 JsUser.greeting =function(){
  console.log("hello js user ");
 }


 JsUser.greetingTwo =function(){
    console.log(`hello js user,${this.name}`);
   }

   console.log(JsUser.greeting());
   
   console.log(JsUser.greetingTwo());
