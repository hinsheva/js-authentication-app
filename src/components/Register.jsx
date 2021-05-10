import React from 'react';

const Register = () => {
    return(
        <div className="form">
            <div className="form input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"></input>
            </div>
            <div className="form input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email"></input>
            </div>
            <button className="button" type="submit">Submit</button>
        </div>
    )
}


export default Register;