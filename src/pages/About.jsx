import React from 'react';
import Navigation from '../components/navigation/Navigation';
import BannerAbout from '../components/main/BannerAbout';
import Footer from '../components/footer/Footer';
import Collapse from '../components/main/Collapse';


const About = () => {
    return (
        <div>
            <Navigation />
            <main>
            <BannerAbout />  
            <Collapse />
            </main>
            <Footer />
        </div>
    );
};

export default About;