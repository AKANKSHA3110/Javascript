function multipleBy5(num){
     return num*5;
}

multipleBy5.power = 2

console.log((multipleBy5(5)));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(product,price){
    this.product =product;
    this.price = price;
}

// createUser.prototype.increment = function(){
//    this.score++
// }

createUser.prototype.printMe = function(){
    console.log(`price of product is ${this.price}`);
    
}

const oats =  new createUser("oats",150);
const chiaSeed =new createUser ("chiaSeed",180);


chiaSeed.printMe()
oats.printMe()









