
// const promise1 = new Promise((resolve, reject) => {
//       setTimeout(()=>{
//         console.log("async task complete");
//         resolve()
//       },1000)
// });

// promise1.then(()=>{
//     console.log("promise consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("async 2 resolved");
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "chai", email: "random@gmail.com" })
//     }, 1000)
// })

// promise3.then((user) => {
//     console.log(user);
// })


// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "pravin", pass: "12234" })
//         }
//         else {
//             reject('Error: Something went wrong')
//         }
//     })
// }, 1000)

// promise4
//     .then((user) => {
//         console.log(user);
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => console.log("the promise resolve or reject"));


// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "javascrit", pass: "12234" })
//         }
//         else {
//             reject('Error: js went wrong')
//         }
//     }, 1000)
// });

// (async () => {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);

//     }
// })();


// (async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })();

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))
