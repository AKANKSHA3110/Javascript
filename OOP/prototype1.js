// Inheritance 

const user ={
    name: "gogo",
    email: "gogo123@gmail.com"
}

const Teacher ={
    name : "Dogo",
    email : "dogo12@gmail.com"
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignmenet: "Js Assignment",
    fullTime : true,   
}
// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)