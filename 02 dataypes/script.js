// node js REPL: Read Evaluate Print Loop 
// Ecma-script 

var a = 12
var b = 9
var c ="Sigma batch"//js automatically detects that variable is int,char,sting etc......
console.log(a+b)

console.log(typeof a,typeof b,typeof c);
// refer haary website for notes
// js is xase sensitive
// var is globaaly scoped aapan var la double declare karu shakatot but let is block scoped
// kul milake "let" use karaychay tula baki sod sagla

//1. primitive datatypes
// boolean,undefined,null,BigInt,number,Symbol
// 2.non primrtive datatypes ie.objects
/*An object is made up of key-value pairs, where:
Keys are usually strings.
Values can be any type (including other objects or primitives). 
-type of null is object ,karan khup pahila pasun yala aaassach use akrtat loka aani aata hyach atype aapan change nahi karu shakat karn ki khhup code aata tyachever depemnd karata 
*/

// object
// jya key madhe sapce aasla tyala aapna double quote madhe lihitot
let o= {
    // key:value
    name:"nick",
    "job role":"software developer"
}
console.log(o);
o.salary = "4567890";//to add
console.log(o);
o.salary = "4567Crores";//to update
console.log(o);