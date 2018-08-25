// import React, {Component}
import React, { Component } from 'react'
// import Link from React Route Dom
import { Link } from 'react-router-dom'
// import escapeRegExp
import escapeRegExp from 'escape-string-regexp'
// import SortBy
import SortBy from 'sort-by'

// Define Search
class Search extends Component {
	render() {
		//change this.props.book to books only
		const books = this.props.books
		// change this.props.query to query only
		const query = this.props.query
		// Show Search Result
		let showSearchResult
		if (this.props.query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showSearchResult = books.filter((book) => match.test(book.title))
		} else {
			showSearchResult = books
		}

		// Sort the Result by book Title
		showSearchResult.sort(SortBy('title'))

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='../' className="close-search" >Close</Link>
					<div className="search-books-input-wrapper">
						{/*
												NOTES: The search from BooksAPI is limited to a particular set of search terms.
												You can find these search terms here:
												https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

												However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
												you don't find a specific author or title. Every search is limited by search terms.
										*/}
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.props.query}
							onChange={(event) => this.props.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{showSearchResult.map((book) =>
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{
											width: 128, height: 193, backgroundImage:
												`url('${book.imageLinks.thumbnail}')`
										}}></div>
										<div className="book-shelf-changer">
											<select onChange={(event) => this.props.MoveShelfs(
												this.props.book, event.target.value
											)}
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
			</div>
		)
	}
}

// Export
export default Search