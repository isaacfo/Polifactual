import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Login.css"

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
			username: '',
			streetaddress: '',
			currentstate: '',
			zipcode: '',
			password: ''
		};
	}

	// validateForm() {
	// return this.state.email.length > 0 && this.state.password.length > 0;
	// }

	// handleChange = event => {
	// this.setState({
	// 	[event.target.id]: event.target.value,
	// 	// id: event.target.id
	// });
	// }

	_handleUsername = event => {
		const value = event.target.value;

		this.setState({
			username: value
		});
	}

	_handlePassword = event => {
		const value = event.target.value;

		this.setState({
			password: value
		})
	}

	_handleSubmit = event => {
		event.preventDefault();

		axios
			.post("/api/login", this.state)
			.then(response => {
				// Need a response including the address from userObj
			})
	}

	render() {
	return (
		<div class="container-login">
			<div class="title">
				<i class="material-icons lock"></i> Login
			</div>

			<form className="signup-form" onSubmit={this._handleSubmit}>
				<label>
					<div class="input">
						<div class="input-addon">
							<i class="material-icons">face</i>
						</div>
						<input 
							id="username" 
							placeholder="Username" 
							type="text" 
							name="username" 
							autocomplete="off" 
							onChange={this._handleUsername}
							value={this.state.username}
						/>
					</div>
				</label>

				<br/>
				<div class="clearfix"></div>

				<label>
					<div class="input">
						<div class="input-addon">
							<i class="material-icons">vpn_key</i>
						</div>
						<input 
							id="password" 
							placeholder="Password" 
							type="password" 
							name="password" 
							autocomplete="off"
							onChange={this._handlePassword}
							value={this.state.password}
						/>
					</div>
				</label>
				<br/>
				<div class="clearfix"></div>

				<div class="remember-me">
					<input type="checkbox"/>
					<span>Remember Me</span>
				</div>
				<input type="submit" value="Log In"/>
			</form>

			<div class="forgot-password">
				<a href="#">Forgot your password?</a>
			</div>
			<div class="privacy">
				<a href="#">Privacy Policy</a>
			</div>

			<div class="register">
				<span>Don't have an account yet?</span>

				<Link to="/register">Register here!</Link>
			</div>
			
		</div>
	)

}


};

		

export default Login;