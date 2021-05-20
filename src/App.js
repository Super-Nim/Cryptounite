
import './App.css';
import React from 'react'
import './CSS/home.css'
import './CSS/prototypeSecondHalf.css'
import SignUp from './SignUp'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import { Router, Route, Switch } from 'react-router-dom'


function App() {
 
  return (
      <div className="App">
        <Nav/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component ={SignUp} />
        </Switch>
        
        
        <Footer/>

        
  
  
        
      </div>
    
  );
}

export default App;