import React, { Component } from 'react'
import { Table} from 'reactstrap';
import Image from './Image';


class CurrentWeather extends Component {

    render() {
        const {temperature,wind_speed,weather_icons,precip}=this.props.history.location.userData.current
        return (    
            <div>
                <Table bordered striped> 
                    <thead>
                        <tr>
                        <th>Temperature</th>
                        <th>Weather Icon</th>
                        <th>Wind Speed</th>
                        <th>Precio</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                        <td>{temperature}</td>
                        <td><Image image={weather_icons} style={"icon"}/></td>
                        <td>{wind_speed}</td>
                        <td>{precip}</td> 
                        </tr>
                    </tbody>
                </Table> 
            </div>          
        )
    }
}

export default CurrentWeather