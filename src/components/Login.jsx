import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleLogin=()=>{

    }

    return (
        <div className='login'>
            <Form>
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
