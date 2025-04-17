const user ={
    // these are properties
    username : "Dogo",
    loginCount: 8,
    signedIn : true,
   // this is method 

   getUserDetails: function(){
    // console.log("Got user details from databases");
    // console.log(`Username:${this.username}`);
    console.log(this);
    
   }

}
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);



// CONSTRUCTOR FUNCTION =  new keyword  // gives new instance
// it allows you to make multiple instances from one object literal  only
// new keyword id used to make new execution context 

function usertwo(username,loginCount,isloggedIn,){
    this.username = username    // here this.username is variable
    this.isloggedIn = isloggedIn;
    this.loginCount = 12;

    this.greetings =function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this 
}
const userOne = new usertwo("gogo",12,true)
const userThree = new userThree("gogo",12,true)

console.log(userOne);
console.log(userThree);


// as soon as we use new keyword an empty object gets created which iid known as instance
// constructor function gets called because of new keyword 
// we get function






