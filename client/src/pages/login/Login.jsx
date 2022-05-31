import { useRef, userState, useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import './login.css';

const LOGIN_URL = '/users/login';

export default function Login() {
	const { setAuth } = useContext(AuthContext);
	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, pwd]);

	const handleSubmit = async (e) => {
		// Preventing default behaviour to avoid reloading the page
		e.preventDefault();

		try {
			const password = pwd;
			console.log(JSON.stringify({ email, password }));
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ email, password }),
				{
					headers: { 'Content-Type': 'application/json; charset=UTF-8' },
					type: 'application/json',
				}
			);
			console.log(JSON.stringify(response?.data));
			const accessToken = response?.data?.accessToken;
			setAuth({ email, accessToken });
			setEmail('');
			setPwd('');
		} catch (err) {
			console.log(err);
			if (!err?.response) {
				setErrMsg('No server response');
			} else if (err.response?.status === 400) {
				setErrMsg('Error in log in');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			<section className="login">
				<p
					ref={errRef}
					className={errMsg ? 'errmsg' : 'offscreen'}
					aria-live="assertive"
				>
					{errMsg}
				</p>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit} className="loginForm">
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						ref={emailRef}
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
						className="loginInput"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPwd(e.target.value)}
						value={pwd}
						required
						className="loginInput"
					/>
					<button className="loginButton">LogIn</button>
				</form>
			</section>
		</>
	);
	// return (
	// 	<div className="login">
	// 		<span className="loginTitle">Login</span>
	// 		<form className="loginForm">
	// 			<label>Email</label>
	// 			<input
	// 				className="loginInput"
	// 				type="email"
	// 				placeholder="Enter your email..."
	// 			/>
	// 			<label>Password</label>
	// 			<input
	// 				className="loginInput"
	// 				type="password"
	// 				placeholder="Enter your password..."
	// 			/>
	// 			<button className="loginButton">Login</button>
	// 		</form>
	// 		<button className="loginRegisterButton">Register</button>
	// 	</div>
	// );
}
