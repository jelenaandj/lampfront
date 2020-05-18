import React from 'react';
import {Link} from 'react-router-dom';


export default function Product(props) {
    const{name,picture,price,_id,sale}=props.product;
    
     
    return (
        <div className='product-box'>
        <Link to={`/products/${_id}`} style={{color:'black',textDecoration:'none'}}>
            <div className='product'>
                <img className='product-img' src={picture} alt={'img'}/>
                <div>
                    <p>{name}</p>
                    <p>Current price: {price}$</p>
                    <p style={{color:'red'}}>{sale? `${sale}% discount`: ''}</p>
                </div>
            
            </div>
        </Link>
        </div>

    );
}