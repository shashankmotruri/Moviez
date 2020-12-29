import React from 'react';
import "./search.css";

const SearchBox = (props) =>{

    return (
        <div className="col col-sm-4">
            <input
             className="form-control search-box"
             value={props.value}
             onChange={() =>props.setsearchValue(event.target.value)}
             placeholder="    Search for..."
            ></input>
        </div>
    )
}

export default SearchBox;