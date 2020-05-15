import React,{useState, useEffect} from 'react';
import {getAllProducts} from '../services/api';
import Product from './Product';


export default function ProductList (props){
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        getAllProducts().then(data=>{
            setProducts(data.data);
         });
    },[]);
    
    
    // console.log(props.location.sale);


    
    return (
        <div className='product-list' >
           {props.location.sale?
            products.filter(product=>product.sale).map(product=> <Product  product={product} key={product._id}/>):
            products.map(product=> <Product product={product}  key={product._id} />)
            }
        </div>
    );
}
