import React, { useState, useRef, useEffect, SyntheticEvent } from 'react'
import './CSS/Nav.css'
import { Link, useHistory } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import { Button } from '@material-ui/core'
const Nav =() => {

    const [burgerOn, setBurger] = useState(false)
    const showMenu = () => setBurger(!burgerOn)
    const ref = useRef<HTMLDivElement>(null)
    const signUpStyle={marginRight: '-22em'}
    const clickOutside = (event: any) => {
        console.log('event.target: ', event.target)
        console.log('ref.current: ', ref.current)
        if(ref.current && !ref?.current?.contains(event.target)) {
            showMenu() // if the element is NOT the burger-menu, toggle the menu
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
        
        <li className="nav-links"><Link to="/">Home</Link></li>
        <li className="nav-links"><a href="#">Our Mission</a></li>
        <li className="nav-links"><a href="#">Community</a></li>
        {/* <button className="sign-up" onClick={() => history.push('/signup')}>Sign Up</button>   */}
        <Button color="secondary" variant="contained" style={signUpStyle} onClick={() => history.push('/signup')}>Sign Up</Button>
        </nav>
        <div className="banner">
            <h2 className="banner-text">Join the community and sign up today</h2>
        </div>
        {burgerOn && <BurgerMenu/>}

    </div>
    )
}

export default Nav