let eye = document.getElementById('eye');
let input = document.getElementById('password');
 
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



// confirmation password

let confirm = document.getElementById('confirm-password');


// if(input.value == confirm.value)
