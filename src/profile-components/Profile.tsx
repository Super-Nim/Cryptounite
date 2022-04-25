import { Avatar, Button, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import { Person, LocationOn, Email, ArrowUpwardRounded, ArrowDownwardRounded } from '@material-ui/icons';
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps, useParams, useHistory } from "react-router";
import PieChart from "./PieChart";
import Portfolio from "./Portfolio";
import ProfileDonations from "./ProfileDonations";
import ProfileReceived from "./ProfileReceived";




// Functional component that accepts type RouteComponentProps
const Profile: FC = () => {

   var { page }: {page: string} = useParams();
   const history = useHistory();
   
    interface ITabToIndex { // define interface to accept dynamic values
        [key: number]: string
    }

    const tabToIndex: ITabToIndex  = {
        0: 'portfolio',
        1: 'donations',
        2: 'received',
    }

    interface IIndexToTab { // define interface to accept 'page' passed from app.tsx
        [key: string]: number
    }

    const indexToTab: IIndexToTab = {
        'portfolio': 0,
        'donations': 1,
        'received': 2,
    }


    const icon = {
        verticalAlign: 'sub'
    }
    const columnOne = {
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center',
    }
    const avatar = { /*can't seem to use sx prop without adding prop to d.ts file */
        height: '80px',
        width: '80px'
    }
    const nameText = {
        marginTop: '0'
    }
    const infoText = {
        marginBottom: '0',
        marginTop: '10px'
    }
    const fillerDiv = {
        height: '60vh'
    }
    const topTabDiv = {
        height: '5px'
    }

    const [selectedTab, setSelectedTab] = useState(indexToTab[page]);
    // ChangeEvent<{}> EXTENDS SyntheticEvent interface, must be used for onChange events 
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        // console.log('page: ', page)
        history.push(`/profile/${tabToIndex[newValue]}`)
        setSelectedTab(newValue);
    };


    
    return (
        <Grid 
            container 
            // spacing={1}
            alignContent='stretch'
            style={{
                height: '84.5vh',
                width: '100vw',
            }}
        >
            <Grid item xs={3}> {/*understand how breakpoints work - want 2 rows, 1 */}
                <Paper style={{...columnOne}}>
                    <Avatar style={{...avatar}} >HW</Avatar>
                    <hr/>
                    <h3 style={{...infoText, ...nameText}}><Person style={{...icon}}/> Paper Mario</h3>
                    <h4 style={{...infoText}}><LocationOn style={{...icon}}/>Location </h4>
                    <h5 style={{...infoText}}> <Email style={{...icon}}/> paperMario@mushroomKingdom.co.uk</h5>
                    <Button style={{...infoText}} variant="contained">Edit</Button>
                    <div style={{...fillerDiv}}></div>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper>
                    {/* <div style={{...topTabDiv}}></div> */}
                    <Tabs 
                        value={selectedTab} 
                        onChange={handleChange}
                    >  
                        <Tab label="Portfolio"/> {/*must use value/onChange to trigger tab styling */}
                        <Tab label={<div>Donations <ArrowUpwardRounded style={{...icon}}/> </div>}/> 
                        <Tab label={<div>Received <ArrowDownwardRounded style={{...icon}}/></div>}/>
                    </Tabs>
                    { selectedTab === 0 && (
                        <Portfolio/>
                    )}
                    { selectedTab === 1 && <ProfileDonations/>}
                    { selectedTab === 2 && <ProfileReceived/>}
                    
                    {/*React router to show Portfolio, Donations, Rewards */}
                    {/* <PieChart/> */}

                    
                    {/*mat tab */}
                </Paper>
            </Grid>
    

        </Grid>
    )

}

export default Profile;