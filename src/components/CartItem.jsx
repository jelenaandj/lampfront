import React, {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {CartContext} from '../App';
import { updateCart } from '../services/api';
import { useEffect } from 'react';



export default function CartItem(props) {
    const{cart,setCart}=useContext(CartContext);

    // const{index,name,price}=props.product;
    const{name,price,_id}=props.product;
    const index=props.index;
    const token=props.token;
    const setDeleted=props.setDeleted;
    ///
    const handleDelete=(e)=>{
        if(cart.length !==0){
            let deleted=cart.find(product=>product._id===_id)
            let index = cart.indexOf(deleted);
            if (index > -1) {
                cart.splice(deleted, 1);
                setCart(cart)
                updateCart(token,cart);
                setDeleted(true);
              }
        }
    }


    return (
        <Table className='cart-table' striped bordered hover>
            <tbody>
                <tr>
                <td>#{index+1}</td>
                <td style={{width:'200px'}}>name: {name}</td>
                <td>1 pc</td>
                <td>{price}$</td>
                <td style={{backgroundColor:'white',textAlign:'center'}}>
                <Button variant="outline-danger" onClick={handleDelete} >x</Button>
                </td>
                </tr>
            </tbody>
        </Table>
         );
}
