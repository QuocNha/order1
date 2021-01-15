import Search from '@material-ui/icons/Search';
import React, { Fragment, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import MenuBar from '../../MenuOrder/MenuBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Button,Drawer,Toolbar,List,ListItem,ListItemText,ListItemIcon,Divider,AppBar} from '@material-ui/core';
import AddressFrom from './AddressFrom'
import AddressFormStrep1 from './AddressFormStrep1';

import Main from '../Main/Main';
const steps = ['Shipping address', 'Payment details', 'Review your order'];

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    paper :{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
          },
    },
    button:{
        display:'flex',
        justifyContent: 'flex-end',
    },
    stepper :{
        padding: theme.spacing(3, 0, 5),
    },
    
}));
const getStepContent=(step :number)=>{
        switch(step){
             case 0: 
             return <AddressFrom></AddressFrom>
             case 1: 
             return <AddressFormStrep1></AddressFormStrep1>
             case 2: 
             return <AddressFrom></AddressFrom>
             default: 
             throw new Error('Unknown step')   
        }
}

const FormRegister= ({}) =>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () =>{
        setActiveStep(activeStep - 1);
    }
    return  <div className={classes.root}>
            <Head>
                <title>Phong Vũ</title>
                <link rel="icon" href="/favicon.ico" />
            <   meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <React.Fragment>
            {/* <AppBar position="fixed" className={classes.appBar}>
                <MenuBar></MenuBar>
            </AppBar>     */}
            <Main></Main>    
               
                <main  className={classes.layout}>
                    <Paper  className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Đăng ký tài khoản
                        </Typography>
                        <Stepper  activeStep={activeStep}  className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                                    <React.Fragment>
                                    {getStepContent(activeStep)}
                                        <div className={classes.button}>
                                            {activeStep!==0 ? (
                                                <Button
                                                onClick={handleBack} 
                                                >
                                                Back
                                            </Button>
                                            ):("")}
                                            
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            >
                                               {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                            </Button>
                                        </div>
                                    </React.Fragment>
                        </React.Fragment>
                    </Paper>
                    {/* <Copyright /> */}
                </main>  
            </React.Fragment>
            </div>
    
}
export default FormRegister;