import React from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';

function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
