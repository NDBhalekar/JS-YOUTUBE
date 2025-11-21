let name = "nilesh"
let value = 90

console.log(name+value+" beast");//but this is not best way to do that 
console.log();

//modern way to write it is called string-interpolation
console.log(`Hello my name is ${name} and my value is ${value}`);

let stringname = "kailas"//aasa karu shakato aapn declare string la pan khalchi methid changi aahe object cha use hoto aani khup sarya properties cha access bhetato 
const gameName  = new String('Nileshbn')//etha aaplyala key value paisr cha use access karta yeta 

console.log(gameName[0]);

//aata yache khup kahi method ahet uppercase akrayla ,length bagahyla etc.....

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//kontya index ver konta character aaeh sangata 
console.log(gameName.indexOf('i'))//index sangata

const newString = gameName.substring(0,4)//substring ke liye
// //last cha index include karat nahi
//ismain negavtive value nhi chalti ager do ghe bhi toh woh zerro consider karega 
console.log(newString);

const anotherString = gameName.slice(-7,4)//reverse pan karu shakato aapan hyachani
console.log(anotherString);


const newStringOne = "      nilesh     "
console.log(newStringOne);
console.log(newStringOne.trim());//samorche maghche spaces kadhato 

const url = "https://nilesh.com/nilesh%20bhalekar"//spacees la browser => %20 ni repalce karata
console.log(url.replace('%20','-'));//=>(kisko replace karna hain ,kis se repalce akrna hain)

console.log(url.includes('nilesh'));//deleli value aahe ka nahi baghata variable madhe
console.log(url.includes('nick'));

const mainame = new String('nilesh-hc-gkrh')
//aata mala hela jer split karaychay jitha dast titha split ter mi split methid cha use karu shakto

console.log(mainame.split('-'));//OUTPUT ===>>> [ 'nilesh', 'hc', 'gkrh' ]






