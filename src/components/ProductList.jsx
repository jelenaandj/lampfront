import React,{useState, useEffect} from 'react';
import {getAllProducts} from '../services/api';
import Product from './Product';


export default function ProductList (props){
    const[products,setProducts]=useState([]);
    const[data,setData]=useState(false);
    useEffect(()=>{
        getAllProducts().then(data=>{
            setProducts(data.data);
         });
    },[]);
let tmp=false;


// let sort=products.sort((a,b)=> a.price-b.price);
// console.log(sort,'sort');


const handleChange=(e)=>{
    if(e.target.value==='lowest'){
       let tmp=products.sort((a,b)=> a.price-b.price).map(product=> <Product product={product}  key={product._id} />);
        setData(tmp);
        // tmp.map(product=> <Product product={product}  key={product._id} />);
        // return tmp
        // setProducts(tmp);
    }if(e.target.value==='highest'){
      let tmp= products.sort((a,b)=> b.price-a.price).map(product=> <Product product={product}  key={product._id} />);
        setData(tmp);
        
        // return tmp
        // setProducts(tmp);
    }else if(e.target.value==='sale'){
        let tmp=products.filter(product=>product.sale).map(product=><Product product={product}  key={product._id} />);
        
        // tmp.map(product=> <Product product={product}  key={product._id} />);
        // return tmp
        setData(tmp)
        // setProducts(tmp);
    }
    // console.log(tmp,'tmp', products, 'products');
} 

    return (
        <div>
            <select name='Sort by' onChange={handleChange} className='select-wrap' >
                <option defaultValue>Sort by</option>
                <option value='lowest' >Lowest price</option>
                <option value='highest'>Highest price</option>
                <option value='sale'>On sale</option>
            </select>

        <div className='product-list' >
      
            {
                props.location.sale?
                products.filter(product=>product.sale).map(product=> <Product  product={product} key={product._id}/>):
                data?
                data:
                products.map(product=> <Product product={product}  key={product._id} />)
            }
        </div>
        </div>
    );
}
