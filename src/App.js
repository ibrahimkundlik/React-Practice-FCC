import React, { useState } from "react";
import BookList from "./components/booklist/BookList.component";
import UseEffect from "./components/useEffect/UseEffect.component";
import UseState from "./components/useState/UseState.component";
import "./index.styles.scss";

function App() {
	const [toggle, setToggle] = useState([false, false, false]);

	return (
		<>
			<div className="toggle-cont">
				<button
					onClick={() => {
						setToggle([true, false, false]);
					}}
				>
					Book Store
				</button>
				<button
					onClick={() => {
						setToggle([false, true, false]);
					}}
				>
					UseState
				</button>
				<button
					onClick={() => {
						setToggle([false, false, true]);
					}}
				>
					UseEffect
				</button>
			</div>
			{toggle[0] && <BookList />}
			{toggle[1] && <UseState />}
			{toggle[2] && <UseEffect />}
		</>
	);
}

export default App;
