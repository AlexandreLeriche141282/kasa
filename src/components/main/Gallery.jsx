import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';


const Gallery = ({data}) => {
    return (
    <div className="gallery">
        <div className="cardContainer">
            {data.map((dataItem) => ( 
                <div className="cardContent" key={dataItem.id}>
                    <Link to={`/logement/${dataItem.id}`}>
                    <img src={dataItem.cover} alt={dataItem.title} />
                    <p>{dataItem.title}</p>
                    </Link>
                </div>
))}
        </div>
    </div> 
        
    );
    
};
Gallery.propTypes = {
    data: PropTypes.array.isRequired
}
export default Gallery;

