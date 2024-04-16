import React, { useState, useEffect } from 'react';
import aboutData from '../../Data/about.json'; // import du fichier JSON

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapseContent'>
      <button className={`buttonCollapse ${isOpen ? 'clicked' : ''}`} onClick={handleToggle}>{title}<img className={`arrowIcon ${isOpen ? 'rotate180' : ''}`} src="./img/Arrow.png" alt="" /></button>

      <div onClick={handleToggle} className={`contentAbout ${isOpen ? 'active' : ''}`}>{content}</div>
    </div>
  );
};

const AppCollapse = () => {
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

export default AppCollapse;