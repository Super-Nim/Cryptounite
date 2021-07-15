import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import './CSS/registrationSuccess.css'

import { RiCheckboxCircleLine } from 'react-icons/ri'

export default function Success() {
    const history = useHistory()
    
    useEffect(() => {
        setTimeout(() => {
                history.push('/')
            }, 5000) 
    }, [])
    
 
    return (
        <div className="successContainer">
            <div>
                <RiCheckboxCircleLine size="3rem" color="var(--green)"/>
                <h2>Success!</h2>
                <p>Welcome to the family!</p>
            </div>
        </div>
    )
}