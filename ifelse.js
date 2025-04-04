const balance =1000
if (balance>500) console.log("Done");
 
// NESTED 

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(isUserLoggedIn&&debitCard){
  console.log("Logged in")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Congrats")
}