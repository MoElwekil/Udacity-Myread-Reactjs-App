// import React, {Component}
import React, { Component } from 'react'
// import BookDetails
import BookDetails from './BookDetails'

// Define BooksGrid
class BooksGrid extends Component {
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
						MoveShelfs={this.props.MoveShelfs}
					/>

					<BookDetails
						books={this.props.books.filter((book) => (book.shelf === 'wantToRead'))}
						title='Want To Read'
						MoveShelfs={this.props.MoveShelfs}
					/>

					<BookDetails
						books={this.props.books.filter((book) => (book.shelf === 'read'))}
						title='Read'
						MoveShelfs={this.props.MoveShelfs}
					/>

				</div>
			</div>

		)
	}
}

// export
export default BooksGrid