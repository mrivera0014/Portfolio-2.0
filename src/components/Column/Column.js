import React from 'react'
import Column from 'react-bootstrap/Col'

function Columns(props) {
    return (
        <Column>
            <h3>{props.children}</h3>
        </Column>
    )
}

export default Columns