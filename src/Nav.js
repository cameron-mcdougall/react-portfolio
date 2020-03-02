import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {

	const content = props.list;
	const type = props.type;

	let navAssemble = content.map(element => {
		return (
			<li key={element.order}>
				<Link to={element.url}>
					{element.label}
				</Link>
			</li>
		);
	});

	return (
		<ul className={type + '-nav'}>
			{navAssemble}
		</ul>
	);

}

export default Nav;