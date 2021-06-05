import React from 'react'
import './CSS/Footer.css'
import {IconContext} from 'react-icons'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {


    return (
        <IconContext.Provider value={{ size: "2em"}}> 
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
            <button><FaFacebook/></button>
            <button><FaInstagram/></button>
            <button><FaTwitter/></button>
            <button><FaLinkedin/></button>
        </div>
            <div className="copyright">
                <small>2021 Cryptounite, All Rights Reserved</small>
            </div>
        </div>
    </footer>
    </IconContext.Provider>
    )


}


export default Footer