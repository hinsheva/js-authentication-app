import React, { useState } from 'react';
import authImg from './auth.png';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';


function App() {
  const [loginActive, setLoginActive] = useState(false);
  const handleSwitch = () => {
    setLoginActive(!loginActive);
  }

  const [userToLogin, setUserToLogin] = useState({name: "", password: ""});
  const [userToRegister, setUserToRegister] = useState({name: "", password: "", email: ""});


  const login = details => {
    setUserToLogin({name: details.name, password: details.password})
  }
  const register = details => {
    setUserToRegister({name: details.name, password: details.password, email: details.email});

  }
  console.log(userToLogin.name)

  return (
    <>
    {userToLogin.name || userToRegister.name ? (
      <div className="container">HOME PAGE</div>
    ) :
    <>
      <div className="container">
        <Header isLoginActive={loginActive}/>
        <img src={authImg} alt="authentication_image"></img>
        {loginActive ? <Login login={login} /> : <Register register={register}/>}
        <Footer />
      </div>
      <Slider isLogginActive={loginActive} onClick={handleSwitch}/>
      </>
    }       
    </>
    )  
  }

export default App;
