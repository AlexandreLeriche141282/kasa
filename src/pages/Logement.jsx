import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CarrousselLogement from '../components/caroussell/CarrousselLogement';
import { useParams } from 'react-router-dom'
import Data from '../Data/logement.json'
import LogementDetails from '../components/logementDetails/LogementDetails';

const targetData = (id) => {
    return Data.find((Data) =>Data.id===id)
}

const Logement = () => {
    const { id } = useParams();
    const Data = targetData(id);
    const pictures = Data.pictures;
    
    
    return (
        
        <div>
            <Navigation />
            <CarrousselLogement pictures={pictures} />
            <LogementDetails data={Data} />
            <Footer />
        </div>
    );
    
};

export default Logement;