const name = "pravin";
const repoCount = 50;

//old version
// console.log(name + repoCount + "value");

console.log(`hellow my name is ${name} and repo count is ${repoCount}`);

const gameName= new String("pravintech");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newStrigg=gameName.substring(0,4);
console.log(newStrigg);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="       Pravin      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="goog%20gle.com"
console.log(url.replace('%20','-'));
console.log(url.includes("goog"));

const stringTwo="google-chrome-brave"
console.log(stringTwo.split('-'));





