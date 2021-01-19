import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import classes from '*.module.css';
import { makeStyles,Typography } from '@material-ui/core';
import ResignTep1 from './ResignTep1';
import ResignTep2 from './ResignTep2';
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
    const hadelChance= (step:number) => {
        setActiveStep(step) ;
    }
    const getStepContent=(step :number)=>{
        switch(step){
             case 0: 
             return <ResignTep1 hadel= {hadelChance}></ResignTep1>
             case 1: 
             return <ResignTep2></ResignTep2>
             case 2: 
             return <ResignTep1></ResignTep1>
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