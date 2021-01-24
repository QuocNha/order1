import styles from  './MenuBar.module.scss';
import clsx from 'clsx';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import AppBar from '@material-ui/core/AppBar';
import React, { Fragment, useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import {List,ListItem,ListItemIcon,Divider,ListItemText} from '@material-ui/core';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
   
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot:{
    color: 'inherit',
    
  },
  inputInput:{
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menubar: {
    display :'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

}));

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';    
const DataMenu : String [] =["Giao Hàng","Giao Hàng","Giao Hàng","Giao Hàng"]
    
const MenuOrder = (action) => {
  const [count, setCount] = useState(1);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenuBar, setIsMenuBar] = useState(null);
   
  const isMenuOpen = Boolean(anchorEl);
  const openMenuBar = Boolean(isMenuBar);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [menuBarElement,setMenuBarElement] = React.useState(
    {
    top: false,
    left: false,
    bottom: false,
    right: false,
    }
  );
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleProfileMenuOpen = (event) => {
      console.log("E",event)
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
      // handleMobileMenuClose();
    };
    const handelChanePges= () =>{
      action.handelChanePges(2)
    }
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
    const handleClick = (event) =>{
      
      if(isMenuBar!==null){
        setIsMenuBar(null)
      }else{
        setIsMenuBar(event.currentTarget);
      }
    }
    const toggleDrawer = (anchor, open) =>(event)=>{
      console.log("anchor",anchor);
      console.log("open",open);
      console.log("event",event.type,event.key);
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setMenuBarElement({ ...menuBarElement, [anchor]: open });
    }
    const renderMenuBar = (
                <Menu   
                  anchorEl={isMenuBar}
                  keepMounted
                  id={mobileMenuId}
                  open={openMenuBar}
                  onClose={handleClick}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} 
                 >
                  <MenuItem >Giao hàng</MenuItem>
                  <MenuItem >Giao hàng</MenuItem>
                  <MenuItem >Giao hàng</MenuItem>
                </Menu>
    );
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem >
        {action.user?(
          <a onClick={handelChanePges}>{action.user.email}</a>
        ):(
        <Link href="/components/Layout/FormRegister">
        <a>Đăng ký</a>
        </Link>
        )} 
          
        </MenuItem>
        <MenuItem ><a onClick={action.handelLogOut}>logOut</a></MenuItem>
      </Menu>
    );
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"

        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
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
    );  
    function handelClick() {
        let number:number=count;
        setCount(number+1);
        let el =document.querySelector('ul');
        console.log("count",count)
       if(count%2==0){
        el.setAttribute("style", "left:0px;");
       }else{
        el.setAttribute("style", "left:-100%;");   
       }
        
        return ;
      }
     return <Fragment>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true" 
                  onClick={handleClick}>
                    <MenuIcon />
                  </IconButton>
                  
                  <Typography variant="h6" >
                    <Link href="/">
                      Phong Vũ
                    </Link>
                  </Typography>
                  <div className={classes.menubar}>
                      
                    {DataMenu.map((item :String ,index:number)=>{
                        return<React.Fragment key ={index}>
                          <Button color="inherit" onClick={toggleDrawer(item==="Giao hàng"?"left":"left", true)}>{item}</Button>
                          <Drawer 
                          anchor={item==="Giao hàng"?"left":"left"} 
                          open={menuBarElement[item==="Giao hàng"?"left":"left"]} 
                          onClose={toggleDrawer(item==="Giao hàng"?"left":"left", false)}
                          >
                          {list(item==="Giao hàng"?"left":"left")}
                          </Drawer>
                        </React.Fragment>
                      })}
                  </div>
                 
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                     }}
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={6} color="secondary">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                      <Badge badgeContent={7} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                    <IconButton
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                       onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </div>   
                </Toolbar>
              </AppBar>
              {renderMenu}
              {renderMobileMenu}
              {renderMenuBar}
            </Fragment>
}
export default MenuOrder;