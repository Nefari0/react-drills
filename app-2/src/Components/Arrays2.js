import React, { Component } from 'react'

class Arrays2 extends Component {
    constructor() {
        super();

        this.state = {
            foods: ['food1','food2', 'apples','pears','plums']
            
        };
    }
    render() {
        let foodsToDisplay = this.state.foods.map((element,index) => {
            return <h2 key={index}>{element}</h2>
        });

        return <div className="App">{foodsToDisplay}</div>
    }
}

export default Arrays2