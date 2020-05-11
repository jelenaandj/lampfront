import React from 'react';
import {Link} from 'react-router-dom';


export default function Product(props) {
    const{name,picture,price,_id}=props.product;
    
     
    return (
        <Link to={`/products/${_id}`}>
            <div className='product'>
                <img src={picture} style={{width:'200px',height:'200px'}}/>
                <div>
                    <p>{name}</p>
                    <p>{price}$</p>
                </div>
            
            </div>
        </Link>

    );
}