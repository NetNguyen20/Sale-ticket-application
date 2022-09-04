import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/dashboard';
import DanhSachGoiVe from './component/Ticket/danhsachgoi';
import Danhsachve from './component/Ticket/danhsach';
import Doisoatve from './component/Ticket/doisoatve';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/Page-dashboard' element={<Dashboard/>}/>
          <Route path='/Page-danhsachgoive' element={<DanhSachGoiVe/>}/>
          <Route path='/Page-danhsachve' element={<Danhsachve/>}/>
          <Route path='/Page-doisoatve' element={<Doisoatve/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
