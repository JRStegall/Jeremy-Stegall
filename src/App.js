import React from 'react';
import Navigate from './components/Nav';
import Main from './components/Main';
import Second from './components/Second';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigate/>
      <Main/>
      <Second/>
    </div>
  );
}

export default App;
