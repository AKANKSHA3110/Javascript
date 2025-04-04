const useremail =[]
if (useremail){
    console.log("user logged in");
    
}
else{
    console.log("user not logged in")
}

// Falsy values 
// false , 0,-0, BigInt,0n,"",null, undefined,NaN

// truthy values
// "0", 'false' , " " , [] , {} , function(){}

// To check if array is empty 

if(useremail.length === 0){
    console.log("Array is empty")
}


// To check if object is empty

const emptyObj ={}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}
// Nullish Coa;escing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log("less than 80"):console.log("more than 80")