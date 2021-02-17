// import React, { Component } from 'react'

// class HttpPost extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             userId : " ",
//             title : " ",
//             body : " "
//         }
//     }

//     // changHandler = event => {
//     //     this.setState({[event.target.nane] : })
//     // }
    
//     submitHandler = event => {
//         event.preventDefault()
//         console.log(this.state)
//     }

//     render() {
//         const { usesrId, title, body } =this.state
//         return (
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <div>
//                         <input 
//                             type="text" 
//                             name="userId" 
//                             value={userId} 
//                             // onChange={this.changHandler}
//                             />
//                     </div>
//                     <div>
//                         <input 
//                         type="text" 
//                         name="title" 
//                         value={userId} 
//                         // onChange={this.changHandler}
//                         />
//                     </div>
//                     <div>
//                         <input 
//                         type="text" 
//                         name="body" 
//                         value={userId} 
//                         // onChange={this.changHandler}
//                         />
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default HttpPost
