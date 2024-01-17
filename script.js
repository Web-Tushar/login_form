let email = document.querySelector(".email")
let password = document.querySelector(".password")
let repeat = document.querySelector(".repeat")
let btn = document.querySelector(".btn")
let emailerror =  document.querySelector(".emailerror")
let passworderror = document.querySelector(".passworderror")
let passrepeat = document.querySelector(".passrepeat")

let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


btn.addEventListener("click",function() {
     if(email.value == ""){
          emailerror.innerHTML = "please enter your email"
     } else if(!email.value.match(emailregex)){
          emailerror.innerHTML = " email formate thik nai"
     }
     else{
          emailerror.innerHTML = ""
     }

     // ==input password
     if(password.value == ""){
          passworderror.innerHTML = "please enter your password"
     } else if(password.value.length > 20 || password.value.length < 12){
          passworderror.innerHTML = "At least 12 characters long but 14 or more is better"
     }
     else{
          passworderror.innerHTML = " "
     }

     // repeatpassword
     // 
     // } else if(!repeat.value == email.value){
     //      passrepeat.innerHTML = " email formate thik nai"
     // }
     // else{
     //      passrepeat.innerHTML = " "
     // }

     if(repeat.value == ""){
          passrepeat.innerHTML = "please repeat your password"

     }
      else if(password.value == repeat.value){
          passrepeat.innerHTML = "password match "
     }else{
          passrepeat.innerHTML = "dont password match "
     }
     
})