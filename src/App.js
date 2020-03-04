import React from 'react';
import './App.css';
import Navbars from './components/Navbars';
import Paises from './components/Paises';
import Pais from './components/Pais';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbars basename="https://marcosnoriega.github.io/App-Paises-React"/>

      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Paises} />
      <Route path={`${process.env.PUBLIC_URL}/:region`} exact component={Paises} />
      <Route path={`${process.env.PUBLIC_URL}/:codigo`} exact component={Pais} />
    </Router>
    
  );
}

export default App;
