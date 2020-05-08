import React,{useState, useEffect} from 'react';
import {getAllProducts} from '../services/api';
import Product from './Product';


export default function ProductList() {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        getAllProducts().then(data=>{
            setProducts(data.data);
         });
    },[]);
    console.log(products);

    
    return (
        <div className='product-list'>
            {products.map(product=> <Product product={product} key={product._id}/>)}
        </div>
    );
}
