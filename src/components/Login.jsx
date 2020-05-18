import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {login} from '../services/api';
import {tokenLogin} from '../services/tokens';
import { useHistory  } from 'react-router-dom';


export default function Login() {

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    let history = useHistory();

    ///
    // await login(email,password).then(data=> tokenLogin(data.token));
    // isTokenLogin();
    // console.log(isTokenLogin());
    // history.push('/products');
    // window.location.reload(false);
    ///send true so nav could render
    ///

    const handleLogin=async()=>{
        try {
            await login(email,password).then(data=>
            {console.log(data)
            if(data.success==false){
                alert(data.message);
            }else{
                tokenLogin(data.token);
                // console.log(data.token);
                history.push('/products');
                // window.location.reload(false);
            }});
        } catch (error) {
            alert(error.message);
        }
       
        
    }

    return (
        <div className='login'>
            <Form onSubmit={e=> e.preventDefault()}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onInput={e => {setEmail(e.target.value)}}  />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onInput={e => {setPassword(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
                Log in
            </Button>
            </Form>
            
        </div>
    );
}
