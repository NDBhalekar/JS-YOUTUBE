// M-1
// Math.Ceil() >> gives us next integer
// formula :Math.floor(Math.random() * (max - min + 1)) + min >> here min=0,max=255 >> MEMORIZE

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{              
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})


// M-2
// USING HEXADECIMAL
/*Why 16777215?
Kyuki:FFFFFF (hex color)= 16777215 decimal
-.toString(16)>>Number ko hexadecimal me convert karta hai. */

// var boxes = document.querySelectorAll(".box")

// for(var i =0;i<boxes.length;i++){
//     var box = boxes[i];

//     // generate random color (16777215 is white in decimal)
//     var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16)

//     // generate random background color
//     var randomBackgroundColor ="#"+Math.floor(Math.random()*16777215).toString(16)

//     // Assign random color and background
//     box.style.color = randomColor;
//     box.style.backgroundColor=randomBackgroundColor;

//     // set content to show color code 
//     box.textContent= randomColor
// }


/*
const arr = [1,2,3] >> use const >> becoz it is not going to change later
arr[0] = 10   // ✅ allowed
arr.push(4)   // ✅ allowed
arr = [5,6]   // ❌ not allowed 

*/

// M-3
// const boxes = document.querySelectorAll(".box")
// boxes.forEach((box)=>{
// // generate random color (16777215 is white in decimal)
//     var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16)

//     // generate random background color
//     var randomBackgroundColor ="#"+Math.floor(Math.random()*16777215).toString(16)

//     // Assign random color and background
//     box.style.color = randomColor;
//     box.style.backgroundColor=randomBackgroundColor;

//     // set content to show color code 
//     box.textContent= randomColor
    
// })

// M-4
// let boxes = document.getElementsByClassName('box');
// for(let box of boxes){
//     const randomColor =Math.floor(Math.random()*16777215).toString(16)
//     const randomBackgroundColor = Math.floor(Math.random()*16777215).toString(16)

//     box.style.color = " #" + randomColor
//     box.style.backgroundColor= "#" + randomBackgroundColor
// }





