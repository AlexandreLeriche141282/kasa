import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import CarrousselLogement from '../components/caroussell/CarrousselLogement';
import { useParams } from 'react-router-dom'
import Data from '../Data/logement.json'
import LogementDetails from '../components/logementDetails/LogementDetails';
import CollapseInfoLogement from '../components/collapse/collapseInfoLogement/CollapseInfoLogement';
import ErrorPages from './ErrorPages';
import Tags from '../components/tags/Tags';

const targetData = (id) => {
    return Data.find((Data) => Data.id === id);
}

const Logement = () => {
    const { id } = useParams();
    const Data = targetData(id);
    // Vérification si les données du logement sont valides

    if (!Data) {
        // Redirection vers la page d'erreur si les données ne sont pas trouvées
        return <ErrorPages />;
    }

    const pictures = Data.pictures;
    
    return (
        <div>
            <Navigation />
            <CarrousselLogement pictures={pictures} />
            <LogementDetails data={Data} />
            <main>
                <CollapseInfoLogement data={Data} />
               <Tags /> 
            </main>
            
            <Footer />
        </div>
    );
    
};

export default Logement;