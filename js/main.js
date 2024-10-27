let eye = document.getElementById('eye');

if (eye) {
    eye.addEventListener('click', function(){
        if(eye.classList.contains('fa-eye-slash'))
        {
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');
            input.type = ''
        }
        else
        {
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');
            input.type = 'password'
        }
    })
}



// display poupup email

let button_email = document.getElementById("email");
let close_ = document.getElementById("close");
let poupup = document.getElementById("container-poupup");
let form = document.querySelector(".container-poupup > .container-form");
if(button_email)
{
    button_email.addEventListener('click', function(){    
        poupup.style.opacity = "1";
        poupup.style.pointerEvents = "all";
    });
}
if(close_)
{
    close_.addEventListener('click', function() {
        poupup.style.pointerEvents = "none";
        poupup.style.opacity = "0";
        validate_message.style.left = "-400px";
        validate_email.value = "";
    })
}


// display message validate




let validate_message = document.getElementById("container-message");
let validate_email = document.getElementById("validate-email");
let send_email = document.getElementById("send-email");
let close_validate = document.getElementById("close-validate");
let message_not_valid = document.getElementById("message-not-valid");


function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

 
if(send_email && validate_message && send_email)
{
    send_email.addEventListener('click', function(){
        if(isValidEmail(validate_email.value))
        {
            validate_email.value = "";
            validate_message.style.left = "60px";
            message_not_valid.style.opacity = "0"
            setTimeout(function() {
                validate_message.style.left = "-400px";
            }, 2000);
        }
        else
            message_not_valid.style.opacity = "1"
        
    })

    close_validate.addEventListener("click", function(){
        validate_message.style.left = "-400px";
    })
}