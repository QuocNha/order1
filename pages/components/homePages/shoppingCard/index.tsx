import React from 'react';
import {Modal ,makeStyles,MenuItem,Menu,Button, Grid} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import styles from  './shoppingPages.module.scss';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Link from 'next/link'
const ShoppingCard = (action:any) =>{
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nameProduct', headerName: 'nameProduct', width: 150 },
        { field: 'Img', headerName: 'Img', width: 150 },
        { field: 'price', headerName: 'price', width: 150 },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: 'number',
          width: 150,
          renderCell: (params) => (
              <React.Fragment>
        <h3><span><AddIcon className={styles.add}></AddIcon></span>  0  <span><RemoveIcon className={styles.add}></RemoveIcon></span></h3>
              </React.Fragment>
          )
        },
        {
            field: 'total',
            headerName: 'total',
            type: 'number',
            width: 150,
          },
          {
            field: '',
            headerName: '',
            
            width: 150,
          },
      ];
      
      const rows = [
        { id: 1, nameProduct: 'Trà Sữa', price: '1000 Đ', quantity: 35 },
      ];
     const handelChanePage = async()=>{
        action.handelChanePage(1)
      }
         
    return <React.Fragment>
    <div id="shopping"className={styles.shopping}>
        <h1>Shopping Card</h1>
        <h3 onClick={handelChanePage}><a>Chane Home Pages</a></h3>   
        <div style={{ height: 200, width: '100%' }}>
            <DataGrid rows={rows} columns={columns}  />
        </div>
        <div>
            <Grid container>
                <Grid item md={6}>
                        <h3>Subtotal</h3>
                        <h3>Total</h3>
                        <h3>Phone</h3>
                        <h3>Name</h3>
                </Grid>
                    <Grid item md={6}>
                        <h3>Subtotal</h3>
                        <h3>Total</h3>
                        <h3>Phone</h3>
                        <h3>SDT</h3>
                    </Grid>
            </Grid>
            
            </div>
            <div className={styles.buttonBuy}>
            <Button variant="contained" color="primary">Buy now</Button>   
            </div>
            
        </div>
           
    </React.Fragment>
}
export default ShoppingCard;