import React from "react";
import "./books.styles.scss";

const Book = (props) => {
	const { img, title, author } = props.book;
	return (
		<article className="book">
			<img src={img} alt="book" />
			<h3>{title}</h3>
			<p>{author}</p>
		</article>
	);
};

export default Book;
