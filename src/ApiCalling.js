 import React, { Component } from 'react'

class ApiCalling extends Component {

    constructor() {
        super()
        this.state = {
            user: null
        }
    }
    
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2").then((res) => {
            res.json().then((result) => {
                console.log(result)
                // console.warn(result[1]['name'])
                // for (var i=0; i < result.length; i++) {
                //     console.log(result[i]['name'])
                //     console.log(result[i]['flag'])
                //     if (this.user in result[i]['name'] === true) {
                //         console.log(result[i]['name'])
                //     }
                // }
                
            })
        })
    }

    render() {
        return (
            <div>
               {/* poonam  */}
            </div>
        )
    }
}

export default ApiCalling
