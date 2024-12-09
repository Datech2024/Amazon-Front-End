import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function Lowerheader() {
	return (
		<div className={classes.lower_container}>
			<ul>
				<li>
					<AiOutlineMenu />
					<p>All</p>
				</li>
				<li>Medical Care</li>
				<li>Best Sellers</li>
				<li>Prime</li>
				<li>Amazon Basics</li>
				<li>Groceries</li>
				<li>New Release</li>
				<li>Music</li>
				<li>Custemer Service</li>
				<li>Amazon Home</li>
				<li>Registry</li>
				<li>Pharmacy</li>
			</ul>
		</div>
	);
}

export default Lowerheader;
