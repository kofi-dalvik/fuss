import React, { Component } from 'react';
import './styles/index.css';
import {FLogin} from './containers';

class App extends Component {
  render() {
    return (
      <div className="fuss">
        <FLogin/>
      </div>
    );
  }
}

export default App;
