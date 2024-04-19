import React from 'react';
import Navigation from '../components/navigation/Navigation';
import BannerHome from '../components/banner/bannerHome/BannerHome';
import Gallery from '../components/main/Gallery';
import Footer from '../components/footer/Footer';
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