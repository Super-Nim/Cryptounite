import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import './CSS/signUpCss.css'
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom'

const SignUp = () => {
 const history = useHistory()

   const [firstName, setfirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [country, setCountry] = useState('')
   const [region, setRegion] = useState('')
   const [wallet, setWallet] = useState('')
   
   const [emailError, setEmailError] = useState(false)
   const [emailExists, setEmailExists] = useState(false)

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

   const validateEmail = (email) => {
    
    if (!(/\S+@\S+\.\S+/.test(email))) {
        setEmailError(true)
        return true;
    }
    return false;
   }

   const onSubmit = async (e) => {
       e.preventDefault()
       const newCustomer = {
           firstName: firstName,
           lastName: lastName,
           email: email,
           country: country,
           region: region,
           wallet: wallet
       }

       const { data } = await axios.get('http://localhost:5000/customer/')
       const emailExists = await data.filter( obj => 
        obj.email === email)
        console.log(emailExists)
        if (emailExists.length !== 0) {
            toast('Email address already exists')
            setEmailExists(true)
            setEmailError(false)
            return
        } else if (validateEmail(email)) {
            toast('Please enter a valid email')
            setEmailError(true)
            setEmailExists(false)
            return
        } else {
            axios.post('http://localhost:5000/customer/add', newCustomer)
            .then(res => {
                console.log("status: ", res.status)
                setfirstName('')
                setLastName('')
                setEmail('')
                setCountry('')
                setRegion('')
                setWallet('')
            })
            return history.push('/registrationSuccess')
        }
    }
        
   
   
//    const promiseDoe = () => {
//        return new Promise((resolve, reject) => {
//            if (!email.includes('@')) {
//                reject({
//                    message:'Incorrect email'
//                })
//            }
//            else {
//                resolve({
//                    message:'Correct email inputted'
//                })
//            }
//        })
//    }
//     useEffect(() => {
//         promiseDoe().then((message) => {
//             console.log('success ' + message)
//         }).catch((err) => {
//             console.log(err.message)
//         })
        

//     }, [email])

    return (
    <div className='grid-container'>
        <header>  
            <ToastContainer/>  
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
            {emailError && <p style={{color:"red", fontSize:"0.7rem", margin:"0"}}>invalid email</p>}
            {emailExists && <p style={{color:"red", fontSize:"0.7rem", margin:"0"}}>email exists</p>}

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