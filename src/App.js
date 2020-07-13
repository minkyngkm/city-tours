import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.js'
import TourList from './components/TourList/TourList'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TourList></TourList>
    </div>
  );
}

export default App;
