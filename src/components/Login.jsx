import React, { useState } from 'react';

const Login = ({login}) => {
    const [deatils, setDetails] = useState({name: "", password: ""});

    const handleSubmit = e => {
        e.preventDefault();
        login(deatils);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="form input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" onChange={e=>setDetails({...deatils, name: e.target.value})} value={deatils.name}></input>
                </div>
                <div className="form input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" onChange={e=>setDetails({...deatils, password: e.target.value})} value={deatils.password}></input>
                </div>
                <button className="button" type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;