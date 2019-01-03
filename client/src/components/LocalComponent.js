import React from 'react';

//stateless function component - arrow function 
//component render only static content vs stateful/changing content

const Locals = ({ match }) => {
    return (
        <div className="">
            <h1 className="">Hello from local!</h1>
        </div>
    );
}
export default Locals;