import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-text text-center">
        <h2>The</h2> <h1>Movies <br></br><span>Database</span></h1>
        <Link to='/about' className="btn btn-lg hero-btn" >Information &rarr;</Link>
      </div>
    </div>
  )
}

export default Hero;