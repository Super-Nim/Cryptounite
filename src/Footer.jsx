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
        <div class="support">
           <h3>SUPPORT</h3>
            
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Us</a></li>
            
        </div>
        <div class="community">
            <h3>COMMUNITY</h3>
            
            <li><a href="#">News</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Receive</a></li>
            <li><a href="#">Sign Up</a></li>
            
        </div>
        <div class="social-copyright">
            <div class="social">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
        </div>
            <div class="copyright">
                <small>2021 Cryptounite, All Rights Reserved</small>
            </div>
        </div>
    </footer>
    </IconContext.Provider>
    )


}


export default Footer