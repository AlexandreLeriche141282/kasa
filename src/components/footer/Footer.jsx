import React from 'react';
import './_footer.scss'
import logoFooter from './LOGO-white.svg'

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="Logo de l'agence de locations d'appartements" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;