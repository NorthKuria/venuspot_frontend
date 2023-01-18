import React from "react";
import { Link } from "react-router-dom";


export const MainNav = () => {
	return (
		<div className="flex justify-between p-4">
			<span className="main-title homepage">
				<img src="/logo.png"  width={130} height={130} />
			</span>
			<div className="flex text-lg">
				<Link to="/login" className="link user-btn login-btn">
					Log In
				</Link>
				<Link to="/signup" className="ml-6">
					Sign Up
				</Link>
			</div>
		</div>
	);
};