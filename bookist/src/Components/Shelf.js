import React, {Component} from 'react'

export default class Shelf extends Component{
    render(){
        return(
        <div className="myShelf">
            <h2>Shelf</h2>
            <div className="shelf-items">
            <p>{this.props.task}</p>
            <button onClick={()=> this.props.clearShelf(this.props.index)}>Clear Shelf</button>
            </div>
        </div>
        )
    }
}