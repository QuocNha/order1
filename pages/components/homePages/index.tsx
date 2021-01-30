import { Grid ,Typography,Button} from '@material-ui/core';
import React from 'react'
import styles from  './homePages.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import DnsIcon from '@material-ui/icons/Dns';
import Link from 'next/link';
const HomPages = () =>{
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
                        <Grid item md={6}>
                            <div className={styles.topHeaderCenter}>
                                <div className={styles.contactHolder}>
                                    <a><PhoneIcon className={styles.phone}/>0866085734</a>
                                    <a><DnsIcon className={styles.address}/>Nong Lam Univerity</a>
                                </div>
                                <div className={styles.reservationButton}> <Link href="/components/Login/Login">How To Login Admin </Link></div>
                            </div>
                        </Grid>
                        <Grid item md={2}>
                            <div className={styles.topHeaderRight}>
                                <FacebookIcon className={styles.facebook}/>
                                <Link href="/components/Login/Login"><a><AccountCircleIcon className={styles.user}/></a></Link>                            
                            </div>
                        </Grid>
                        </Grid>    
                    </div>    
                    <nav>
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Drink </a></li>
                        <li><a href="#">Luch</a></li>
                        <li><a href="#">Fruit</a></li>
                        </ul>
                    </nav>
            </div>
            <div className={styles.homeBananer}>
                    <div  className={styles.homeBananer1}>
                    </div>
                    <div  className={styles.homeBananer2}>
                    </div>
                    <div>
                    <h1> Design For Product</h1>
                    </div>
                     
            </div>
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
export  default HomPages;