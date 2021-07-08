import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import resume from './test.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
      }
      

    return(
        <main>
            <h1>Resume</h1>
            <div className="resume">
                <div className="pdf-viewer">
                    <div className="page-controls">
                      <button className="button-left" type="button" disabled={pageNumber <= 1} onClick={previousPage}>&lt;</button>
                      <p>{pageNumber} of {numPages}</p>
                      <button className="button-right"ype="button" disabled={pageNumber >= numPages} onClick={nextPage}>&gt;</button>
                    </div>
                    <Document className="pdf" file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                
            </div>
        </main>
    )
    
}

export default Resume;