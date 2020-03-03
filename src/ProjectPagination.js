import React from 'react';
import { Link } from 'react-router-dom';
//import './ItemPagination.css';
import { portfolioElements } from './Content.js';

function ProjectPagination(props) {

	let index = Number(props.index);
	const prevIndex = index - 1;
	const nextIndex = index + 1;

	let prev = index === 0 ? null : <Link to={portfolioElements[prevIndex].id}>&#8249; Prev</Link>;
	let next = index === (portfolioElements.length - 1) ? null : <Link to={portfolioElements[nextIndex].id}>Next &#8250;</Link>;

	return (
		<div className='pagination'>

			{prev}
			{next}
		</div>
	);

}

export default ProjectPagination;