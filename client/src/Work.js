import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Work.css';
import PortfolioAssemble from './PortfolioAssemble';


function Work() {

	return(
		<section className='portfolio-container'>
			<Router>
				<PortfolioAssemble />
			</Router>
		</section>
	);

}

export default Work;