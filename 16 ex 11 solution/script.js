// let a = 6
// function factorial (number){
//     let arr = Array.from(Array(number).keys())// Array(number):Creates an empty array with length = number.// .keys() returns an iterator of indexes.// Array.from() converts an iterator or iterable → real array.
//     console.log(arr.slice(1,))//returns the array without the first element
    
//     let c = arr.slice(1,).reduce((a,b)=>{//reduce() is used to combine all elements into a single value
//         return a*b
//     })
//     console.log(c);
// }
// // function calling
// factorial(a)


// neat and clean 
let a = 6
function factorial (number){
    let arr = Array.from(Array(number + 1 ).keys())    
    let c = arr.slice(1,).reduce((a,b)=>  a*b)   
     return c
}
console.log(factorial(a))

















