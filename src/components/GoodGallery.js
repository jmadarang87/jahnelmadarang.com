import React from 'react';
import GoodImages from './GoodImages.js';

const GoodGallery = () => {
    return (
        <>
        <div className="gallery">
            {GoodImages.map((item, index)=> {
                return (
									<div className='pics' key={index}>
										<img
											src={item.imgSrc}
											alt='good-img'
											style={{ width: '100%' }}
										/>
									</div>
								);
            })}
        </div>
        </>
    )
}

export default GoodGallery
