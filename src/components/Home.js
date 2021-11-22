import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='grid-container'>
			<img
				className='home-pic'
				src='images/jahnelbgtp.png'
				alt="hello, i'm jahnel"
			></img>
			<div className='happy-list'>
				<h1>things that make me happy:</h1>
				<ul className='happy-ul'>
					<Link to='/family'>
						<li>family</li>
					</Link>
					<Link to='#'>
						<li>friends</li>
					</Link>
					<Link to='/outdoors'>
						<li>the outdoors</li>
					</Link>
					<Link to='/road-trippin'>
						<li>road tripping</li>
					</Link>
					<Link to='#'>
						<li>learning new things</li>
					</Link>
					<Link to='/portfolio'>
						<li>coding</li>
					</Link>
					<Link to='/doing-good'>
						<li>doing good</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Home;
