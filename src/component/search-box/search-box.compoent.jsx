import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, filterFunction}) => {
    return (
        <input className="search"
               type="search"
               placeholder={placeholder}
               onChange={filterFunction}/>
    );
};
