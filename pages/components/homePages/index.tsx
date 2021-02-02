import { Grid, Divider, Typography, Button, Paper, MenuItem, Collapse, IconButton, Badge, ListItem, ListItemIcon, List, ListItemText } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import styles from './homePages.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import DnsIcon from '@material-ui/icons/Dns';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image'
import Product from '../homePages/product';
import ShoppingCard from './shoppingCard';

const HomPages = () => {
    const [chanepages, setChanePages] = useState<number>(1);
    const [openShoppingCard, setOpenShoppingCard] = useState<Boolean>(false);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handelChanceProduct = () => {
        setChanePages(2);
    }
    const handleClose = () => {
        setOpenShoppingCard(false);
    }
    const handelChanePage = async (pages: number) => {
        setChanePages(pages)
    }
    const handelModalShopping = async () => {
        setChanePages(3);
        //Điều hướng trang web
        let el = document.querySelector("#shopping");
        if (el !== null) {
            el.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        }

    }
    const Item = (props) => {
        return (
            <Paper>
                <Grid container>
                    <Grid item md={6}>
                        <Image
                            width={300}
                            height={300} src="/Drink.jpg"
                        ></Image>
                    </Grid>
                    <Grid item md={6}>
                        <h2 onClick={handelChanceProduct}>{props.item.name}</h2>
                        <p onClick={handelChanceProduct}>{props.item.description}</p>
                        <p onClick={handelChanceProduct}>1 Đồng</p>
                        <Button className="CheckButton" onClick={handelChanceProduct}>
                            Buy now
                    </Button>
                    </Grid>
                </Grid>


            </Paper>
        )
    }
    var items = [
        {
            name: "Drink 1",
            description: "Nong Lam University"
        },
        {
            name: "Drink 2",
            description: "Nong Lam University"
        },
        {
            name: "Drink 2",
            description: "Nong Lam University"
        },
        {
            name: "Drink 2",
            description: "Nong Lam University"
        }
    ]
    return <React.Fragment>
        <div className={styles.wrapperNavBar}>

            <div className={styles.topHeader}>
                <Grid container>
                    <Grid item md={4}>
                        <div className={styles.topHeaderLeft}>
                            <div className={styles.logo}>
                                <h1><Link href="/"><a>Phong Vũ</a></Link></h1>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={5}>
                        <div className={styles.topHeaderCenter}>
                            <Grid item md={12}>
                                <div className={styles.contactHolder}>
                                    <a><PhoneIcon className={styles.phone} />0866085734</a>
                                    <a><DnsIcon className={styles.address} />Nong Lam Univerity</a>

                                </div>
                                <div className={styles.tablet}>
                                    <IconButton aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <Link href="/" ><a> <FacebookIcon className={styles.facebook} /></a></Link>                                            </Badge>
                                    </IconButton>
                                    <IconButton aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <Link href="/components/Login/Login" ><a><AccountCircleIcon className={styles.user} /></a></Link>
                                        </Badge>
                                    </IconButton>
                                    <IconButton aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon onClick={handelModalShopping} className={styles.user} />
                                        </Badge>
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item md={12}>
                                <div className={styles.reservationButton}> <Link href="/components/Login/Login">How To Login Admin </Link></div>

                            </Grid>


                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className={styles.navbarToggler}>
                            <IconButton
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                            >
                                <MenuIcon></MenuIcon>
                            </IconButton>
                            {/* <div className={styles.menuTitle}></div> */}
                            <Divider></Divider>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <nav>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Drink </a></li>
                                        <li><a href="#">Luch</a></li>
                                        <li><a href="#">Fruit</a></li>
                                        <li ><a href="#">Shopping Card</a></li>
                                    </ul>
                                </nav>
                            </Collapse>
                        </div>
                        <div className={styles.topHeaderRight}>

                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <Link href="/" ><a> <FacebookIcon className={styles.facebook} /></a></Link>                                            </Badge>
                            </IconButton>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <Link href="/components/Login/Login" ><a><AccountCircleIcon className={styles.user} /></a></Link>
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon onClick={handelModalShopping} className={styles.user} />
                                </Badge>
                            </IconButton>

                        </div>
                    </Grid>
                </Grid>
            </div>

            <nav id="nav" className={styles.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Drink </a></li>
                    <li><a href="#">Luch</a></li>
                    <li><a href="#">Fruit</a></li>
                    <li ><a href="#">Shopping Card</a></li>
                </ul>
            </nav>

        </div>
        <div className={styles.homeBananer}>
            <div className={styles.homeBananer1}>
            </div>
            <div className={styles.homeBananer2}>
            </div>
            <div>
                <h1> Design For Product</h1>
            </div>

        </div>
        {chanepages == 1 && (
            <React.Fragment>
                <div className={styles.homeCallToAction}>
                    <Grid container>
                        <Grid item md={3}>
                            <div className={styles.callToAction}>
                                <div className={styles.img}>
                                </div>
                                <div className={styles.title}>Drink Menu</div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={styles.callToAction}>
                                <div className={styles.img}>

                                </div>
                                <div className={styles.title}>Luch Menu</div>

                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className={styles.callToAction}>
                                <div className={styles.img}>

                                </div>
                                <div className={styles.title}>Fruit Menu</div>
                            </div>

                        </Grid>
                        <Grid item md={3}>
                            <div className={styles.callToAction}>
                                <div className={styles.img}>

                                </div>
                                <div className={styles.title}>Dinner Menu</div>
                            </div>

                        </Grid>
                    </Grid>
                </div>
                <div className={styles.homeNew}>
                    <div className="backGround"></div>
                    <Grid container>
                        <Grid item md={3}>
                            <div className={styles.callToAction}>
                                <div className={styles.img}>
                                </div>
                                <div className={styles.date}>Sun 13 May <NavigateNextIcon className={styles.nextDay}></NavigateNextIcon></div>
                                <div className={styles.category}>Drink Menu</div>
                            </div>
                        </Grid>
                        <Grid item md={3}></Grid>
                        <Grid item md={6}>
                            <h2>Mon day</h2>
                            <div className={styles.container}>
                                <div id={styles.slider}>
                                    <Carousel>
                                        {
                                            items.map((item, i) => <Item key={i} item={item} />)
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )}
        {chanepages == 2 && (
            <React.Fragment>
                <Product></Product>
            </React.Fragment>
        )}
        {chanepages == 3 && (
            <React.Fragment>
                <ShoppingCard
                    openShoppingCard={openShoppingCard}
                    handleClose={handleClose}
                    handelChanePage={handelChanePage}
                ></ShoppingCard>
            </React.Fragment>
        )}
        <div className={styles.homeWelcome}>
            <Grid container>
                <Grid item md={12}>
                    <h2>
                        <span>Welcome to</span>
                          My Website
                        </h2>
                </Grid>
                <Grid item md={12}>
                    <p className={styles.tagLine}>
                        <Typography variant='subtitle1'>Build Project :</Typography>
                        <Typography variant='subtitle1'>Next js,GitHub, <a className={styles.reservationButton} href="https://dashboard.heroku.com/apps">https://dashboard.heroku.com/apps</a> .</Typography>
                        <Typography variant='subtitle1'>Back End :</Typography>
                        <Typography variant='subtitle1'>NodeJs, bcryptjs, config, mongoose, morgan, nodemon.</Typography>
                        <Typography variant='subtitle1'>FontEnd :</Typography>
                        <Typography variant='subtitle1'> ReactJs, NextJs, Redux-Saga, Material UI , Formik and Yup, Axios.</Typography>
                        <Typography variant='subtitle1'>User Login :</Typography>
                        <Typography variant='subtitle1'>User :quocnha@gmail.com  </Typography>
                        <Typography variant='subtitle1'> Password: 15242635 </Typography>
                        <Typography variant='subtitle1'>  or<Button><Link href="/components/Resign"><a className={styles.reservationButton}>resign</a></Link></Button>  here </Typography>
                    </p>
                </Grid>


            </Grid>
        </div>

    </React.Fragment>
}
export default HomPages;