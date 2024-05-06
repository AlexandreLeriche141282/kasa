import React from 'react';
import './_navigation.scss';
import { NavLink } from 'react-router-dom';
import Logo from './LOGO.svg';

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={Logo} alt="Logo de l'agence de locations d'appartements" /> 
            <ul>
                <NavLink to="/kasa" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;