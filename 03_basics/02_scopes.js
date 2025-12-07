// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// // console.log(a);
// // console.log(b);
// // console.log(c);

// //{} >>called scope
// //var la usech nahi karaych karan ki var kasa scope madhe lihila aani baherun access kela tri print hota mnag te logic hukata mhnaun 
// /*
// -scope madhe lihlele sagla block scope aani baherch sagla global scopee
// -browser madhe jaun console madhe scope vegla aani aasa git ver node laun run kelelya program madhal scope vegla aasata 
// */


// function one(){
//     const username = "nilesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     console.log(website);
//     two();
    
// }
// one()
//simple funda : mothya scope madh ejevdha kahi chote scope aasatil te mothyache variable use karu shakatat pan lahan scope madhle mothe use karu shakat nahit
//same for if else conditon 

//+++++++++++++++intresting+++++++++++++++++

function addone(num){
    return num + 1;
}
console.log(addone(5));//yala aapan function cha ver lihun jri call kela na tri ha chalel pan tasach khali chalnar nahi 

const addtwo = function (num){//it is called expression >>function ko declre bhi kiye hain and ek varibal main hold bhi kiya hain 
    return num+2;
}
console.log(addtwo(5));
//yala expression cha khalunach call karava lagen jer expressin ch vrun call kela ter ha error deil >> this property/concept is called hoisting>>means kahan function ko rakah ata hain kahan se unko call kar sakte hain etc.etc.
























