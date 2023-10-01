// JavaScript is a dynamically typed language, which means that data types of variables are 
// // determined by the value they hold at runtime and can
//  change throughout the program as we assign different values to them.

"use-strict"
// this command to tret all code as new java script
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
//  length
//  slice
//  substring
// trim
// indexof
// charat
// replace 
// include 
// split

console.log(otherString.length);
