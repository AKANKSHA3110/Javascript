const user = {
    username :"Gogo",
    prices : 300
}

function handleuser(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}
handleuser(user)


const myNewArray = [200, 400 ,600]

function returnSecondValue(getValue){
    return getValue[1];

}
console.log (returnSecondValue(myNewArray))
