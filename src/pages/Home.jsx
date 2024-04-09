import React from 'react';
import Navigation from '../components/Navigation';
import BannerHome from '../components/BannerHome';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
            <BannerHome />
            <Gallery /> 
            </main>
            <Footer />
        </div>
    );
};

export default Home;