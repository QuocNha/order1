import styles from  './MenuOrder.module.scss';
// import { useSelector, useDispatch } from "react-redux";
// import { loadRequest } from '../../redux/actions/MenuOrder';
import React, { useEffect } from 'react';

const MenuOrder= () => {
    interface Person {
        name: string;
        price: number;
      }
      const array1: Person[] =[
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10}
      ]

    // console.log("child",child);
    
    //  const state = useSelector((state) => state.MenuOrder);
    //  console.log("state",state)
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(loadRequest());
	// }, [dispatch]);
        return <div>
                    <div className={styles.orderMenu}>
                        <button>
                            <div className={styles.orderMenu_name}>Tên món ăn</div>
                        </button>
                        <button><div className={styles.orderMenu_price}>Giá</div></button>
                    </div>
                    <div className={styles.orderMenuData}>
                        {array1.map((item)=>{
                               return(
                                <div className={styles.orderMenuData_row}>
                                    <div className={styles.orderMenuData_row_name}>{item.name}</div>
                                    <div className={styles.orderMenuData_row_img}>Ảnh</div>
                                    <div className={styles.orderMenuData_row_price}>{item.price}</div>
                                </div>
                               ) 
                            })}   
                    </div>
                </div>
                
}
export default MenuOrder;