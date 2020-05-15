import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../services/api';
import { isTokenLogin } from '../services/tokens';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



export default function ProductDets({match}) {

    const[product,setProduct]=useState('');

    useEffect(()=>{
        getOneProduct(match.params.id).then(data=>{
            setProduct(data.data);
        });
    },[]);

    const{name,description, price,sale}=product;

    return (
        <div className='productDets'>
            <img src={product.picture} alt={'img'} style={{width:'400px',height:'400px'}}/>
            <div className='details'>
            <p>{name}</p>
            <p style={{color:'red'}}>{sale? `${sale}% discount`: ''} </p>
            <p>Current price: {price}$</p>
            <p>{description}</p>
            <div>
            {isTokenLogin() ? <Button variant="success" type="submit">Put in cart</Button>:
                        <Button variant="light" type="submit">Put in cart</Button>}
            <Button variant="primary" style={{margin:'2%'}} type="submit">
                <Link to='/cart' style={{color:'white',textDecoration:'none'}}>Check out</Link>  
            </Button>
            </div>
            </div>
        </div>
    )
}
