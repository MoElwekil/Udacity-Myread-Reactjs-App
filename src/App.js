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
		screen: 'app',
		books: []
	}

	// Get all Books Data from the API
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	MoveShelfs = (book, shelf) => {
		BooksAPI.update(book, shelf)
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<div>
						<BooksGrid books={this.state.books} MoveShelfs={this.MoveShelfs} />
						<div className="open-search">
							<Link to='/search' onClick={() => this.setState({ screen: 'search' })}>Add a book</Link>
						</div>
					</div>
				)} />

				<Route path="/search" render={() => (
					<Search />
				)} />
			</div>
		)
	}
}

export default BooksApp
