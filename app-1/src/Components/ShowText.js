import React, { Component } from 'react'

class ShowText extends Component {
    
    constructor() {
        super();

        this.state = {
            strArr: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ message: val });
    }

    render () {
        return (
            <div className="App">
                <h4>Type Text</h4>
                <input onChange={e => this.handleChange(e.target.value)} type="text"/>

                <p>{this.state.message}</p>
            </div>
        )
    }
}



export default ShowText