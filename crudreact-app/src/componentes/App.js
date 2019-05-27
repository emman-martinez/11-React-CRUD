import React, { Component } from 'react';
import Router from './Router';
import './../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        { /***** Componente: Router.js  *****/ }
        <Router></Router>
      </div>
    )
  }
}

/* 
function App() {
  return (
    
  );
}
*/

export default App;
