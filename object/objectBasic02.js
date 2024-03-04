// singleton object object is created by constructor 

 let objectByCon=new Object();

 objectByCon.id=54;
 objectByCon.name="umang"
 console.log(objectByCon);

//nested object  object inside object 


 let nestedObject ={

     person:{
             name:{   fname:"umang",
                   lnmae:"tibrewal"

            }


     }
 }

 console.log(nestedObject.person.name.fname);

let obj2={

    id:"1",
    name :"rahul"
}

let obj3={
    
    id:"2",
    name :"raghav"
}

// to concatinate this two object 
// let obj3={obj1,obj2}
// console.log(obj3);

//this will consider each as object array problem 

let obj4=Object.assign({},obj2,obj3)
console.log(obj4);

let obj5={...obj2,...obj3}
console.log(obj5);

// in object if we want to combine two object make sure their key are not of same name they got overwrite
// some more fuction in object

console.log(Object.keys(objectByCon));
console.log(Object.values(objectByCon));
console.log(Object.entries(objectByCon));
// ------------------------------------------------------------Deconstructing of object --------------------------------------------------------------------------------

let decons={

    name:"umang",
    course:"B-Tech",
    year:"2020-2024"
}

let {name:n,year}=decons
console.log(n);
console.log(year);
// ---------------------------------------------------------------------------------------------------------------------------------

// what is json javascript object notation 
// {

//     "name ":"umang",
//     "age ":21
//     "gender":"male"
// }

// object without name as well as key explicitly mention in string

In javascript As we know that the object are passed by refrence 
Any change made in one object Reflect in other object

to avoide this shallow copy deep copy 
shallow copy donot work for nested object
let fruit={
    
    name:"Aplle",
    season:"AllTime"
}


let fruit2={...fruit}
fruit2.season="summer"
console.log(fruit)
console.log(fruit2)

Deep copy 


let obj={
    
    name:"umang",
    id:54,
    location:{
        
        city:"kolkata",
        state:"Bihar"
    }
}



let obj2=JSON.parse(JSON.stringify(obj) )

obj2.location.city="jamnagar"
console.log(obj,obj2)
