import React, { useState, Component } from "react";
import { Link } from "react-router-dom";

import { MainNav } from "./MainNav";
// import { MainFooter } from "./MainFooter";

export default class Signup extends Component {
	render() {

		const myStyle={
			backgroundImage: "url(/bg.jpg)",
			height:'100vh',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		};

		return (
			<div>
				<div className="main-content">
					<div className="background-img" style={myStyle} >
						<MainNav />
						<div className="subtitle p-4 flex">
							<div className="text-3xl text-white mt-12 leading-10">Find unique spots to visit and <br />experiences to have.</div>
							<div className="bg-white shadow-md border border-gray-200 rounded-lg w-3/12 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ml-36 mt-12">
								<form className="space-y-6" action="#">
									<h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to VenuSpot</h3>
									<div>
										<label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your username</label>
										<input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required="" />
									</div>
									<div>
										<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
										<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
									</div>
									<div>
										<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
										<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" /> 
									</div>
											
									<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create your account</button>
									<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
										Already have an account? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <MainFooter /> */}
			</div>
		);
	}
}