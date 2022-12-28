import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={Header} /> */}
          {/* <Route path="/checkout" element={Checkout} />

          <Route path="/login" element={Login} />

          <Route path="/" element={Home} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
