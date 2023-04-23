import axios from 'axios';
import {ProductConstant} from '../constant/constantType';

export const ProductAction = () => async (dispatch) => {
    try {
        dispatch({type:ProductConstant.PRODUCT_REQUEST});
        
        const {data} = await axios.get('https://dummyjson.com/products');
        dispatch({type:ProductConstant.PRODUCT_LIST_SUCCESS,payload:data.products});
    } catch (error) {
        dispatch({type:ProductConstant,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}