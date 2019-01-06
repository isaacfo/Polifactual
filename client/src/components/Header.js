import React, { Component } from "react";

import Login from "./Login";
import Register from "./Register";

// import Home from "./HomeComponent";
import Signup from "./Signup";
import Locals from './LocalComponent';
import States from './StateComponent';
import Nationals from './NationalComponent';
import Team from './Team';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "./HomeComponent";
  


class NavbarPage extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      return (
        <Router>
            <Navbar color="transparent" dark expand="md">
                <NavbarBrand>
                <strong className="white-text">Polifactual</strong>
                </NavbarBrand>
                <NavbarToggler
                onClick={this.toggleCollapse}
                />
                <Collapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
                >
                <NavbarNav left>
                    <NavItem active>
                    <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem active>
                    <NavLink to="/Github">Github</NavLink>
                    </NavItem>
                    <NavItem active>
                    <NavLink to="/Trello">Trello</NavLink>
                    </NavItem>
                    <NavItem active>
                    <NavLink to="/About">About Us</NavLink>
                    </NavItem>
                    <NavItem active>
                    <NavLink to="/Team">Meet The Team</NavLink>
                    </NavItem>
                    <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret>
                        <div className="d-none d-md-inline">Profile</div>
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem href="/Local">Local</DropdownItem>
                        <DropdownItem href="/State">State</DropdownItem>
                        <DropdownItem href="/National">National</DropdownItem>
                        
                        </DropdownMenu>
                    </Dropdown>
                    </NavItem>
                </NavbarNav>
                <NavbarNav right>
                    <NavItem>
                    <FormInline waves>
                        <div className="md-form my-0 indigo darken-4">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        </div>
                    </FormInline>
                    </NavItem>
                </NavbarNav>
                </Collapse>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />

                    <Route path= "/Team" component={Team}/>

                    <Route path="/Local" component={Locals}/>
                    <Route path= "/State" component={States}/>
                    <Route path= "/National" component={Nationals}/>
                </Switch>
            </Navbar>
        </Router>
      );
    }
  }
  
  export default NavbarPage;
