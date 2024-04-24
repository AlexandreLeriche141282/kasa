import React from 'react';
import "./_tags.scss";

const Tags = ({ tags }) => {
    return (
        <div className="listTag">
            {Array.isArray(tags) && tags.map((tag, index) => (
                <div className='tag' key={index}>{tag}</div>
            ))}
        </div>
    );
};

export default Tags;