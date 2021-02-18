import React, { Component } from 'react';
import Spinner from './Spinner';
import MovieItem from './MovieItem';

class Movies extends Component {
  render() {
    const { loading, moviesList, showMovieDetails, history } = this.props;
     if (loading) {
       return <Spinner />

     } else if (moviesList === undefined || moviesList.length === 0) 
     return ( <div className="noMovies">
                  <h3>Sorry!!! No movies returned ... please try something else !!!</h3>
              </div>
            )
       
     else return ( 
        <div className="movie-container mx-auto">
           {moviesList.map(movie => (
              <MovieItem key={movie.imdbID} movie={movie} showMovieDetails={showMovieDetails} history={history}/> ))
          }
       </div>
     )
  }
}
export default Movies;