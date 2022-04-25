import React, { useState } from 'react'
import './CSS/donate.css'
import bitcoinFinal2 from './src-images/bitcoinFinal2.jpg'
import cel from './src-images/celsiusFinal2.jpg'
import eth from './src-images/ethereumlogo2.jpeg'
import hand2 from './src-images/hand2.jpg'
import arrow from './src-images/arrow.jpg'
import vault from './src-images/vault.jpg'
import hand1 from './src-images/hand1.jpg'
import pointer from './src-images/pointer.jpg'
import arrowPNG from './src-images/arrowPNG.png'

import donateBG from './src-images/donateBG.png'
import { useHistory } from 'react-router-dom'

// TODO: Re-factor entire page with MUI and TS
const Donate = () => {

    

    // variables for when img click count is 1,2,3
    const [isShown, setShown] = useState(true)
    const [isShown2, setShown2] = useState(false)
    const [isShown3, setShown3] = useState(false)



    return (
        <div className="donateBody">
            <div className="grid1">
            
                <h1 className="don-header">Make A Donation</h1>
                <button className="don don-reg">Register</button>
                <button className="don don-guest">Guest</button>
            </div>
            <div className="grid2">
                <img src={bitcoinFinal2} alt="bitcoin"/>
                <img src={cel} alt="celsius"/>
                <img src={eth} alt="ethereum"/>
                  
            </div>
            <div className="grid3">
               <hr />
               <div>
               <img src={hand2} alt="green-hand" 
               onClick={() => setShown(true) + setShown2(false) +
                setShown3(false)}
            //    onMouseEnter={() => setShown(true)}
            //    onMouseLeave={() => setShown(false)}
               />  
               {isShown && (
                    <ul style={{marginRight:"15%"}}> 
                       <img src={pointer}/>
                    </ul>
                  
               )}</div>
               <div><img src={arrowPNG} alt="arrow"/> </div>
               <div><img src={vault} alt="green-hand"
               onClick={() => setShown(false)+ setShown2(true)+
            setShown3(false)}
            //    onMouseEnter={() => setShown2(true)}
            //    onMouseLeave={() => setShown2(false)}
              
            //    onMouseLeave={() => setShown2(false)} 
               /> {isShown2 && (
                <ul style={{marginRight:"20%"}}> 
                   <img src={pointer} style={{transition: "all 0.5s ease-out", scale: "1"}}/>
                </ul>
              
                )}
               </div>  
               <div><img src={arrow} alt="green-hand"/> </div> 
               <div><img src={hand1} alt="green-hand"
               onClick={() => setShown3(true) + setShown2(false)
                + setShown(false)}/>
               {isShown3 && (
                <ul style={{marginRight:"15%"}}> 
                   <img src={pointer}/>
                </ul>
                )}</div>
               


            </div>
            <div className="grid4">
                {isShown && (
                <React.Fragment>
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
                </React.Fragment>)}

                {isShown2 && (
                <React.Fragment>
                    <h2 style={{textAlign:"center"}}>SECURE FUNDS</h2>
                </React.Fragment>
                )}

                {isShown3 && (
                    <React.Fragment>
                        <h2 style={{textAlign:"right"}}>THE FUND RELEASE</h2>
                    </React.Fragment>
                )}
            </div>
            <div></div>
        </div>
    )
}


export default Donate