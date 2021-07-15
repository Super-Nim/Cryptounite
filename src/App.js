
import './App.css';
import React from 'react'
import './CSS/home.css'
// import './CSS/prototypeSecondHalf.css'
import SignUp from './SignUp'
import Donate from './Donate'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Password from './Password'
import RegistrationSuccessPage from './RegistrationSuccessPage'
import { Router, Route, Switch } from 'react-router-dom'


function App() {
 
  return (
      <div className="App">
     
        <Nav/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component ={SignUp} />
        <Route exact path='/donate' component={Donate}/>
        <Route exact path='/signup/password' component={Password}/>
        <Route exact path='/registrationSuccess' component={RegistrationSuccessPage}/>
        </Switch>
        <Footer/>
        
      </div>
    
  );
}

export default App;