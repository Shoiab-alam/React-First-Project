import React from "react";
import Home from "./Home";
import About from "./About";
import School from "./School";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='school' element={<School/>}/>
        <Route path='*' element={<div>Error Page</div>}/>
      </Routes>
    </BrowserRouter>
  </>
  )}

export default App;