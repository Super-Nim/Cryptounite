import React from 'react'
import './CSS/Nav.css'
import {  useHistory } from 'react-router-dom'

const Nav =() => {

    const history = useHistory()
    return (
    <React.Fragment>
        <nav> 
        <button className="logo">cryptounite.org</button>
        <div className="menu-btn">
            <div className="menu-burger"></div>
        </div>
        <li className="nav-links" onClick={() => history.push('/')}><a href='#'>Home</a></li>
        <li className="nav-links"><a href="#">Our Mission</a></li>
        <li className="nav-links"><a href="#">Community</a></li>
        <button className="sign-up" onClick={() => history.push('/signup')}>Sign Up</button>  
    </nav>
    <div className="banner">
        <h2 className="banner-text">Join the community and sign up today</h2>
    </div>
    </React.Fragment>
    )
}

export default Nav