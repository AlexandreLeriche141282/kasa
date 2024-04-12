import React from 'react';
import Navigation from '../components/Navigation';
import BannerHome from '../components/BannerHome';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Data from '../Data/logement.json'


const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
                <BannerHome />
                
                <Gallery data={Data} /> 
            
            </main>
            <Footer />
        </div>
    );
};

export default Home;