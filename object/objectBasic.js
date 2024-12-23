// concept of sigleton and literal 
// object that are genrated by constructor are singleton cs

let symb1= Symbol("hitesh sir")
let object1={
    name:"umang-tibrewal",
    cource:"Btech",
    age:"22",
    "location":"kolkata",
    [symb1]:"is best teacher "

}
console.log(object1);
console.log(object1.name);
// this is the most common way to acess object but donot allow 
// acces key like location in example 
// to do so
console.log(object1["name","cource"]);
console.log(object1[symb1]);
object1[symb1]="its a good day"
console.log(object1);
// ------------------------------------------------------------------------------------------------------------------------------------
//object frezze -> this donot allow change in object 
//  Object.freeze(object1)
object1.name="mokambooo"
console.log(object1);
// ------------------------------------------------------------------------------------------------------------------------------------

// in javascript  all function are treated as first citizen function means they can be treated as normal variable 

object1.tryFunction=function(){
console.log("hello i am a object function ");
}
console.log(object1.tryFunction()); // This will can the function and also prints an return if not given then undefine
console.log(object1.tryFunction);// It doesnot call the function just prints that there is a function
// ---------------------------------------------------------------------------------------------------------------------------------
