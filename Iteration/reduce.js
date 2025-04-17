const myNum = [1, 2, 3]

// const myToatal = myNum.reduce ( function (acc , currval){
//     return acc + currval
// },0) // 0 is acc 
// console.log(myToatal);

const myToatal = myNum .reduce ( (acc ,currval) => acc+ currval ,0)
// console.log(myToatal);

const mySoppingCart = [
    {
        itemName : "js Course",
        price : 999
    },
    {
        itemName : "Data Science Course",
        price : 1999
    },
    {
        itemName : "Web 3 Course",
        price : 9990
    },
]

const total = mySoppingCart.reduce ( (acc,item) => acc + item.price,0)
console.log(total);





