import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
	const {user} = useAuth();
	return <div>welcome {user.email}</div>;
};

export default Home;
