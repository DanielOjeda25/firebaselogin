import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const { login } = useAuth();
	const handleChange = ({ target: { name, value } }) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('')
		try {
			await login(userInfo.email, userInfo.password);
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="flex flex-col justify-center mx-auto w-full items-center h-screen">
			{error && <p className="text-xl">{error}</p>}
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md w-1/3 rounded px-8 pt-6 pb-8 mb-4"
			>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						placeholder="**********"
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
