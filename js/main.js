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
let poupup = document.getElementById("container-poupup")
if(button_email)
{
    button_email.addEventListener('click', function(){
    
        poupup.style.left = 0;
    });
}
if(close_)
{
    close_.addEventListener('click', function() {
       poupup.style.left = "-2500px";
    })
}


// display message validate

let validate_message = document.getElementById("container-message");
let validate_email = document.getElementById("validate-email");
let send_email = document.getElementById("send-email");
let close_validate = document.getElementById("close-validate");


if(send_email && validate_message && send_email)
{
    send_email.addEventListener('click', function(){
        if(validate_email.value != "")
        {
            validate_email.value = ""
            validate_message.style.left = "60px";
            setTimeout(function() {
                validate_message.style.left = "-400px";
            }, 3000);
        }
        
    })
    close_validate.addEventListener("click", function(){
        validate_message.style.left = "-400px";
    })
}