import React from 'react';

const About = ({ moviesList, loading }) => {
    
      return ( 
            <div>
                  <div className="md-background">
                        <div className="container ">
                              <div className="info-box">
                                    <h1>About this app</h1>
                                    <p>This app is done with Reactjs and the OMDB API. This has a smooth user experience and has been done with Routing and Class based components with State.
                                    The App searches the OMDB API and gives out results based on the search query. It gives a nice user experience and also the search persists in the local storage and the pages don't break when a user accidentally refreshes the page.
                                    </p>
                              </div>
                        
                        </div>

                  </div>
                  
                  
            </div> 
      )
    
  
}

export default About;