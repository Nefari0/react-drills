// import React, { Component } from 'react'

// class DataArray extends Component {
//     constructor() {
//         super();

//         this.state = {
//             filterString: "", 
//             stuff: ['this','is','an','array','of','random','strings']
//         };
//     }

//     handleChange(filter) {
//         this.setState({ filterString: filter})
//     }

//     render() {
//         let dataDisplay = this.state.stuff.filter((element,index) => {
//             return element.includes(this.stuff.filterString); 
//         })
//         .map((element,index) => {
//             return <h2 key ={index}>{element} </h2>
//         });

//         return (
//             <div className="App">
//                 <input onChange={e => this.handleChange(e.target.value)} type="text" />
//                 {dataDisplay}
//             </div>
//         )
//     }
// }

// export default DataArray