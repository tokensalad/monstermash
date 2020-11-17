import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange}) => (
    <input          
        type="search" 
        placeholder={placeholder}  
        className='search-box'
        onChange= {handleChange}

    />
);