/* 
creating a faulty calculator
 + >>>>> -
 * >>>>>> /
 - >>>>/
 / >>>> **
 
 It performs wrong operations 10% of the time
 */

let random = Math.random()// is a built-in JavaScript method that generates  Math.random() generates a number:0 ≤ number < 1
// eval() => calculation sathi vaprla jata,hyacha inside kahihi lihila te calculate hota

let a= prompt("Enter first Number: ");
let c= prompt("Enter operation ");
let b= prompt("Enter Second Number: ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

console.log(random)
if(random>0.1){
    //performs correct operation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    //performs wrong operation
    c= obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}



 