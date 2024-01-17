let email = document.querySelector(".email")
let password = document.querySelector(".password")
let passwordrpt = document.querySelector(".passwordrpt")
let btn = document.querySelector(".btn")
let emailerror =  document.querySelector(".emailerror")
let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


btn.addEventListener("click",function(){
     if(email.value == ""){
          emailerror.innerHTML = "please enter your email"
     } else if(!email.value.match(emailregex)){
          emailerror.innerHTML = " email formate thik nai"
     }
     else{
          emailerror.innerHTML = " "
     }
})