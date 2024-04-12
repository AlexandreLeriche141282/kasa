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
    const Data = targetData(id)
    return (
        
        <div>
            <p>{id}</p>
            <p>{Data.title}</p>
            <Navigation />
            
            <CarrousselLogement />
            
            <Footer />
        </div>
    );
    
};

export default Logement;