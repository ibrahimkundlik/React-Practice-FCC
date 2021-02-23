import React, { useState } from "react";
import "./useState.styles.scss";

const data = [
	{ name: "John", id: 1 },
	{ name: "Andrei", id: 2 },
	{ name: "Binni", id: 3 },
	{ name: "Brad", id: 4 },
	{ name: "Dev", id: 5 },
];

function UseState() {
	// eg1
	const [title, setTitle] = useState("Hello World 🌎");
	const handleText = () => {
		if (title === "Hello World 🌎") {
			setTitle("Hello React 🚀");
		} else {
			setTitle("Hello World 🌎");
		}
	};

	// eg2
	const [people, setPeople] = useState(data);
	const handlePeople = (del) => {
		const filtered = people.filter(({ id }) => id !== del);
		setPeople(filtered);
	};

	// eg3
	const [user, setUser] = useState({
		name: "John",
		age: 21,
		message: "random message 📑",
	});
	const handleUser = () => {
		setUser((prevState) => {
			return { ...user, message: prevState.message + " 🚀" };
		});
	};

	// eg4
	const [value, setValue] = useState(0);
	const handleValue = (ret) => {
		ret === 0 ? setValue(0) : setValue(value + ret);
	};

	return (
		<React.Fragment>
			<div className="main">
				<h2>useState example 1</h2>
				<button onClick={handleText}>Change Title</button>
				<h3>{title}</h3>
			</div>

			<div className="main">
				<h2>useState example 2</h2>
				{people.map(({ name, id }) => {
					return (
						<div key={id} className="people">
							<p>{name}</p>
							<button onClick={() => handlePeople(id)}>❌</button>
						</div>
					);
				})}
			</div>

			<div className="main">
				<h2>useState example 3</h2>
				<button onClick={handleUser}>Change Message</button>
				<h4>{user.name} 👦🏽</h4>
				<h4>{user.age} ⏫</h4>
				<h4>{user.message}</h4>
			</div>

			<div className="main">
				<h2>useState example 4</h2>
				<button onClick={() => handleValue(1)}>➕</button>
				<button onClick={() => handleValue(0)}>🔁 Reset 🔁</button>
				<button
					onClick={() => {
						if (value > 0) handleValue(-1);
					}}
				>
					➖
				</button>
				<h3>#️⃣ {value} #️⃣</h3>
			</div>
		</React.Fragment>
	);
}

export default UseState;
