import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"
import resumePDF from './hepworth_resume.pdf'
import Icon from './icons'
import printJS from "print-js"

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
                    <Document className="pdf" file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
            <div id="resume-buttons">
              <div id="download-info">
                <h2 id="save-text">Get yourself a copy.</h2>
                <h4 id="save-desc">View my resume on the document viewer to the left, or choose an option below to get your own digital or physical copy.</h4>
              </div>
              <div className="download-buttons">
                  <div className="dl-button-wrap">
                    <a href="./hepworth_resume.docx" download>
                      <div className="download-button">
                        <Icon icon="docx"/>
                        <span className="button-text">.docx</span>
                      </div>
                    </a>
                    <span className="download-descs">-Save as a word document.</span>
                  </div>
                  <div className="dl-button-wrap">
                    <a href="./hepworth_resume.pdf" download>
                      <div className="download-button">
                        <Icon icon="pdf"/>
                        <span className="button-text">.pdf</span>
                      </div>
                    </a>
                    <span id="pdf-desc" className="download-descs">-Save as a PDF file.</span>
                  </div>
                  <div className="dl-button-wrap">
                    <div id="print-button" className="download-button" onClick={function() { printJS('/hepworth_resume.pdf') }}>
                      <Icon icon="printer"/>
                      <span className="button-text">Print</span>
                    </div>
                    <span id="print-desc" className="download-descs">-Print direcetly to a connected printer.</span>
                  </div>
                </div>
            </div>
        </main>
    )
    
}

export default Resume;