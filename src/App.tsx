import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/Page-dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
