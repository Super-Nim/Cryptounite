import React from 'react'
import './CSS/burgerMenu.css'
import { BurgerMenuData } from './BurgerMenuData'


const BurgerMenu = () => {



    return (
        <div className="burger-active">
            <h1>POOOOOOO</h1>
            <ul>
            {BurgerMenuData.map((item, index) => {
            return (
                <li key={index} className={item.class}>
                    <link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </link>
                </li>
            )
            })} 
            </ul>
        </div>
       
    )

}

export default BurgerMenu