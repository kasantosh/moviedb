import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import axios from 'axios';

class App extends Component {

  state = {
    moviesList: [],
    movieDetail: {},
    loading: false
  }

  componentDidMount() {
    if (localStorage.getItem('movieName')) {
      this.onQuickSearch(localStorage.getItem('movieName'));
    }
    const movieDetail = JSON.parse(localStorage.getItem('movieDetail'));
    if (movieDetail) {
      this.showMovieDetails(movieDetail.imdbID);
    }
  }

  onQuickSearch = async (movieName) => {
    this.setState({ loading: true });
    const movies = await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${process.env.REACT_APP_APIKEY}`);
    this.setState({ moviesList: movies.data.Search });
    this.setState({ loading: false });
    console.log(this.state.moviesList);
  }

  showMovieDetails = async (movieId) => {
    this.setState({ loading: true });
    const movie = await axios.get(`https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${process.env.REACT_APP_APIKEY}`);
    this.setState({ movieDetail: movie.data });
    localStorage.setItem('movieDetail', JSON.stringify(this.state.movieDetail));
    this.setState({ loading: false });
  }

  render() {
    const { moviesList, loading } = this.state;

    return (
      
      <Router>
      <div>
        <Navbar onQuickSearch={this.onQuickSearch} history={this.props.history}/>
        <Switch>

          <Route exact path ='/' component={Hero} />
          <Route exact path='/about' component={About} />
          <Route exact path='/movies' render={props => (
            <Movies moviesList={moviesList} loading={loading} showMovieDetails={this.showMovieDetails} history={this.props.history }/>
          )} />
          <Route exact path={`/movies/:movieDetail`} render={props => (
            <MovieDetail loading={this.state.loading} movieDetail={this.state.movieDetail} />
          )} />

        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
