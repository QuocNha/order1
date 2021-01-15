import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
// import styles from  './Layout.module.scss';
// import MenuOrder from '../MenuOrder/MenuOrder';
// import MenuBar from '../MenuOrder/MenuBar';
import React, { useEffect,useState } from 'react';
// import SearchInput from '../SearchInput/SearchInput';
// import FoodBody from './FoodBody/FoodBody';
import AppBar from '@material-ui/core/AppBar'
import { fade, makeStyles } from '@material-ui/core/styles';
import Main from './Main/Main';
import {Typography,Paper,Toolbar} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex"
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
    },
    layout: {
        float:'right',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    paper :{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600)]: {
            marginTop: 'auto',
            marginBottom: 'auto',
            padding: 'auto',
          },
    },
    content: {
        flexGrow: 1,
        float:'right',
        padding: theme.spacing(3),
        marginLeft:theme.spacing(25)
    },
}))
const Layout = ({}) => {
    const classes = useStyles();
   return <div className={classes.root} >
            <Head>
            <title>Phong Vũ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppBar position="fixed"
            className={classes.appBar}
            >
            <Main></Main>
            </AppBar>  
            <main className={classes.content}>
                <Toolbar />
           <Typography paragraph>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
               facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
               gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
               donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
               adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
               Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
               imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
               arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
               donec massa sapien faucibus et molestie ac.
        </Typography>
                <div >
                    <button >
                        <div >Đồ ăn <ArrowForwardIcon/></div>
                    </button>
                    <button>
                        <div >Chọn địa chỉ giao hàng</div>
                    </button>
                    <button>
                        <div ><ArrowForwardIosIcon /></div>
                    </button>
                </div>
            </main>
        
        {/* <div className={styles.body}>
            <FoodBody></FoodBody>
        </div> */}
        {/* <footer className={styles.footer}>
            footer
      </footer> */}
    </div>
}
export default Layout;