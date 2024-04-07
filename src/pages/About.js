import React from 'react';
import Navigation from '../components/Navigation';
import BannerAbout from '../components/BannerAbout';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';


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