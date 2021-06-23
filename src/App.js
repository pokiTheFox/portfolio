
import React, { Component } from 'react';
import { pdfjs } from "react-pdf";
import samplePDF from  './folio.pdf';

import AllPagesPDFViewer from "./all-pages";



class App extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    // Creating state
  }
  
  
  render() {
    return (
      <div className="App" >

      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} style={{display: 'flex', justifyContent:'center'}}/>
      </div>

    </div>

    );
  }
}
  
export default App;
