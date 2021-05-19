
import './App.css';
import React from 'react'
import './CSS/prototype.css'
import './CSS/prototypeSecondHalf.css'
import SignUp from './SignUp'
import Home from './Home'
import Nav from './Nav'
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom'


function App() {
 
  return (
      <div className="App">
     
          <Switch>
        <Route exact path='/' component={Home}>
            <Home/>
          </Route>      
            <Route exact path="/signup" component={SignUp}>
                <SignUp/>
            </Route>
          </Switch>
      </div>
    
  );
}

export default App;
