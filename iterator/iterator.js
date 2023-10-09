// do while,while ,for,break,continue same as other language 
// --------------------------------------------for of loop ------------------------------------------------------------------------
const arr=[1,2,3,4,5]

for (const nums of arr) {
    console.log(nums);
}


// map is key value pair datastructure 

let map= new Map()
map.set("in","india")
map.set("pk","pakistan")


for (const [key,value] of map) {
    console.log(`key is ${key}and value is ${value}`);
}

// isted of[key,value ] if iterator then return array 

let onjex={
    name:"umang",
    cource:"BTech",
}

// for (const iterator of onjex) {
//     console.log(iterator);
// }

// for of loop donot work on objects 

// ----------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------for in loop --------------------------------------------------------------------------
// for object we have for in loop
// return key value 

for (const key in onjex) {
    console.log(`key is ${key} and value is ${onjex[key]}`);
}


for (const key in arr ) {
    console.log(key);
}
// for in loop will give nothing for map

// for (const key in map) {


//     console.log(key);
    
// }

// -----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------for each loop ---------------------------------------------------------------
// work only on array and map
// for each loop take a function 
// now we can enetr 3 type of function

// name function 
// arrow function
// and function


// name function 
function print (element,key,obj){

    console.log(element,key,obj);
}
map.forEach(print)

//function 

map.forEach(function(index){

    console.log(index);
})

// arrow function
 map.forEach((element) => {
     console.log(element);
});


// first  argument give value 
// second key 
// thind whole array or object 


map.forEach((element,index,whole) => {
    console.log(element,index,whole);
});

// ---------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------filter------------------------------------------------------------------------------------

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
// ------------------------------------------------map--------------------------------------------------------------------------

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
console.log(typeof newNums);

// -------------------------------------------------------------------------------------------------------------------------------

const myNum = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
console.log(typeof (priceToPay));