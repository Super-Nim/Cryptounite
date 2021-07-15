import React, {useState} from 'react'
import { useHistory } from 'react-router'
import './CSS/password.css'
import SignUp from './SignUp'
import axios from 'axios'
import InputAdornment from "@material-ui/core/InputAdornment"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconButton } from '@material-ui/core'

const Password = (props) => { 
    const { firstName, lastName, email, country, region, wallet } = props

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [passwordExists, setPasswordExists] = useState(false)
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const showPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    const validatePassword = (password) => {
        if((/(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!?]{8,}/g.test(password))) {
            return true
        } else {
            setPasswordContains(true)
            setNoMatch(false)
            console.log
            ('password must contain at least one special, lowercase, uppercase and numerical character')
            return false    
        }
    }

    const [noMatch, setNoMatch] = useState(false)
    const [passwordContains, setPasswordContains] = useState(false)

    const history = useHistory()

    const onSubmitPassword = async (e) => {
        e.preventDefault()
    
        const { data } = await axios.get('http://localhost:5000/customer/')
        const checkPassword = await data.filter( obj => 
            obj.password === password
        )
        if (password !== confirmPassword) {
            setPasswordContains(false)
            setNoMatch(true)
            setPasswordExists(false)
            console.log('passwords do not match')
            return false
        } else if (!validatePassword(password)) {
            return false
        } else if (checkPassword.length !== 0) {
            setPasswordExists(true)
            setPasswordContains(false)
            setConfirmPassword(false)
            return console.log('already exists')
        } else {
        console.log(checkPassword)

        const submitCustomer = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            country: country,
            region: region,
            wallet: wallet,
            password: password
        }
        console.log(password)
        console.log(submitCustomer)

        axios.post('http://localhost:5000/customer/add',
        submitCustomer)
        .then(res => {
            console.log("status: ", res.status)
        })
        .catch(err => console.error(err))

        return history.push('/registrationSuccess')
    }
    
}
    
    return (

        <div className="passwordContainer">
            <h1>Create Password</h1>
            <form className="pass-form" onSubmit={onSubmitPassword}>
                <label htmlFor="standard-adornment-password"> 
             </label>
                <input 
                className="pass-input"
                type={isPasswordShown ? "text" : "password"} 
                name="password" 
                placeholder="Password"
                onChange={onChangePassword}/>
                <AiOutlineEye className="openEyeIcon" onClick={showPassword}/> 

            <label htmlFor="password"></label>
                <input 
                className="pass-input" 
                type="password" 
                name="password" 
                placeholder="Re-enter Password"
                onChange={onChangeConfirmPassword} />
            {passwordContains && 
            <ul style={{color:"red", fontSize:"0.7rem", margin:"0", padding:'0' }}>
                <li>password must contain atleast:</li>
                <li>1 special character</li>
                <li>1 lowercase character</li>
                <li>1 uppercase character</li>
                <li>8 alphanumeric characters</li>
            </ul>}
            {noMatch && <p style={{color:"red", fontSize:"0.7rem", margin:"0"}}>passwords must match</p>}
            {passwordExists && <p style={{color:"red", fontSize:"0.7rem", margin:"0"}}>passwords already exists</p>}
            <div className="pass-submitBtn">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
            </form>

        </div>

    )
}



export default Password