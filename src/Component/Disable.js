import React, { Component } from 'react'
import { Table, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios'
import CurrentWeatherButton from './CurrentWeatherButton'
import history from "./history";
import Image from './Image';

class Disable extends Component {

    constructor(props){
        super(props) 
        this.state  = {
            disabled : true,
            value : " ",
            errormsg : "",
            countries: []
        } 
    }

    onChangeHandler = (event) => {
        this.setState({value: event.target.value})
        if (event.target.value.length >= 1) {
            this.setState ({
                disabled : false
            })
        }
        else {
            this.setState({
                disabled : true
            })
        }
    }

    onClickHandler = () => {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.value}`)
        .then(res => {
            this.setState({countries : res.data})
        })
        .catch(err => {
            this.setState({errormsg : "Page not found"})
            console.log(err)
        })
    }

    CurrentWeather = (f) => {
        axios.get(`http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query=${f.capital}`)
        .then(res => {
            this.setState({details : res.data.current})
            history.push({ pathname: "/currentweather", errormsg: this.state.errormsg, userData: res.data  })
        })
        .catch(err => {
            this.setState({errormsg : "Page not found"})
            console.log(err)
        })
    }

    render() {
        const { countries, errormsg } = this.state
        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <Input type="text" placeholder="Enter Country" onChange={this.onChangeHandler} />
                    </FormGroup>
                    <Button className="btn" disabled={this.state.disabled} onClick={this.onClickHandler}>Submit</Button>
                </Form>
                <br />
                {
                    countries.length ?
                    (<div>
                    <Table bordered striped> 
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Population</th>
                            <th>latlng</th>
                            <th>Flag</th>
                            <th>Weather report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countries.length ?
                                countries.map((country, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{country.name}</td>
                                            <td>{country.capital}</td>
                                            <td>{country.population}</td>
                                            <td>{country.latlng}</td>
                                            <td><Image image={country.flag} style={"flag"}/></td>
                                            <td><CurrentWeatherButton button={() => this.CurrentWeather(country)} color="secondary"/></td>
                                        </tr>
                                    )
                                }) :
                                null            
                            }
                        </tbody>            
                    </Table> 
                    {errormsg ? <div>{errormsg}</div> : null}
                    </div>) :
                    null            
                }           
            </div>
        )
    }
}           

export default Disable          