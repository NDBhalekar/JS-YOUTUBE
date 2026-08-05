// let obj = {
//     a:1,
//     b:"Nick"
// }
// console.log(obj);
// // obvisually objects contains its own properties amd with that it contain prototype that is some more properties
// let animal ={
//     eats:true
// }
// let rabbit ={
//     jumps : true
// }
// rabbit.__proto__ = animal;//sets rabbit.[[Prototype]] = animal


class animal {
    constructor(name){
        this.name =name;
        console.log("object is created");
    }
    eats(){
        console.log('kha raha hun');
    }
    jumps(){
        console.log('kud raha hun');
    }
}

let a = new animal("Bunny");
console.log(a); 

class Lion extends animal {
constructor(name){
        super(name)//becoz UR using extends so it is using all properties of animal so , js runs super keyword for animal  then js runs lion constructor it works like this 
        console.log("object is created");
    }
    eats(){
            // super keyword used to run any super class
        super.eats(); 
        console.log('lion is roaring');
        
    }
}
let l =new Lion("shera")
console.log(l);

// l instanceof Lion
// true
// l instanceof animal
// true