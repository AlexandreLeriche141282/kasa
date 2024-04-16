import React from 'react';

const LogementDetails = ({ data }) => {
    const starsColor = data.rating;
    

    return (
        <div className="logementDetails">
            <div className="logementInfo">
                <div className="logementName">
                <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="listTag">
                    <div className='tag'>{data.tags[0]}</div>
                    <div className='tag'>{data.tags[1]}</div>   
                    </div>
                    
                </div>
                <div className="host">
                    <div className="hostName">
                        <div className="hostName1">
                          <p>{data.host.name} </p>  
                        </div>
                       
                    <img className='pictureHost' src={data.host.picture} alt={data.host.name} /> 
                    </div>
                    
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, index) => (
                            <img src={index < starsColor ? "/img/starColor.png" : "/img/starNocolor.png"} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default LogementDetails;