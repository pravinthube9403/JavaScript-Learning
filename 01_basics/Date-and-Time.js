//Dates
let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate=new Date(2025,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2025,0,23,5,3);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date("2025-01-24");

let myCreatedDate=new Date("01-23-2025");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('en-In',{
    weekday:"long",
})

