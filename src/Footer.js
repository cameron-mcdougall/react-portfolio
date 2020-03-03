import React from 'react';
import './Footer.css';
import Nav from './Nav';
import { footerNavElements } from './Content';

const menuType = 'footer';

function Footer() {
	return(
		<footer>
			<Nav list={footerNavElements} type={menuType} />
		</footer>
	);
}

export default Footer;