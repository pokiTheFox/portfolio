
import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from  './test.pdf';


class App extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    // Creating state
    this.state = {
      data: 'My name is User'
    }
  }
  
  
  render() {
    return (
  <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>

    );
  }
}
  
export default App;
