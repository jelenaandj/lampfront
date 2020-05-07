import React, { useState } from 'react';
import {getAllProducts} from '../services/api';

export default function Product() {
    const[products,setProducts]=useState([]);

    getAllProducts().then(data=>{
        setProducts(data.data[0].name) ;
             // console.log(data.topics)  
     })
     
    return (
        <div>
            <p>hello, {products}</p>
        </div>
    );

    }