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
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">

									<BookDetails
										books={this.props.books}
										MoveShelfs={this.props.MoveShelfs}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		)
	}
}

// export
export default BooksGrid