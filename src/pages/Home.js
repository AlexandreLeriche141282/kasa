import React from 'react';
import Navigation from '../components/Navigation';
import BannerHome from '../components/BannerHome';
import Gallery from '../components/Gallery';



const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerHome />
            <Gallery />
        </div>
    );
};

export default Home;