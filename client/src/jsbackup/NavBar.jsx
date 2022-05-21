import './navbar.css';
import pic from '../../assets/tss.jpg';
import Button from './button/Button';
export default function NavBar () {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-square"></i>
				<i className="topIcon fa-brands fa-twitter-square"></i>
				<i className="topIcon fa-brands fa-linkedin"></i>
				<i className="topIcon fa-brands fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img className="topImg" src={pic} alt="img not found" />
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	)
}
