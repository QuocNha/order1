import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppBar, Typography,} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import {loadData} from'../../../../redux/actions/ProductActions'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameProduct', headerName: 'nameProduct', width: 230 },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      type: 'String',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
        field: 'address',
        headerName: 'address',
        type: 'String',
        width: 130,
      },
    {
        field: 'typeProduct',
        headerName: 'typeProduct',
        type: 'String',
        width: 130,
      },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
const Product = (action) =>{
    const dispatch = useDispatch();
    const [productList,SetProductList] = useState([]);
    // action.product.employeedata!==null && action.product.employeedata!== undefined  ?action.product.employeedata.data.data:
    //    console.log("productList",action);
    useEffect(() => {
       const listProduct = (data) =>{
            console.log("data",data.product.data);
            SetProductList(data.product.data)
       };
        listProduct(action)
    },[])
        return <React.Fragment>
                    <Typography variant="h6">
                        Product
                    </Typography>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={productList} columns={columns} pageSize={5} checkboxSelection />
                    </div>
        </React.Fragment>
}
export default Product;