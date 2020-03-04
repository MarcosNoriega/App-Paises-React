import React from 'react';
import './App.css';
import Navbars from './components/Navbars';
import Paises from './components/Paises';
import Pais from './components/Pais';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbars />

      <Route path="/" exact component={Paises} />
      <Route path="/:region" exact component={Paises} />
      <Route path="/pais/:codigo" exact component={Pais} />
    </Router>
    
  );
}

export default App;
