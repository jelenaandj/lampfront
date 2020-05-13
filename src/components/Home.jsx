import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



export default function Home() {
    return (
        <div className='home'>
            <Jumbotron className='jumbo'>
                    <p>
                        See our products on sale 
                            <Button variant="primary" type="submit">
                                
                                <Link to={{pathname:'/products', sale:'true'}}>HERE</Link>  
                            </Button>
                    </p>
            </Jumbotron>
        </div>
    )
}
