import './CSS/prototype.css'
import './CSS/prototypeSecondHalf.css'
import SignUp from './SignUp'
import React from 'react'
import {IconContext} from 'react-icons'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Route, Link, Switch, useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    const routeChange = () => {
        history.push('/signup')
    }
    return (
    <IconContext.Provider value={{ size: "2em"}}>
    <React.Fragment className="App">
      <head>
      <link type="text/css" charset="UTF-8"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </head>
      <body className="container">
      <nav> 
        <button className="logo">cryptounite.org</button>
        <div className="menu-btn">
            <div className="menu-burger"></div>
        </div>
        <li className="nav-links"><a href='#'>Home</a></li>
        <li className="nav-links"><a href="#">Our Mission</a></li>
        <li className="nav-links"><a href="#">Community</a></li>
        <button className="sign-up">Sign Up</button>
        <Link to='/signup'><li>sign-up</li></Link>
       
    </nav>
    
    <div className="banner">
        <h2 className="banner-text">Join the community and sign up today</h2>
    </div>
    <div className="hero">
        <h1>"EVERYONE HELPING SOMEONE"</h1>
        <button className="don-rec donate">Donate</button>
        <button className="don-rec receive">Receive</button>
    </div>
    <div className="bitcoin-container">
        <img src='/images/bitcoinFinal.jpg'/>
        <img src='/images/celsiusFinal.jpg'/>
        <img src='/images/ethereumlogo2.jpg'/>   
    </div>

    <div className="theHow">
        <h1>"THE HOW"</h1>
    </div>

    <footer>
        <div className="support">
           <h3>SUPPORT</h3>
            
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Us</a></li>
            
        </div>
        <div className="community">
            <h3>COMMUNITY</h3>
            
            <li><a href="#">News</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Receive</a></li>
            <li><a href="#">Sign Up</a></li>
            
        </div>
        <div className="social-copyright">
            <div className="social">
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
        </div>
            <div className="copyright">
                <small>2021 Cryptounite, All Rights Reserved</small>
            </div>
        </div>
    </footer>
</body>
    </React.Fragment>
    </IconContext.Provider>
    )
}

export default Home