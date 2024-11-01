import {update_icon_view, display_poupup} from "./main.js"
import { root } from './app.js';
import {signIn} from './signIn.js';
import {signUp} from './signUp.js';


console.log("karim and hamza")
function updateCSS(href) {
    const link_css = document.getElementById('link-css');
    link_css.href = href;
}

root.innerHTML = signIn();
history.replaceState({ page: "signIn" }, "Sign In", "/signIn");
export function change_page(param)
{
    if(param === "signUp")
    {
        root.innerHTML = signUp();
        updateCSS("assests/style/signUp.css")
        history.pushState({ page: "signUp" }, "Sign Up", "/signUp");
    }
    else if(param === "signIn")
    {
        root.innerHTML = signIn();
        updateCSS("assests/style/signIn.css")
        history.pushState({ page: "signIn" }, "Sign In", "/signIn");
        
    }
}

window.addEventListener('popstate', function(event) {
    if (event.state) {
        if (event.state.page === "signUp") {
            root.innerHTML = signUp();
            updateCSS("assests/style/signUp.css");
        } else if (event.state.page === "signIn") {
            root.innerHTML = signIn();
            updateCSS("assests/style/signIn.css");
        }
    }
});

window.change_page = change_page;

update_icon_view();
display_poupup();