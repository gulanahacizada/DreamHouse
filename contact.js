let registr=document.querySelector(".registrbutton")
let name=document.querySelector(".user")
let email=document.querySelector(".emailInput")
let password=document.querySelector(".passwordInput")
let check=document.querySelector("#check")
let send=document.querySelector(".send")
let text=document.querySelector("textarea")
registr.addEventListener("click",(e)=>{
    e.preventDefault()
    if((name.value.trim()!=="")&&
    (email.value.trim()!=="")&&
    (password.value.trim()!=="")){
    alert("Registration is successful")}
    localStorage.setItem("user",`${name.value}`)
    name.value=""
    email.value=""
    password.value=""
    check.checked = false;
})
send.addEventListener("click",()=>{
    if(text.value.trim()!=""){
    alert("Message saved")}
    text.value=""
})

