import React, { Fragment, useState } from 'react';
import {Button,Drawer,Toolbar,List,ListItem,ListItemText,ListItemIcon,Divider,AppBar} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core';
import MenuBar from '../../MenuOrder/MenuBar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth=240;
const useStyles = makeStyles((theme) => ({
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerContainer: {
        overflow: 'auto',
      },
}));
const Main = () => {
    const classes = useStyles();
    return <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
        <MenuBar></MenuBar>
        </AppBar>;
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    // paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div 
                 className={classes.drawerContainer}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
    </React.Fragment>
}
export default Main;