import React from 'react';
import './header.scss';
import logo from '../../Assets/icons/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='white-on-black'>
			<nav>
				<img src={logo} alt='SportSee logo' />
				<NavLink to='/'>Accueil</NavLink>
				<NavLink to='/profile'>Profil</NavLink>
				<NavLink to='/'>Réglages</NavLink>
				<NavLink to='/'>Communauté</NavLink>
			</nav>
		</header>
	);
};

export default Header;
