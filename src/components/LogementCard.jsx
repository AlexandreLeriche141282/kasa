import React from 'react';
import { NavLink } from 'react-router-dom';

const LogementCard = ({data}) => {
    
    return (
        <NavLink to ="/logement">
            <div className="cardContent">
                <img src={data.cover} alt={data.title} />
                <p>{data.title}</p>
            </div>
         </NavLink>     
    );
    

};

export default LogementCard;

