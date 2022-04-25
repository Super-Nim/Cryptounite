import './CSS/NewSignUp.css'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import { AutorenewSharp, LockOutlined } from '@material-ui/icons';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInputDropdown } from './form-components/FormInputDropdown';
import FormInputText from './form-components/FormInputText';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import { ethers, Contract } from 'ethers';
import { SyntheticEvent, useEffect, useState } from 'react';
import abi from './accountABI.json';

interface IValues extends Iaccount {
    textValue: string;
    dropdownValue: string;
    id: number;
    firstName: string;
    country: string;
    email: string;
}

const defaultValues: IValues = {
    textValue: '',
    dropdownValue: '',
    id: 0,
        firstName: "",
        country: "",
        email: ""
};

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().required(),
})

interface Iaccount {
    id: number;
    firstName: string;
    country: string;
    email: string;
}

declare global {
    interface Window {
        ethereum: any; // else property X does not exist on type window
    }
}


const NewSignUp = () => {
    const [account, setAccount] = useState<Iaccount>({
        id: 0,
        firstName: "",
        country: "",
        email: ""
    })

    const {id, firstName, country, email} = account;


    const address = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

    // useForm is a react-hook-form hook that returns an object with methods for working with a form such as registering inputs, submitting...
    // resolver connects yup to react form for validation
    // TODO: fix this yupresolver bug - ok fixed pretty janky but move on... call the contract function by POSTing data then GETting it

    const methods = useForm<IValues>({ defaultValues: defaultValues, resolver: yupResolver(schema) });
    const { handleSubmit, reset, control, setValue, watch, register } = methods;
    const history = useHistory();

    // need to post to Web3 storage, and then return the content ID
    const onSubmit = async (data: Iaccount) =>  {
        console.log('data :', data) 
        
        const id = Date.now(); // generate id
        setAccount({
            id: id,
            firstName: data.firstName,
            country: data.country,
            email: data.email
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum); // get provider from metamask
        await provider.send("eth_requestAccounts", []); // request access to msg.sender of contract
        const signer = await provider.getSigner(); 
        console.log('abi: ', abi)
        const accountContract = new ethers.Contract(address, abi, signer); // connect to deployed contract
        await accountContract.createAccount(id, firstName, country, email, {gasLimit: 3000000})
    
        console.log('account: ', account);
        history.push('/registrationsuccess')
    
    };

    useEffect(() => {
        if (account.id !== 0) {
            console.log('useEffect account.id: ', id)
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accountContract = new ethers.Contract(address, abi, provider);
            accountContract.on("NewAccount", (id, name, location) => { // TODO: NOT EMITTING? 
                console.log(id.toNumber()) 
                console.log(name) // isIndexed, hash
                console.log(location) // isIndexed, hash
            })

        }

    }, [account.id])

   
    // store to IPFS first, get content identifier an then pass to blockchain..
        

    // styling for HTML elements
    const headerGridStyle = {alignContent: 'center', justifyContent: 'center', marginTop: '3rem'};
    const lockStyle = {background: '#32CD32', margin: '0 auto'};
    const signUpStyle = {marginTop: '1rem'};
    const inputTextStyle = {marginRight: '2rem'};
    const submitBtnStyle = {marginTop: '2rem'};
    const signInText = {color: '#00ccff'};

    return (
        <Grid>
            <Paper
            elevation={2}
            style={{
                display: 'grid',
                alignContent: 'flex-start',
                margin: '2rem auto',
                rowGap: '20px',
                height: '600px',
                width: '600px',
                justifyContent: 'center'
            }}
            >   
                <Grid style={headerGridStyle}>
                    <Avatar style={lockStyle}><LockOutlined/></Avatar>
                    <h1 style={signUpStyle}>Sign Up</h1>
                </Grid>
                <FormProvider {...methods}> 
                    <Grid className='nameGrid'>
                        <FormInputText name="firstName" control={control} label="First Name *"/>
                        <FormInputText name="lastName" control={control} label="Last Name *"/>
                    </Grid>
                    <FormInputText className="emailInput" name="email" control={control} label="Email *"/>
                    <FormInputDropdown name="country" control={control} label="Country *"/>
                </FormProvider>
                <Button onClick={handleSubmit(onSubmit)} style={submitBtnStyle} color="secondary" variant="contained">Sign Up</Button>
                <Link to="/profile" style={signInText}>Already have an account? Sign in</Link>
            </Paper>
        </Grid>
    );
}
// FormProvider wraps the form inputs - 
export default NewSignUp;