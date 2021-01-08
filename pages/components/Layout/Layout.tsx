import Head from 'next/head';
// import SearchInput from '../SearchInput/SearchInput';
import styles from  './Layout.module.scss';
// import MenuOrder from '../MenuOrDer/MenuOder';
import React, { useEffect,useState } from 'react';


const Layout = ({}) => {
    interface Person {
        name: string;
        price: number;
      }
      const array1: Person[] =[
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10}
      ]
      const [array,setArray] =useState(array1)
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
            {/* <SearchInput></SearchInput>         */}
           </div>
           <div className={styles.MenuOrder}>
               {/* <MenuOrder child={array}></MenuOrder> */}
           </div>
           
        </main>

        <footer className={styles.footer}>
            footer
      </footer>
    </div>
}
export default Layout;