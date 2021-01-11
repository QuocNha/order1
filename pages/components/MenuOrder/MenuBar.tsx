import styles from  './MenuBar.module.scss';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import React, { useState } from 'react';
const MenuOrder= () => {
    const [count, setCount] = useState(1);
    function handelClick() {
        let number:number=count;
        setCount(number+1);
        let el =document.querySelector('ul');
        console.log("count",count)
       if(count%2==0){
        el.setAttribute("style", "left:0px;");
       }else{
        el.setAttribute("style", "left:-100%;");   
       }
        
        return ;
      }
    return <div className={styles.body}>
               <nav>
                   <div className={styles.logo}>
                    <label className={styles.logo}>Phong Vũ</label>   
                   </div>
                   
                   <div className={styles.icon} onClick={handelClick}> <ArtTrackIcon /></div>
                   <div className={styles.menu}>
                    <ul>
                       <li ><a className="active" href="">Đồ ăn</a></li>
                       <li ><a href="">Thực phẩm</a></li>
                       <li ><a href="">Hoa</a></li>
                       <li ><a href="">Siêu thị</a></li>
                       <li ><a href="">Thuốc</a></li>    
                       <li ><a href="">Thú cưng</a></li>    
                    </ul>
                   </div>                      
               </nav>
            </div>
}
export default MenuOrder;