const userValidation = document.getElementById('user-validation')
const passwordValidation = document.getElementById('password-validation')
const passwordRepeatValidation = document.getElementById('password-repeat-validation')

const username = document.getElementById('username')
const password = document.getElementById('password')
const repeatPassword = document.getElementById('repeat-password')


function checkUsername(event){
    value = event.target.value
    if(value === ""){
        userValidation.innerHTML=""
    }
    else{
        if(value.length >= 6){
            userValidation.innerHTML="Looks good!"
            userValidation.style.color="#27ae60"
        }
        else if(value.length < 6){
            userValidation.innerHTML="Must be at least 6 characters long"
            userValidation.style.color="#c0392b"
        }
    }
}