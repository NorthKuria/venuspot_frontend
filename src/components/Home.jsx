import React, { Component } from "react";
import { MainNav } from "./MainNav";
// import { MainFooter } from "./MainFooter";

export default class Home extends Component {
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
						<div className="subtitle p-4">
							<div className="text-3xl text-white mt-12 leading-10">Find unique spots to visit and <br />experiences to have.</div>
						</div>
					</div>
				</div>
				{/* <MainFooter /> */}
			</div>
		);
	}
}