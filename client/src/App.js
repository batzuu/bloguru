import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Login from "./pages/login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";

export default function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<Single />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}
