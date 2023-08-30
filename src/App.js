import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  return (
   <div className="App">
      <BrowserRouter>
      <Navbar/>
       {/* <Link to="/about">About</Link><br/>
      <Link to="/">Home</Link> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
