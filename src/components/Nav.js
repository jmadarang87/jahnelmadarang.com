import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<>
			<nav className='nav-bar sticky'>
				<div className='nav-left'></div>
				<div className='nav-right'>
					<ul>
						<Link to='/portfolio'>
							<li>portfolio</li>
						</Link>
						<Link to='/resume' title='Resume'>
							<li>resume</li>
						</Link>
						<Link to='/contact' title='Contact'>
							<li>contact</li>
						</Link>
						<li> </li>
					</ul>
					<Link to='/'>
						<img className='logo' src='images/jm_logo.png' alt='jm-logo' />
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Nav;
