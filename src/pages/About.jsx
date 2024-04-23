import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import CollapseAbout from '../components/collapse/collapseAbout/CollapseAbout';
import Banner from '../components/banner/Banner';


const About = () => {
    return (
        <div>
            <Navigation />
            <main>
            <Banner
                imageSrc="./img/banner2.png" alt="photo des montagnes"
            /> 
            <CollapseAbout />
            </main>
            <Footer />
        </div>
    );
};

export default About;