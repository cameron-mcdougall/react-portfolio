import React from 'react';
import './PortfolioItem.css';
import { Link } from 'react-router-dom';


function PortfolioItem(props) {
	const typeSlug = props.item.type.split(' ').join('-').toLowerCase();

	const backgroundStyle = {
		background: `url(${props.item.images[0]}) no-repeat center center`,
		backgroundSize: `cover`
	};

	return(
		<article className={`portfolio-item ${typeSlug}`}>
			<div className='portfolio-item-container'>
				<Link to={props.item.id}>
					<div className='image-wrap' style={backgroundStyle} />
					<h2>{props.item.title}</h2>
				</Link>
			</div>
		</article>
	);

}

export default PortfolioItem;