import React from 'react';
import './PortfolioItem.css';
import { Link } from 'react-router-dom';


function PortfolioItem(props) {
	const typeSlug = props.item.type.split(' ').join('-').toLowerCase();

	const backgroundStyle = {
		backgroundImage: `url(${props.item.images[0]})`,
		backgroundRepeat: `no-repeat`,
		backgroundOrigin: `center`,
		backgroundPosition: `center`,
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