import './App.css'
import React, {Component} from 'react'
import data from './data'
import Header from './Components/Header'
import BookList from './Components/BookList'
import SearchBar from './Components/SearchBar'
import Shelf from './Components/Shelf'
import Images from './Components/Images'




class App extends Component{
  constructor(){
        super()


    this.state ={
      data: data,
      userInput: '',
      shelf: [],
    }
  
  this.handleAddTask = this.handleAddTask.bind(this)
  }

//   handleChange(val){
//     this.setState({message:val})
// }

  handleAddTask(){
    this.setState({
      shelf: [this.state.userInput],
        userInput: ''
    })
  }

    // addToShelf = (element, index) => {
    //   const {data} = this.state
    //   this.setState({
    //     data: key={index},item={element}
    //   })
    // }

    clearShelf = (index) => {
      const data = [...this.state.data]
      data.splice(index,1)
      this.setState({data})
    }

    reset = () => {
      this.userInput.value = "";
      this.userInput.value = "";
  }

  
  render(){
    let addToShelf = this.state.shelf.map((element, index) => {
      return <Shelf key={index} task={element}/>
    })
    // let mappedBooks = this.state.data.map((element,index) => {
    //   return <h2 key={index}>{element}</h2>
    // })
    return(
      <div className="App">
      <div className="BrandName">
      <Header />
        </div>
      <SearchBar reset={this.reset}/>
      <div className="BookShelf">
        <Shelf clearShelf={this.clearShelf}/>
        {/* <input
          value={this.state.userInput}
          placeholder="Enter Book Information"
          onChange={(e)=> this.handleInputChange(e.target.value)}
          /> */}
        </div>
          <div className="MyBooks"> 
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/31aX81I6vnL._SX351_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51RXaV0MGzL._SX397_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51iVcZUGuoL._SX408_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/41y31M-zcgL._SX400_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51qQTSKL2nL._SX430_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/41gxBZ8GNpL._SX403_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51t44mzlCaL._SX415_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51FSjiYDfpL._SX379_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/51xEzGTH6lL._SX402_BO1,204,203,200_.jpg"}/>
          <Images url={"https://images-na.ssl-images-amazon.com/images/I/41-6F+RDbIL._SX258_BO1,204,203,200_.jpg"}/>
          {this.state.data.map((element)=>{
            return <BookList mappedBooks={element}/>
        })}
      {/* <BookList className="library" value={this.state.data[this.state.value]} /> */}
    </div>
    </div>
    )
  }
}

export default App

