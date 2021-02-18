import React, { Component } from 'react';
import { withRouter } from 'react-router';
import defaultImg from '../img/default.jpg';

class MovieItem extends Component {
  onButtonClick = () => {
    const movieId = this.props.movie.imdbID;
    this.props.showMovieDetails(movieId);
    this.props.history.push(`/movies/${movieId}`);
  }
  render() {
    const {Title, Year, Poster } = this.props.movie;
    return (
   
      <div className="card-movie">
        <div className="card-movie-details text-center">
        <h3>{Title}</h3>
          <p>{Year}</p>
          <div className="movie-img">
            <img src={Poster !== 'N/A' ? Poster : defaultImg } alt={Title}/>
            <button className="btn btn-warning btn-block" id="details-btn" onClick={this.onButtonClick}>Details &nbsp; &rarr;</button>
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(MovieItem);