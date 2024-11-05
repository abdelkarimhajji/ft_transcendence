
export function update_icon_view() {

let eye = document.getElementById('eye');
let input = document.getElementById("password")

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

}

// display poupup email

export function display_poupup()
{
    let validate_email = document.getElementById("validate-email");
    let validate_message = document.getElementById("container-message");
    let button_email = document.getElementById("email");
    let close_ = document.getElementById("close");
    let poupup = document.getElementById("container-poupup");
    
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
}
// display message validate







export function display_validate() {
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
                if (window.innerWidth >= 550)
                {
                    validate_message.style.left = "40px";
                    validate_message.style.bottom = "50px";
                }
                else
                {
                    validate_message.style.left = "20px";
                    validate_message.style.bottom = "20px";
                }
                message_not_valid.style.opacity = "0"
                message_not_valid.style.zIndex = "0"
                setTimeout(function() {
                    validate_message.style.left = "-400px";
                }, 3000);
            }
            else
            {
                message_not_valid.style.opacity = "1"
                
            }
            
        })
    
        close_validate.addEventListener("click", function(){
            validate_message.style.left = "-400px";
        })
    }
}



// chat page

// delete search

export function delete_search()
{
    console.log("push");
    let delete_ = document.getElementById("delete");
    let input_search = document.getElementById("input-search");
    if(delete_)
    {
        delete_.addEventListener('click', function(){
            if(input_search.value != "")
            input_search.value = "";
    })
    }

    let delete_chat = document.getElementById("delete-chat");
    let input_search_chat = document.getElementById("input-search-chat");

    if(delete_chat)
    {
        delete_chat.addEventListener('click', function(){
            if(input_search_chat.value != "")
            input_search_chat.value = "";
        })
    }
}


// page of home hover on game

let first_game = document.querySelector(".first-game");
let second_game = document.querySelector(".second-game");
let third_game = document.querySelector(".third-game");

first_game.addEventListener('mouseover', () =>{
    first_game.style.width = "30%";
    first_game.style.height = "80%";
    second_game.style.width = "25%";
    second_game.style.height = "65%";
})

first_game.addEventListener("mouseout", () => {
    first_game.style.width = "25%";
    first_game.style.height = "65%";
    second_game.style.width = "30%";
    second_game.style.height = "80%";
})

third_game.addEventListener('mouseover', () =>{
    third_game.style.width = "30%";
    third_game.style.height = "80%";
    second_game.style.width = "25%";
    second_game.style.height = "65%";
})

third_game.addEventListener("mouseout", () => {
    third_game.style.width = "25%";
    third_game.style.height = "65%";
    second_game.style.width = "30%";
    second_game.style.height = "80%";
})