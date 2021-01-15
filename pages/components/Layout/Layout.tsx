import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
import styles from  './Layout.module.scss';
import MenuOrder from '../MenuOrder/MenuOrder';
import MenuBar from '../MenuOrder/MenuBar';
import React, { useEffect,useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FoodBody from './FoodBody/FoodBody';


const Layout = ({}) => {
   
        
   
   return <div className={styles.container} >
            <Head>
            <title>Phong Vũ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

        <main className={styles.main} >
           <div className={styles.Menu}>
                <MenuBar></MenuBar>
           </div>
           <div className={styles.Search}>
            {/* <SearchInput></SearchInput> */}
           </div>
           
           <div className={styles.body}>
              <FoodBody></FoodBody>
           </div>
           {/* <div className={styles.MenuOrder}>
               <MenuOrder ></MenuOrder>
           </div> */}
        </main>

        {/* <footer className={styles.footer}>
            footer
      </footer> */}
    </div>
}
export default Layout;