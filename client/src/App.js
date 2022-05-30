import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

export default function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<Single />} />
					<Route path="/write" element={<Write />} />
				</Routes>
			</Router>
		</>
	);
}

