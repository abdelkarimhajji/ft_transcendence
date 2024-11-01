
export function signUp() {
    return `
    <div class="container-back">
        <div class="container-valid" id="container-message">
            <div class="line">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="container-message" >
                <p>Success!</p>
                <p>This is a success request</p>
            </div>
            <div class="container-close">
                <i class="fa-solid fa-circle-xmark" id="close-validate"></i>
            </div>
        </div>
        <div class="container-poupup" id="container-poupup">
            <div class="container-form">
                <div class="container-close">
                    <i class="fa-solid fa-circle-xmark" id="close"></i>
                </div>
                <div class="form">
                    <div class="container-title">
                        <h1>Sign up with email</h1>
                        <p>Enter your email address to create an account.</p>
                    </div>
                    <div class="email">
                        <label >  Your email</label>
                        <input type="email" name="" id="validate-email">
                        <p id="message-not-valid">Input Not Valid!</p>
                        <input type="button" value="Continue" class="button" id="send-email">
                    </div>
                    <div class="container-help">
                        <p>This site is protected by reCAPTCHA Enterprise and the
                            Google Privacy Policy and <span>Terms of Service</span> apply.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="conatainer-top"></div>
        <div class="container-sign-in">
            <div class="container-img">
                <img src="./assests/imgs/avatar1.png" class=""  alt="">
                <p>Ping Pong Game</p>
            </div>
            <div class="container-switch">
                <div class="signIn" onclick="change_page('signIn')">Sign in</div>
                <div class="signUp">Sign up</div>
            </div>
            <p style="color: white; margin-bottom: 50px; font-weight: bold; font-size: 1.3em;">Choose One way</p>
            <div class="container-form">
                <div class="container-google">
                    <input type="submit" value=" SIGN UP WITH GOOGLE" class="google">
                    <i class="fa-brands fa-google"></i>
                </div>
                <div class="container-or"></div>
                <input type="submit" value="42    SIGN UP WITH INTRA" class="intra">
                <div class="container-or"></div>
                <div class="container-email">
                    <input type="submit" value=" SIGN UP WITH EMAIL" class="sign-in" id="email">
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
            <div class="container-help">
                <p>Forgot email or trouble signing in? <span>Get help.</span></p>
            </div>
        </div>
    </div>
    `;
}