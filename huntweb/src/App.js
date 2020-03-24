import React from 'react';
//import api from './services/api';
import Header from './componentes/Header';
//import Main from './pages/main';
import Routes from './routes';

import "./styles.css";
//import { Route } from 'react-router-dom';

const App = () => (
  
  <div className="App">
      <Header/>
      <Routes/>
    </div>
  );


export default App;
