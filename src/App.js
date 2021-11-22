import React from 'react';
import HikingGallery from './components/HikingGallery';
import RoadTripGallery from './components/RoadTripGallery';
import Home from './components//Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FamilyGallery from './components/FamilyGallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Good from './components/Good';

function App() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className='App'>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/family' component={FamilyGallery} title='family' />
					<Route path='/outdoors' component={HikingGallery} title='outdoors' />
					<Route
						path='/road-trippin'
						component={RoadTripGallery}
						title='Road Trippin'
					/>
					<Route path='/portfolio' component={Portfolio} title='portfolio' />
					<Route path='/resume' component={Resume} title='resume' />
					<Route path='/doing-good' component={Good} title='good stuff' />
					<Route path='/contact' component={Contact} title='contact-me' />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
