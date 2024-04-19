import React from 'react';
import Navigation from '../components/navigation/Navigation';
import BannerAbout from '../components/banner/bannerAbout/BannerAbout';
import Footer from '../components/footer/Footer';
import CollapseAbout from '../components/collapse/collapseAbout/CollapseAbout';


const About = () => {
    return (
        <div>
            <Navigation />
            <main>
            <BannerAbout />  
            <CollapseAbout />
            </main>
            <Footer />
        </div>
    );
};

export default About;