// // erroe handling
// let a = prompt("Enter frist number")
// let b = prompt("Enter second number")
// // parseInt(value) >>used for converting strin to integer
// let sum = parseInt(a) + parseInt(b)//+ add karat nahi append karta 
// console.log("The sum is " + sum);

//if some one passes string not integer then ↓
let a = prompt("Enter frist number")
let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main(){

    try {
        console.log("The sum is " + sum*x);
        return true;
    } catch (error) {
        console.log("error aa gya bhai");
        return false;  
    }
    // return ke baad niche wala code nhi chalta per finalaly chalega
    finally{
        console.log("files are being closed ");
        
    }
    
}