import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
import styles from  './Layout.module.scss';
import MenuOrder from '../MenuOrder/MenuOrder';
import MenuBar from '../MenuOrder/MenuBar';
import React, { useEffect,useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FoodBody from './FoodBody/FoodBody';
import {Button,Drawer,Toolbar,List,ListItem,ListItemText,ListItemIcon,Divider,AppBar} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
const Layout = ({}) => {
   
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
    
        const classes = useStyles();
   
   return <div className={styles.container} >
            <Head>
            <title>Phong Vũ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <React.Fragment>
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
        {/* <main className={styles.main} >
           <div className={styles.Menu}>
                <MenuBar></MenuBar>
           </div>
           <div className={styles.Search}>
            <SearchInput></SearchInput>
           </div>
           
           <div className={styles.body}>
              <FoodBody></FoodBody>
           </div>
           <div className={styles.MenuOrder}>
               <MenuOrder ></MenuOrder>
           </div>
        </main> */}

        {/* <footer className={styles.footer}>
            footer
      </footer> */}
    </div>
}
export default Layout;