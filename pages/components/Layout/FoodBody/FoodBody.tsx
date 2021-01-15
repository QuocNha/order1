import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from "react-redux";
import { loadData,loadData1, IEmployee } from './../../../../redux/actions/ProductActions';

import React, { useEffect } from 'react';
const FoodBody= () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.Product);
    function  handelClick() {
        // const { userId, dispatch } = this.props
        dispatch( loadData1("tao nek"))
        
    }
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);
    return <div >
                <div >
                    <button onClick={handelClick}>
                        <div >Đồ ăn <ArrowForwardIcon/></div>
                    </button>
                    <button>
                        <div >Chọn địa chỉ giao hàng</div>
                    </button>
                    <button>
                        <div ><ArrowForwardIosIcon /></div>
                    </button>
                </div>
                <div >
                    <div >
                        <div >Ưu đãi </div>
                        <div ><AppsIcon/> Xem tất cả </div>
                
                    </div>    
                    
                    {/* <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá : 3000 $</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                                         */}
                </div>
            </div>
}
export default FoodBody;