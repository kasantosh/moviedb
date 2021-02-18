import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    movieName: ''
  }

  onMovieName = (e) => {
    this.setState({ movieName: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('movieName', this.state.movieName);
    this.props.onQuickSearch(this.state.movieName);
    this.props.history.push('/movies');
  }


  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-main">
        <div className="container">
          <Link className="navbar-brand nav-logo" to="/">MoviesDB</Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" value={this.state.movieName} placeholder="Search Movies" onChange={this.onMovieName} />
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Quick Search</button>
        </form>

        </div>
      </nav>
      
    )
  }
}

export default withRouter(Navbar);