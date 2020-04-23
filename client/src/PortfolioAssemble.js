import React from 'react';
import { Route } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import ProjectDisplay from './ProjectDisplay';
import { portfolioElements } from './Content';


function PortfolioAssemble() {

	const shuffle = array => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i

			// Swap elements array[i] and array[j] (using destructing assignmnet)
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	let shuffledPortfolio = shuffle(portfolioElements);

	const portfolioLinkAssembly = Object.keys(shuffledPortfolio).map(key => 
    	<PortfolioItem key={key} item={shuffledPortfolio[key]} link={key} />
	)

	const portfolioItemAssembly = Object.keys(shuffledPortfolio).map(element =>
		<Route key={element} path={shuffledPortfolio[element].id} render={(props) => <ProjectDisplay {...props} position={element} />} />
	)

	return (
		<React.Fragment>
			{portfolioLinkAssembly}
			{portfolioItemAssembly}
		</React.Fragment>
	);

}

export default PortfolioAssemble;