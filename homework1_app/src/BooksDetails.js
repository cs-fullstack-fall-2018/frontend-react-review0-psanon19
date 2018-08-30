import React, {Component} from 'react'

class BooksDetails extends Component{
    render(){
        var allBooksarray = this.props.booksArray.map(
            forEachItem => {
                return(
                    <div>
                        <p>You ordered the {forEachItem.genre} {forEachItem.bookTitle} .</p>
                    </div>
                )
            }
        );

        return(
            <div className="BookList">
                <h1>{allBooksarray}</h1>
            </div>
        );
    }
}

export default BooksDetails;