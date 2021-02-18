import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import defaultImg from '../img/default.jpg';

const MovieDetail = (props) => {
  
  const { Title, Actors, Poster, Plot, Year, Director, Country, Genre, Language, Writer, Runtime } = props.movieDetail;
  console.log(Poster)

  if (props.loading) return <Spinner />
  else return (
          <div className="movie-detail-container">
            <div className="row">
              <div className="col-md-4 lef-col">
                <div className="movie-pic-details">
                  <img src={Poster !== 'N/A' ? Poster : defaultImg } alt="movie poster"/>
                  <p>Released: {Year}</p>
                </div>
              </div>

              <div className="col-md-8 rig-col">
                <div className="movie-detail-title">{Title}</div>
                <div className="detail-lines"><h5><span>Actors:</span> {Actors}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Director(s):</span> {Director}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Writer(s):</span> {Writer}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Country:</span> {Country}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Genre:</span> {Genre}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Language(s):</span> {Language}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Runtime:</span> {Runtime}</h5></div><br></br>
                <div className="detail-lines"><h5><span>Plot:</span></h5> <p>{Plot}</p></div><br></br>
                <Link to='/movies' className="btn btn-warning btn-back">Go Back &nbsp; &larr;</Link>
               
              </div>
            </div>
          </div>
  )
}

export default MovieDetail;