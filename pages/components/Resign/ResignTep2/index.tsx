import React from 'react'
import {Typography,Grid,TextField,makeStyles,Paper,Theme,Button} from '@material-ui/core';
import {useFormik} from 'formik';
import * as Yup  from 'yup';
const useStyles = makeStyles((theme:Theme)=>({
    form :{
        padding:theme.spacing(1)
    },
    button:{
        display:'flex',
        justifyContent: 'flex-end',
        padding:theme.spacing(1)
    },
    error:{
        color:'red'
    }
}));
const ResignTep2 = (action:any) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
            confirmPassword:""
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required*'),
            password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            action.hadel(
                2)
          },
    });
    return <React.Fragment>
            <Typography  variant="h6" gutterBottom>
                    Step2 Resign
            </Typography>
            <Paper >
            <form   className={classes.form}  onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                        {formik.touched.email && formik.errors.email ? (
                              <div 
                               className={classes.error}
                              >{formik.errors.email}</div>
                          ) : null}
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="Email"
                                onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        {formik.touched.password && formik.errors.password ? (
                              <div className={classes.error}>{formik.errors.password}</div>
                          ) : null}
                            <TextField
                                
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                autoComplete="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                              <div className={classes.error}>{formik.errors.confirmPassword}</div>
                          ) : null}
                            <TextField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Replay Password"
                                type="password"
                                fullWidth
                                autoComplete="confirm Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}></Grid>
                        <Grid item xs={12} sm={6}>
                        <div className={classes.button}>
                            <Button
                            >
                                Back
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                               
                            >
                                Next
                        </Button>
                        </div>
                        </Grid>
                          
                </Grid>
                    
                    </form>
            </Paper>
                    
    </React.Fragment>
}
export default ResignTep2;