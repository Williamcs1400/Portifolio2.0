import './styles/App.css';
import { React, useEffect, useState } from 'react';
import Home from './sections/home';
import Header from './sections/header';
import About from './sections/about';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home/>
        <About />
      </header>
    </div>
  );
}

export default App;
