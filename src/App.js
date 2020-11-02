import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './containers/Home/index'

class App extends React.Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
