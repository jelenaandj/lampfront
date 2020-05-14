import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {register} from '../services/api';
import { useHistory } from "react-router-dom";


export default function Register() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[issamePass,setIsSamePass]=useState('');
    const history = useHistory();

    const[token,setToken]=useState();

    function handleSubmit(e){
        e.preventDefault();
        console.log('aaaaaaa');
        if(confirmPassword === password){
        console.log('bbbbbbbb');
        //     return
        try {
        console.log('ccccc');

            register({name,email,password}).then(data=> {
                console.log('dddddddddd');

                console.log(data.message);
            });
        console.log('iiiiiiiiiii');

        } catch (error) {
            console.log(error.message);
        console.log('jjjjjjjjjjjjj');

        }
        }
       }
        // console.log(token);
        // history.push('/products')
        //     token =>  {
        //     if(token) {
        //         setToken(token)
        //         // history.push('/')
        //         console.log(token);
        //     }
        //     else console.log('Not registered');
            
        //  } 
        

    return (
        <div className='register'>
            <Form>
            <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onInput={e => {setName(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onInput={e => {setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onInput={e => {setPassword(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" onInput={e => {setConfirmPassword(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Register
            </Button>
            </Form>
            
        </div>
    );
}
