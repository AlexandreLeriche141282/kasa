import React, { useState } from 'react';
import './_caroussel.scss'
import arrowLeft from './arrowLeft.png'
import arrowRight from './arrowRight.png'


const CarrousselLogement = ({ pictures }) => {
    // État pour suivre l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    // Fonction pour passer à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    // Afficher le numéro de la photo actuelle ainsi que le nombre total de photos
    const currentNumber = currentIndex + 1;
    const totalNumber = pictures.length;

    return (
        <div className="caroussel">
            {totalNumber > 1 && <div className="prev" onClick={prevSlide}><img src={arrowLeft} alt="" /></div>}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            {totalNumber > 1 && <div className="next" onClick={nextSlide}><img src={arrowRight} alt="" /></div>}
            {totalNumber > 1 && <div className="photoNumber">{currentNumber}/{totalNumber}</div>}
        </div>
    );
};

export default CarrousselLogement;