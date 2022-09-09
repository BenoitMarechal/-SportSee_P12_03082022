import React from 'react';
import './header.scss';
import logo from '../../Assets/icons/logo.png';
import { NavLink } from 'react-router-dom';
/**Header React component returns page's header
 *@public
 */
const Header = () => {
	return (
		<header className='white-on-black'>
			<nav>
				<img src={logo} alt='SportSee logo' />
				<NavLink className={'navLink'} to='/'>
					Accueil
				</NavLink>
				<NavLink className={'navLink'} to='/'>
					Profil
				</NavLink>
				<NavLink className={'navLink'} to='/'>
					Réglages
				</NavLink>
				<NavLink className={'navLink'} to='/'>
					Communauté
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
