console.log("THis is string tutorial");
let a = "harry";
console.log(a);
console.log(a.length);

let rname = "harry";
let friend = "Rohan";
// console.log("His name is "+rname +" and his friend name is "+ friend + "and his father name is also "+friend)

// so sometimes it becomes hard to avoic this we use BACKTICS````````

console.log(`His name is ${rname} and his friend name is ${friend}`); //>> it is called string interpolation

console.log(`This is the "beginning" of the course 'remember it' ok`);

// escape sequence characters \n new line,\t tab,\r carriage return

// if we wanted to prinnt this " Roh"n " with " but it gives error >> so use `Roh"n ` or we can use " Roh\"n "

// string in built functions ↓
let b = "ShivamSh";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

console.log(b.slice(1, 5)); //here 1 is included but 5 include raht nahi
console.log(b.slice(1)); //1 ko chod ke sare prit karega

console.log(b.replace("Sh", "44")); // if two occurences are thee the first ocuurence will repalce it self ,and will be as it is

console.log(b.concat(a, "NIck", "LOOK"));

let z = "        kjrfbv      ";
console.log(z.trim());
// string is immutabe ,mhanje jri yevdh afunction lavle tri main wali string nahi badlat ti as it is ch tahate ,he sagle function lavlele copies bantet tyachi
