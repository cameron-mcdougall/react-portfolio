import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import ProjectDisplay from './ProjectDisplay';
import { portfolioElements } from './Content';


function PortfolioAssemble() {

	const portfolioLinkAssembly = Object.keys(portfolioElements).map(key => 
    	<PortfolioItem key={key} item={portfolioElements[key]} link={key} />
	)

	const portfolioItemAssembly = Object.keys(portfolioElements).map(element =>
		//<Route key={element} path={portfolioElements[element].id} render={(props) => <ItemDisplay {...props} item={portfolioElements[element]} />} />
		<Route key={element} path={portfolioElements[element].id} render={(props) => <ProjectDisplay {...props} position={element} />} />
	)

	return (
		<React.Fragment>
			{portfolioLinkAssembly}
			{portfolioItemAssembly}
		</React.Fragment>
	);

}

export default PortfolioAssemble;