import {ProductConstant} from '../constant/constantType';

const initialState = {
    isLoading:false,
    productData:{},
    filterData:{},
    filter:{
        sort:'',
        category:'',
        brand:'',
    },
    isSuccess:false,
    isError:null,
}

export const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case ProductConstant.PRODUCT_REQUEST:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isError:null,
            }
        case ProductConstant.PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                productData:action.payload,
                filterData:action.payload,
                isSuccess:true,
                isError:null,
            }
        case ProductConstant.FILTER_UPDATE:
            const {name,value} = action.payload;
            return {
                ...state,
                filter:{
                    ...state.filter,
                    [name]:value,
                }
            }
        case ProductConstant.PRODUCT_FILTER:
            const {filter,productData,filterData} = state;
            let tempFilter = [...productData];
            if(filter.sort == 'A-Z'){
                tempFilter = tempFilter.sort((a,b)=>
                    a.title.localeCompare(b.title)
                )
            }
            if(filter.sort == 'Z-A'){
                tempFilter = tempFilter.sort((a,b)=>
                    b.title.localeCompare(a.title)
                )
            }
            if(filter.sort == 'MOST-POPULAR'){
                tempFilter = tempFilter.sort((a,b)=>
                    b.rating - a.rating
                )
            }
            if(filter.sort == 'POPULAR'){
                tempFilter = tempFilter.sort((a,b)=>
                    a.rating - b.rating
                )
            }

            if(filter.category !="" && filter.category !== 'All'){
                tempFilter = tempFilter.filter((item)=>{
                    return item.category == filter.category;
                })
            }
            if(filter.brand !="" && filter.brand !== 'All'){
                tempFilter = tempFilter.filter((item)=>{
                    return item.brand == filter.brand;
                })
            }

            return{
                ...state,
                filterData:tempFilter
            }
        case ProductConstant.PRODUCT_FAIL:
            return{
                ...state,
                isLoading:false,
                isSuccess:true,
                isError:action.payload,
            }
        default:
            return state;
    }
}