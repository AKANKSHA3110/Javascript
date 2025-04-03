// Immediate Invoked Function Expression (IIFE)
(function gogo(){
    // Named iifi
    console.log(`DB Connected`);
    
})();
// IIFI is used to remove the pollution from global scope variables 

((name)=>{
    console.log(`DB Connnected Again ${name}`)
})("Gogo")
