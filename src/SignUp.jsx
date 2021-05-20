import React from 'react'
import './CSS/signUpCss.css'

const SignUp = () => {
    return (
    <body class='grid-container'>
        <header>
            
            <h1>Sign Up</h1>
        </header>
        
        <form>
            <label for="name"><b>Name:</b></label>
            <input type="text" name="name" placeholder="Enter Name"/>

            <label for="Email"><b>Email:</b></label>
            <input type="text" name="email" placeholder="Enter Email"/>

            <label for="country"><b>Select Country:</b></label>
            <input type="list" name="country" id="country"/>
            <datalist id="countries">
                <option value="Bub"></option>
                <option value="Dub"></option>
            </datalist>

            <label for="region"><b>Select Region</b></label>
            <input list="regions" name="region" id="region"/>
            <datalist id="regions">
                <option value="Bubelbo"></option>
                <option value="Dubelbo"></option>
            </datalist>
            <label for="wallet"><b>Wallet address</b></label>
            <input type="text" name="wallet"/>

            <div class="submit-container">
                <button class="submit-btn">Submit</button>
            </div>
        </form>

    </body>
    );
}

export default SignUp