import React from 'react';
import FamilyImages from './FamilyImages.js';

const FamilyGallery = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='nav-title'>
				<h2>FAMILY</h2>
			</div>
			<p className='center'>
				<strong>
					<br />
					Proud Filipino-American.
				</strong>
				<br></br>My family is my world.
				<br />
				<br />
			</p>
			<div className='gallery'>
				{FamilyImages.map((item, index) => {
					return (
						<div className='pics' key={index}>
							<img
								src={item.imgSrc}
								alt='family-img'
								style={{ width: '100%' }}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FamilyGallery;
