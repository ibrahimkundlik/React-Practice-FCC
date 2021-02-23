import React, { useState, useEffect } from "react";
import "./useEffect.styles.scss";
import Users from "./Users.component";

const UseEffect = () => {
	// eg1
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (value > 0) {
			document.title = "Notification 🔸 " + value;
		}
	}, [value]);

	// eg2
	const [size, setSize] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", updateSize);
		return () => {
			window.removeEventListener("resize", updateSize);
		};
	});
	const updateSize = () => {
		setSize(window.innerWidth);
	};

	// eg3
	const [users, setUsers] = useState("Loading...");
	useEffect(() => {
		fetch("https://api.github.com/users")
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					setUsers("API Error: " + data.message);
				} else {
					setUsers(data);
				}
			})
			.catch((error) => {
				setUsers(error.message);
			});
	}, []);

	return (
		<>
			<div className="main">
				<h2>useEffect example 1</h2>
				<button onClick={() => setValue(value + 1)}>
					Change Document Title
				</button>
				<h3>🔸 Notification: {value}</h3>
			</div>

			<div className="main">
				<h2>useEffect example 2</h2>
				<h3>💻 Window size: {size}px</h3>
			</div>

			<div className="users-cont">
				<h2>useEffect example 3</h2>
				<h3>🧩 Fetch data</h3>
				<section className="users">
					{typeof users === "string" ? (
						<h3>{users}</h3>
					) : (
						<Users users={users} />
					)}
				</section>
			</div>
		</>
	);
};

export default UseEffect;
