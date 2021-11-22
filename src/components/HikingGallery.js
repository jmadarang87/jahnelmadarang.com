import React from 'react';
import HikingImages from './HikingImages.js';

const HikingGallery = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='nav-title'>
				<h2>HIKING</h2>
			</div>
			<div className='gallery'>
				{HikingImages.map((item, index) => {
					return (
						<div className='pics' key={index}>
							<img
								src={item.imgSrc}
								alt='hiking-img'
								style={{ width: '100%' }}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default HikingGallery;
