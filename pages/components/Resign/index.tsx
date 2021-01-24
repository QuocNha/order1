import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from "react-redux";
import { loadResign } from '../../../redux/actions/UserAcctions';
import NProgress from 'nprogress'

// import classes from '*.module.css';
import { makeStyles,Typography,Stepper,StepLabel,Step } from '@material-ui/core';
import ResignTep1 from './ResignTep1';
import ResignTep2 from './ResignTep2';
import ResignTep3 from './ResignTep3';
import ResignTep4 from './ResignTep4';

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
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },

}));
const Resign = () => {
    const steps = ['Resign address', 'Resign User', 'Review'];
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    const [firstName ,setFirstName] = useState("");
    const [lastName ,setLastName] = useState("");
    const [lastAddress ,setLastAddress] = useState("");
    const [firsAddress ,setFirsAddress] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [phone ,setPhone] = useState("");
    const dispatch = useDispatch();
    const state = useSelector((state) => state.User);
    
    const hadelChanceTep1= (
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
    const hadelChanceTep2= (
        step:number,
        email:string,
        password:string
        ) => {
            setActiveStep(step)
            setEmail(email);
            setPassword(password)
        
    }
    const hadelClick = () =>{
        setActiveStep(activeStep-1);
    }
    //Login action
    const hadelSuccess= async() => {
        interface User {
            firstName: String,
            lastName: String,
            email:String,    
            password: String,
            address1:String
            address2:String,
            phone:String,
            country:String
            userType:String,
            userRole: String,
          }
          const user: User = {
            firstName: firstName,
            lastName: lastName,
            email:email,    
            password: password,
            address1:firsAddress,
            address2:lastAddress,
            phone:phone,
            country:"Viet Name",
            userType:"Normal",
            userRole: "SuperAdmin",
          }
         dispatch(loadResign(user)); 
        
    }
    const getStepContent=(step :number,
        lastName,
        firstName,
        lastAddress,
        firsAddress,
        phone,
        email,
        password)=>{
        switch(step){
             case 0: 
             return <ResignTep1 
             hadel= {hadelChanceTep1}
             activeStep={step}
             >   
             </ResignTep1>
             case 1: 
             return <ResignTep2
                hadel= {hadelChanceTep2}
                hadelClick={hadelClick}
                activeStep={step}
                >
             </ResignTep2>
             case 2: 
             return <ResignTep3
             hadelClick={hadelClick}
             hadelSuccess={hadelSuccess}
             name={lastName}
             activeStep={step}
             firstNameH={firstName}
             lastAddressH={lastAddress}
             firsAddressH={firsAddress}
             phoneH={phone}
             email={email}
             password={password}
             ></ResignTep3>
             case 3:return <ResignTep4></ResignTep4>
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
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
          </Stepper>
                <React.Fragment>
                    {
                    getStepContent(activeStep,lastName,
                    firstName,
                    lastAddress,
                    firsAddress,
                    phone,
                    email,
                    password
                    )}
                </React.Fragment>
            </Paper>
        </main>
        
    </React.Fragment>

}
export default Resign;