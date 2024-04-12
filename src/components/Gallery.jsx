import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';


const Gallery = ({data}) => {
    return (
        <div className="gallery">
            <div className="cardContainer">
            {data.map((data) => (
                
                    <div className="cardContent">
                        <Link to={`/logement/${data.id}`} key={data.id}>
                            <img src={data.cover} alt={data.title} />
                            <p>{data.title}</p>
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

