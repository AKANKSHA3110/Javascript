// To make object Singleton we write like this 

// const tinderUser = new Object () //This is singleton Object 
const tinder = {} // This is non singleton Object 

tinder.id = "34567qwe"
tinder.name ="gogo"
tinder.isLoggedIn = false

// console.log (tinder)

const regularUser ={
    email :"some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "Soham",
            lastname : "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 =Object.assign( {} , obj1,obj2,obj3) //here {} we use because it is a good practice 


const obj4 ={...obj1 , ...obj2 ,...obj3}
// console.log(obj4)


// How we handle value from Database 

const Data =[
    {
        id : "123",
        email : "qsty@gmail.com"
    },
    {
        id : "345",
        email : "qwe@gmail.com"
    },
    {
        id : "678",
        email : "abcd@gmail.com"
    }
]

console.log(Data[0].email)
console.log(tinder)

console.log(Object.keys(tinder));
console.log(Object.values(tinder));

// to find any property 
console.log(tinder.hasOwnProperty('isLoggedIn'));