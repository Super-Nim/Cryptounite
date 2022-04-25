import './CSS/home.css'
// import './CSS/prototypeSecondHalf.css'
import React from 'react'
import btc from './src-images/bitcoinFinal2.jpg'
import cel from './src-images/celsiusFinal2.jpg'
import eth from './src-images/ethereumlogo2.jpeg'


import { useHistory } from 'react-router-dom'

const Home = () => {
    
    const history = useHistory()

    return (
    <div className="App">
    <div className="container">
    <div className="hero">
        <h1 className="homeh1">"EVERYONE HELPING SOMEONE"</h1>
        <button className="don-rec donate">Donate</button>
        <button className="don-rec receive">Receive</button>
    </div>
    <div className="bitcoin-container">
        <img src={btc} alt="bitcoin"/>
        <img src={cel} alt="celsius"/>
        <img src={eth} alt="ethereum"/>       
    </div>

    <div className="theHow">
        <h1>"THE HOW"</h1>
    </div>
    </div>
    </div>
    )
}

export default Home