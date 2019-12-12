import React from "react";
import './search-panel.css';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = () => {
    const searchText = 'Type here to search';

    return (
        <div className="search-box">
            <input className="search-input form-control" placeholder={ searchText }/>
            <ItemStatusFilter/>
        </div>

    )
};

export default SearchPanel;