import Head from 'next/head'
import React, { Fragment, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link';
import { LayersClearOutlined } from '@material-ui/icons';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import HomePages from './components/homePages/index';
import {NextPage} from'next/types'
// import styles from '../styles/Home.module.scss'

const Home:NextPage = () => {
  const handleClick = () => {
    location.href = "/components/Login";
  }
  return (
    <Fragment>

        <Head>
            <title>Phong Vũ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />      
        </Head>
      <div id="demo" >
      {/* <Link  href="/components/Layout/Layout"><a >Vui lòng click để vào trang  web</a></Link> */}
      <HomePages></HomePages>
      </div>
    
    </Fragment>
  )
}
export default Home;
