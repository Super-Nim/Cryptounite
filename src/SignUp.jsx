import React, { useState} from 'react'
import axios from 'axios'
import './CSS/signUpCss.css'

const SignUp = () => {

   const [firstName, setfirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [country, setCountry] = useState('')
   const [region, setRegion] = useState('')
   const [wallet, setWallet] = useState('')

   const onChangefirstName = (e) => {
       setfirstName( e.target.value )
   }
   const onChangeLastName = (e) => {
       setLastName( e.target.value )
   }
   const onChangeEmail = (e) => {
       setEmail( e.target.value)
   }
   const onChangeCountry = (e) => {
       setCountry( e.target.value)
   }
   const onChangeRegion = (e) => {
       setRegion( e.target.value)
   }
   const onChangeWallet = (e) => {
       setWallet( e.target.value)
   }

   const onSubmit = (e) => {
       e.preventDefault()
       const newCustomer = {
           firstName: firstName,
           lastName: lastName,
           email: email,
           country: country,
           region: region,
           wallet: wallet
       }
    
       axios.put('http://localhost:5000/customer/update', newCustomer)
        .then(res => {
            console.log("status: ", res.status)
            setfirstName('')
            setLastName('')
            setEmail('')
            setCountry('')
            setRegion('')
            setWallet('')
        })
        .catch(err => {console.log(err, "no duplicates")})
        
   }


    return (
    <div className='grid-container'>
        <header>    
            <h1>Sign Up</h1>          
        </header>  
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName"></label>
            <input type="text" name="firstName" 
            onChange={onChangefirstName} placeholder="Enter First Name"/>

            <label htmlFor="lastName"></label>
            <input type="text" name="lastName" 
            onChange={onChangeLastName} placeholder="Enter Last Name"/>

            <label htmlFor="Email"></label>
            <input type="text" name="email" 
            onChange={onChangeEmail} placeholder="Enter Email"/>

            <label htmlFor="country"></label>
            <input type="list" name="country" placeholder="Enter Country"
            onChange={onChangeCountry} id="country"/>
            <datalist id="countries">
                <option value="Bub"></option>
                <option value="Dub"></option>
            </datalist>

            <label htmlFor="region"></label>
            <input list="regions" name="region" placeholder="Enter Region"
            onChange={onChangeRegion} id="region"/>
            <datalist id="regions">
                <option value="Bubelbo"></option>
                <option value="Dubelbo"></option>
            </datalist>
            <label htmlFor="wallet"></label>
            <input type="text" placeholder="Enter Wallet Address"
            onChange={onChangeWallet} name="wallet"/>

            <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </form>
        <div className="social-login">
            <div className="or">OR</div>
            <div className="right">
                <button class="socialSignIn fb-login">Facebook</button>
                <button class="socialSignIn Tw-login">Twitter</button>
                <button class="socialSignIn Gm-login">Gmail</button>
            </div>
        </div>

    </div>
    );
}

export default SignUp