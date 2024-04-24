import React from 'react';
import "./_banner.scss";

const Banner = ({ imageSrc, title }) => {
    return (
        <div className='banner'>
            <img src={imageSrc} alt="Banner" />
            {title && <h1 className='banner-title'>{title}</h1>}
        </div>
    );
};

export default Banner;