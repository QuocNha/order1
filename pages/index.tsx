import Head from 'next/head'
import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles from '../styles/Home.module.scss'
import Login from './components/Login';
export default function Home() {
  return (
    <Fragment>
    <CssBaseline />
    <Login></Login>
    </Fragment>
  )
}
