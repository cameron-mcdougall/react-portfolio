import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDisplay.css';
import ProjectPagination from './ProjectPagination';
import { portfolioElements } from './Content';


class ProjectDisplay extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			index: props.position
		};
	}

	componentDidMount() {
		document.body.classList.add('project-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('project-open');
	}

	render() {

		let item = portfolioElements[this.state.index];

		const imageDisplay = item.images.map((src, id) => 
			<img key={id} src={src} />
		)
	
		return(
			<section className='project-detail'>

				<div className='quick-home'>
					<Link to='/' />
				</div>
			
				<article className='project-display-wrap'>

					<header>
						<h2>{item.type}</h2>
						<Link to='/'>
							<button className='close'>Close X</button>
						</Link>
					</header>

					<div className='content-wrap'>
						<section className='info-display'>
							<p>{item.copy}</p>
							<h4>{item.title}</h4>
							<ProjectPagination index={this.state.index} />
						</section>

						<section className='image-display'>
							{imageDisplay}
						</section>
					</div>

				</article>

			</section>
		);
	}
}

export default ProjectDisplay;