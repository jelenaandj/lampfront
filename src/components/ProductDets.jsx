import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../services/api';


export default function ProductDets({match}) {

    const[product,setProduct]=useState('');

    useEffect(()=>{
        getOneProduct(match.params.id).then(data=>{
            setProduct(data.data);
        });
    },[]);

    return (
        <div>
            <img src={product.picture} style={{width:'200px',height:'200px'}}/>
            <p>{product.name}</p>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
        </div>
    )
}
