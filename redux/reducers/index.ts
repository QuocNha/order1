import { combineReducers } from 'redux';

import Product from './ProductReducer';
import User from './UserReducer';

export default combineReducers({
    Product,User
});
