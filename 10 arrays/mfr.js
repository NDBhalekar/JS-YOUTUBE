// // map filter reduce
let arr = [1,3,55,67,23]

// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i]**2)
// }
// console.log(newArr)

// map function
// map() = Array method
// Used to create a new array by applying a function to each element of the original array.
/*
Syntax
array.map((element, index, array) => {
    // return new value
})
Most common use:
array.map(element => newValue)
 */

// let newArr = arr.map((e)=>{return e**2;})
// same as
// arr.map(function(num) {
//     return num**2;
// });


// filter
// used in filter like i needed elements which greter than 7

// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))


// reduce
// don don element gheun saglya aaray ver ha reduce function chalto,aalela result* next elemet
// let arrr2= [1,2,3,4,5,6]
// const red = (a,b)=>{
//     return a*b
// }
// console.log(arr2.reduce(red))

// if you wanted convert string into array then use Array.from
console.log(Array.from("Nilesh"))
