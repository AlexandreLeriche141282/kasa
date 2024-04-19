import { useState } from 'react';

function Collapse({ title, content })  {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapseContent'>
      <button className={`buttonCollapse ${isOpen ? 'clicked' : ''}`} onClick={handleToggle}>{title}<img className={`arrowIcon ${isOpen ? 'rotate180' : ''}`} src="../img/Arrow.png" alt="" /></button>

      <div onClick={handleToggle} className={`contentAbout ${isOpen ? 'active' : ''}`}>{content}</div>
    </div>
  );
};



export default Collapse