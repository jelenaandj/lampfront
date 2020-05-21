import React, { useState } from 'react';
import { getUser, updateOrder, deleteCart } from '../services/api';
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

    const[name,setName]=useState();
    const[address,setAddress]=useState();
    const[countryCity,setCountryCity]=useState();
    const[zip,setZip]=useState();
    const[newsletter,setNewsletter]=useState();

   useEffect(()=>{
        getUser(token).then(data=>setCart(data.data.cart))
        // eslint-disable-next-line
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
            // let empty=[];
            // setCart(empty);
            // alert('Thank you for shopping with us')
            // updateCart(token,empty);
            try {
                ////make order
                console.log(name)
                updateOrder(token,name,address,countryCity,zip,newsletter,cart).then(data=> {
                    // console.log(data);
                    if(data.success===false){
                     return alert(data.message);
                    }
                    alert(data.message);

                    /////delete cart
                deleteCart(token).then(data=> {
                    console.log(data);
                    setCart(data.data);
                    if(data.success===false){
                        alert(data.message);
                    }
                });
                });
               
                


            } catch (error) {
                alert('Order has not been made, try again')
            }
        }
    }

    return (
        <div className='cart-div' >
            <div>
            {cart.length >0 &&    <Form className='form-div'  style={{width:'70%',marginLeft:'100px'}}>
                    <Form.Row>
                        <Form.Group as={Col} onChange={e=> setName(e.target.value)} controlId="validationCustom01">
                        <Form.Label >Full name</Form.Label>
                        <Form.Control placeholder="Full name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group onChange={e=> setAddress(e.target.value)} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group onChange={e=> setCountryCity(e.target.value)} as={Col} controlId="formGridCity">
                        <Form.Label>Country and city</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group onChange={e=> setZip(e.target.value)} as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group onChange={e=> setNewsletter(e.target? true:false)}  id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Subscribe to our newsletter and stay updated"/>
                    </Form.Group>
                </Form>}
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
