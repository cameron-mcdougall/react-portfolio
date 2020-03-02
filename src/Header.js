import React from 'react';
import './Header.css';
import Nav from './Nav'
import { mainNavElements } from './Content'

const menuType = 'header';

function Header() {
	return(
		<header>
			<h1>TEST</h1>
			<Nav list={mainNavElements} type={menuType} />
		</header>
	);
}

export default Header;