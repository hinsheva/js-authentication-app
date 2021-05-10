import React from 'react';

const Login = () => {
    return(
        <form>
            <div className="form">
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
        </form>
    )
}

export default Login;