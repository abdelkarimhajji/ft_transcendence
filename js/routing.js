import {update_icon_view, display_poupup, display_validate, delete_search} from "./main.js"
import { root } from './app.js';
import {signIn} from './signIn.js';
import {signUp} from './signUp.js';
import {chat} from './chat.js';



function updateCSS(href) {
    const link_css = document.getElementById('link-css');
    link_css.href = href;
}

export function change_page(param)
{
    if(param === "signUp")
    {
        root.innerHTML = signUp();
        updateCSS("assests/style/signUp.css")
        history.pushState({ page: "signUp" }, "Sign Up", "/signUp");
        display_poupup();
        display_validate();
    }
    else if(param === "signIn")
    {
        root.innerHTML = signIn();
        updateCSS("assests/style/signIn.css")
        history.pushState({ page: "signIn" }, "Sign In", "/signIn");
        update_icon_view();
    }
}

window.addEventListener('popstate', function(event) {
    if (event.state) {
        if (event.state.page === "signUp") {
            root.innerHTML = signUp();
            updateCSS("assests/style/signUp.css");
            display_poupup();
            display_validate();
        } else if (event.state.page === "signIn") {
            root.innerHTML = signIn();
            updateCSS("assests/style/signIn.css");
            update_icon_view();
        }
        else if (event.state.page === "chat") {
            root.innerHTML = signIn();
            updateCSS("assests/style/chat.css");
            delete_search();
        }
    }
});




window.addEventListener('load', () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/signIn') {
        root.innerHTML = signIn();
        updateCSS("assests/style/signIn.css")
        history.pushState({ page: "signIn" }, "Sign In", "/signIn");
        update_icon_view();
    } else if (path === '/signUp') {
        root.innerHTML = signUp();
        updateCSS("assests/style/signUp.css")
        history.pushState({ page: "signUp" }, "Sign Up", "/signUp");
        display_poupup();
        display_validate();
    } else if (path === '/chat') {
        root.innerHTML = chat();
        updateCSS("assests/style/chat.css")
        history.pushState({ page: "chat" }, "chat", "/chat");
        delete_search();
    }else {
        alert()
        root.innerHTML = "home page ok";
    }
});




window.change_page = change_page;

