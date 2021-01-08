import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
import styles from  './Layout.module.scss';
import MenuOrder from '../MenuOrder/MenuOrder';
import React, { useEffect,useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';


const Layout = ({}) => {
   return <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
           <div className={styles.Menu}>
                main
           </div>
           <div className={styles.Search}>
            <SearchInput></SearchInput>
           </div>
           <div className={styles.MenuOrder}>
               <MenuOrder ></MenuOrder>
           </div>
           
        </main>

        <footer className={styles.footer}>
            footer
      </footer>
    </div>
}
export default Layout;