// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(i);
    
    
// }



for (let i = 0; i < 10 ; i++) {
    console.log(`Outter loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop ${j}`);
        
        
    }
    
}

let myArray = ["Flash","Batman","Superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
    if(index ==5){
        // console.log(`5 Detected`);
        break;
    } 
    // console.log(`value of i is ${index}`);

}

for (let index = 0; index <= 20; index++) {
    if(index ==5){
        console.log(`5 Detected`);
        continue;
    } 
    console.log(`value of i is ${index}`);

}



