import React from 'react';
import Data from '../logement.json'
import LogementCard from './LogementCard'
console.log(Data);

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="cardContainer">
                {Data.map((data, id) => (
                   <LogementCard key={id} data={data} />
            ))}
            </div>
            
                
            
            
        </div>
          
                
          
        
        
    );
};

export default Gallery;