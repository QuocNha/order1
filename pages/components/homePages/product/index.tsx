import React from 'react';
import styles from  './product.module.scss';
import { Grid ,Typography,Button,Paper,MenuItem,IconButton,Badge} from '@material-ui/core';
import Image from 'next/image';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Product = () =>{
    return <React.Fragment>
        <div id={styles.containerProduct}>
                    <nav >
                        <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Hot</a></li>
                        <li><a href="#">Sale</a></li>
                        </ul>
                    </nav>
                    <div id={styles.menuProduct}>
                    <Grid container >
                        {[1,2,3,4].map((text, index) => (
                                <Grid item key={text} lg={3}>
                                <div className={styles.Product}>
                                    <Grid item md={6}>
                                        <div className={styles.img}>
                                            <Image
                                                width={300}
                                                height={300} src="/Drink.jpg"
                                            ></Image>
                                        </div>   
                                    </Grid>
                                    <Grid item md={6}>
                                    <div className={styles.title}>
                                            <h3 className={styles.productName}>name Product</h3>
                                            <h3>Price : <span>12000 Đ</span></h3>
                                            <h3>Size : M</h3>
                                            <h3>Number : <span><AddIcon className={styles.add}></AddIcon></span>  0  <span><RemoveIcon className={styles.add}></RemoveIcon></span></h3>
                                        </div>
                                    </Grid> 
                                    </div>
                                </Grid>    
                        ))}
                    </Grid>
                        
                             

                    </div>
        </div>
        

    </React.Fragment>
}
export default Product; 