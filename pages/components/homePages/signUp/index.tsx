import React from 'react';
import styles from './signUpPages.module.scss';
import { InputLabel,Input,Grid, Divider, Typography, Button, Paper, MenuItem, Collapse, IconButton, Badge, ListItem, ListItemIcon, List, ListItemText } from '@material-ui/core';

const SignUp = () => {
    return <React.Fragment>
<div className={styles.homeSignUp}>
            <div className={styles.titleHolder}>
                <Grid container>
                    <h2>
                        <span>Sign Up</span>
                        Subscribe to your email  newsletter
                    </h2>
                </Grid>
            </div>
            <div className={styles.container}>
            
                <form >
                  <Grid container spacing={3}>
                      <Grid item lg={12}>
                          <InputLabel htmlFor="email">Email Address :</InputLabel>
                          <Input
                              id="email"
                              name="email"
                              type="email"
                              className={styles.input}    
                          />
                      </Grid>
                      <Grid item  lg={12}>
                          <InputLabel htmlFor="email">PassWorld :</InputLabel>
                          <Input
                              id="password"
                              name="password"
                              type="password"
                              className={styles.input}
                          />
                          
                      </Grid>
                  </Grid>
                  <Button
                    
                   type="submit"
                   variant="contained"
                   color="secondary"
                   className={styles.button}    
                   >
                       Submit
                    </Button>
              </form>
            </div>

            </div>
        </React.Fragment>
}
export default SignUp;