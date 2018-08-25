// import React, {Component}
import React, { Component } from 'react'
// import BookDetails
import BookDetails from './BookDetails'

import * as BooksAPI from './BooksAPI'

// Define BooksGrid
class BooksGrid extends Component {
	changeBookShelf = (bookId: string, e: any) => {
		let books = this.props.books;
		const book = books.filter(t => t.id === bookId)[0];
		book.shelf = e.target.value;
		BooksAPI.update(book, e.target.value).then(response => {
			this.setState({
				books
			});
		});
	};
	render() {
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>


					<BookDetails
						books={this.props.books.filter((book) => (book.shelf === 'currentlyReading'))}
						title='Currently Reading'
						onChangeShelf={this.changeBookShelf}
					/>

					<BookDetails
						books={this.props.books.filter((book) => (book.shelf === 'wantToRead'))}
						title='Want To Read'
						onChangeShelf={this.changeBookShelf}
					/>

					<BookDetails
						books={this.props.books.filter((book) => (book.shelf === 'read'))}
						title='Read'
						onChangeShelf={this.changeBookShelf}
					/>
				</div>
			</div>

		)
	}
}

// export
export default BooksGrid