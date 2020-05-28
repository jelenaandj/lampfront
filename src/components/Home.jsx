import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function Home() {

    return (
        <div className='home' style={{position:'relative'}} >
            <img alt='alt' src={'lampforhome.jpg'} style={{position:'absolute', width:'100%', display:'block'}} ></img>
            <Card className="text-center">
                    <Card.Body>
                        <Card.Title>NEW</Card.Title>
                            <Card.Text>
                            Check out our products on sale.
                            </Card.Text>
                            <Button variant="info" >
                                
                                <Link to={{pathname:'/products', sale:'true'}} 
                                    style={{color:'white',textDecoration:'none'}}>HERE
                                </Link>  
                            </Button>
                    </Card.Body>
            </Card>
        </div>
    )
}
