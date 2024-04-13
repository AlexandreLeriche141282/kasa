import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CarrousselLogement from '../components/CarrousselLogement';
import { useParams } from 'react-router-dom'
import Data from '../Data/logement.json'

const targetData = (id) => {
    return Data.find((Data) =>Data.id===id)
}

const Logement = () => {
    const { id } = useParams();
    const Data = targetData(id);
    const pictures = Data.pictures;
    const starsColor = Data.rating;
    
    return (
        
        <div>
            
            {pictures.map((picture) => {
                return (
                    <img src={picture} alt={picture.title} key={picture} />
                )
            })
            }
            <div className="logementInfo">
                    <h1>{Data.title}</h1>
                    <p>{Data.location}</p>
                <div className="tag">
                    <p>{Data.tags}</p>
                </div>
                <div className="host">
                    <p>{Data.host.name}</p>
                    <img src={Data.host.picture} alt={Data.host.name} />
                    <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
            <img
            src={index < starsColor ? "/starColor.png" : "/starNocolor.png"}
            key={index}
            />
    ))}
</div>
                    
                </div>
                <div className="buttonInfo">
                    <button>Description{Data.description}</button>
                    <button>Equipements{Data.equipments}</button>
                </div>
            </div>
            
            <Navigation />
            
            <CarrousselLogement />
            
            <Footer />
        </div>
    );
    
};

export default Logement;