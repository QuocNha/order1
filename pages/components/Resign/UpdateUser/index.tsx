import React,{useState} from 'react'
import {Button,Checkbox,FormControlLabel,makeStyles,Typography,Grid,TextField} from '@material-ui/core'
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
    }
    }    
}));
const UpdateUser = (action) => {
    const classes = useStyles();
    console.log("action.user",action);
    const [button ,setButton] = useState(false)
    const handelClick =async () => {
        
        setButton(true);
    }
    const handelEditUser = () =>{
        action.handelEditUser()
    }
    return <React.Fragment>
            <main className={classes.root}>
                <Typography variant="h4" component="h2"  align="center">
                    Information User
                </Typography>
                {/* <form >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            {button===false && (
                                    <TextField
                                    onChange={handelClick}
                                    id="firstName"
                                    name="firstName"
                                    // label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    required={true}
                                    value={action.user.firstName}
                                />
                            )}
                            
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                
                                fullWidth
                                autoComplete="family-name"
                                value={action.user.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="firsAddress"
                                name="firsAddress"
                                
                                fullWidth
                                autoComplete="shipping address-line1"
                                value={action.user.address1}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        
                            <TextField
                                id="lastAddress"
                                name="lastAddress"
                                
                                fullWidth
                                autoComplete="shipping address-line2"
                                value={action.user.address2}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                fullWidth
                                autoComplete="shipping address-level2"
                                value={action.user.phone}
                            />
                        </Grid>
                        <Grid item >
                        
                            <TextField
                            id="state" name="state"  fullWidth
                            value={action.user.userType} 
                            ></TextField>
                        </Grid>
                        
                    </Grid>    
                    
                        <div >  
                   
                </div>
                </form> */}
                <form >
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                fullWidth
                                autoComplete="shipping postal-code"
                                value={action.user?action.user.email:null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                fullWidth
                                autoComplete="shipping country"
                                value="*******************"
                            />
                        </Grid>
                    </Grid>
                </form>    
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                         onClick={handelEditUser}       
                    >
                        Save
                    </Button>
            </main>
    </React.Fragment>
}
export default UpdateUser;