// ========================================================
//                      LOGIN FORM 
// ========================================================

function loginForm(){
    return `
    <div class="container-login">
        <div class="title">
            <i class="material-icons lock">lock</i> Login
        </div>

        <form action="/api/login" method="POST">
            <label>
                <div class="input">
                    <div class="input-addon">
                        <i class="material-icons">face</i>
                    </div>
                    <input id="username" placeholder="Username" type="text" name="username" autocomplete="off">
                </div>
            </label>

            <br>
            <div class="clearfix"></div>

            <label>
                <div class="input">
                    <div class="input-addon">
                        <i class="material-icons">vpn_key</i>
                    </div>
                    <input id="password" placeholder="Password" type="password" name="password" autocomplete="off">
                </div>
            </label>
            <br>
            <div class="clearfix"></div>

            <div class="remember-me">
                <input type="checkbox">
                <span style="color: #757575">Remember Me</span>
            </div>

            <a href="/api/login"><input type="submit" value="Log In"></a?>
        </form>

        <div class="forgot-password">
            <a href="#">Forgot your password?</a>
        </div>
        <div class="privacy">
            <a href="#">Privacy Policy</a>
        </div>

        <div class="register">
            <span style="color: #657575">Don't have an account yet?</span>
            <a href="/register"><button id="register-link">Register here</button></a>
        </div>

    `;
}

module.exports = loginForm;