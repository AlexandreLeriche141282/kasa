import React, { useState } from 'react';

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

    return (
        <div className="caroussel">
            <div className="prev" onClick={prevSlide}><img src="../img/arrowLeft.png" alt="" /></div>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <div className="next" onClick={nextSlide}><img src="../img/arrowRight.png" alt="" /></div>
        </div>
    );
};

export default CarrousselLogement;