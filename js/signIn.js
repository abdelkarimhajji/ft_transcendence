
export function signIn() {
    return `
    <div class="container-back">
    <div class="conatainer-top">

    </div>
    <div class="container-sign-in">
        <div class="container-img">
            <img src="./assests/imgs/avatar1.png" class=""  alt="">
            <p>Ping Pong Game</p> 
        </div>
        <div class="container-switch">
            <div class="signIn">Sign in</div>
            <div class="signUp" onclick="change_page('signUp')">Sign up</div>
        </div>
        <form action="" class="container-form">
            <label for="">Enter Email</label>
            <input type="" placeholder="Enter Your Email">
            <label for="">Enter Password</label>
            <div class="container-password">
                <input type="password" placeholder="Enter Your Password" id="password">
                <i class="fa-regular fa-eye-slash" id="eye"></i>
            </div>
            <div class="container-forget"><label for="">Forget password ?</label></div>
            <!-- <input type="submit" value="SIGN IN TO ACCOUNT" class="sign-in"> -->
            <div class="container-email">
                <input type="submit" value=" SIGN UP WITH EMAIL" class="sign-in">
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="container-or"><p class="or">Or</p></div>
            <input type="submit" value="42    SIGN IN WITH INTRA" class="intra">
            <div class="container-google">
                <input type="submit" value=" SIGN IN WITH GOOGLE" class="google">
                <i class="fa-brands fa-google"></i>
            </div>
        </form>
        <div class="container-help">
            <p>Forgot email or trouble signing in? <span>Get help.</span></p>
        </div>
    </div>
</div>
    `;
}