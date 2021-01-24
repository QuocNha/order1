import { makeStyles,Grid,Avatar,Typography,InputLabel,Input,Button,Box,FormControlLabel,Checkbox } from '@material-ui/core';
import { Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useState} from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSelector, useDispatch } from "react-redux";
import { loginLoad } from '../../../redux/actions/UserAcctions';
// import stytes from'./Login.module.scss'
const Copyright= ()=> {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link  href="/">
              Phong Vũ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
const Login = ({ }) => {
        const router = useRouter();
        const [query, setQuery] = useState('');
        const preventDefault = f => e => {
                e.preventDefault()
                f(e)
              }
        // const handleSubmit =  preventDefault(()=> {
        //         // alert("vao roi ");
        
        //         router.push({
        //                 pathname: "/components/Layout/Layout",
        //               })
              
        // })
        const useStyles = makeStyles((theme) => ({
                root: {
                        flexGrow: 1,
                    },
                    img:{
                        '& img':{
                                backgroundRepeat: 'no-repeat',
                                backgroundColor:
                        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
                                 backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }
                    },
                root1:{
                        height: '100vh',
                        '& .paper':{
                                backgroundColor:'#eef3f6',
                                margin: theme.spacing(8, 4),
                                display:'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& .avatar':{
                                margin: theme.spacing(1),
                                backgroundColor: theme.palette.secondary.main,            
                                },
                                '& .form': {
                                        width: '100%', // Fix IE 11 issue.
                                        marginTop: theme.spacing(1),
                                      },
                                      '& .email':{
                                              width:'90%',
                                              marginTop:theme.spacing(2),
                                              marginBottom:theme.spacing(2),
                                      },
                                      '& .password':{
                                        width:'90%',
                                        marginTop:theme.spacing(2),
                                        marginBottom:theme.spacing(2),
                                },
                                      '& button':{
                                              marginTop:theme.spacing(1)
                                      },
                                      '& label':{
                                        marginLeft:theme.spacing(1)
                                        },
                                        '& .forgotPassword':{
                                                marginTop:theme.spacing(2),
                                                padding:theme.spacing(1),
                                        }

                        }   
                },
                errors:{
                        color:'red',
                        padding:theme.spacing(1)
                },
                
        }));
        const classes = useStyles();
        const dispatch = useDispatch();
        const state = useSelector((state) => state.User);
        const  formik =useFormik({
                initialValues:{
                        email:'',
                        password:'',  
                }, 
                validationSchema: Yup.object({
                        email:Yup.string().email('Invalid email address').required('Required*'),
                }),
        onSubmit: values => {
                // alert(JSON.stringify(values, null, 1));
                let user ={
                        email:values.email,
                        password:values.password
                }
                dispatch(loginLoad(user));
              
        },
        });
        // console.log("state24/1",state.error)
        return <React.Fragment>
                <Head>
                <title>Phong Vũ</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                 <div className={classes.root} >
                 <Grid container  component="main" className={classes.root1}>
                        <Grid item md={5} className={classes.img}>
                        <Image src="/nha.jpg" alt="me" width="600" height="530" />
                        </Grid>
                        <Grid item  md={7} className="">
                                <div className="paper" >
                                        <Avatar className="avatar">
                                        <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component="h1" variant="h5">
                                       Sign in
                                        </Typography>
                                        <form  className='form' onSubmit={formik.handleSubmit}>
                                                
                                                        <InputLabel htmlFor="firstName">Email</InputLabel>
                                                        <Input
                                                                
                                                                id="email"
                                                                className="email"
                                                                type="email"
                                                                value={formik.values.email}
                                                                required={true}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                        />
                                                        {formik.touched.email && formik.errors.email ? (
                                                        <div 
                                                         className={classes.errors}
                                                        >
                                                        {formik.errors.email}</div>
                                                        ) : null}
                                                        {state.error!== null ? (
                                                        <div 
                                                         className={classes.errors}
                                                        >
                                                        {state.error.message}</div>
                                                        ) : null}
                                                        
                                                        <InputLabel htmlFor="password">password</InputLabel>
                                                        <Input
                                                                
                                                                id="password"
                                                                className="password"
                                                                type="password"
                                                                value={formik.values.password}
                                                                required={true}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                        />
                                                        {formik.touched.password && formik.errors.password ? (
                                                        <div 
                                                        // className={classes.errors}
                                                        >
                                                        {formik.errors.password}</div>
                                                        ) : null}
                                                        <FormControlLabel
                                                        control={<Checkbox value="remember" color="primary" />}
                                                        label="Remember me"
                                                        />
                                                        <Button
                                                        // className={classes.submit}
                                                        fullWidth
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        // onClick={handleClick}             
                                                        >
                                                        
                                                                Login
                                                        </Button>
                                                        <Grid container className="forgotPassword">
                                                                <Grid item xs>
                                                                        <Link href="/">
                                                                                Forgot password?
                                                                        </Link>
                                                                </Grid>
                                                                <Grid item>
                                                                        <Link href="/components/Resign">
                                                                                {"Don't have an account? Sign Up"}
                                                                        </Link>
                                                                </Grid>
                                                        </Grid>
                                                        <Box mt={5}>
                                                                <Copyright />
                                                        </Box>
                                        </form>
                                </div>       
                        </Grid>
                </Grid>    
                 </div>
                
        </React.Fragment>
        
}
export default Login; 