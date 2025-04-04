["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
    
}

const greetings ="Hello!!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map =new Map()
map.set ('IN', "INDIA")
map.set ('US', "United States")
map.set ('Fr', "France")


console.log(map);
for (const [key, value]  of map) {  // if we wan to access key and value separately then we write in []
    console.log(key );
}


