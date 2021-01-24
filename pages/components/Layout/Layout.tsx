import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
 //import useStyles from  './Layout';
import MenuOrder from '../MenuOrder/MenuOrder';
import {useDispatch, useSelector} from 'react-redux';
import MenuBar from '../MenuOrder/MenuBar';
import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FoodBody from './FoodBody/FoodBody';
import { Button, Drawer, Toolbar, List, ListItem, ListItemText, ListItemIcon, Divider, AppBar, Grid } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, makeStyles } from '@material-ui/core';
import {logOut} from'../../../redux/actions/UserAcctions'
import UpdateUser from '../Resign/UpdateUser';
import  Router  from 'next/router';
const drawerWidth=300;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(1),
     
    },

    Menu: {
        
        
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    Body: {
        padding:theme.spacing(2),
        marginTop:theme.spacing(6),
        '& .BodyLeft':{

        },
        '& .BodyCenter': {
          '& drawer'  : {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        '& .BodyRight': {
            width: '100%',
            float:'right',     
        },    
    },
    
    drawerContainer: {
        overflow: 'auto',
    },
}));
const Layout = ({ }) => {
   const classes= useStyles();
   const state = useSelector (state => state.User);
   const [pages,setpage] = useState(1);
   const dispatch = useDispatch();
   const [user ,setuser] = useState({});
  
    const handelChanePges = async (page:number) =>{
        setpage(page)
    } 
    const handelLogOut = async() => {
        dispatch(logOut());
    }
    const handelEditUser = async ()=>{
        dispatch(logOut());
    } 
    useEffect(() => {
        const LoginUser = async(user) =>{
            if(user.user!==null){
                setuser(user.user.data.data)
            }else{
                Router.push("/")
            }
             
        }
        LoginUser(state)
       },[]);
    return <React.Fragment>
        <Head>
            <title>Phong Vũ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={classes.root} >
            <Grid className={classes.container}>
                <Grid className={classes.Menu}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <MenuBar 
                        user={user}
                        handelLogOut={handelLogOut}
                        handelChanePges={handelChanePges}
                        ></MenuBar>
                    </AppBar>
                </Grid>
                <Grid
                    className={classes.Body}>
                     <Grid item md={3} className="BodyCenter"> 
                        <Drawer
                            className="drawer"
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
                    </Grid>
                    <Grid item md={10} className="BodyRight">
                    {pages===1 && (
                         <FoodBody></FoodBody>   
                    )}
                    {pages===2 && (
                         <UpdateUser
                         user={user}
                         handelEditUser={handelEditUser}
                         ></UpdateUser>   
                    )} 
                    </Grid>
                </Grid>
            </Grid>


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
    </React.Fragment>
}
export default Layout;