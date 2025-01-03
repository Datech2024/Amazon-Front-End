import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithEmailLink,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState({
		signIn: false,
		signUp: false,
	});
	const [{ user }, dispatch] = useContext(DataContext);
	const navigate = useNavigate();

	// console.log(user);
	const authHandler = async (e) => {
		e.preventDefault(), console.log(e.target.name);
		if (e.target.name === "signin") {
			setLoading({ ...loading, signIn: true });
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signIn: false });
					navigate("/");
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signIn: false });
					
				});
		} else {
			setLoading({ ...loading, signUp: true });
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signUp: false });
					navigate("/");
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signUp: false });
				});
		}
	};

	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to="/">
				<img src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
			</Link>

			{/* form */}
			<div className={classes.login__container}>
				<h1>Sign In</h1>
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submit"
						name="signin"
						onClick={authHandler}
						className={classes.login__signInButton}
					>
						{loading.signIn ? (
							<ClipLoader color="#52d4a4" size={20} />
						) : (
							"Sign In"
						)}
					</button>
				</form>
				<p>
					By signing-in you agree to AMAZON FAKE CLONE Conditions of use & sale.
					Please see our privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				{/* Create account btn */}
				<button
					type="submit"
					name="signup"
					onClick={authHandler}
					className={classes.login__registerButton}
				>
					{loading.signUp ? (
						<ClipLoader color="#52d4a4" size={20} datatype="center" />
					) : (
						"Create your Amazon Account"
					)}
				</button>
				{error && (
					<small style={{ paddingTop: "5px", marginTop: "5px", color: "red" }}>
						{error}
					</small>
				)}
			</div>
		</section>
	);
}

export default Auth;
