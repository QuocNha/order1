import React, { Fragment, useState } from 'react';
import {Checkbox,FormControlLabel,TextField,Grid,Typography,makeStyles, Theme,Button} from '@material-ui/core'
import { useFormik } from 'formik';
import * as Yup from 'yup';
const useStyles= makeStyles((theme:Theme)=>({
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
}))
const ResignTep1 = (action:any) =>{
    const classes = useStyles();
    const [lastName,setLastName] = useState("");
    const handelClick=()=>{
        // alert("1");
    }
    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        firsAddress:'',
        lastAddress:'',
        email: '',
        password:'',
        phone:'',
        zip:'',
        country:'',
        state:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required*'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            country: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            state: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            zip: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            phone: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            firsAddress: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            lastAddress: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required*'),
            }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          action.hadel(
            1,
            values.lastName,
            values.firstName,
            values.lastAddress,
            values.firsAddress,
            values.phone
            );
          
        },
      });
      
    return  <React.Fragment>
                <Typography  variant="h6" gutterBottom>
                    Step1 Resign
                </Typography>
                <form  className={classes.form} onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                        {formik.touched.firstName && formik.errors.firstName ? (
                              <div className={classes.error}>{formik.errors.firstName}</div>
                          ) : null}
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {formik.touched.lastName && formik.errors.lastName ? (
                              <div className={classes.error} >{formik.errors.lastName}</div>
                            ) : null}
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        {formik.touched.firsAddress && formik.errors.firsAddress ? (
                              <div className={classes.error}>{formik.errors.firsAddress}</div>
                          ) : null}
                            <TextField
                                required
                                id="firsAddress"
                                name="firsAddress"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firsAddress}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        {formik.touched.lastAddress && formik.errors.lastAddress ? (
                              <div className={classes.error}>{formik.errors.lastAddress}</div>
                          ) : null}
                            <TextField
                                id="lastAddress"
                                name="lastAddress"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastAddress}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        {formik.touched.phone && formik.errors.phone ? (
                              <div className={classes.error}>{formik.errors.phone}</div>
                          ) : null}
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label="phone"
                                fullWidth
                                autoComplete="shipping address-level2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                        </Grid>
                        <Grid item >
                        {formik.touched.state && formik.errors.state ? (
                              <div className={classes.error}>{formik.errors.state}</div>
                          ) : null}
                            <TextField
                            id="state" name="state" label="State/Province/Region" fullWidth 
                            onChange={formik.handleChange}    
                            onBlur={formik.handleBlur}
                            value={formik.values.state}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        {formik.touched.zip && formik.errors.zip ? (
                              <div className={classes.error}>{formik.errors.zip}</div>
                          ) : null}
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zip}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {formik.touched.country && formik.errors.country ? (
                              <div className={classes.error}>{formik.errors.country}</div>
                            ) : null}
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.country}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                        </Grid>
                    </Grid>    
                    <div className={classes.button}>
                    <Button 
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handelClick}     
                    >
                        Next
                    </Button>
                </div>
                </form>
                   
    </React.Fragment>
}
export default ResignTep1;