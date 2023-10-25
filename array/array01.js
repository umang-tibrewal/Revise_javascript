// In javascript array can be collection of diffrent data type
// there size auto changes
// they are passed and copied by refrence 
let arr=[54,63]
let sarr=arr
sarr[1]=100
console.log(arr[1]);

// some function in array 
// push
arr.push(93)
console.log(arr);

// unshift
arr.unshift(77)
console.log(arr);
// insert element at front of array 

// shift
arr.shift()
console.log(arr);
// remore the Element

// includes
console.log(arr.includes(99));

//indexof
console.log(arr.indexOf(100));

//join 
let stringArr=arr.join()
console.log(stringArr);
console.log(typeof(stringArr));

//slice and splice

console.log(arr.slice(0,2));
console.log(arr.splice(0,3));
console.log(arr);

// diffrence between slice and splice is that splice  alter  the orignal array also

// // concatinate two Array  concat method
 let hero=["hero","bholu","babli"]
 let  marvelHero=["ironman","spiderman",'blackpanther']
//  hero.push(marvelHero)
 let mergeHero=hero
 console.log(mergeHero);
 // its cleary show javascrity can take any value in array its taken complete marverHero array as one element 
mergeHero=hero.concat(marvelHero)
console.log(mergeHero);

//spread method to keep in mind think you drop a glass what will happen it will get spread similarly its sprad the array
arr.push(100000)
let spreadArray=[...arr,...marvelHero,...hero]
console.log(spreadArray);
let a=["name"]
let b=["name"]
let c=[...a,...b]
console.log(c);

// flate array concept 

let flateArr=[5,4,3,[10,12,13],[10,[5,3]]]
let flateResult=flateArr.flat(Infinity)
console.log(flateResult);

//some array function
console.log(Array.isArray("umang_tibrewal"));
console.log(Array.from("umang.tibrewal"));

let score1=500
let score2=600
let score3=700
let score4=800

console.log(Array.of(score1,score2,score3,score4));



