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

  return (
    <>
      <div className="container">
        <Header isLoginActive={loginActive}/>
        <img src={authImg} alt="authentication_image"></img>
        {loginActive ? <Login /> : <Register />}
        <Footer />
      </div>
      <Slider isLogginActive={loginActive} onClick={handleSwitch}/>
    </>
    );
  }

export default App;
