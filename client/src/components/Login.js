import React, { Component } from "react";

import "../styles/Login.css"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      address: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
 <div class="container-login">
    <div class="title">
        <i class="material-icons lock"></i> Login
    </div>

    <form action="/api/login" method="POST">
        <label>
            <div class="input">
                <div class="input-addon">
                    <i class="material-icons">face</i>
                </div>
                <input id="username" placeholder="Username" type="text" name="username" autocomplete="off"/>
            </div>
        </label>

        <br/>
        <div class="clearfix"></div>

        <label>
            <div class="input">
                <div class="input-addon">
                    <i class="material-icons">vpn_key</i>
                </div>
                <input id="password" placeholder="Password" type="password" name="password" autocomplete="off"/>
            </div>
        </label>
        <br/>
        <div class="clearfix"></div>

        <div class="remember-me">
            <input type="checkbox"/>
            <span>Remember Me</span>
        </div>

        <a href="/api/login"><input type="submit" value="Log In"/></a>
    </form>

    <div class="forgot-password">
        <a href="#">Forgot your password?</a>
    </div>
    <div class="privacy">
        <a href="#">Privacy Policy</a>
    </div>

    <div class="register">
        <span>Don't have an account yet?</span>
        <a href="/register"><button id="register-link">Register here</button></a>
    </div>
    
</div>
    )

}


};

        

export default Login;