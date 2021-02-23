import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import StickyNotes from './components/StickyNotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <StickyNotes/>
    </div>
  );
}

export default App;
