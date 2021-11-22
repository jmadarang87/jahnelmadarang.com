import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
	return (
		<>
			<footer>
				<div className='footer-content'>
					<p className='center'>
						Designed and coded by Jahnel Madarang
						<br />
						in HTML, CSS, JavaScript and React!
						<br />
					</p>

					<div className='footer-social'>
						<a
							href='mailto:jahnemadarang@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaEnvelope size='1.5em' />
						</a>
						<a
							href='https://linkedin.com/in/jahnelmadarang'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin size='1.5em' />
						</a>

						<a
							href='https://github.com/jmadarang87'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithub size='1.5em' />
						</a>

						<a
							href='https://www.instagram.com/jahnelly.codes/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram size='1.5em' />
						</a>
					</div>
					<p className='center'>All photos were taken of me or by me.</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
