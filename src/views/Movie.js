import React from 'react';
import './movie.css';

function Movie (props) {
    
    return (
        
            <div className="content">
        
        {
            props.image == null ?  
            <p> No Poster Image </p>
            :  
            <img alt='pict' className="post" src={`https://image.tmdb.org/t/p/w500/${props.image} `} 
               
            />
        }
        
    </div>
        
    
       
    )
}

export default Movie;