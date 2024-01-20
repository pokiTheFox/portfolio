
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPdfPage from "./MainPdfPage";
import Project1 from "./Project1";


class App extends Component {

  
  
  render() {
    
    return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<MainPdfPage />} />
      <Route exact path="/project1" element={<Project1 />} />
      <Route exact path="/project3" element={<MainPdfPage />} />
      </Routes>
    </BrowserRouter>
    );
  }
}
  
export default App;
