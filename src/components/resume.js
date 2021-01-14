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
      removeTextLayerOffset()   
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

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }
      

    return(
        <main>
            <div className="resume">
                <h1>Resume</h1>
                <div className="pdf-viewer">
                    <Document className="pdf"
                    file={resume} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    >
                    Previous
                    </button>
                    <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                    Next
                    </button>
                </div>
                
            </div>
        </main>
    )
}

export default Resume;