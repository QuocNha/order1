import {Paper, makeStyles,Grid,Avatar,Typography,InputLabel,Input,Button,Box,FormControlLabel,Checkbox } from '@material-ui/core';
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
                                      '& .lableEmail':{
                                        marginLeft:theme.spacing(4)
                                      },
                                      '& .email':{
                                              width:'90%',
                                              marginTop:theme.spacing(2),
                                              marginBottom:theme.spacing(2),
                                              marginLeft:theme.spacing(4)
                                      },
                                      '& .password':{
                                        width:'90%',
                                        marginTop:theme.spacing(2),
                                        marginBottom:theme.spacing(2),
                                        marginLeft:theme.spacing(4)
                                },
                                      '& button':{
                                              marginTop:theme.spacing(1)
                                      },
                                      '& label':{
                                        // marginLeft:theme.spacing(1)
                                        },
                                        '& .forgotPassword':{
                                                marginTop:theme.spacing(2),
                                                padding:theme.spacing(1),
                                                marginLeft:theme.spacing(2),
                                        }

                        }   
                },
                errors:{
                        color:'red',
                        padding:theme.spacing(1),
                        marginLeft:theme.spacing(3)
                },
                submit:{
                        // width:theme.spacing(70),
                        textAlign:'center',
                        marginLeft:theme.spacing(3)
                },
                chexBox:{
                        marginLeft:theme.spacing(2)
                },
                paper:{
                        margin: theme.spacing(8, 4),
                        backgroundColor:'#eef3f6',
                },
                title:{
                        display:'flex',
                        '& .information':{
                                padding:theme.spacing(1),
                                display:'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)'
                        },
                        '& .img':{
                              
                        }
                }
                
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
                         
                                <Grid item md={6} className={classes.img}>
                                <Paper className={classes.paper}>
                                        <Grid item md={12} className={classes.title} >
                                                <div className="img">
                                                <Image src="/nha.jpg" alt="me" width="100" height="100" />    
                                                </div>
                                                <div className="information">
                                                <Typography variant='h6'>NHA QUOC</Typography>
                                                <Typography variant='h6'> </Typography>
                                                <Typography variant='subtitle1'> Front End Developer</Typography>
                                                <Typography variant='subtitle1'> </Typography>
                                                <Typography variant='subtitle1'> Date of birth :</Typography>
                                                <Typography variant='subtitle1'> June 24, 1993 </Typography>
                                                <Typography variant='subtitle1'> Phone :</Typography>
                                                <Typography variant='subtitle1'> 0866085734 </Typography>
                                                <Typography variant='subtitle1'> Email </Typography>
                                                <Typography variant='subtitle1'> 12130017@st.hcmuaf.edu.vn </Typography>
                                                <Typography variant='subtitle1'> FaceBook :</Typography>
                                                <Typography variant='subtitle1'> <a href="https://www.facebook.com/nha.quoc.56/">https://www.facebook.com/nha.quoc.56/</a> </Typography>
                                                </div>
                                        </Grid>
                                        <Grid item md={12} >
                                                <Typography variant='h6'>OBJECTIVE</Typography>
                                                <Typography variant='subtitle1'>
                                                        My Project Web Shop Online:
                                                </Typography>
                                                <Typography variant='subtitle1'>
                                                <a href="https://order-demo-nextjs.herokuapp.com">https://order-demo-nextjs.herokuapp.com</a>
                                                </Typography>
                                                <Typography variant='subtitle1'>Build Project :</Typography>
                                                <Typography variant='subtitle1'>Next js,GitHub,<a href="https://dashboard.heroku.com/apps">https://dashboard.heroku.com/apps</a> .</Typography>
                                                <Typography variant='subtitle1'>Back End :</Typography>
                                                <Typography variant='subtitle1'>NodeJs, bcryptjs, config, mongoose, morgan, nodemon.</Typography>
                                                <Typography variant='subtitle1'>FontEnd :</Typography>
                                                <Typography variant='subtitle1'> ReactJs, NextJs, Redux-Saga, Material UI , Formik and Yup, Axios.</Typography>
                                                <Typography variant='subtitle1'>User Login :</Typography>
                                                <Typography variant='subtitle1'>User :quocnha@gmail.com  </Typography>
                                                <Typography variant='subtitle1'> Password: 15242635 </Typography>
                                                <Typography variant='subtitle1'>  or <Link href="/components/Resign"><a>resign</a></Link> here </Typography>



                                        </Grid>
                                </Paper>
                                </Grid>        
                         
                        
                        <Grid item  md={6} className="">
                                <div className="paper" >
                                        <Avatar className="avatar">
                                        <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component="h1" variant="h5">
                                       Sign in
                                        </Typography>
                                        <form  className='form' onSubmit={formik.handleSubmit}>
                                                
                                                        <InputLabel className="lableEmail" htmlFor="firstName">Email</InputLabel>
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
                                                        
                                                        <InputLabel className="lableEmail" htmlFor="password">Password</InputLabel>
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
                                                        className={classes.chexBox}
                                                        control={<Checkbox value="remember" color="primary" />}
                                                        label="Remember me"
                                                        />
                                                        <Button
                                                        //  className={classes.submit}
                                                         fullWidth
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        // onClick={handleClick}             
                                                        >
                                                        
                                                                Login
                                                        </Button>
                                                        <Grid container className="forgotPassword">
                                                                {/* <Grid item xs>
                                                                        <Link href="/">
                                                                                Forgot password?
                                                                        </Link>
                                                                </Grid> */}
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