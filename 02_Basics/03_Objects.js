//singleton
// Object.create();

//object literals

const mySym = Symbol("key1")//creatin symbol

const jsUser = {
    name: "pravin",
    age: 22,
    [mySym]: "myKey1", //adding symbol
    location: "maharastra",
    email: "pravin@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]); //accesing symbol

jsUser.email = "pravinChatGpt@gmail.log"

// Object.freeze(jsUser)

jsUser.email = "microsoft@g,ail.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello js User");
}
jsUser.greeting2 = function () {
    console.log(`Hello js User,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


