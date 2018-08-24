// import React, {Component}
import React, { Component } from 'react'

// Define BookDetails
class BookDetails extends Component {
	render() {
		//change this.props.book to books only
		const books = this.props.books
		return (
			<div>
				<ol className="books-grid">
					{books.map((book) =>
						<li key={book.id}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover" style={{
										width: 128, height: 193, backgroundImage:
											`url('${book.imageLinks.thumbnail}')`
									}}></div>
									<div className="book-shelf-changer">
										<select onChange={(event) => this.props.MoveShelfs((
											this.props.book, event.target.value
										))}
											value={book.shelf}
										>
											<option value="move" disabled>Move to...</option>
											<option value="currentlyReading">Currently Reading</option>
											<option value="wantToRead">Want to Read</option>
											<option value="read">Read</option>
											<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								<div className="book-authors">{book.authors}</div>
							</div>
						</li>
					)}
				</ol>
			</div>
		)
	}
}

// Export
export default BookDetails