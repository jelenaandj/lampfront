import React, { useState } from 'react';
import { getUser, updateCart } from '../services/api';
import { useContext, useEffect} from 'react';
import { isTokenLogin } from '../services/tokens';
import CartItem from './CartItem';
import {CartContext} from '../App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


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
            updateCart(token,empty);
        }
    }

    return (
        <div className='cart-div' >
            <div>
                <Form className='form-div'  style={{width:'70%',marginLeft:'100px'}}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control placeholder="Full name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Country and city</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Subscribe to our newsletter and stay updated" />
                    </Form.Group>
                </Form>
        </div>
            <div className='cart-map'>
                {cart!==null ?
                cart.map((product,index)=><CartItem  product={product} setDeleted={setDeleted} token={token} key={index} index={index} />):''}
                <div>
                    Total: {total}$
                </div>
                <Button variant="success" type="submit" onClick={handleBuy}>Buy</Button>       
            </div>
            
        </div>
    );
}
