import React from 'react';
import RoadTripImages from './RoadTripImages.js';

const Gallery = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='nav-title'>
				<h2>ROAD TRIPPIN'</h2>
			</div>
			<div className='gallery'>
				{RoadTripImages.map((item, index) => {
					return (
						<div className='pics' key={index}>
							<img
								src={item.imgSrc}
								alt='roadtrip-img'
								style={{ width: '100%' }}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Gallery;
