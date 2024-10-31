import {update_icon_view} from "./main.js"
import { root } from './app.js';
import {greet} from './signIn.js'


root.innerHTML = greet();

export function change_page(param)
{
    if(param === "signUp")
        root.innerHTML = "hi";
}
window.change_page = change_page;

update_icon_view();