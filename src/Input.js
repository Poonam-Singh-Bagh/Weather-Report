import React, { Component } from 'react'

class Input extends Component {

    constructor() {
        super()
        this.state = {
             disable : true,
             posts: [],
             errormsg : " "
        }
    }
    
    onChangeHandler = (event) => {
        if (event.target.value.length >= 1) {
            this.setState({
                disable : false    
            })
        }
        else {
            this.setState({
                disable : true 
            })
        }

        const data = event.target.value;
        console.log(data)
        // const value = Object.assign({}, this.state.disable)
        // console.log(value)
        
    }

    // render() {
    //     return (
    //         <div>
    //             <div class="input-group mb-3 input">
    //                 <div class=" ">
    //                     <input type="text" class="form-control" placeholder="enter country" aria-label="" aria-describedby="basic-addon1" onChange={this.onChangeHandler} />
    //                 </div>
    //                 <button class="btn btn-outline-secondary btn" type="button" disabled={this.state.disable}>Submit</button>
    //             </div>
    //         </div>
    //     );
    // }
    render() {
        const { posts, errormsg } = this.state
        console.log(posts,'kkkkkkkkkkk')
        return (
            <div>
                <div class="input-group mb-3 input">
                    <div class=" ">
                        <input type="text" class="form-control" placeholder="enter country" aria-label="" aria-describedby="basic-addon1" onChange={this.onChangeHandler} />
                    </div>
                    <button class="btn btn-outline-secondary btn" type="button" disabled={this.state.disabled}>Submit</button>
                </div>
                <div>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    // posts.map(post => <div>{post.name}</div>) :
                    null
                }
                {errormsg ? <div>{errormsg}</div> : null}
                </div>
            </div>
        );
    }
}

export default Input


