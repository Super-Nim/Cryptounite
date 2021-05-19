import React from 'react'
import './CSS/prototype.css'
import Home from './Home'
import SignUp from './SignUp'
import {Link} from 'react-router-dom'

const Nav =() => {
    return (
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
    )
}

export default Nav