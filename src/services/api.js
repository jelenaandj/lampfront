const BASE_URL = 'http://localhost:5000';
const PRODUCTS='/api/products';
const REGISTER='/api/user/register';
const LOGIN='/api/user/login'

export const getAllProducts = () => {
    return fetch(`${BASE_URL}${PRODUCTS}`)
      .then(res => res.json());
  }


export const getOneProduct = (_id) =>{
    return fetch(`${BASE_URL}${PRODUCTS}/${_id}`)
      .then(res => res.json());
}

export const register=(user)=>{
  return fetch (`${BASE_URL}${REGISTER}`,{
    headers:{
      'Content-Type':'application/json' 
  },
    method:'POST',
    body:JSON.stringify(user)}).then(res => res.json());
  
}
// export const login=(user)=>{
//   return fetch (`${BASE_URL}${LOGIN}`,{
//     method: 'post',
//     headers: {
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//     },
//     body: {
//       email:email.user,
//       password:password.user
//     }
// })
// .then(function (response) {
//     console.log('My JWT:', response.headers.get('jwt'));
//     return response.json();
// })
// .then(function (data) {
//     // Do something with JSON data.
//     console.log(data);
// })
// .catch(function (error) {
//     console.log('Request failed', error);
// });