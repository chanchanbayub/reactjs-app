import React from 'react' ;
import Movie from './Movie';
import './movie.css';

function MovieList (props) {
    return(
        <div className="poster">
            <div className="content" >
        
            
        {
           props.movies.map((movie, i) => {
                return (
                    <Movie key={i} image={movie.poster_path} />
                )
           })
        }
       
    </div>
        </div>
       
  
        
    
    )
    
}
export default MovieList;