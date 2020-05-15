import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function About() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>ABOUT US</h1>
                    <p>
                    Bringing light into homes since 1998.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
