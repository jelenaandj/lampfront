const BASE_URL = 'https://lamp-shop.herokuapp.com';
// const BASE_URL = 'http://localhost:5000';

const PRODUCTS='/api/products';
const REGISTER='/api/user/register';
const LOGIN='/api/user/login';
const USER='/api/user';
const UPDATE='/update';
const ORDERS='/api/orders';
const DELETE='/api/user/delete';

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
        "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({email,password})
})
.then(function (response) {
    // console.log('My JWT:', response.headers.get('jwt'));
    return response.json();
});}

export const getUser=(token)=>{
  return fetch(`${BASE_URL}${USER}`, {
    method:'GET',
    headers:{
      'Content-Type':'application/json; charset=UTF-8',
      'auth-token':token 
  }}).then(res => res.json());}

  ///update cart
  export const updateCart=(token,cart)=>{
    return fetch(`${BASE_URL}${USER}${UPDATE}`, {
      method:'POST' ,
      headers:{
        'Content-Type':'application/json; charset=UTF-8' ,
        'auth-token':token},
        body: JSON.stringify({cart})
    }).then(function (response) {
      return response.json();
  })
  ;}

  /////order
  export const updateOrder=(token,name,address,countryCity,zip,newsletter,cart)=>{
    return fetch(`${BASE_URL}${ORDERS}`, {
      method:'POST' ,
      headers:{
        'Content-Type':'application/json; charset=UTF-8' ,
        'auth-token':token},
        body: JSON.stringify({name,address,countryCity,zip,newsletter,cart})
    }).then(function (response) {
      return response.json();
  })
  ;}

  ////delete cart
  export const deleteCart=(token)=>{
    return fetch(`${BASE_URL}${DELETE}`, {
      method:'POST' ,
      headers:{
        'Content-Type':'application/json; charset=UTF-8' ,
        'auth-token':token}
        // body: JSON.stringify({cart})
    }).then(function (response) {
      return response.json();
  })
  ;}