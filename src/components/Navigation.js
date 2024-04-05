import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <img src="./LOGO.svg" alt="Logo de l'agence de locations d'appartements" />
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;