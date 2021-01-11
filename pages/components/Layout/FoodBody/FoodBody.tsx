import styles from  './FoodBody.module.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const FoodBody= () => {
    return <div className={styles.container}>
                <div className={styles.title}>
                    <button>
                        <div className={styles.title_name}>Đồ ăn <ArrowForwardIcon/></div>
                    </button>
                    <button>
                        <div className={styles.title_name}>Chọn địa chỉ giao hàng</div>
                    </button>
                    <button>
                        <div className={styles.title_icon}><ArrowForwardIosIcon /></div>
                    </button>
                </div>
                <div className={styles.body}>
                    <div className={styles.body_title}>
                        <div className={styles.body_title_left}>Ưu đãi </div>
                        <div className={styles.body_title_right}><AppsIcon/> Xem tất cả </div>
                
                    </div>    
                    
                    <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                     <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                                        
                </div>
                <div className={styles.body}>
                    <div className={styles.body_title}>
                        <div className={styles.body_title_left}>Ưu đãi </div>
                        <div className={styles.body_title_right}><AppsIcon/> Xem tất cả </div>
                
                    </div>    
                    
                    <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                     <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                                        
                </div>
                <div className={styles.body}>
                    <div className={styles.body_title}>
                        <div className={styles.body_title_left}>Ưu đãi </div>
                        <div className={styles.body_title_right}><AppsIcon/> Xem tất cả </div>
                
                    </div>    
                    
                    <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                     <div className={styles.card}>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        <div className={styles.card_panel}>
                            <img src="https://images.foody.vn/res/g100/991138/prof/s280x175/foody-upload-api-foody-mobile-hmzz-191218121126.jpg"alt=""></img>
                            <h1>Bún chả cá</h1>
                            <div className={styles.card_panel_adress}>39/10/11 Hoàng Bật Đạt, P. 15, Tân Bình, TP. HCM</div>
                            <div className={styles.card_panel_type}><p><i><AddShoppingCartIcon/></i>Giảm 30 %</p></div>
                        </div>
                        
                    </div>
                                        
                </div>
            </div>
}
export default FoodBody;