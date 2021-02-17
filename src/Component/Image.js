import React from 'react'
import { CardImg } from 'reactstrap';

function Image(props) {
    return (
        <div className={props.style}>
            <CardImg src={props.image} alt="Card image cap" />
        </div>
    )
}

export default Image