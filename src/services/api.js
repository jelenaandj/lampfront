const BASE_URL = 'http://localhost:5000';
const PRODUCTS='/api/products';
const REGISTER='/api/user/register';
const LOGIN='/api/user/login';

export const getAllProducts = () => {
    return fetch(`${BASE_URL}${PRODUCTS}`)
      .then(res => res.json());
  }


export const getOneProduct = (_id) =>{
    return fetch(`${BASE_URL}${PRODUCTS}/${_id}`)
      .then(res => res.json());
}

export const register=(user)=>{
  return fetch(`${BASE_URL}${REGISTER}`, {
    headers:{
      'Content-Type':'application/json; charset=UTF-8' 
  },
    method:'POST',
    body:JSON.stringify(user)}).then(res => res.json());
  
}
export const login=(email,password)=>{
  return fetch (`${BASE_URL}${LOGIN}`,{
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    
    body: JSON.stringify({email,password})
})
.then(function (response) {
    // console.log('My JWT:', response.headers.get('jwt'));
    return response.json();
})
;}