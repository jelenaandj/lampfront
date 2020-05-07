const BASE_URL = 'http://localhost:5000';
const PRODUCTS='/products';

export const getAllProducts = () => {
    return fetch(`${BASE_URL}${PRODUCTS}`)
      .then(res => res.json());
  }
