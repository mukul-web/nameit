import React from 'react';
import  './NameCard.css';

const nameCheap='https://www.namecheap.com/domains/registration/results/?domain=';
const NameCard=({ suggestedName})=>{
     return (
         <a  
             target="_blank"
             href={`${nameCheap}${suggestedName}`}
             rel="noreferrer" 
             classname="result-name-link">
             
             <div className="result-name-card">
                  <p key={suggestedName} className="result-name">{suggestedName}</p>
             </div>
         </a>
     );
};
export default NameCard;