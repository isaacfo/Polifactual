import React, {Component} from 'react'
import '../styles/'


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }


    render() {
        return (
        <div class="container-register">
    <div class="title">
        <i class="material-icons lock"></i> Register
    </div>

    <form action="/register" method="POST">
        <label>
            <div class="input">
                <div class="input-addon">
                    <i class="material-icons">person</i>
                    </div>
            </div>
            <input id="name" placeholder="Name" type="text" name="name" autocomplete="off"/>
        </label>
        
        <br/>
        <div class="clearfix"></div>

        <label>
            <div class="input">
                <div class="input-addon">
                <i class="material-icons">face</i>
                </div>
            </div>
            <input id ="username" placeholder="Username" type="text" name="username" autocomplete="off"/>
        </label>
        
        <br/>
        <div class="clearfix"></div>

        <label>
            <div class="input">
                <div class="input-addon">
                <i class="material-icons">vpn_key</i>
                </div>
            </div>
            <input id="password" placeholder="Password" type="password" name="password" autocomplete="off"/>
        </label>
        
        <br/>
        <div class="clearfix"></div>
    
        <div class="remember-me">
            <input type="checkbox"/>
            <span>I accept Terms of Service</span>
        </div>



        <a href="/register"><input type="submit" value="Register"/> </a>


    </form>   
    
        <div class="privacy">
            <a href="#">Privacy Policy</a>
        </div>

        <div class="register">
            <span style="color: #657575">Already have an account?</span>
            <a href="/login"><input type="submit" value="Log In Here"/></a>
           

        </div>
    </div>

        )
    }
};

export default Register;
