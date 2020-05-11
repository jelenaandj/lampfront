import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../services/api';


export default function ProductDets({match}) {

    const[product,setProduct]=useState('');

    useEffect(()=>{
        getOneProduct(match.params.id).then(data=>{
            setProduct(data.data);
        });
    },[]);

    const{name,description, price}=product;

    return (
        <div>
            <img src={product.picture} style={{width:'500px',height:'500px'}}/>
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{}</p>
        </div>
    )
}
