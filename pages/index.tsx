import Head from 'next/head'
import React, { Fragment, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link';
import { LayersClearOutlined } from '@material-ui/icons';
import Layout from './components/Layout/Layout';

// import styles from '../styles/Home.module.scss'

const Home = () => {
  const handleClick = () => {
    location.href = "/components/Login";
  }
//   useEffect(() => {
//    const onlick = ()=>{
//     handleClick();
//   }
//    onlick();
// }, []); 
  return (
    <Fragment>
      <div id="demo" >
      {/* <Link  href="/components/Layout/Layout"><a >Vui lòng click để vào trang  web</a></Link> */}
      <Layout></Layout>
      </div>
    
    </Fragment>
  )
}
export default Home;
