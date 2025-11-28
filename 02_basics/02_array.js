const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//aasaa karun don aaray judanar nahit ulta array madhe ek aaray tayar hoil karan j cha array madhe konihi yeu shakata

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//manag aaray madhe aaray tayar jalayver tyala aasa access karava lagel

//to join two aaray there are two methods 
/*1.concatinating
2.[...name of array,...second aarray]->spread method
 
bakincha aaray la jodun concat ha ek navin aaray tayar karto 

to use concate we have to declare a new array in which we can perform concate method ↓
*/

//1.concatinating
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


//2.spread method
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)
//ha pratek a vegla karun parat ekdach saglayan jodato best eg.is kachecha glass takla kahli phutla mang tyala parat jodla 
//hech most use kela jata

const another_array = [2,3,4,[5,6,7,[76,54,32]],43]
//aata etha jer aglyana ekach aaray madhe aanaychay ter flat method cha use kel;a jato etha 
const real_another_array = another_array.flat(Infinity);//flat vicharta ki kiti depth paryant sagle aaray ekach aaray madhe aanun deu mang titha infinity dila tri chalata 
// console.log(real_another_array)


//kahi baar data nodelist,string,objects inn ke form ke aa sakti hain lekin chahiye toh aaray kyun ki aarreay pee hi loop sakta hain toh inn sab ko array main kaise convert karte hain woh hain niche  ↓
//actula main aap puch bhi sakte hain and cnvert bhi kar sakte haion 

//puchte kaise hain ye dekho
//we use Array here
// Array.isArray("NILESH")
console.log(Array.isArray("NILESH"));
console.log(Array.isArray(real_another_array));

//onvert kasie karte hain using P: from
console.log(Array.from("NILESH"));//we can pass anything here like obj,string,nodelist etc......

console.log(Array.from({name:"nilesh"}))//etha ha confuse hoil ki mi etha keys cha array banaun ka values ch aarya banau mahun etha toh empty aaray deil okay

//jer multiole variables cha aaray banvaycha aasel ter Array.of cha use karaycha 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));









