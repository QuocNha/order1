 import Search from '@material-ui/icons/Search';
import styles from  './SearchInput.module.scss';

const SearchInput= () =>{
    return( <div className={styles.Search}>
                 <Search />
                 <input className={styles.input} placeholder="Tìm kiếm thực đơn"></input>   
            </div>
    )
}
export default SearchInput;