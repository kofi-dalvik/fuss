import React, { Component } from 'react';
import './styles/index.css';
// import {FButton} from './components';
import {FLogin} from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FButton classNames={{button: 'bg-green btn-1 outline', icon: 'btn-1-icon fa fa-search'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-orange btn-1', icon: 'btn-1-icon fa fa-arrow-right'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-blue btn-1', icon: 'btn-1-icon fa fa-envelope'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-yellow btn-1', icon: 'btn-1-icon fa fa-envelope'}}>Some button with long name</FButton><br/>

        <FButton classNames={{button: 'bg-green-gradient btn-1', icon: 'btn-1-icon fa fa-search'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-orange-gradient btn-1', icon: 'btn-1-icon fa fa-arrow-right'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-blue-gradient btn-1', icon: 'btn-1-icon fa fa-envelope'}}>Some button with long name</FButton>
        <FButton classNames={{button: 'bg-yellow-gradient btn-1', icon: 'btn-1-icon fa fa-twitter'}}>Some button with long name</FButton><br/> */}

      <FLogin/>

      </div>
    );
  }
}

export default App;
