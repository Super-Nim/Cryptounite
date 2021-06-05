import React from 'react'
import './CSS/donate.css'
import donateTimeline from './donateTimeline.png'
import bitcoinFinal2 from './bitcoinFinal2.jpg'

import donateBG from './donateBG.png'
import { useHistory } from 'react-router-dom'

const Donate = () => {

    // variables for when img click count is 1,2,3




    return (
        <div className="donateBody">
            <div className="grid1">
            
                <h1 className="don-header">Make A Donation</h1>
                <button className="don don-reg">Register</button>
                <button className="don don-guest">Guest</button>
            </div>
            <div className="grid2">
                <img src={bitcoinFinal2} alt="bitcoin"/>
                <img src='/images/celsiusFinal.jpg' alt="celsius"/>
                <img src='/images/ethereumlogo2.jpg' alt="ethereum"/>
                  
            </div>
            <div className="grid3">
               <hr />
               <img src={donateTimeline} alt="green-hand"/>   


            </div>
            <div className="grid4">
                <h2>GIVING THAT SUITS YOU</h2>
                <p>
                    Join our community at Crypto Unite or guest donation either way we appreciate 
                    your contribution to changing the world. 
                </p>
                <p>
                    Our mission is to be the most transparent chairty in the world so you are confident 
                    your money is going to a good cause. 
                </p>
                <p>
                    Contributions to the Crypto Unite platforms are also welcome to keep our systems
                    running. Please see XYZ page for more information. 
                </p>
            </div>
            <div></div>
        </div>
    )
}


export default Donate