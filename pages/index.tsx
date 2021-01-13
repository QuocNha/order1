import Head from 'next/head'
import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles from '../styles/Home.module.scss'
import Layout from './components/Layout/Layout'
import styles from  './Layout.module.scss';
export default function Home() {
  return (
    <Fragment>
    <CssBaseline />
    <Layout></Layout>
    </Fragment>
  )
}
