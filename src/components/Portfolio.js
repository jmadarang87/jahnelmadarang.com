import React from 'react';
import PortfolioList from '../static/js/portfoliolist.js';

const Portfolio = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section>
			<div className='nav-title'>
				<h2>PORTFOLIO</h2>
			</div>
			<div id='portfolio'>
				{PortfolioList.map((project, i) => {
					return (
						<div className='flex-row' key={i}>
							<div className='project-details'>
								<a href={project.github} target="_blank"><h2>{project.title}</h2></a>
								<span className='project-languages'>
									<p>
										-
										{project.languages.map((language, i) => {
											return <span key={i}>{language}-</span>;
										})}
									</p>
								</span>
							</div>
							<div className='project-preview' key={i}>
								<a
									href={project.link}
									className='center-img'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										className='project-img'
										src={project.image[0]}
										alt={project.title}
									></img>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Portfolio;
