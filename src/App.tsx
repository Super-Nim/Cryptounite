import "./App.css";
import React, { useEffect } from "react"; // import * as React from 'react' for tsx files
import "./CSS/home.css";
// import './CSS/prototypeSecondHalf.css'
import SignUp from "./SignUp";
import Donate from "./Donate";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Password from "./Password";
import RegistrationSuccessPage from "./RegistrationSuccessPage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import NewSignUp from "./NewSignUp";
import Profile from "./profile-components/Profile";
import { ethers } from 'ethers';

function App() {
  // getAccount = async () => {}
  // if account exists and user has metamask installed, GET the account provider.send("eth_requestAccounts", [])
  // then getSigner() --> getaddress() to call getAccount(id) in the smartcontract

  // @dev watch for account changes
  /*window.ethereum.on("accountsChanged", (accounts) => {
  do what you want here 
  })
  */

  // @dev watch for network changes
  /*
  window.ethereum.on("chainChanged", (chainId) => {
    do what you want here 
    full refresh is recommended 
    })
*/

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={NewSignUp} />
        {/* <Route exact path='/profile' component={Profile}/> */}
        <Redirect exact from="/profile" to="/profile/portfolio" />{" "}
        {/*going to /profile redirects to /profile/portfolio */}
        <Route exact path="/profile/:page?" component={Profile} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/signup/password" component={Password} />
        <Route
          exact
          path="/registrationSuccess"
          component={RegistrationSuccessPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
