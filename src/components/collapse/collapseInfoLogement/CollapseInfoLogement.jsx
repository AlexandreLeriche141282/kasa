import React from 'react';
import Collapse from '../Collapse'; // Import du composant Collapse

const CollapseInfoLogement = ({ data }) => {
  return (
    
    <div className="info">
      <div className="buttonInfoContainer">
        <Collapse title="Description" content={<p>{data.description}</p>} />
      </div>
      <div className="buttonInfoContainer">
        
      <Collapse title="Équipements" content={
        <div className='listEquipments'>
          {data.equipments.map((equipment, index) => (
            <div key={index}>{equipment}</div>
          ))}
        </div>
      } />
      </div>
      
    </div>
    
    
  );
};

export default CollapseInfoLogement;