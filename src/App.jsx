import React from 'react';
import authImg from './auth.png';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  changeState(){
    this.setState({isLogginActive: !this.state.isLogginActive});
  };

  render() {
    const { isLogginActive } = this.state;
    return (
      <>
        <div className="container">
          <Header isLoginActive={isLogginActive}/>
          <img src={authImg} alt="authentication_image"></img>
          {isLogginActive ? <Login containerRef={(ref)=>this.current=ref}/> : <Register containerRef={(ref)=>this.current=ref}/>}
          <Footer />
        </div>
        <Slider current={this.current} containerRef={(ref)=>this.rightSlide=ref} isLogginActive={isLogginActive} onClick={this.changeState.bind(this)}/>
      </>
    );
  }
}

export default App;
