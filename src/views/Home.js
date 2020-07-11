import React, { Component } from 'react';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
//PAGE HOME

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            movies: [],
            seacrhTerm: ''
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1defbf4185f6e7b82bc7e1a1a10d8ae8&query=${this.state.seacrhTerm}`)
        .then( data => data.json())
        .then( data => {
            
            this.setState({ movies: [...data.results]})
        })
    }
    handleChange = (e) => {
        this.setState({ seacrhTerm: e.target.value})
    }
     render(){
       
        return(
           <div className="home">
              <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <MovieList movies={this.state.movies} />
           </div>
        )
    }
}
export default Home;