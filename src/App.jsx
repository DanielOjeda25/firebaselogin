import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import {AuthProvider} from "./context/AuthContext";
function App() {
	return (
		<div className='h-screen flex bg-slate-900 text-white'>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
