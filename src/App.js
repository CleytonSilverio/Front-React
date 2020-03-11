import React from 'react';

import Header from './components/Header';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom';

function App()  {
  return (
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
  );
}

export default App;
