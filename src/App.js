import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Second from './components/Second';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Second/>
    </div>
  );
}

export default App;
