import React from 'react';
import {Typography,Grid,List,ListItem,ListItemText,Paper, makeStyles,Button,Divider} from '@material-ui/core'
const useStyle = makeStyles((theme)=>({
    listItem:{
        padding: theme.spacing(1),
    },
    button:{
        display:'flex',
        justifyContent: 'flex-end',
        padding:theme.spacing(1)
    },
}));
const ResignTep3 = (action:any) => {
    const classes = useStyle();
    console.log("action1",action);
    const hadelClick = () => {
        action.hadelClick();
    }
    return <React.Fragment>
        <Paper >
        <Typography variant="h6" gutterBottom>Information User</Typography>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <List disablePadding>
                        <ListItem key={action.firstNameH} className={classes.listItem}>
                        <ListItemText primary="Name :"  />
                            <Typography variant="body2">{action.firstNameH + " "+action.name}</Typography>
                        </ListItem>
                    </List>
                    <List disablePadding>
                        <ListItem key={action.firsAddressH} className={classes.listItem}>
                        <ListItemText primary="Address 1:"  />
                            <Typography variant="body2">{action.firsAddressH}</Typography>
                        </ListItem>
                    </List>
                    <List disablePadding>
                        <ListItem key={action.lastAddressH} className={classes.listItem}>
                        <ListItemText primary="Address 2:"  />
                            <Typography variant="body2">{action.lastAddressH }</Typography>
                        </ListItem>
                    </List>
                    <List disablePadding>
                        <ListItem key={action.phoneH} className={classes.listItem}>
                        <ListItemText primary="phone :"  />
                            <Typography variant="body2">{action.phoneH }</Typography>
                        </ListItem>
                    </List>                
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item container direction="column" xs={12} sm={5}>
                    <List disablePadding>
                        <ListItem key={action.email} className={classes.listItem}>
                        <ListItemText primary="User Name :"  />
                            <Typography variant="body2">
                                {(action.email).charAt(0)+(action.email).charAt(1) +(action.email).charAt(2) + "*****"+"@gmail" }</Typography>
                        </ListItem>
                    </List>
                    <List disablePadding>
                        <ListItem key={action.password} className={classes.listItem}>
                        <ListItemText primary="Password :"  />
                            <Typography variant="body2">{(action.password).charAt(0)+(action.password).charAt(1) +(action.password).charAt(2) + "********"} </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                        <Grid item xs={12} sm={6}>
                        <div className={classes.button}>
                            <Button
                                onClick={hadelClick}
                            >
                                Back
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={action.hadelSuccess}
                            >
                                Success
                        </Button>
                        </div>
                        </Grid>
            </Grid>
        </Paper>
            
    </React.Fragment>
}
export default ResignTep3;