import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from "react-redux";
import { loadData,loadData1, IEmployee } from './../../../../redux/actions/ProductActions';
import {Grid, makeStyles,Button,Divider} from '@material-ui/core'
import React, { useEffect } from 'react';
const useStyles =makeStyles ((theme) => ({
    container:{
        height:'auto',
        '& .title':{
            // backgroundColor:'red',
            height:"50px",
            padding:theme.spacing(1),
            '& button':{
                '& svg':{
                    // marginTop:theme.spacing(1)
                    marginLeft:theme.spacing(1)
                }
            }
        },
        '& .menu':{
            marginTop:theme.spacing(1),
            height:"auto",
            
            '& .menuItem' :{
                // backgroundColor:'red',
            }
        }
    },
    left:{
        float:'left'
    },
    right:{
        float:'right'
    }

}));
const FoodBody= () => {
    const dispatch = useDispatch();
    interface Person {
        name: string;
        price: number;
      }
    const array: Person[] =[
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10}
      ] 
    const state = useSelector((state) => state.Product);
    const classes = useStyles();
    function  handelClick() {
        // const { userId, dispatch } = this.props
        dispatch( loadData1("tao nek"))
        
    }
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);
    return <React.Fragment>
                <Divider />
                <Grid className={classes.container}>
                    <Grid className="title" md={12}>
                    <Button className={classes.left} onClick={handelClick} color="primary">
                        Đồ ăn <ArrowForwardIcon/>
                    </Button>
                    <Button className={classes.right} color="primary">
                        Chọn địa chỉ giao hàng
                        <ArrowForwardIosIcon />
                    </Button>
                    </Grid>
                    <Grid container  className="menu" md={12} >
                        <Grid md={4} className="menuItem">
                            <Button >Ưu đãi </Button>
                            <Button ><AppsIcon/> Xem tất cả </Button>
                            <div >
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div >39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div ><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                            </div>    
                        </Grid>
                        <Grid md={4} className="menuItem">
                            <Button >Ưu đãi </Button>
                            {/* <Button ><AppsIcon/> Xem tất cả </Button> */}
                            <div >
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div >39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div ><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                            </div>    
                        </Grid>
                        <Grid md={4} className="menuItem">
                            <Button >Ưu đãi </Button>
                            {/* <Button ><AppsIcon/> Xem tất cả </Button> */}
                            <div >
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div >39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div ><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                            </div>    
                        </Grid>
                        <Grid md={4} className="menuItem">
                            <Button >Ưu đãi </Button>
                            {/* <Button ><AppsIcon/> Xem tất cả </Button> */}
                            <div >
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div >39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div ><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                            </div>    
                        </Grid>
                        <Grid md={4} className="menuItem">
                            <Button >Ưu đãi </Button>
                            {/* <Button ><AppsIcon/> Xem tất cả </Button> */}
                            <div >
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div >39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div ><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                            </div>    
                        </Grid>
                        <Divider />                                     
                        
                    
                    {/* <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                                         */}
                    </Grid>
                </Grid>
            </React.Fragment>
}
export default FoodBody;