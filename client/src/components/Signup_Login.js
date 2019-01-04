import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Locals = ({ match }) => {
    return (
<div>
   <div className="">
        <h1 className="">Signup / Login </h1>
   </div>
 
</div>
    );
}
export default Locals;