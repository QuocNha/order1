import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useTheme,MenuItem,Input,TextField,Select,AppBar, Typography,Grid,Button,Tooltip,IconButton,Modal,makeStyles,FormControl,InputLabel } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import {loadData} from'../../../../redux/actions/ProductActions'
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form:{
    padding:theme.spacing(1)
  },
  formControl:{
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  }
}));
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
      {
        field: 'Action',
        headerName: 'Action',
        width: 130,
        renderCell: (params) => (
          <React.Fragment>
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton aria-label="edit">
                <Edit />
              </IconButton>
            </Tooltip>
          </React.Fragment>

        )
      }
  ];

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const rand= () => {
    return Math.round(Math.random() * 20) - 10;
  }
  const getStyles= (name, personName, theme)=> {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const getModalStyle = () =>{
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
const Product = (action) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [productList,SetProductList] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    // action.product.employeedata!==null && action.product.employeedata!== undefined  ?action.product.employeedata.data.data:
    //    console.log("productList",action);
    const handlerCloseModal = async () =>{
      setModalOpen(false);
    }
    const handlerOpenModal = () =>{
      setModalOpen(true);
    }
    const formik = useFormik({
      initialValues: {nameProduct:"",Price:"",address:"",count:""},
      validationSchema: Yup.object({}),
      onSubmit: values => {}
    });
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
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={9}>
                      
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                      <Button
                      onClick={handlerOpenModal}
                      variant="contained"
                      color="primary"
                      type="submit"
                      >Add Product</Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div style={{ height: 400, width: '100%' }}>
                        <DataGrid 
                        rows={productList} 
                        columns={columns} 
                        pageSize={5} 
                        checkboxSelection
                        disableColumnMenu 
                         />
                      </div>
                    </Grid>
                    </Grid>
                    <Modal
                    open={modalOpen}
                    onClose={handlerCloseModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
              
                    <div style={modalStyle}  className={classes.modal}>
                      <h2 id="simple-modal-title">Add Product</h2>
                    <form  className={classes.form} onSubmit={formik.handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          {formik.touched.nameProduct && formik.errors.nameProduct ? (
                            <div >{formik.errors.nameProduct}</div>
                          ) : null}
                          <TextField
                            id="nameProduct"
                            name="nameProduct"
                            label="nameProduct"
                            fullWidth
                            autoComplete="given-name"
                            required={true}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nameProduct}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          {formik.touched.Price && formik.errors.Price ? (
                            <div >{formik.errors.Price}</div>
                          ) : null}
                          <TextField
                            id="Price"
                            name="Price"
                            label="Price"
                            fullWidth
                            autoComplete="given-name"
                            required={true}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Price}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          {formik.touched.address && formik.errors.address ? (
                            <div >{formik.errors.address}</div>
                          ) : null}
                          <TextField
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="given-name"
                            required={true}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            className={classes.formControl}
                          >
                            <InputLabel id="demo-mutiple-name-label">Type</InputLabel>
                            <Select
                              labelId="demo-mutiple-name-label"
                              id="demo-mutiple-name"
                              multiple
                               value={personName}
                              // onChange={handleChange}
                              input={<Input />}
                            MenuProps={MenuProps}
                            >
                              {["Eat","Drink"].map((name) => (
                                    <MenuItem key={name} value={name} 
                                    style={getStyles(name, personName, theme)}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          {formik.touched.count && formik.errors.count ? (
                            <div >{formik.errors.count}</div>
                          ) : null}
                            <TextField
                            id="count"
                            name="count"
                            label="Total Product"
                            fullWidth
                            autoComplete="given-name"
                            required={true}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.count}
                            />
                        </Grid>
                        <Button variant="contained" color="primary" type="submit">Add Product</Button>
                      </Grid>
                      
                    </form>
                    </div>
                    </Modal>
        </React.Fragment>
}
export default Product;