
import React from 'react';

import Signup from './Signup';

import '../styles/HomeComponent.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
  } from "mdbreact";



//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Home = () => {
    return (
<div className="">






{/* 
  <div className="">
      <h2 className="">Welcome! Please click the link below to sign in! </h2>
  </div>
  <div className="homeLinks">
    <ul>
      <li><Link to={`/Signup`}>Signup/Login</Link></li>
    </ul>
  </div>
  <div className="homeLinks">
    <Route path={`/Signup`} component={Signup} />

  </div> */}
</div>
    );
}

export default Home;