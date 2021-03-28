import React from 'react'
import Container from 'react-bootstrap/Container'
import './Container.css'

function Cont(props) {
    return (
        <>
            <style type="text/css">

                {`.container {
                    background - color: #333;
                }`}


            </style>
            <Container className='fluid'>
                {props.children}
            </Container>
        </>
    )
}

export default Cont
