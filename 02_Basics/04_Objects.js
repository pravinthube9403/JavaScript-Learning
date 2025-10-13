//singleton
// Object.create();

const tinerUser = new Object();

tinerUser.id = "123abc"
tinerUser.name = "sam"
tinerUser.isLoggedIn = false

// console.log(tinerUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        usernaFullName: {
            firseName: "pravin",
            lastName: "thube"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.usernaFullName.firseName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}
const obj4 = {
    5: "e",
    6: "f",
}

// const obj3 = Object.assign({}, obj1, obj2) // assigning onj

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinerUser);
// console.log(Object.keys(tinerUser));
// console.log(Object.entries(tinerUser));

// console.log(tinerUser.hasOwnProperty('isLoggedIn'));

// ******************object de structure****************

const course = {
    courseName: "js tutorial",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor);

const { courseInstructor: Instructor } = course
console.log(Instructor);


//used in react for de-structuring
// const navbar=({company})=>{}
// navbar(company="hitesh")

//**********Api************
// {
//     "name": "pravin",
//     "courseName": "js tutorial",
//      "price": "free"
// }

// [
//     {},
//     {}
// ]



