// JavaScript is a dynamically typed language, which means that data types of variables are 
// // determined by the value they hold at runtime and can
//  change throughout the program as we assign different values to them.
"use-strict"
// this command to treat all code as new java script
 /**-------------------------------------------- VARIABLES IN JAVA SCRIPT-------------------------------------------------------  */
 let fruit="Apple"
 let numberOfFruit=54
 var car="honda"
 /**Try not to use var in javascript cz it is not scope friendly */
 bike="vespa"

 /**we can declare variable like this also but this is not a good practice  */
 const price =500


 /**To print all the variable at once we can use console table */
 console.table([fruit,numberOfFruit,car,bike])
/**---------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------VARIABLE TYPE ----------------------------------------------------------------- */
let numberOfballs=53
console.log(typeof numberOfballs);
let air=null
let future=undefined
console.log(Number(air));
console.log(typeof air);
console.log(typeof future);
// null typeof is an object 
// undefined typeof is undefined

// ----------------------------------------------------conversion in javascript--------------------------------------------------

let firstString="33abc"
let convertedFistString=Number(firstString)
console.log(convertedFistString);
// abc cannot be change itno numbe so its print Nan ->not a number 
// number to string is possible 
// in case of bolean true =1 false =0
// if string to bolean empty string false other true

// keep in find this donot try to write code like this not a good practics 
// console.log("1" + 2); 12
// console.log(1 + "2");12
//  console.log("1" + 2 + 2);122
//  console.log(1 + 2 + "2");32

// console.log(+true); 1
// console.log(+"");0
//  console.log(+"lll")NaN
// --------------------------------------------Comparison -----------------------------------------------------------------------
console.log(null == 0);
console.log(null >= 0);

// javascript auto convet null to number which is 0 --first show false cz their datatype is not same to compare use ===
// second show true as 0 is greater and equal to 0

// -------------------------------------------string-------------------------------------------------------------------------------

let Exstring ="hello javascript"
const anyNumber =54
 let concatinated =`${Exstring} anynumber is ${anyNumber}`
 console.log(concatinated);
//  Other way to declare string this will also help to see property asociated with string 
 let otherString = new String("this way also help to see property when console it in chrome ")
 console.log(otherString);
//  string common function 
//  length gives length of the string
//  slice  it is also like substring the only diffrence is in second parameter it can have negative value with refrence from end of the string 
// let u="hello umang"  u.slice(1,-3) ello um
//  substring  let u="hello umang " u.substring(1,4) ell
// trim    remove extra space let u="umang    " u.trim() umang
// indexOf  take an character return its index value if not found return -1  let u="umang"  u.indexOf("u") reurn 0
// charAt  return charater take number  let u="umang"  u.chatAt(2) reurn a
// replace let u="umang"  u.replace("u","l")  lmang
// includes  return boolean 
// split   return an array  let u="uman g"  let arr=u.split(" ")  [umang ,g]

console.log(otherString.length);
// -------------------------------------------Maths in javascript------------------------------------------------------------

let mathNumber=1000000
// convert to string
console.log(mathNumber.toString().length);
// To ruppees like formate 
console.log(mathNumber.toLocaleString('en-IN'));
let valueMath=124.45
// console.log(valueMath.toPrecision(4));124.5

// Math.round()
// Math.floor()
// Math.ceil()


// Random value give any value between 0 and 1
console.log(Math.random());

// to have value between 0-10
console.log(Math.floor((Math.random()*10+1)))

// floor to avoide decimal 
// +1 to avoide 0

// if you want random value between two value
let min =10
let max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);

// ---------------------------------------------------Dates--------------------------------------------------------------------
let todayDate=new Date()
console.log(todayDate);
// console.log(todayDate.toLocaleDateString()); 10/2/2023
// console.log(todayDate.toString());Mon Oct 02 2023 07:34:42 GMT+0000 
// console.log(todayDate.toLocaleString());10/2/2023, 7:36:06 AM

// the typeof date is a object 
// -----------------------------------------------------TIME-------------------------------------------------------------------

let timeNow=Date.now()
console.log(timeNow);

// Return millisecond from 1 jan 1947

// extract time from date 

let dateTime=todayDate.getTime()
console.log(dateTime);

// interview comon question change this to second

console.log(Math.floor(dateTime/1000));
// --------------------------------------------------------------------------------------------------------------------------------
// toLocaleString magic
console.log(todayDate.toLocaleString('default',{

    month:"long",
    weekday:"long"
 }));
// --------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
