import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import Cards from '../components/cards/Cards';


const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
            <Banner
                imageSrc="./img/banner1.jpg"
                title="Chez vous, partout et ailleurs"
                />
                <div className="gallery">
                 <Cards />   
                </div>
                
            </main>
            <Footer />
        </div>
    );
};

export default Home;