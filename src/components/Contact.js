import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DataStore } from '@aws-amplify/datastore';
import { Contact } from '../models';


function Contacts() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
		// fetchItems();
	}, []);
	
	const submit = async (e) => {
		e.preventDefault();

		let visitorName = document.getElementById('visitorName');
		let visitorEmail = document.getElementById('visitorEmail');
		let visitorMessage = document.getElementById('visitorMessage');

		const regexOne= /\w@/;
		const regexTwo = /^[^@]+@[^@]+\.[^.][^.]+$/i;
		const validOne = regexOne.test(visitorEmail.value);
		const validTwo = regexTwo.test(visitorEmail.value);
	
		if ( visitorName.value === "" || visitorEmail.value === "" || visitorMessage.value === "") {
			window.alert(`Oops! Looks like you forgot to fill out one of the fields. Please make sure to fill out the form completely so I can contact you properly, thank you!`)
		} else if ( !validOne || !validTwo ) {
			window.alert(`Invalid Email!`)
		} else {
			const contactInfo = {
				name: visitorName.value,
				email: visitorEmail.value,
				message: visitorMessage.value
			}

			DataStore.save(
				new Contact(contactInfo)
			)

			window.alert(`YAY! Thanks for your message, I'll get back to you as soon as I can!`)

			visitorName.value = "";
			visitorEmail.value = "";
			visitorMessage.value= "";

		}

	}


	return (
		<section>
			<div className='nav-title'>
				<h2>CONTACT</h2>
			</div>
			<HelmetProvider>
				<Helmet>
					<script
						src='https://www.google.com/recaptcha/api.js'
						async
						defer
					></script>
				</Helmet>
			</HelmetProvider>
			<br />
			<div className='form-container'>
				<form className='contact-form'>
					<fieldset>
						<legend className='center'>
							I'd love to hear from you,
							<br /> leave me a message below!
						</legend>
						<br />
						<div className='contact-fields'>
							<div className='contact-left'>
								<label htmlFor='name'>Your Name:</label>
								<br />
								<input type='text' id='visitorName' name='visitorName' required />
								<br />
								<br />
								<label htmlFor='email'>Your Email:</label>
								<br />
								<input type='email' id='visitorEmail' name='visitorEmail' required />
								<br />
							</div>
							<div className='contact-right'>
								<label form='message'>Message:</label>
								<br />
								<textarea id='visitorMessage' name='visitorMessage' required />
							</div>
						</div>
						<div className='button-center'>
							{/* <div
								className='g-recaptcha'
								data-sitekey='6Lc0c1EdAAAAAMWfILkbs_B4Gxq1x8kSvtCNkAB1'
							></div> */}
							<button type='submit' onClick={submit}>
								Submit
							</button>
						</div>
					</fieldset>
				</form>

				<div className='contact-container'>
					<a
						href='mailto:jahnemadarang@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='contact-div contact-email'
					>
						<FaEnvelope size='2em' />
					</a>

					<a
						href='https://linkedin.com/in/jahnelmadarang'
						target='_blank'
						rel='noopener noreferrer'
						className='contact-div contact-linkedin'
					>
						<FaLinkedin size='2em' />
					</a>

					<a
						href='https://github.com/jmadarang87'
						target='_blank'
						rel='noopener noreferrer'
						className='contact-div contact-github'
					>
						<FaGithub size='2em' />
					</a>

					<a
						href='https://www.instagram.com/jahnelly.codes/'
						target='_blank'
						rel='noopener noreferrer'
						className='contact-div contact-ig'
					>
						<FaInstagram size='2em' />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
