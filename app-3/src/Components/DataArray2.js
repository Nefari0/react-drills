import React, { Component } from 'react'

class DataArray2 extends Component {
    constructor() {
        super();

        this.state = {
            filterString: "",
            items: ['lots','of','random','words','to','read']
        };
    }

    handleChange(filter) {
        this.setState({ filterString : filter });
    }

    render() {
        let itemsToDisplay = this.state.items.filter((element, index) => {
            return element.includes(this.state.filterString);
        })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>;
        });

        return (
            <div className="App">
                <input onChange={e => this.handleChange(e.target.value)} type="text"/>
                {itemsToDisplay}
            </div>
        )
    }
}

export default DataArray2