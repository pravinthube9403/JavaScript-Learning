const marvel_heros=["thor","ironman","spiderman"]
const dc=["sperman","flasg","batman"]

// marvel_heros.push(dc);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let newmarvel=marvel_heros.concat(dc);
// console.log(newmarvel);

const allnewHeroes=[...marvel_heros,...dc]
// console.log(allnewHeroes);

const anotherArray=[1,2,3,[4,5,6],7,[8,9,[4,5,6]]]
let realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("pravin"))
console.log(Array.from("pravin"));
console.log(Array.from({name:"hitesh"}));//intersting always gives empty array
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));



