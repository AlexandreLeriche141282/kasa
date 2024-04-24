import React from 'react';
import './_home.scss';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import data from '../../Data/logement.json'

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
                    <div className="cards">
                        <div className="cardContainer">
                            {data.map((logement) => (
                                <Card  item={logement } />   
                ))}
                        </div>
                    </div>
    
                </div>
                
            </main>
            <Footer />
        </div>
    );
};

export default Home;