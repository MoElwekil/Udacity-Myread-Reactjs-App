import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'

// import BooksGrid
import BooksGrid from './BooksGrid'
// import Search
import Search from './Search'
// import Route from React Router
// import React Router Dom as Link
import { Route, Link } from 'react-router-dom'


class BooksApp extends React.Component {
	state = {
		// Screen remove and now we use Route
		//screen: 'app',
		books: [],
		query: ''

	}

	// Get all Books Data from the API
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	//Update the Query
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<div>
						<BooksGrid books={this.state.books} />
						<div className="open-search">
							<Link to='/search' onClick={() => this.setState({ screen: 'search' })}>Add a book</Link>
						</div>
					</div>
				)} />

				<Route path="/search" render={() => (
					<Search
						query={this.state.query}
						updateQuery={this.updateQuery}
						books={this.state.books}
					/>
				)} />
			</div>
		)
	}
}

export default BooksApp
