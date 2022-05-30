import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import Examplelogenin from "../examplelogedin/Examplelogenin";
import "./home.css";

export default function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<Examplelogenin />
				<Posts />
				<SideBar />
			</div>
		</>
	);
}
