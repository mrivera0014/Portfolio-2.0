import React from 'react'
import Card from 'react-bootstrap/Card'
import './Card.css'

function Cards() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/20191229_205417 (2).jpg'} />
            <Card.Body>
                <Card.Title>Junior Web Developer</Card.Title>

            </Card.Body>
        </Card>
    )
}

export default Cards
