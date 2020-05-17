import React, { useState } from 'react';
import { getUser, updateCart } from '../services/api';
import { useContext, useEffect} from 'react';
import { isTokenLogin } from '../services/tokens';
import CartItem from './CartItem';
import {CartContext} from '../App';
import Button from 'react-bootstrap/Button';


export default function Cart() {
   const[deleted,setDeleted]=useState(false);
    let total=0;
    const token=isTokenLogin();
    const{cart,setCart}=useContext(CartContext);

   useEffect(()=>{
        getUser(token).then(data=>setCart(data.data.cart))
   },[deleted]);
//    console.log(cart);

  if(cart!==null) {
      if(deleted!==undefined && deleted!==false){
        setDeleted(false)
      }
  cart.forEach(product=>  total+=product.price);    
    }

    const handleBuy=(e)=>{
        if(cart<1){
            alert('cart is empty')
        }else{
            let empty=[];
            setCart(empty);
            alert('Thank you for shopping with us')
            updateCart(empty);
        }
    }

    return (
        <div>
            {cart!==null ?
            cart.map((product,index)=><CartItem product={product} setDeleted={setDeleted} token={token} key={index} index={index} />):''}
            <div>
                Total: {total}$
            </div>
            <Button variant="success" type="submit" onClick={handleBuy}>Buy</Button>
        </div>
    );
}
