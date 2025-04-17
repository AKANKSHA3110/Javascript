const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("Promise consumed");
    
}) // to consume promise we use .then 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("AsyncTask 2");
        resolve()
        
    },1000)
}).then(function(){   // Promise consumption
    console.log("Async Two Resolved");    
})


const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "GOGO" , email : "gogo123@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "gogo", password: "123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
    
})
 promiseFour
 .then((user) =>{
   console.log(user);
   return user.username   
})
.then((username) =>{
   console.log(username);
   
})
.catch(function(err){
    console.log(err);
    
}).finally(()=>{
    console.log("Finally The promise is either resolved or rejected");
    
})


const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if (!error) {
            resolve({username:"gogodogo",password : "123"})
        }else{
            reject("Error")
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    }catch(err){
        console.log(err);
        
    }    
}
consumePromiseFive()

async function getAllUsers(){
    const response = await fetch('url')
    const data = response.json()
    console.log(data);
    
}
getAllUsers()