import React from 'react'
import './CSS/burgerMenu.css'
import { BurgerMenuData } from './BurgerMenuData'
import { Link } from 'react-router-dom'


const BurgerMenu = (props) => {
    // make menu togglable 

    
    return (
        <div className="burger-active">
            
            <ul>
            {BurgerMenuData.map((item, index) => {
            return (
                <li key={index} className={item.class}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
            })} 
            </ul>
        </div>
       
    )

}

export default BurgerMenu