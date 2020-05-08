import React from 'react';

export default function Product(props) {
    const{name,description,picture,price}=props.product;
    
     
    return (
        <div className='product'>
            <img src={picture} style={{width:'250px',height:'250px'}}/>
            <div>
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}$</p>
            </div>
            
        </div>
    );
}