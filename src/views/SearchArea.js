import React from 'react';
import './search.css';

const SearchArea = (props) => {
    // form pencarian 
    return (
        <div className="search-form">
            <div className="form-data">
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="text" onChange={props.handleChange} placeholder="Search Movies ....." required/>
                        <button className="seacrh" onSubmit={props.handleSubmit}>Search</button>
                </form>
            </div>
        </div>
        
        
    )
}
export default SearchArea;