import './sidebar.css'

export default function SideBar() {
	// Note from batzu: 
	// dont use rfc snippet as it inserts two spaces intead of a tab or
	// modify the snippet to contain tabs(/t) insteat of space
	// also all lowercase css names sidebar.css not SideBar.css
	// B))
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT US</span>
				<img src="https://i.imgur.com/DhL6AnL.jpeg" alt="google se foto" />
				<p>
					Aur mere doston kaisa chal raha h project? Respond to this line and sign whoever edited it. -Sutap
					<br></br>
					Changa Ji - Utkarsh
					<br />
					Acknowledged -Sutap <br />
					Report to P9 immediately
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook-square"></i>
					<i className="sidebarIcon fa-brands fa-twitter-square"></i>
					<i className="sidebarIcon fa-brands fa-linkedin"></i>
					<i className="sidebarIcon fa-brands fa-instagram-square"></i>
				</div>
			</div>
		</div>
	)
}
