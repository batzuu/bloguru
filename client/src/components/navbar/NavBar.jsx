import pic from '../../assets/tss.jpg';
import './navbar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function NavBarb() {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)
	const closedMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<Link to='/' className='navbar-logo'>
					Bloguru
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<Link to='/' className='nav-links' onClick={closedMobileMenu}>HOME</Link>
					</li>
					<li className="nav-item">
						<Link to='/' className='nav-links' onClick={closedMobileMenu}>ABOUT</Link>
					</li>
					<li className="nav-item">
						<Link to='/' className='nav-links' onClick={closedMobileMenu}>WRITE</Link>
					</li>
					<li className="nav-item">
						<Link to='/' className='nav-links' onClick={closedMobileMenu}>CONTACT</Link>
					</li>
					<li className="nav-item">
						<Link to='/' className='nav-links' onClick={closedMobileMenu}>LOGOUT</Link>
					</li>


				</ul>
			</nav>
		</>
	)
}

