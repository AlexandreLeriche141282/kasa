import React from 'react';
import './_about.scss';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import CollapseAbout from '../../components/collapse/collapseAbout/CollapseAbout';
import Banner from '../../components/banner/Banner';
import bannerAbout from './banner2.png'

const About = () => {
    return (
        <div>
            <Navigation />
            <main>
            <Banner
                imageSrc={bannerAbout} alt="photo des montagnes"
            /> 
                <CollapseAbout />
                
            </main>
            <Footer />
        </div>
    );
};

export default About;