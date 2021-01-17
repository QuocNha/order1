import React, { Fragment, useState } from 'react';
import { useFormik} from 'formik';
import {TextField ,Grid,Input,Paper,makeStyles,Typography,InputLabel,Button } from '@material-ui/core'
import * as Yup from 'yup';
const useStyles = makeStyles((theme) => ({
    paper: {
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
            marginLeft:theme.spacing(3)
        },
    },
    errors:{
        color:"red"
    },
    input:{
        width:"100%"
    },
    submit :{
        marginTop: theme.spacing(3),
    }
}))
const AddressFormStrep1 = () =>{
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required*'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required*'),
          email: Yup.string().email('Invalid email address').required('Required*'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
            <Paper  className={classes.paper}>
              <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                          <InputLabel htmlFor="firstName">First Name</InputLabel>
                          <Input
                                fullWidth
                              id="firstName"
                              name="firstName"
                              className={classes.input}
                              type="text"
                              required={true}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.firstName}
                          />
                          {formik.touched.firstName && formik.errors.firstName ? (
                              <div className={classes.errors}>{formik.errors.firstName}</div>
                          ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                          <InputLabel htmlFor="lastName">Last Name</InputLabel>
                          <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              className={classes.input}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastName}
                          />
                          {formik.touched.lastName && formik.errors.lastName ? (
                              <div className={classes.errors}>{formik.errors.lastName}</div>
                          ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                          <InputLabel htmlFor="email">Email Address</InputLabel>
                          <Input
                              id="email"
                              name="email"
                              type="email"
                              className={classes.input}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                              <div className={classes.errors}>{formik.errors.email}</div>
                          ) : null}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                          <InputLabel htmlFor="email">PassWorld</InputLabel>
                          <Input
                              id="password"
                              name="password"
                              type="password"
                              className={classes.input}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                          />
                          {formik.touched.password && formik.errors.password ? (
                              <div className={classes.errors}>{formik.errors.password}</div>
                          ) : null}
                      </Grid>
                  </Grid>
                  <Button
                    className={classes.submit}
                   type="submit"
                   variant="contained"
                   color="primary"             
                   >
                       Submit
                    </Button>
              </form>
        </Paper>
        
        );
    };
export default AddressFormStrep1;