import React, {Component} from 'react'
import BooksDetails from "./BooksDetails";

class BookForm extends Component{
    constructor(props) {
        super(props);

        this.state = {books:[{
            genre: "Horror",
            bookTitle: "Silence of the Lambs"}],
            genre: "",
            bookTitle: ""
        }
    }

    genreChangeFunction = (event) => {
        this.setState({genre: event.target.value})
    };

    bookTitleChangeFunction = (event) => {
        this.setState({bookTitle: event.target.value})
    };

    submitFunction = (event) =>
    {
        let newCollection = {genre: this.state.genre, bookTitle: this.state.bookTitle};
        this.state.books.push(newCollection);
        this.setState({books:this.state.books});

        event.preventDefault();
    };


    render()
    {
        return(
            <div className="BookForm">
                <h1>Type of Books:</h1>
                <form onSubmit={this.submitFunction}>
                    <label>Genre:
                        <input type="text" value={this.state.genre} onChange={this.genreChangeFunction}/></label>
                    <br/>
                    <label>Book Title:
                        <input type="text" value={this.state.bookTitle} onChange={this.bookTitleChangeFunction}/></label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <BooksDetails booksArray={this.state.books}/>
            </div>
        );
    }
}
export default BookForm;