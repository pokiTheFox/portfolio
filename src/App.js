
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPdfPage from "./MainPdfPage";
import UxStratus from './ux-stratus';
import UxTuuls from './ux-tuuls';
import UxMcp from './ux-mcp';
import UxOnetwotree from './ux-onetwotree';
import UxJetpack from './ux-jetpack';


class App extends Component {

  
  
  render() {
    
    return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<MainPdfPage />} />
      <Route exact path="/ux-stratus" element={<UxStratus />} />
      <Route exact path="/ux-tuuls" element={<UxTuuls />} />
      <Route exact path="/ux-mcp" element={<UxMcp />} />
      <Route exact path="/ux-onetwotree" element={<UxOnetwotree />} />
      <Route exact path="/ux-jetpack" element={<UxJetpack />} />
      </Routes>
    </BrowserRouter>
    );
  }
}
  
export default App;
