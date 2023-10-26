 class user{


     constructor(username,password,email)
 {

     this.username=username
     this.pssword=password
    this.email=email 

}
  
displayuser(){
      console.log(`the username is ${this.username} the emil id is ${this.email}`)

 }


 }


 let user1=new user("umang","passs","umag@chaiand code")
 user1.displayuser()


// // behind the scene 
// function user(username,userid,useremail){

//     this.username=username
//     this.userid=userid
//     this.useremail=useremail
// }

// user.prototype.display=function(){

//     console.log(`${this.username} ${this.useremail}`)
// }

// let user1=new user("umang","code","javascript")
// user1.display()