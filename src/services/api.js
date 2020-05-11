const BASE_URL = 'http://localhost:5000';
const PRODUCTS='/api/products/';

export const getAllProducts = () => {
    return fetch(`${BASE_URL}${PRODUCTS}`)
      .then(res => res.json());
  }


export const getOneProduct = (_id) =>{
    return fetch(`${BASE_URL}${PRODUCTS}${_id}`)
      .then(res => res.json());
}