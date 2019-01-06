import React from 'react';

import Signup from './Signup';

import Style from '../styles/MainComponent.css';

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



class Main extends React.Component {
  render() {
    return (
      <div>
     <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="h1-responsive font-weight-bold">
                  Sign up right now!{" "}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae, quisquam iste, maiores. Nulla.
                </h6>
                <MDBBtn outline color="white">
                  Learn More
                </MDBBtn>
              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard id="classic-card">
                  <MDBCardBody className="z-depth-2 indigo-text">
                    <h3 className="text-center ">
                      <MDBIcon icon="user" /> Register:
                    </h3>
                    <hr className="hr-light" />
                    <MDBInput icon="user" label="Your name" />
                    <MDBInput icon="envelope" label="Your email" type="email" />
                    <MDBInput icon="address-book" label="Zip Code"/>
                    <div className="text-center mt-4">
                      <MDBBtn color="indigo">Sign Up</MDBBtn>
                      <hr className="hr-light" />
                      <div className="text-center d-flex justify-content-center white-label">
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="twitter" className="indigo-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="linkedin" className="indigo-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon icon="instagram" className="indigo-text" />
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>

      <MDBContainer>
        <MDBRow className="py-5">
          <MDBCol md="12" className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      </div>
    );
  }
}
export default Main;