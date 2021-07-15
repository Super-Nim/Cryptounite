import './CSS/home.css'
// import './CSS/prototypeSecondHalf.css'
import React from 'react'


import { useHistory } from 'react-router-dom'

const Home = () => {
    
    const history = useHistory()

    return (
    <div className="App">
    <div className="container">
    <div className="hero">
        <h1 className="homeh1">"EVERYONE HELPING SOMEONE"</h1>
        <button className="don-rec donate" onClick={() => history.push('/donate')}>Donate</button>
        <button className="don-rec receive">Receive</button>
    </div>
    <div className="bitcoin-container">
        <img src='/images/bitcoinFinal.jpg' alt="bitcoin"/>
        <img src='/images/celsiusFinal.jpg' alt="celsius"/>
        <img src='/images/ethereumlogo2.jpg' alt="ethereum"/>   
    </div>

    <div className="theHow">
        <h1>"THE HOW"</h1>
    </div>
    </div>
    </div>
    )
}

export default Home