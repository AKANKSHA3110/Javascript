const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flasgh","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);



//   SPREAD OPERATOR TO MERGE TWO ARRAYS

const all_new_Heros = [...marvel_heros , ...dc_heros]

console.log(all_new_Heros);


console.log(Array.isArray("Soham"))
console.log(Array.from("Soham"))
console.log(Array.from({name: "Soham"})) //Intersting


let score1 =300
let score2 =400
let score3 =500

console.log(Array.of(score1,score2,score3))

