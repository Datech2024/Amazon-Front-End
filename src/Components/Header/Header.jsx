import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
	const [{ user, basket }, dispatch] = useContext(DataContext);

	// console.log()

	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);

	return (
		<section className={classes.fixed}>
			<section>
				<div className={classes.header_container}>
					{/* Logo section */}
					<div className={classes.logo_container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						{/* Delivery */}
						<div className={classes.delivery}>
							<span>
								<SlLocationPin />
							</span>

							<div>
								<p>Deliver to</p>
								<span>Silver Spring</span>
							</div>
						</div>
					</div>
					{/* search section */}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search Amazon" />
						<BsSearch size={38} />
					</div>
					{/* other section*/}
					<div className={classes.order_container}>
						<Link to="" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/640px-Flag_of_the_United_States_%281912-1959%29.svg.png"
								alt=""
							/>
							<select name="" id="">
								<option value="">EN</option>
							</select>
						</Link>
						<Link to={!user && "/auth"} className={classes.account}>
							<div>
								{user ? (
									<>
										<p> Hello {user?.email?.split("@")[0]} </p>
										<span onClick={() => auth.signOut()}> Sign Out</span>
									</>
								) : (
									<>
										<p>Hello,sign in</p>
										<span>Account & Lists</span>
									</>
								)}
							</div>
						</Link>
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>{totalItem}</span>
						</Link>
					</div>
				</div>
			</section>
			<Lowerheader />
		</section>
	);
}

export default Header;
