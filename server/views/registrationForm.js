// ========================================================
//                  REGISTRATION FORM 
// ========================================================
function registrationForm() {
    return `
    <div class="container-register">
    <div class="title">
        <i class="material-icons lock">lock</i> Register
    </div>

    <form action="/api/register" method="POST">
        <label>
            <div class="input">
                <div class="input-addon">
                    <i class="material-icons">person</i>
            </div>
            <input id="name" placeholder="Name" type="text" name="name" autocomplete="off">
        </label>
        
        <br>
        <div class="clearfix"></div>

        <label>
            <div class="input">
                <div class="input-addon">
                <i class="material-icons">face</i>
            </div>
            <input id ="username" placeholder="Username" type="text" name="username" autocomplete="off">
        </label>
        
        <br>
        <div class="clearfix"></div>

        <label>
            <div class="input">
                <div class="input-addon">
                <i class="material-icons">vpn_key</i>
            </div>
            <input id="password" placeholder="Password" type="password" name="password" autocomplete="off">
        </label>

        <label>
            <div class="input">
                <div class="input-addon">
                <i class="material-icons">home</i>
            </div>
            <input id="streetaddress" placeholder="Street" type="text" name="streetaddress" autocomplete="off">
            <input id="currentstate" placeholder="State" type="text" name="currentstate" autocomplete="off">
            <input id="zipcode" placeholder="Zipcode" type="text" name="zipcode" autocomplete="off">
        </label>
        
        <br>
        <div class="clearfix"></div>
    
        <div class="remember-me">
            <input type="checkbox">
            <span style="color: #757575">I accept Terms of Service</span>
        </div>



        <a href="/api/register"><input type="submit" value=Register>


    </form>   
    
        <div class="privacy">
            <a href="#">Privacy Policy</a>
        </div>

        <div class="register">
            <span style="color: #657575">Already have an account?</span>
            <a href="/login"><input type="submit" value="Log In Here"></a>
           

        </div>
    `;
}

module.exports = registrationForm;