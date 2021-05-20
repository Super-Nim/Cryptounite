import './CSS/home.css'
import './CSS/prototypeSecondHalf.css'
import React from 'react'
import {IconContext} from 'react-icons'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Home = () => {
    
    return (
    <IconContext.Provider value={{ size: "2em"}}>
    <div className="App">
      <head>
      <link type="text/css" charset="UTF-8"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </head>
      <body className="container">
    
    <div className="banner">
        <h2 className="banner-text">Join the community and sign up today</h2>
    </div>
    <div className="hero">
        <h1 class="homeh1">"EVERYONE HELPING SOMEONE"</h1>
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
</body>
    </div>
    </IconContext.Provider>
    )
}

export default Home