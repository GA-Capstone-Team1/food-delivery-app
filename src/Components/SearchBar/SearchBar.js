import React from 'react';
import './SearchBar.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function SearchBar() {


    return (
        <div>
            <div className="search-main">
                <div className="search">
                    <div className="search-loc">
                        <LocationOnIcon />
                        <input type="text" placeholder="Enter location" className="loc"></input>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="search-res">
                        <input type="text" placeholder="Search for restaurant, cuisine  or dish" className="res"></input>
                    </div>
                    <div className="searchicon">
                        <SearchOutlinedIcon />
                        <p>Search</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;