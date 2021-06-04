import React from 'react'
import './CSS/donate.css'
import donateTimeline from './donateTimeline.png'
import donateBG from './donateBG.png'
import { useHistory } from 'react-router-dom'

const Donate = () => {




    return (
        <div className="donateBody">
            <div className="grid1">
            
                <h1 className="don-header">Make A Donation</h1>
                <button className="don don-reg">Register</button>
                <button className="don don-guest">Guest</button>
            </div>
            <div className="grid2">
                <img src='/images/bitcoinFinal.jpg' alt="bitcoin"/>
                <img src='/images/celsiusFinal.jpg' alt="celsius"/>
                <img src='/images/ethereumlogo2.jpg' alt="ethereum"/>
                  
            </div>
            <div className="grid3">
               <hr />
               <img src={donateTimeline} alt="green-hand"/>   


            </div>
            <div></div>
            <div></div>
        </div>
    )
}


export default Donate