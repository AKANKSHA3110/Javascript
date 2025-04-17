// for each does not return any value

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = nums.filter( (num) => num>5)
// console.log(newNum);


const num1 = [2 , 4, 6, 8, 9, 10, 12]
const newNum1 = num1.filter( (num) =>{
   return num>3
})
// console.log(newNum1);

const books =[
    {
        title : 'Bookone',genre :'Fiction',publish : 1982
    },
    {
        title : 'BookTwo',genre :' Non-Fiction',publish : 2019
    },
    {
        title : 'BookThree',genre :'History',publish : 1982
    },
    {
        title : 'BookFour',genre :'Science',publish : 2013
    },
    {
        title : 'BookFive',genre :'Fiction',publish : 2005
    },
    {
        title : 'BookSix',genre :'Fiction',publish : 1982
    },
    {
        title : 'BookSeven',genre :'Fiction',publish : 2005
    },
]
// const userbook = books.filter( (bk) => (bk.genre === 'Fiction'))
// console.log(userbook);

// const userbook = books.filter( (bk) =>bk.title==='BookSeven') // bk is every object in array 
// console.log(userbook);

// const userbook = books.filter ( (bk) => bk.genre === 'History' )
// console.log(userbook);

const userbook = books.filter ( (bk) => bk.publish >= 2000 && bk.genre ==='Fiction')
console.log(userbook);

