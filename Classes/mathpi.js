const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

const product ={
    name : "gogo",
    price : "45",
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(product,"name"));

Object.defineProperty(product, 'name',{
    writable: false ,
    enumerable : false,
    configurable : false
})
console.log(Object.getOwnPropertyDescriptor(product,"name"));





