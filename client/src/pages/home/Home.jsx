import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import Examplelogin from "../../components/examplelogin/Examplelogin";

export default function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Examplelogin />
				<SideBar />
			</div>
		</>
	);
}
