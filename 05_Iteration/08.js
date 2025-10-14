//reduce

const nyNums = [1, 2, 3, 4]

// const newNum=nyNums.reduce((acc,curr)=>(acc+curr),0)

const newNum = nyNums.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(newNum);


const shoppingCXart = [
    {
        courseName: "js Course",
        price: 1999
    },
    {
        courseName: "py Course",
        price: 4999
    },
    {
        courseName: "java Course",
        price: 5999
    },
    {
        courseName: "Data Science Course",
        price: 12999
    },
]


const totalprice=shoppingCXart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0)

console.log(totalprice);
