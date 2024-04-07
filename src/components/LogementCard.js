import React from 'react';




const LogementCard = ({data}) => {
    
    return (
        
        
            <div className="cardContent">
                <img src={data.cover} alt={data.title} />
            <p>{data.title}</p>
            </div>
            
        
            
        
        
        
    );
};

export default LogementCard;