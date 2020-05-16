import React from 'react';
// import Table from 'react-bootstrap/Table';
import { getUser } from '../services/api';
import { useEffect } from 'react';
import { isTokenLogin } from '../services/tokens';
import { useState } from 'react';
import CartItem from './CartItem';

export default function Cart() {
    const[cart,setCart]=useState([]);
    let total=0;

//    useEffect(()=>{
       const token=isTokenLogin();
        getUser(token).then(data=>setCart(data.data.cart))
//    },[]);
//    console.log(cart);

   cart.forEach(product=>  total+=product.price);
    return (
        <div>
            {cart.map((product,index)=><CartItem product={product}  key={index} index={index} />)}
            <div>
                Total: {total}$
            </div>
        </div>
    );
}
