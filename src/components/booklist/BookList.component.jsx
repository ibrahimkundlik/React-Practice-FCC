import React from "react";
import { books } from "./books.data";
import Book from "./Books.component";
import "./books.styles.scss";

function BookList() {
	return (
		<div className="main-cont">
			<h1>Book📚Store</h1>
			<section className="booklist">
				{books.map((book, i) => (
					<Book key={i} book={book} />
				))}
			</section>
		</div>
	);
}

export default BookList;
