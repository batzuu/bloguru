import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Examplelogenin from "./pages/examplelogedin/Examplelogenin";

export default function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Examplelogenin />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<Single />} />
					<Route path="/write" element={<Write />} />
					<Route path="/usersettings" element={<Settings />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</>
	);
}
