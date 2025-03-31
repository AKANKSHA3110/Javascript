// singleton

// object literals 


// HOW TO USE SYMBOL

const mysym =Symbol("Key1")



//This is how we declare objects 
const user = {
    name : "Gogo",
    "Fullname": "gogosardaar",
    [mysym] : "mykey1",
    age : "Na bataun",
    location : "Bangalore",
    email : "adhak@gmaiul.com",
    isLogged : false,
    lastloginDays : ["Monday","Tuesday","Wendnesday"]
}

// This is how we access onjects 

console.log(user.email);
console.log(user["email"])
console.log(user["Fullname"])
console.log (user[mysym])


// to change value in object 

user.email ="gogosardar@gmail.com"
// to lock value so that no one can chage we use freeze 
// Object.freeze(user)
user.email = "gogosardaargpt@gmail.com"
console.log(user)



user.greeting = function(){
    console.log("Hello User")
}

user.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`)
}

console.log(user.greeting());
console.log (user.greetingTwo())

