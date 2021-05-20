import React from 'react'
import './CSS/Nav.css'
import Home from './Home'
import SignUp from './SignUp'
import { Route, useHistory } from 'react-router-dom'

const Nav =() => {

    const history = useHistory()
    return (
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
    )
}

export default Nav