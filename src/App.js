import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'

// import BooksGrid
import BooksGrid from './BooksGrid'

class BooksApp extends React.Component {
	state = {
		showSearchPage: false,
		books: []
	}

	// Get all Books Data from the API
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	MoveShelfs = (book, shelf) => {
		BooksAPI.update(book, shelf);
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<div className="search-books">
						<div className="search-books-bar">
							<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
							<div className="search-books-input-wrapper">
								{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
								<input type="text" placeholder="Search by title or author" />

							</div>
						</div>
						<div className="search-books-results">
							<ol className="books-grid"></ol>
						</div>
					</div>
				) : (
						<div>
							<BooksGrid books={this.state.books} MoveShelfs={this.MoveShelfs} />
						</div>
					)}
			</div>
		)
	}
}

export default BooksApp
