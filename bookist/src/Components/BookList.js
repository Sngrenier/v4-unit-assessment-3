// import React, {Component} from 'react'

// export default class BookList extends Component{
//     }

const BookList = (props) => {
    console.log(props)

    return(
        <div className="library">
            <div className="book-grid">
            <div className= "book-img">
            <img src={props.mappedBooks.url} width={100} height={120} mode="contain"  />
            </div>
            <div><h5>{`${props.mappedBooks.title}, by ${props.mappedBooks.author}`}</h5></div>
            </div>
        </div>
    )
}
export default BookList





