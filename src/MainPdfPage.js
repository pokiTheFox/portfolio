
import React, { Component } from 'react';
import { pdfjs } from "react-pdf";
import samplePDF from  './folio.pdf';

import AllPagesPDFViewer from "./all-pages";



class MainPdfPage extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    // Creating state
  }
  
  
  render() {
    
    return (
      <div className="App container" >
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF}/>
      </div>

    </div>
    );
  }
}
  
export default MainPdfPage;
