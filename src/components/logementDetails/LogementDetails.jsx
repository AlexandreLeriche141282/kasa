import React from 'react';

const LogementDetails = ({ data }) => {
    const starsColor = data.rating;

    return (
        <div className="logementInfo">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
            <div className="tag">
                <p>{data.tags}</p>
            </div>
            <div className="host">
                <p>{data.host.name}</p>
                <img src={data.host.picture} alt={data.host.name} />
                <div className="stars">
                    {Array.from({ length: 5 }, (_, index) => (
                        <img src={index < starsColor ? "/img/starColor.png" : "/img/starNocolor.png"} key={index} />
                    ))}
                </div>
            </div>
            <div className="buttonInfo">
                <button>Description{data.description}</button>
                <button>Equipements{data.equipments}</button>
            </div>
        </div>
    );
};

export default LogementDetails;