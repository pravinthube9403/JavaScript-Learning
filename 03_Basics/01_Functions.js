function sayMyName() {
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log("i");
    console.log("n");
}

// sayMyName();

// function addTwoNum(num1, num2) { //parameters
//     console.log(num1 + num2);
// }

const result = addTwoNum(2, "a");
// addTwoNum(2, 4); //arguments



function addTwoNum(num1, num2) { //parameters
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

const result3 = addTwoNum(2, 4)
// console.log("Result:", result3);


function loginUserMsg(username = "sam") {
    // if (username === undefined) {

    if (!username) {
        console.log("plz enter a username");
        return
    }
    return `${username} , just logged in`
}

// console.log(loginUserMsg("pravin"));
// console.log(loginUserMsg());

// const usermsg = loginUserMsg("pravin")
// console.log(usermsg);


//*************function with object***********

function calculateCardPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCardPrice(200, 400, 500));


const user={
    username:"pravin",
    price:999
}

function handleObject(anyObject) {
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:999
})

const myNewArray=[100,200,300]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));
