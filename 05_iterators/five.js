
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//forEach loop la alredy sagla mahiti aahe tumche aarrary badal karan ki aapn tyala dot deun access karat aahot mang fakta .forEach lihun braces madhe function lihun variable cha naav lihine bas nothinf else
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){//created function for printinng
//     console.log(item);
// }

// coding.forEach(printMe)//function cha reference dyachay fakta mahnje braces lavaycha nahi phakta naav printMe and execution nahi karaycha printMe()


// coding.forEach( (item, index, arr)=> {//for each kada iten aasata current + index no aasata pratekacha + arraychi list aasati sagla hya pasiki aapn kahihi access karu shakato
//     console.log(item, index, arr);
// } )




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
