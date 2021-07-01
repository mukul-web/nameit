import React from 'react'
import './SearchBox.css';
const SearchBox=({outputChange})=>{
    return (
       <div className="search-container">
            <input 
             onChange = {(event)=>{outputChange(event.target.value)}}
             placeholder="Type keywords"  
             className="search-input"/>
       </div>
    );
};
export default SearchBox;