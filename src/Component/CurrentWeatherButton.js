import React from 'react'
import { Button } from 'reactstrap';


function CurrentWeatherButton(props) {
    return (
        <div>
            <Button onClick={props.button}>Current Weather</Button>
        </div>
    )
}

export default CurrentWeatherButton
