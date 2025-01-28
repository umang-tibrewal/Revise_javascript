
 setInterval (function,time) </br>
 setTimeout(function,time) </br>
 with refrence let say </br>
let ref=setTimeout(function,time) </br>
we can stop this interval as well </br>
 clearTimeout(ref) </br>
clearInterval(ref) </br>
![image](https://github.com/user-attachments/assets/8b3b266f-a7a3-45af-b247-a014f8735994)


### RANDOM COLOR PROJECT FILE
```javascript

let interv
function randomcolor(){
  let hexa="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
   color +=hexa[Math.floor(Math.random()*16)]
  }
return color
}


function setColor(){
  let body=document.querySelector("body")
  body.style.backgroundColor=randomcolor()
}



  let start=document.querySelector("#start")
  start.addEventListener("click",(e)=>{
   interv=setInterval(setColor,1000)
  },false)
  
  function stopcolor(){
    clearInterval(interv)
    interv=null
  }

  let stop=document.querySelector("#stop")
  stop.addEventListener("click",stopcolor,false)

```







 ```

