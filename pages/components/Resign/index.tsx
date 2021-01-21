import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import classes from '*.module.css';
import { makeStyles,Typography } from '@material-ui/core';
import ResignTep1 from './ResignTep1';
import ResignTep2 from './ResignTep2';
import ResignTep3 from './ResignTep3';

import Main from '../Layout/Main/Main';
const  useStyles  =makeStyles((theme)=>({
        root:{
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            padding:theme.spacing(6),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            
            '& h2':{
                marginTop:theme.spacing(2),
               
            }
            
        },
        },

}));
const Resign = () => {
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    const [firstName ,setFirstName] = useState("");
    const [lastName ,setLastName] = useState("");
    const [lastAddress ,setLastAddress] = useState("");
    const [firsAddress ,setFirsAddress] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [phone ,setPhone] = useState("");

    const hadelChance= (
        step:number,
        name:string,
        firstNameH:string,
        lastAddressH:string,
        firsAddressH:string,
        phoneH:string
        ) => {
        setActiveStep(step) ;
        setLastName(name);
        setFirstName(firstNameH);
        setLastAddress(lastAddressH);
        setFirsAddress(firsAddressH)
        setPhone(phoneH)
       
        
    }
    const getStepContent=(step :number)=>{
        
        console.log("activeStep",activeStep);
        console.log("activeStep",lastName);
        console.log("activeStep",lastAddress);
        console.log("activeStep",lastAddress);
        console.log("activeStep",phone);
        switch(step){
             case 0: 
             return <ResignTep1 
             hadel= {hadelChance}
             lastName={lastName}
             >   
             </ResignTep1>
             case 1: 
             return <ResignTep2
                hadel= {hadelChance}
                name={lastName}
                firstNameH={firstName}
                lastAddressH={lastAddress}
                firsAddressH={firsAddress}
                phoneH={phone}
                >
             </ResignTep2>
             case 2: 
             return <ResignTep3 hadel= {hadelChance}></ResignTep3>
             default: 
             throw new Error('Unknown step')   
        }
}

    return <React.Fragment>
        <Main></Main>  
        <main className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h4" component="h2"  align="center">
                    Form Resign
                </Typography>
                <React.Fragment>
                    {getStepContent(activeStep)}
                </React.Fragment>
            </Paper>
        </main>
        
    </React.Fragment>

}
export default Resign;