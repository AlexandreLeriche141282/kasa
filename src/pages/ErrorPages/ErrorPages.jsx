import React from 'react';
import './_errorPages.scss'
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

const ErrorPages = () => {
    return (
        <div>
            <Navigation />
            <section>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href="/">Retournez sur la page d'accueil</a>
            </section>
            
            <Footer />
        </div>
    );
};

export default ErrorPages;