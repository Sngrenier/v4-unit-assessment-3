import React, {Component} from 'react'

export default class Images extends Component {
    render() {
        return (
            <div className="images">
                <img src={this.props.url} width={100} height={120} mode="contain" />
            </div>
        )
    }
}