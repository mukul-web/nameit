import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';
const ResultContainer=({suggestedNames})=>{
    const suggestednameJsx=suggestedNames.map((suggestedName)=>{
        //return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard suggestedName={suggestedName}/>
    });
   return (
   <div className="results-container">
       <p>{suggestednameJsx}</p>
   </div>
   );
};
export default ResultContainer;