import React, {Component} from 'react'

export default class Image extends Component {
    render() {
        return(
            <div>
                <h2>This is the TEXT</h2>
                <img src={this.props.url} />
                <div>Error 599</div>
            </div>
        )
    }
}