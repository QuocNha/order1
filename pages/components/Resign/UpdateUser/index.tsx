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
    },
    button:{
        marginTop:theme.spacing(1)
    }    
}));
const UpdateUser = (action) => {
    const classes = useStyles();
    const [firstName ,setFirstName] = useState(action.user?action.user.firstName:null)
    const [lastName ,setLastName] = useState(action.user?action.user.lastName:null)
    const [phone ,setPhone] = useState(action.user?action.user.lastName:null)
    const [address1 ,setAddress1] = useState(action.user?action.user.address1:null)
    const [address2,setAddress2] = useState(action.user?action.user.address2:null)
    const [update,setUdate] = useState(false);
    const handelFirstName =async (event) => {
        setFirstName(event.target.value);
        setUdate(true);
    }
    const handelLastName =async (event) => {
        setLastName(event.target.value);
        setUdate(true);
    }
    const handelAddress1 =async (event) => {
        setAddress1(event.target.value);
        setUdate(true);
    }
    const handelPhone =async (event) => {
        setPhone(event.target.value);
        setUdate(true);
    }
    const handelAddress2 =async (event) => {
        setAddress2(event.target.value);
        setUdate(true);
    }
    
    const handelEditUser = () =>{
       let firstName = (document.getElementById("firstName")).getAttribute('value');
       let lastName = (document.getElementById("lastName")).getAttribute('value');
       let phone = (document.getElementById("phone")).getAttribute('value');
       let email = (document.getElementById("email")).getAttribute('value');
       let address1 = (document.getElementById("firsAddress")).getAttribute('value');
       let address2 = (document.getElementById("lastAddress")).getAttribute('value');
        let user = {
        firstName:firstName,
        lastName:lastName,
        phone:phone,
        email:email,
        address1:address1,
        address2:address2
        }   
        if(update===true){
            action.handelEditUser(user)
        }
         
    }
    return <React.Fragment>
            <main className={classes.root}>
                <Typography variant="h4" component="h2"  align="center">
                    Information User
                </Typography>
                <form >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            
                                    <TextField
                                    onChange={handelFirstName}
                                    id="firstName"
                                    name="firstName"
                                    // label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    required={true}
                                    value={firstName}
                                />       
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <TextField
                                onChange={handelLastName}
                                required
                                id="lastName"
                                name="lastName"                
                                fullWidth
                                autoComplete="family-name"
                                value={lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                                 <TextField
                                 onChange={handelAddress1}
                                 required
                                 id="firsAddress"
                                 name="firsAddress"
                                 
                                 fullWidth
                                 autoComplete="shipping address-line1"
                                 value={address1}
                             />   
                        </Grid>
                        <Grid item xs={12}>
                            
                                <TextField
                                onChange={handelAddress2}
                                id="lastAddress"
                                name="lastAddress"
                                
                                fullWidth
                                autoComplete="shipping address-line2"
                                value={address2}
                            />    
                                
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            onChange={handelPhone}
                            required
                            id="phone"
                            name="phone"
                            fullWidth
                            autoComplete="shipping address-level2"
                            value={phone}
                        />    
                        </Grid>
                        <Grid item >
                        
                            <TextField
                            id="state" name="state"  fullWidth
                            value={action.user?action.user.userType:null} 
                            ></TextField>
                        </Grid>
                        
                    </Grid>    
                    
                        <div >  
                   
                </div>
                </form>
                <form >
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
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
                         className={classes.button}  
                    >
                        Save
                    </Button>
            </main>
    </React.Fragment>
}
export default UpdateUser;