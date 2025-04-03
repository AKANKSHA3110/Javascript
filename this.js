// This keyword refers to current context 
const user ={
    username : "GOGO",
    price : 999,


    welcomeMessage :function (){
        console.log(`${this.username} , welcome to the course`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username ="Dodo"
// user.welcomeMessage()
// console.log(this)

//+++++++++++++   ARROW NUMBERE +++++++++++++

// const kyahaal = function (){
//     let username ="Gogo"
//     console.log(this.username) // we cannot access values using this in function
// }
// kyahaal()

// const kyahaal = ()=>{
//    let username ="Gogo"
//    console.log(this.username)    
//    }
// kyahaal()



// 
// const addTwo = (num1,num2) =>{
//     return num1 + num2
      
// }
// console.log(addTwo(4,7))

// 
// const addTwo = (num1,num2) =>{
//     return num1 + num2
      
// }
// console.log(addTwo(4,7))

// const addTwo = (num1,num2) => (num1 +num2)
// console.log(addTwo(4,7))

const addTwo = (num1,num2) => ({username : "Gogo"})
console.log(addTwo(3,4))













