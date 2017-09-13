import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeList from './EarthquakeList'
import EarthquakeInfo from './EarthquakeInfo'

class App extends Component {
  render() {
    return (
      <div className="title">
        
        <div className ="my-header">
          Earthquakes!
        </div>
       <EarthquakeInfo/>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

          <EarthquakeList />  
      </div>
    );
  }
}

export default App;
