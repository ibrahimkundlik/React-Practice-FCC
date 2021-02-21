import React from "react";

const Users = (props) => {
	return (
		<>
			{props.users.map(({ login, avatar_url, id }) => (
				<div key={id} className="user">
					<div className="avatar-cont">
						<img src={avatar_url} alt="avatar" />
					</div>
					<h3>{login}</h3>
				</div>
			))}
		</>
	);
};

export default Users;
