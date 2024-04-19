import React, { useState, useEffect } from 'react';
import aboutData from '../../../Data/about.json'; // import du fichier JSON
import Collapse from '../Collapse';


const CollapseAbout = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(aboutData); // chargement des données du fichier JSON
  }, []);
  
  return (
    <div className="collapseContainer">
      {data.map(({title, content}, index) => (
        <Collapse key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default CollapseAbout;