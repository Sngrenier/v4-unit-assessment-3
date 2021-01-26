import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()

        this.state={
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({message:val})
    }

    handleClear(val){
        this.setState({message: ''})
    }

    render(){
        return(
        <div className="search-bar">
            <div className="search-buttons">
            <button className="input-btn">
             <input
             value={this.state.userInput}
             onChange={(e)=> this.handleChange(e.target.value)}
             />
            </button>
            <div>
            <button className="clear-btn" onClick={this.handleAddTask}>search</button>
            <button className="clear-btn" onClick={this.handleClear}>clear search</button>
            </div>
            </div>
         </div>

        )
    }
}
export default SearchBar