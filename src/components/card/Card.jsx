import React from 'react';
import { Link } from 'react-router-dom';
import "./_card.scss"

function Card({item}) { 
    return (
        
        
                    <div className="cardContent" key={item.id}>
                        <Link to={`/logement/${item.id}`}>
                            <img src={item.cover} alt={item.title} />
                            <p>{item.title}</p>
                        </Link>
                    </div>
            
    );
};



export default Card;

