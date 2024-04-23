import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Gallery from '../components/main/Gallery';
import Footer from '../components/footer/Footer';
import Data from '../Data/logement.json'
import Banner from '../components/banner/Banner';


const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
            <Banner
                imageSrc="./img/banner1.jpg"
                title="Chez vous, partout et ailleurs"
            />
                <Gallery data={Data} /> 
            </main>
            <Footer />
        </div>
    );
};

export default Home;