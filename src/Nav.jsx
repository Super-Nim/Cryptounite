import React, { useState, useRef, useEffect } from 'react'
import './CSS/Nav.css'
import { useHistory } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
const Nav =() => {

    const [burgerOn, setBurger] = useState(false)

    const showMenu = () => setBurger(!burgerOn)

    const ref = useRef(null)
    const clickOutside = event => {
        if(ref.current && !ref.current.contains(event.target)) {
            showMenu()
        }
    }

    useEffect(() => {
        if(burgerOn) {
        document.addEventListener("click", clickOutside, true)
        } else {
            document.removeEventListener("click", clickOutside, true)
        }
        // return () => {
        //     document.removeEventListener("click", clickOutside, true)
        // }
    }, [burgerOn])
   
    const history = useHistory()
    return (
    <div  >
        <nav> 
        <button className="logo">cryptounite.org</button>
        <div className='menu-btn' onClick={showMenu} ref={ref}>
            <div className={burgerOn ? 'menu-burger-close menu-burger':'menu-burger'} ></div>
        </div>
        
        <li className="nav-links" onClick={() => history.push('/')}><a href='#'>Home</a></li>
        <li className="nav-links"><a href="#">Our Mission</a></li>
        <li className="nav-links"><a href="#">Community</a></li>
        <button className="sign-up" onClick={() => history.push('/signup')}>Sign Up</button>  
        </nav>
        <div className="banner">
            <h2 className="banner-text">Join the community and sign up today</h2>
        </div>
        {burgerOn && <BurgerMenu/>}

    </div>
    )
}

export default Nav