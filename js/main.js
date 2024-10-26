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


// confirmation password



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
