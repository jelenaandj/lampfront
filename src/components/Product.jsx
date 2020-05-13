import React from 'react';
import {Link} from 'react-router-dom';


export default function Product(props) {
    const{name,picture,price,_id,sale}=props.product;
    
     
    return (
        <Link to={`/products/${_id}`}>
            <div className='product'>
                <img src={picture} alt={'img'}style={{width:'200px',height:'200px'}}/>
                <div>
                    <p>{name}</p>
                    <p>{price}$</p>
                    <p>{sale? `${sale}% discount at the check out`: ''}</p>
                </div>
            
            </div>
        </Link>

    );
}