import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'
import * as BsIcons from 'react-icons/bs'


export const BurgerMenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        class: 'nav-text'
    },
    {
        title: 'Sign Up',
        path: '/signup',
        icon: <BsIcons.BsFillPersonPlusFill/>,
        class: 'nav-text'
    },
    {
        title: 'Our Mission',
        path: '/',
        icon: <GoIcons.GoGlobe/>,
        class: 'nav-text'
    },{
        title: 'Community',
        path: '/',
        icon: <BsIcons.BsPeopleFill/>,
        class: 'nav-text'
    }

]