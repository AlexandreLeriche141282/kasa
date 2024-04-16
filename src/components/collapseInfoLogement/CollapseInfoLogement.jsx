import React, { useState } from 'react';

const CollapseInfoLogement = ({ data }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
        
    };

    const toggleEquipements = () => {
        setIsEquipementsOpen(!isEquipementsOpen);
        
    };
    return (
        <div>
            <div className="info">
                <div className="buttonInfoContainer">
                    <div className='buttonInfo' onClick={toggleDescription}>
                    {isDescriptionOpen ? "Description" : "Description"}<img className={`arrowIcon ${isDescriptionOpen ? 'rotate180' : ''}`} src="../img/Arrow.png" alt="" />
                    </div>
                    
                    <div onClick={toggleDescription} className={`contentAbout ${isDescriptionOpen ? 'active' : ''}`}>{isDescriptionOpen && <p>{data.description}</p>} </div>
                </div>
                
                       
                
                <div className="buttonInfoContainer">
                    <div className='buttonInfo' onClick={toggleEquipements}>
                    {isEquipementsOpen ? "Équipements" : "Équipements"}<img className={`arrowIcon ${isEquipementsOpen ? 'rotate180' : ''}`} src="../img/Arrow.png" alt="" />
                    </div>
                    <div onClick={toggleEquipements} className={`contentAbout ${isEquipementsOpen ? 'active' : ''}`}>{isEquipementsOpen && (
            <div className='listEquipments'>
                {data.equipments.map((equipment, index) => (
                    <div key={index}>{equipment}</div>
                ))}
            </div>
        )} </div>
                </div>
                
            </div>  
        </div>
    );
};

export default CollapseInfoLogement;