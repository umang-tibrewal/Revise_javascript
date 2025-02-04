// // // promise ->execute later in program 
//It represent evantual completion  or failure of an asyncronous function
// Promise is in one of these three state
//1)pending -intial state neither fulfiled nor rejected
//2)fullfiled-the promise is completed
//3)rejected-the promise is rejected
// let promiseOne =new Promise((resolve,reject)=>{


//    setTimeout(()=>{

//     console.log("i am under promise ")
//     resolve()
//     },1000)



//  })

//  promiseOne.then(()=>{

//     console.log("then is called")
//  })


// new Promise((resolve,reject)=>{

// setTimeout(()=>{

    
//     console.log("heloo from promise 2");
//     resolve()
// },1000)

// }).then(()=>{

//     console.log("hello from then 2");
// })


new Promise((resolve,reject)=>{

    setTimeout( ()=>{

        resolve({name:"umang",
        
                   id:"54"})
    },1000)


}).then(({name:N})=>{

    console.log(N)
})



// handle error with catch amd finall 


new Promise((resolve,reject)=>{
   
    let error=true
    if(!error){
         resolve("i am error free")



    }

    else{

        reject("i have an error")
    }

}).then(()=>{

    console.log("then is called");
}).catch(()=>{

    console.log("cathch is called");
}).finally(()=>{

    console.log("finally i am called");
})

// asyn await 


let pawast=new Promise((resolve,reject)=>{

    let error=true

    setTimeout(()=>{
 if(!error){

    resolve("i am pawast resolve")
 }

 else{

    reject("i am pawast reject")
 }
   
    },1000)
})



async function recievePromise(){


    try {

        let response =await pawast
        console.log(response);
        
    } catch (error) {
        
        console.log(error)
    }
}

recievePromise()


// async function getUser(){

//     try {

//         let resoponse= await fetch()
//         let data = await resoponse.json()

//         console.log(data);
        
//     } catch (error) {

//         console.log(error);
        
//     }
// }

// fetch ().then().catch()


// fetch ->its maintain a separate queue known as fetch queue or micro task queue
// most priotise quesue 
