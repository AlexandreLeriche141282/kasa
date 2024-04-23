import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import data from '../../Data/logement.json';

const Cards = () => {
    return (
        
        <div className="cards">
            <div className="cardContainer">
                {data.map((item) => (
                    <div className="cardContent" key={item.id}>
                        <Link to={`/logement/${item.id}`}>
                            <img src={item.cover} alt={item.title} />
                            <p>{item.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Cards;

