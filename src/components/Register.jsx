import React, { useState } from 'react';

const Register = ({register}) => {
    const [details, setDetails] = useState({name: "", password: "", email: ""});

    const handleSubmit = e => {
        e.preventDefault();
        register(details);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="form input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className="form input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <div className="form input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <button className="button" type="submit">Register</button>
            </div>
        </form>
    )
}


export default Register;