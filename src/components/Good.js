import React from 'react';
import YoutubeEmbed from './YouTubeEmbed';
import GoodGallery from './GoodGallery';

const Good = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='nav-title'>
				<h2>DOING GOOD</h2>
			</div>
			<div className='good-personal'>
				<p className='center'>
					I created this section in hopes to keep me motivated and accountable
					to continue to do good and help support communities that are important
					to me. I know it's not much, but I'll keep adding to this page <br />{' '}
					...one walk, march, postcard and letter at at time!
				</p>
				<br />
				<GoodGallery />
			</div>
			<div className='good-work'>
				<p className='center'>
					Here are a few opportunities I am proud to have been a part of through
					work!
				</p>
				<br />
				<div className='youtube'>
					<div className='bgtpf-vid'>
						<a
							href='https://www.bgtpfoundation.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h4 className='center'>The Be Good to People® Foundation</h4>
						</a>
						<YoutubeEmbed embedId='STj4-fGSm64' />
					</div>
					<a
						href='https://www.affinitytesting.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<h4 className='center'>Operation Expanded Testing</h4>
					</a>
					<div className='oet'>
						<div className='vid-left'>
							<YoutubeEmbed embedId='Kh-KVx3Kzdc' />
						</div>
						<a
							href='https://www.wvtm13.com/article/free-covid-19-testing-offered-at-homeless-shelter-in-birmingham-during-outbreak/37699225'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='vid-right'
								src='images/bbmoet.png'
								alt='BBM-vid'
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Good;
