import React from 'react';

const Login = ({containerRef}) => {
    return(
         <div className="form" ref={containerRef}>
            <div className="form input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"></input>
            </div>
            <button className="button" type="submit">Submit</button>
        </div>
    )
}

export default Login;