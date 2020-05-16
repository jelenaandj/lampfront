import React from 'react';
import { getUser } from '../services/api';
import { useContext} from 'react';
import { isTokenLogin } from '../services/tokens';
import CartItem from './CartItem';
import {CartContext} from '../App';
import Button from 'react-bootstrap/Button';


export default function Cart() {
    let total=0;
    const{cart,setCart}=useContext(CartContext);
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
            <Button variant="success" type="submit">Buy</Button>
        </div>
    );
}
