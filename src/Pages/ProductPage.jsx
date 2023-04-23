import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { BodyContainer, CardContainer, CategoryHeader, Container, DropdownContainer, FilterBody, HeaderContainer, LeftContainer, LeftHeader, RattingsContainer, RightContainer, RightHeader } from './product.style'
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../Redux/actions/productAction';
import { ProductConstant } from '../Redux/constant/constantType';

const ProductPage = () => {
    const dispatch = useDispatch();
    const {isSuccess,productData,filterData,filter} = useSelector(state=>state.Product);

    const handleFilter = (event) => {
        let value = event.target.value;
        dispatch({type:ProductConstant.FILTER_UPDATE,payload:{name:'sort',value}});
        dispatch({type:ProductConstant.PRODUCT_FILTER});
    }


    const getUniqueData = (data,property) => {
        let newVal = data.map((curElem)=>{
          const category = curElem[property];  
          return category;
        });
        return (newVal = ['All',...new Set(newVal)]);

      }

    const handleCheckCategory = (value) => {
        // console.log(value)        
        dispatch({type:ProductConstant.FILTER_UPDATE,payload:{name:'category',value}});
        dispatch({type:ProductConstant.PRODUCT_FILTER});
    }
    const handleCheckBrand = (value) => {
        // console.log(value)        
        dispatch({type:ProductConstant.FILTER_UPDATE,payload:{name:'brand',value}});
        dispatch({type:ProductConstant.PRODUCT_FILTER});
    }

    useEffect(()=>{
        dispatch(ProductAction());
    },[])
  return (
    <Container>
        <LeftContainer>
            <CategoryHeader>
                <h4>FILTERS</h4>
            </CategoryHeader>
            <CategoryHeader>
                <h5>Categories</h5>
            </CategoryHeader>
            <FilterBody>
                {isSuccess && getUniqueData(productData,'category').map((item,index)=>{
                    return(
                        // <p>{item}</p>
                        <Form.Check 
                            checked={filter.category == item ? true : false}
                            type={'checkbox'}
                            id={item}
                            label={item}
                            onChange={()=>handleCheckCategory(item)}
                        />
                    )
                })
                }
            </FilterBody>
            <CategoryHeader>
                <h5>Brand</h5>
            </CategoryHeader>
            <FilterBody>
                {isSuccess && getUniqueData(productData,'brand').map((item,index)=>{
                    return(
                        <Form.Check 
                            checked={filter.brand == item ? true : false}
                            type={'checkbox'}
                            id={item}
                            label={`${item}`}
                            onChange={()=>handleCheckBrand(item)}
                        />
                    )
                })
                }
            </FilterBody>
            
        </LeftContainer>
        {/*  */}
        <RightContainer>
            <HeaderContainer>
                <LeftHeader>
                    <h4>PRODUCT DATA</h4>
                </LeftHeader>
                <RightHeader>
                     <DropdownContainer onChange={handleFilter}>
                        <option value={'A-Z'}>A-Z</option>
                        <option value={'Z-A'}>Z-A</option>
                        <option value={'MOST-POPULAR'}>MOST-POPULAR</option>
                        <option value={'POPULAR'}>POPULAR</option>
                    </DropdownContainer>
                </RightHeader>
            </HeaderContainer>
            <BodyContainer>
                {isSuccess && filterData.map((item,index)=>{
                    return(
                        <CardContainer key={item.id}>
                            <div  style={{height:'70%', width:'100%'}} >
                                <img style={{height:'100%', width:'100%'}} src={item.thumbnail} alt="Card image cap" />
                                <RattingsContainer>
                                    <p style={{marginLeft:'5px'}}>{item.rating}</p>
                                    <img style={{height:'20px', width:'20px'}} src="assets/image/star.png" alt='star' />
                                </RattingsContainer>
                                </div>
                                <div style={{height:'30%'}}>
                                    <h5 style={{marginLeft:'10px',marginTop:'10px'}}>{item.title.slice(0,15)}</h5>
                                    <p style={{marginLeft:'10px',marginTop:'10px'}}>{item.description.slice(0,30)}</p>
                                    <h5 style={{marginLeft:'10px',marginTop:'10px'}}>Rs : {item.price}</h5>
                                </div>
                        </CardContainer>
                    )
                })}
                {filterData.length == 0 && 
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p>Product Not Available</p>
                </div>}
               
               
            </BodyContainer>
        </RightContainer>
    </Container>
  )
}

export default ProductPage