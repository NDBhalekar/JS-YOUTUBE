//for in loop and for off loop 
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for of loop
for (const num of arr) {//variable of kashamadhla tya variable la access karaychay te
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
/*
- key-value pair store karata 
- duplicate allow karat nahi
- map madhe khup sare methond(i.e. functions )aahet tya paiki  value set karayla set vaparto aapan

*/
//aasa crete karato aapan map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
//usind for off loop we can access the key value pair of map
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//but using for of loop aapan object madhana key-value pair access akru shakat nahi tya sathi for in loop use karavala laagato
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//map ver for loop lavna and object ver forloop laun key-value pair access karaychi padhat vegli aahe 

