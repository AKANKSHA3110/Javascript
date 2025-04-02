function sayMyName (){
    console.log("G");
    console.log("o");
    console.log("G");
    console.log("o");
    
}
// sayMyName()

function addTwoNumbers(number1,number2){
    // let result =number1 +number2;
    // return result;
    return number1+number2;
     
}
const result = addTwoNumbers(3,4)

// console.log ("Result:",result);



// function userLogInMessage(username){
//     if(!username){
//         console.log("Please Enter a username");
//         return;
//     }

// BOTH FUNCTIONS ARE SAME 

function userLogInMessage(username){
    if(username ===undefined){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just loggedin`

}
// console.log (userLogInMessage("Gogo"))
// console.log (userLogInMessage())


function userLoggedOut(username="Dobo"){
    if(username === undefined){
        console.log("Enter a username please")
        return;
    }
    return `${username} just logged Out`
}
// console.log(userLoggedOut());



// REST OPERATOR

function addTwoCart(val1,val2, ...num){
    return num;

}
console.log(addTwoCart(300,800,5000,600,400,300,200));



