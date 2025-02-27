const userValidation = document.getElementById('user-validation')
const passwordValidation = document.querySelectorAll('.password-validation')
const passwordRepeatValidation = document.getElementById('password-repeat-validation')
const emailValidation = document.getElementById('email-validation')
const lastValidation = document.getElementById('last-validation')

const username = document.getElementById('username')
const password = document.getElementById('password')
const repeatPassword = document.getElementById('password-repeat')
const email = document.getElementById('email')

let currentPassword;

function checkLenght(value,number){
    if(value.length >= number){
        return true  
    }
    else{
        return false
    }
}
function checkUppercase(string){
    const check = Array.from(string)
        for(let i=0; i< string.length; i++){
            if(check[i] === check[i].toUpperCase() && parseInt(check[i]) != check[i]){
                return true
            }
        }
        return false
}
function checkNumber(string){
    const array=Array.from(string)
    for(let i=0; i< string.length;i++){
        if(array[i] == parseInt(array[i])){
            return true
        }
    }
    return false
}


function liveCheckUsername(event){
    const value = event.target.value
    if(value === ""){
        userValidation.style.display="none"
    }
    else{
        userValidation.style.display="block"
        if(checkLenght(value,6)){
            userValidation.innerHTML="Looks good!"
            userValidation.style.color="#27ae60"
        }
        else{
            userValidation.innerHTML="Must be at least 6 characters long"
            userValidation.style.color="#c0392b"
        }
    }
}
function liveCheckPassword(event){
    checkPassword(event.target.value)
    checkRepeatPassword(repeatPassword.value)
}
function liveCheckRepeatPassword(event){
    checkRepeatPassword(event.target.value)
}

function checkPassword(value){
    currentPassword=value
    if(value === ""){
        passwordValidation.forEach(valid=> valid.style.display="none" )
    }
    else{
        passwordValidation.forEach(valid=> valid.style.display="block" )
        if(!checkLenght(value,8)){
            passwordValidation[0].innerHTML="Must be at least 8 characters long"
        }
        else{
            passwordValidation[0].style.display="none"
        }
        if(!checkUppercase(value)){
            passwordValidation[1].innerHTML="Must contain one uppercase"
        }
        else{
            passwordValidation[1].style.display="none"
        }
        if(!checkNumber(value)){
            passwordValidation[2].innerHTML="Must contain one number"
        }
        else{
            passwordValidation[2].style.display="none"
        }

        if(value.length >=8 && checkUppercase(value) && checkNumber(value) ){
            passwordValidation[3].innerHTML="Looks good!"
            passwordValidation[3].style.color="#27ae60"
        }
        else{
            passwordValidation[3].style.display="none"
        }
    }
}

function checkRepeatPassword(value){
    if(value === ""){
        passwordRepeatValidation.style.display ="none"
    }
    else{
        passwordRepeatValidation.style.display ="block"
        if(value === currentPassword){
            passwordRepeatValidation.innerHTML = "Passwords match"
            passwordRepeatValidation.style.color = "#27ae60"
        }
        else{
            passwordRepeatValidation.innerHTML = "Password does not match"
            passwordRepeatValidation.style.color = "#c0392b"
        }
    }
}

function checkEmail(event){
    if(event.target.value === ""){
        emailValidation.style.display = "none"
    }
    else{
        emailValidation.style.display = "block"
        if(!event.target.checkValidity()){
            emailValidation.innerHTML ="Please insert a valid email"
            emailValidation.style.color = "#c0392b"
        }
        else{
            emailValidation.innerHTML ="Looks good!"
            emailValidation.style.color = "#27ae60"
        }
    }
    
}

function checkAndSubmit(event){
    event.preventDefault()
    
    if(checkLenght(username.value,6) && checkLenght(password.value,8) && checkUppercase(password.value) && checkNumber(password.value) && email.checkValidity() && (repeatPassword.value === currentPassword)){
        lastValidation.style.display="block"
        lastValidation.style.color = "#27ae60"
        lastValidation.innerHTML = "Registered sucessfully!!"
    }
    else{
        lastValidation.style.display="block"
        lastValidation.innerHTML = "Please fix mistakes and try again"
        lastValidation.style.color = "#c0392b"
    }
    
}